import { AD_IMAGE_CDN } from '../constants/image';
export var constructCDNAdImageUri = function (path, CDN) {
    if (CDN === void 0) { CDN = AD_IMAGE_CDN; }
    return "".concat(CDN).concat(path);
};
//# sourceMappingURL=construct-CDN-uri.js.map