export var IMAGE;
(function (IMAGE) {
    IMAGE[IMAGE["ASPECT_RATIO"] = 1.3333333333333333] = "ASPECT_RATIO";
    IMAGE[IMAGE["MAX_CROP_WIDTH"] = 1600] = "MAX_CROP_WIDTH";
    IMAGE[IMAGE["MAX_CROP_HEIGHT"] = 1200] = "MAX_CROP_HEIGHT";
})(IMAGE || (IMAGE = {}));
export var AD_IMAGE_CDN = 'https://autofox-v.azureedge.net/ad-files/';
export var AD_CARD_WIDTH = 304;
export var AD_CARD = {
    WIDTH: "".concat(AD_CARD_WIDTH, "px"),
    HEIGHT: "".concat((1 / IMAGE.ASPECT_RATIO) * AD_CARD_WIDTH, "px"),
};
//# sourceMappingURL=image.js.map