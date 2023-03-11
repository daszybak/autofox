export enum IMAGE {
	ASPECT_RATIO = 4 / 3,
	MAX_CROP_WIDTH = 1600,
	MAX_CROP_HEIGHT = 1200,
}

export const AD_IMAGE_CDN = 'https://autofox-v.azureedge.net/ad-files/';

export const AD_CARD_WIDTH = 304;
export const AD_CARD = {
	WIDTH: `${AD_CARD_WIDTH}px`,
	HEIGHT: `${(1 / IMAGE.ASPECT_RATIO) * AD_CARD_WIDTH}px`,
} as const;
