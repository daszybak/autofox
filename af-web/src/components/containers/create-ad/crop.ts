import { Area, Size } from 'react-easy-crop';
import { IMAGE } from 'af-shared/lib/components/constants/image';

const getRadianAngle = (angle: number) => {
	return (angle * Math.PI) / 180;
};

const rotateSize = (width: number, height: number, rotation: number) => {
	const rotRad = getRadianAngle(rotation);

	return {
		width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
		height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
	};
};

const getCropSize = (mediaWidth: number, mediaHeight: number, containerWidth: number, containerHeight: number, aspect: number, rotation = 0): Size => {
	const fittingWidth = Math.min(mediaWidth, containerWidth);
	const fittingHeight = Math.min(mediaHeight, containerHeight);

	if (fittingWidth > fittingHeight * aspect) {
		return {
			width: fittingHeight * aspect,
			height: fittingHeight,
		};
	}

	return {
		width: fittingWidth,
		height: fittingWidth / aspect,
	};
};

interface Image {
	src: string;
	name: string;
}

export const getCrop = async (
	orignalImage: Image,
	rotation = 0,
	pixelCrop: Area,
	flip = { horizontal: false, vertical: false },
	maxCropWidth: number = IMAGE.MAX_CROP_WIDTH,
	maxCropHeight: number = IMAGE.MAX_CROP_HEIGHT,
): Promise<File | null> => {
	const image = new Image();
	image.src = orignalImage.src;

	let imageWidth: number = image.naturalWidth;
	let imageHeight: number = image.naturalHeight;
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');

	if (!ctx) {
		return null;
	}

	const rotRad = getRadianAngle(rotation);

	const { width: bBoxWidth, height: bBoxHeight } = rotateSize(imageWidth, imageHeight, rotation);

	canvas.width = bBoxWidth;
	canvas.height = bBoxHeight;

	ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
	ctx.rotate(rotRad);
	ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
	ctx.translate(-image.width / 2, -image.height / 2);

	ctx.drawImage(image, 0, 0);

	let cropWidth: number;
	let cropHeight: number;

	let data: ImageData;
	console.log('ctx', ctx);

	cropWidth = pixelCrop.width > maxCropWidth ? maxCropWidth : pixelCrop.width;
	cropHeight = pixelCrop.height > maxCropHeight ? maxCropHeight : pixelCrop.height;
	data = ctx.getImageData(pixelCrop.x, pixelCrop.y, cropWidth, cropHeight);

	canvas.width = cropWidth;
	canvas.height = cropHeight;

	ctx.putImageData(data, 0, 0);

	return new Promise((resolve) => {
		canvas.toBlob((blob) => {
			// if (!blob) return; // reject(new Error('Canvas is empty')); // Error handling
			const newFile = new File([blob!], orignalImage.name);
			resolve(newFile);
		});
	});
};

export const autoCrop = (
	orignalImage: Image,
	uploadCb: (file: File) => Promise<void>,
	rotation = 0,
	aspectRatio: number = IMAGE.ASPECT_RATIO,
	maxCropWidth: number = IMAGE.MAX_CROP_WIDTH,
	maxCropHeight: number = IMAGE.MAX_CROP_HEIGHT,
) => {
	const image = new Image();
	image.src = orignalImage.src;
	image.onload = () => {
		let imageWidth: number = image.naturalWidth;
		let imageHeight: number = image.naturalHeight;
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		if (!ctx) {
			return null;
		}

		const rotRad = getRadianAngle(rotation);

		const { width: bBoxWidth, height: bBoxHeight } = rotateSize(imageWidth, imageHeight, rotation);

		canvas.width = bBoxWidth;
		canvas.height = bBoxHeight;

		ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
		ctx.rotate(rotRad);
		ctx.translate(-image.width / 2, -image.height / 2);

		ctx.drawImage(image, 0, 0);

		let cropWidth: number;
		let cropHeight: number;

		let data: ImageData;
		console.log('ctx', ctx);

		const { width, height } = getCropSize(bBoxWidth, bBoxHeight, maxCropWidth, maxCropHeight, aspectRatio);
		cropWidth = width;
		cropHeight = height;
		data = ctx.getImageData((bBoxWidth - cropWidth) / 2, (bBoxHeight - cropHeight) / 2, cropWidth, cropHeight);

		canvas.width = cropWidth;
		canvas.height = cropHeight;

		ctx.putImageData(data, 0, 0);

		canvas.toBlob(async (blob) => {
			// if (!blob) return; // reject(new Error('Canvas is empty')); // Error handling
			const newFile = new File([blob!], orignalImage.name);
			await uploadCb(newFile);
		});
	};
};
