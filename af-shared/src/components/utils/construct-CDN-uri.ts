import { AD_IMAGE_CDN } from '../constants/image';

export const constructCDNAdImageUri = (path: string, CDN: string = AD_IMAGE_CDN) => `${CDN}${path}`;
