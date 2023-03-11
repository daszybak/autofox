import Image from 'next/image';
import { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose, AiOutlineExpand } from 'react-icons/ai';
import { Modal, UnstyledButton } from '@mantine/core';
import { useIsomorphicEffect, useScrollLock } from '@mantine/hooks';

import { AD_IMAGE_CDN } from 'af-shared/lib/components/constants/image';
import { NoImage } from 'af-shared/lib/components';
import { PropsWithAd } from '../ad-details.component';
import { useStyles } from '../ad-details.styles';
import { File } from 'af-shared/lib/graphql';

export enum GALLERY_IMAGE {
	SLIDE_WIDTH = '666px',
	SLIDE_HEIGHT = '500px',
	THUMB_WIDTH = '160px',
	THUMB_HEIGHT = '118px',
	NO_IMAGE = 'noImage',
	MINIMUM_NUMBER = 4,
}

interface GalleryProps extends PropsWithAd {
	startIndex?: number;
	modalGallery?: boolean;
	handleFullScreenOnOpen: () => void;
	handleFullScreenOnClose: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ ad, handleFullScreenOnOpen, handleFullScreenOnClose, startIndex = 0, modalGallery = false }) => {
	const { classes, cx } = useStyles();
	const [mainViewportRef, emblaSlides] = useEmblaCarousel({ skipSnaps: false, startIndex });
	const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
		containScroll: 'keepSnaps',
		dragFree: true,
	});
	const [slide, setSlide] = useState<number>(0);
	const [slidesIsDragging, setSlidesIsDragging] = useState<boolean>(false);

	const images = ad?.files;
	let thumbImages: File[] | 'noImage'[] | (File | 'noImage')[] = new Array(GALLERY_IMAGE.MINIMUM_NUMBER).fill(GALLERY_IMAGE.NO_IMAGE);
	let slidesImages: File[] = images as File[];

	if (images && images.length >= GALLERY_IMAGE.MINIMUM_NUMBER) {
		thumbImages = images as File[];
	} else if (images && images.length < GALLERY_IMAGE.MINIMUM_NUMBER) {
		for (let i = 0; i < images?.length ?? 0; i++) {
			thumbImages[i] = images[i];
		}
	}

	const handleThumbOnClick = useCallback(
		(index: number) => {
			if (!emblaSlides || !emblaThumbs) return;
			if (emblaThumbs.clickAllowed()) emblaSlides.scrollTo(index);
		},
		[emblaSlides, emblaThumbs],
	);

	const handleOnSelect = useCallback(() => {
		if (!emblaSlides || !emblaThumbs) return;
		setSlide(emblaSlides.selectedScrollSnap());
		emblaThumbs.scrollTo(emblaSlides.selectedScrollSnap());
	}, [emblaSlides, emblaThumbs, setSlide]);

	const handlePointerDown = () => {
		setSlidesIsDragging(true);
	};

	const handlePointerUp = () => {
		setSlidesIsDragging(false);
	};

	useIsomorphicEffect(() => {
		if (!emblaSlides) return;
		handleOnSelect();
		emblaSlides.on('select', handleOnSelect);
		emblaSlides.on('pointerDown', handlePointerDown);
		emblaSlides.on('pointerUp', handlePointerUp);
	}, [emblaSlides, handleOnSelect]);

	const handleSlideOnClick = useCallback(
		(offset: number) => {
			if (!emblaSlides || !emblaThumbs) return;
			offset === 1 ? emblaSlides.scrollNext() : offset === -1 ? emblaSlides.scrollPrev() : null;
		},
		[emblaSlides, emblaThumbs],
	);

	const renderedSlides =
		slidesImages && slidesImages.length > 0 ? (
			slidesImages?.map((image, i) => {
				// if (image === 'noImage')
				// 	return (
				// 		<div
				// 			style={{
				// 				width: GALLERY_IMAGE.SLIDE_WIDTH,
				// 				height: GALLERY_IMAGE.SLIDE_HEIGHT,
				// 			}}
				// 			className={cx(classes.imagePlaceholder, { [classes.selected]: slide === i })}
				// 		>
				// 			No Image
				// 		</div>
				// 	);
				return (
					<div
						key={image.filename}
						className={classes.slide}
						style={{
							cursor: slidesIsDragging ? 'grabbing' : 'grab',
						}}
					>
						<div className={classes.slideInner}>
							<Image src={`${AD_IMAGE_CDN}${image.path}`} alt={image.filename} width={GALLERY_IMAGE.SLIDE_WIDTH} height={GALLERY_IMAGE.SLIDE_HEIGHT} layout="fixed" priority />
						</div>
					</div>
				);
			})
		) : (
			<div
				style={{
					width: GALLERY_IMAGE.SLIDE_WIDTH,
					height: GALLERY_IMAGE.SLIDE_HEIGHT,
				}}
				className={cx(classes.imagePlaceholder, classes.flexAlignCenter, classes.justifyCenter)}
			>
				<NoImage />
			</div>
		);

	const renderedThumbs = thumbImages?.map((image, i) => {
		if (image === 'noImage')
			return (
				<div
					style={{
						height: GALLERY_IMAGE.THUMB_HEIGHT,
						width: GALLERY_IMAGE.THUMB_WIDTH,
						marginLeft: i !== 0 ? '0.5rem' : 0,
					}}
					className={cx(classes.imagePlaceholder, { [classes.selected]: slide === i }, classes.flexAlignCenter, classes.justifyCenter)}
					key={i}
				>
					<NoImage />
				</div>
			);
		return (
			<div key={image.filename} onClick={handleOnSelect} className={cx(classes.slideThumb, { [classes.selected]: slide === i, [classes.paddingL05]: i !== 0 })}>
				<Image
					onClick={() => handleThumbOnClick(i)}
					src={`${AD_IMAGE_CDN}${image.path}`}
					alt={image.filename}
					width={GALLERY_IMAGE.THUMB_WIDTH}
					height={GALLERY_IMAGE.THUMB_HEIGHT}
					layout="fixed"
					priority
				/>
			</div>
		);
	});

	return (
		<div>
			<div className={cx(classes.embla)}>
				<div className={classes.emblaViewport} ref={mainViewportRef}>
					<div className={classes.emblaContainer}>{renderedSlides}</div>
					<div className={classes.controls}>
						<UnstyledButton
							onClick={() => handleSlideOnClick(-1)}
							className={classes.control}
							style={{
								...(emblaSlides?.canScrollPrev() ? {} : { opacity: 0 }),
							}}
						>
							<AiOutlineLeft />
						</UnstyledButton>
						<UnstyledButton
							onClick={() => handleSlideOnClick(1)}
							className={classes.control}
							style={{
								...(emblaSlides?.canScrollNext() ? {} : { opacity: 0 }),
							}}
						>
							<AiOutlineRight />
						</UnstyledButton>
					</div>
					{modalGallery ? (
						<div className={cx(classes.close, classes.control)}>
							<UnstyledButton onClick={handleFullScreenOnClose}>
								<AiOutlineClose className={classes.translateY2} />
							</UnstyledButton>
						</div>
					) : (
						<div className={cx(classes.fullscreen, classes.control)}>
							<UnstyledButton onClick={handleFullScreenOnOpen}>
								<AiOutlineExpand className={classes.translateY2} />
							</UnstyledButton>
						</div>
					)}
				</div>
			</div>

			<div className={cx(classes.embla)}>
				<div className={classes.emblaViewport} ref={thumbViewportRef}>
					<div className={classes.emblaContainer}>{renderedThumbs}</div>
				</div>
			</div>
		</div>
	);
};

const GalleryWrapper: React.FC<PropsWithAd> = ({ ad }) => {
	const { classes } = useStyles();
	const fullscreenState = useState<boolean>(false);
	const [fullscreen, setFullscreen] = fullscreenState;
	const [scrollLocked, setScrollLocked] = useScrollLock();

	const handleFullScreenOnClose = () => {
		setFullscreen(false);
		setScrollLocked(false);
	};

	const handleFullScreenOnOpen = () => {
		setFullscreen(true);
		setScrollLocked(true);
	};

	return (
		<>
			<Gallery ad={ad} handleFullScreenOnOpen={handleFullScreenOnOpen} handleFullScreenOnClose={handleFullScreenOnClose} />
			{fullscreen && (
				<Modal
					centered
					size={GALLERY_IMAGE.SLIDE_WIDTH}
					zIndex={12000}
					onClose={handleFullScreenOnClose}
					opened={fullscreen}
					withCloseButton={false}
					classNames={{
						modal: classes.modal,
						// body: cx(classes.flexAlignCenter, classes.justifyCenter, classes.modalBody),
					}}
				>
					<Gallery ad={ad} modalGallery handleFullScreenOnOpen={handleFullScreenOnOpen} handleFullScreenOnClose={handleFullScreenOnClose} />
				</Modal>
			)}
		</>
	);
};
export default GalleryWrapper;
