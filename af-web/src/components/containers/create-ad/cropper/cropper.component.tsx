import { useState, useCallback } from 'react';
import EasyCropper, { Area, Point } from 'react-easy-crop';
import { AxiosResponse } from 'axios';
import { Button, Container, Modal, Slider, Text } from '@mantine/core';
import { SasToken } from 'af-shared/lib/graphql';
import { Section } from 'af-shared/lib/components';
import { FileObj } from '../create-ad.types';
import { getCrop } from '../crop';
import { IMAGE } from 'af-shared/lib/components/constants/image';
import { useStyles } from './cropper.styles';
import { useIsomorphicEffect, useScrollLock } from '@mantine/hooks';

enum ROTATION {
	MIN = 0,
	MAX = 360,
	STEP = 90,
}

enum ZOOM {
	MIN = 1,
	MAX = 3,
	STEP = 0.1,
}

interface CropperProps {
	file: FileObj | null;
	opened: boolean;
	handleCropperOnClose: () => void;
	handleImageOnCrop: (name: string, croppedSrc: string) => void;
	upload: (token: SasToken | undefined, file: File) => Promise<AxiosResponse<any, any> | undefined>;
}

const Cropper: React.FC<CropperProps> = ({ file, upload, opened, handleCropperOnClose, handleImageOnCrop }) => {
	const { classes } = useStyles();
	const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
	const [rotation, setRotation] = useState<number>(0);
	const [zoom, setZoom] = useState<number>(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
	const [scrollLocked, setScrollLocked] = useScrollLock();

	useIsomorphicEffect(() => {
		opened ? setScrollLocked(true) : setScrollLocked(false);
	}, [setScrollLocked, opened]);

	const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
		console.log('croppedAreaPixels', croppedAreaPixels);
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);

	const updateImage = useCallback(async () => {
		if (!file || !croppedAreaPixels) return;
		const croppedImage = await getCrop({ src: file.originalSrc, name: file.filename }, rotation, croppedAreaPixels);
		if (!croppedImage) return;
		handleCropperOnClose();
		const croppedSrc = URL.createObjectURL(croppedImage);
		handleImageOnCrop(croppedImage.name, croppedSrc);
		await upload(file.token, croppedImage);
	}, [croppedAreaPixels, file, rotation, upload, handleImageOnCrop, handleCropperOnClose]);

	return opened ? (
		<Modal
			opened={opened}
			onClose={handleCropperOnClose}
			centered
			size="900px"
			classNames={{
				modal: classes.modal,
			}}
		>
			<Container>
				<div>
					<Section>
						<div className={classes.cropContainer}>
							<EasyCropper
								image={file?.originalSrc ?? undefined}
								crop={crop}
								onCropChange={setCrop}
								rotation={rotation}
								zoom={zoom}
								aspect={IMAGE.ASPECT_RATIO}
								onRotationChange={setRotation}
								onCropComplete={onCropComplete}
								onZoomChange={setZoom}
								minZoom={ZOOM.MIN}
								maxZoom={ZOOM.MAX}
							/>
						</div>
						<Container className={classes.sliderContainer}>
							<Text>Zoom: {zoom.toFixed(1)}x</Text>
							<Slider
								value={zoom}
								min={ZOOM.MIN}
								max={ZOOM.MAX}
								step={ZOOM.STEP}
								aria-labelledby="Zoom"
								onChange={(value) => setZoom(value)}
								label={(value) => `${value.toFixed(1)}x`}
							/>
						</Container>
						<Container className={classes.sliderContainer}>
							<Text>Rotation: {rotation}°</Text>
							<Slider
								value={rotation}
								min={ROTATION.MIN}
								max={ROTATION.MAX}
								step={ROTATION.STEP}
								aria-labelledby="Rotation"
								onChange={(value) => setRotation(value)}
								label={(value) => `${value}°`}
							/>
						</Container>
						<Container className={classes.buttonContainer}>
							<Button onClick={updateImage}>Update</Button>
						</Container>
					</Section>
				</div>
			</Container>
		</Modal>
	) : null;
};

export default Cropper;
