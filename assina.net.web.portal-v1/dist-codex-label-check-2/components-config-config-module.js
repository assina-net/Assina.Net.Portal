(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-config-config-module"],{

/***/ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js ***!
  \*******************************************************************/
/*! exports provided: ImageCropperComponent, ImageCropperModule, base64ToFile, resizeCanvas, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return ImageCropperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function() { return ImageCropperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToFile", function() { return base64ToFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeCanvas", function() { return resizeCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CropService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CropperPositionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return LoadImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/move-start.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MoveStart() { }
if (false) {}
/** @enum {string} */
var MoveTypes = {
    Move: "move",
    Resize: "resize",
    Pinch: "pinch",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/resize.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */
/**
 * @param {?} canvas
 * @param {?} width
 * @param {?} height
 * @return {?}
 */
function resizeCanvas(canvas, width, height) {
    /** @type {?} */
    var width_source = canvas.width;
    /** @type {?} */
    var height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);
    /** @type {?} */
    var ratio_w = width_source / width;
    /** @type {?} */
    var ratio_h = height_source / height;
    /** @type {?} */
    var ratio_w_half = Math.ceil(ratio_w / 2);
    /** @type {?} */
    var ratio_h_half = Math.ceil(ratio_h / 2);
    /** @type {?} */
    var ctx = canvas.getContext('2d');
    if (ctx) {
        /** @type {?} */
        var img = ctx.getImageData(0, 0, width_source, height_source);
        /** @type {?} */
        var img2 = ctx.createImageData(width, height);
        /** @type {?} */
        var data = img.data;
        /** @type {?} */
        var data2 = img2.data;
        for (var j = 0; j < height; j++) {
            for (var i = 0; i < width; i++) {
                /** @type {?} */
                var x2 = (i + j * width) * 4;
                /** @type {?} */
                var center_y = j * ratio_h;
                /** @type {?} */
                var weight = 0;
                /** @type {?} */
                var weights = 0;
                /** @type {?} */
                var weights_alpha = 0;
                /** @type {?} */
                var gx_r = 0;
                /** @type {?} */
                var gx_g = 0;
                /** @type {?} */
                var gx_b = 0;
                /** @type {?} */
                var gx_a = 0;
                /** @type {?} */
                var xx_start = Math.floor(i * ratio_w);
                /** @type {?} */
                var yy_start = Math.floor(j * ratio_h);
                /** @type {?} */
                var xx_stop = Math.ceil((i + 1) * ratio_w);
                /** @type {?} */
                var yy_stop = Math.ceil((j + 1) * ratio_h);
                xx_stop = Math.min(xx_stop, width_source);
                yy_stop = Math.min(yy_stop, height_source);
                for (var yy = yy_start; yy < yy_stop; yy++) {
                    /** @type {?} */
                    var dy = Math.abs(center_y - yy) / ratio_h_half;
                    /** @type {?} */
                    var center_x = i * ratio_w;
                    /** @type {?} */
                    var w0 = dy * dy;
                    for (var xx = xx_start; xx < xx_stop; xx++) {
                        /** @type {?} */
                        var dx = Math.abs(center_x - xx) / ratio_w_half;
                        /** @type {?} */
                        var w = Math.sqrt(w0 + dx * dx);
                        if (w >= 1) {
                            //pixel too far
                            continue;
                        }
                        //hermite filter
                        weight = 2 * w * w * w - 3 * w * w + 1;
                        /** @type {?} */
                        var pos_x = 4 * (xx + yy * width_source);
                        //alpha
                        gx_a += weight * data[pos_x + 3];
                        weights_alpha += weight;
                        //colors
                        if (data[pos_x + 3] < 255)
                            weight = weight * data[pos_x + 3] / 250;
                        gx_r += weight * data[pos_x];
                        gx_g += weight * data[pos_x + 1];
                        gx_b += weight * data[pos_x + 2];
                        weights += weight;
                    }
                }
                data2[x2] = gx_r / weights;
                data2[x2 + 1] = gx_g / weights;
                data2[x2 + 2] = gx_b / weights;
                data2[x2 + 3] = gx_a / weights_alpha;
            }
        }
        canvas.width = width;
        canvas.height = height;
        //draw
        ctx.putImageData(img2, 0, 0);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/crop.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CropService = /** @class */ (function () {
    function CropService() {
    }
    /**
     * @param {?} sourceImage
     * @param {?} loadedImage
     * @param {?} cropper
     * @param {?} settings
     * @return {?}
     */
    CropService.prototype.crop = /**
     * @param {?} sourceImage
     * @param {?} loadedImage
     * @param {?} cropper
     * @param {?} settings
     * @return {?}
     */
    function (sourceImage, loadedImage, cropper, settings) {
        /** @type {?} */
        var imagePosition = this.getImagePosition(sourceImage, loadedImage, cropper, settings);
        /** @type {?} */
        var width = imagePosition.x2 - imagePosition.x1;
        /** @type {?} */
        var height = imagePosition.y2 - imagePosition.y1;
        /** @type {?} */
        var cropCanvas = (/** @type {?} */ (document.createElement('canvas')));
        cropCanvas.width = width;
        cropCanvas.height = height;
        /** @type {?} */
        var ctx = cropCanvas.getContext('2d');
        if (!ctx) {
            return;
        }
        if (settings.backgroundColor != null) {
            ctx.fillStyle = settings.backgroundColor;
            ctx.fillRect(0, 0, width, height);
        }
        /** @type {?} */
        var scaleX = (settings.transform.scale || 1) * (settings.transform.flipH ? -1 : 1);
        /** @type {?} */
        var scaleY = (settings.transform.scale || 1) * (settings.transform.flipV ? -1 : 1);
        /** @type {?} */
        var transformedImage = loadedImage.transformed;
        ctx.setTransform(scaleX, 0, 0, scaleY, transformedImage.size.width / 2, transformedImage.size.height / 2);
        ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
        ctx.rotate((settings.transform.rotate || 0) * Math.PI / 180);
        ctx.drawImage(transformedImage.image, -transformedImage.size.width / 2, -transformedImage.size.height / 2);
        /** @type {?} */
        var output = {
            width: width, height: height,
            imagePosition: imagePosition,
            cropperPosition: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, cropper)
        };
        if (settings.containWithinAspectRatio) {
            output.offsetImagePosition = this.getOffsetImagePosition(sourceImage, loadedImage, cropper, settings);
        }
        /** @type {?} */
        var resizeRatio = this.getResizeRatio(width, height, settings);
        if (resizeRatio !== 1) {
            output.width = Math.round(width * resizeRatio);
            output.height = settings.maintainAspectRatio
                ? Math.round(output.width / settings.aspectRatio)
                : Math.round(height * resizeRatio);
            resizeCanvas(cropCanvas, output.width, output.height);
        }
        output.base64 = cropCanvas.toDataURL('image/' + settings.format, this.getQuality(settings));
        return output;
    };
    /**
     * @private
     * @param {?} sourceImage
     * @param {?} loadedImage
     * @param {?} cropper
     * @param {?} settings
     * @return {?}
     */
    CropService.prototype.getImagePosition = /**
     * @private
     * @param {?} sourceImage
     * @param {?} loadedImage
     * @param {?} cropper
     * @param {?} settings
     * @return {?}
     */
    function (sourceImage, loadedImage, cropper, settings) {
        /** @type {?} */
        var sourceImageElement = sourceImage.nativeElement;
        /** @type {?} */
        var ratio = loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
        /** @type {?} */
        var out = {
            x1: Math.round(cropper.x1 * ratio),
            y1: Math.round(cropper.y1 * ratio),
            x2: Math.round(cropper.x2 * ratio),
            y2: Math.round(cropper.y2 * ratio)
        };
        if (!settings.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
            out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
        }
        return out;
    };
    /**
     * @private
     * @param {?} sourceImage
     * @param {?} loadedImage
     * @param {?} cropper
     * @param {?} settings
     * @return {?}
     */
    CropService.prototype.getOffsetImagePosition = /**
     * @private
     * @param {?} sourceImage
     * @param {?} loadedImage
     * @param {?} cropper
     * @param {?} settings
     * @return {?}
     */
    function (sourceImage, loadedImage, cropper, settings) {
        /** @type {?} */
        var canvasRotation = settings.canvasRotation + loadedImage.exifTransform.rotate;
        /** @type {?} */
        var sourceImageElement = sourceImage.nativeElement;
        /** @type {?} */
        var ratio = loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
        /** @type {?} */
        var offsetX;
        /** @type {?} */
        var offsetY;
        if (canvasRotation % 2) {
            offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.height) / 2;
            offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.width) / 2;
        }
        else {
            offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.width) / 2;
            offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.height) / 2;
        }
        /** @type {?} */
        var out = {
            x1: Math.round(cropper.x1 * ratio) - offsetX,
            y1: Math.round(cropper.y1 * ratio) - offsetY,
            x2: Math.round(cropper.x2 * ratio) - offsetX,
            y2: Math.round(cropper.y2 * ratio) - offsetY
        };
        if (!settings.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
            out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
        }
        return out;
    };
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} settings
     * @return {?}
     */
    CropService.prototype.getResizeRatio = /**
     * @param {?} width
     * @param {?} height
     * @param {?} settings
     * @return {?}
     */
    function (width, height, settings) {
        /** @type {?} */
        var ratioWidth = settings.resizeToWidth / width;
        /** @type {?} */
        var ratioHeight = settings.resizeToHeight / height;
        /** @type {?} */
        var ratios = new Array();
        if (settings.resizeToWidth > 0) {
            ratios.push(ratioWidth);
        }
        if (settings.resizeToHeight > 0) {
            ratios.push(ratioHeight);
        }
        /** @type {?} */
        var result = ratios.length === 0 ? 1 : Math.min.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(ratios));
        if (result > 1 && !settings.onlyScaleDown) {
            return result;
        }
        return Math.min(result, 1);
    };
    /**
     * @param {?} settings
     * @return {?}
     */
    CropService.prototype.getQuality = /**
     * @param {?} settings
     * @return {?}
     */
    function (settings) {
        return Math.min(1, Math.max(0, settings.imageQuality / 100));
    };
    CropService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ CropService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function CropService_Factory() { return new CropService(); }, token: CropService, providedIn: "root" });
    return CropService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/cropper.settings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CropperSettings = /** @class */ (function () {
    function CropperSettings() {
        // From options
        this.format = 'png';
        this.maintainAspectRatio = true;
        this.transform = {};
        this.aspectRatio = 1;
        this.resizeToWidth = 0;
        this.resizeToHeight = 0;
        this.cropperMinWidth = 0;
        this.cropperMinHeight = 0;
        this.cropperMaxHeight = 0;
        this.cropperMaxWidth = 0;
        this.cropperStaticWidth = 0;
        this.cropperStaticHeight = 0;
        this.canvasRotation = 0;
        this.initialStepSize = 3;
        this.roundCropper = false;
        this.onlyScaleDown = false;
        this.imageQuality = 92;
        this.autoCrop = true;
        this.backgroundColor = undefined;
        this.containWithinAspectRatio = false;
        this.hideResizeSquares = false;
        this.alignImage = 'center';
        // Internal
        this.cropperScaledMinWidth = 20;
        this.cropperScaledMinHeight = 20;
        this.cropperScaledMaxWidth = 20;
        this.cropperScaledMaxHeight = 20;
        this.stepSize = this.initialStepSize;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    CropperSettings.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        Object.keys(options)
            .filter((/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return k in _this; }))
            .forEach((/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return _this[k] = options[k]; }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CropperSettings.prototype.setOptionsFromChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        Object.keys(changes)
            .filter((/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return k in _this; }))
            .forEach((/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return _this[k] = changes[k].currentValue; }));
    };
    return CropperSettings;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/exif.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Black 2x1 JPEG, with the following meta information set:
// - EXIF Orientation: 6 (Rotated 90° CCW)
// Source: https://github.com/blueimp/JavaScript-Load-Image
/** @type {?} */
var testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +
    'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +
    'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +
    'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' +
    'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' +
    'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
/**
 * @return {?}
 */
function supportsAutomaticRotation() {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    function (resolve) {
        /** @type {?} */
        var img = new Image();
        img.onload = (/**
         * @return {?}
         */
        function () {
            // Check if browser supports automatic image orientation:
            /** @type {?} */
            var supported = img.width === 1 && img.height === 2;
            resolve(supported);
        });
        img.src = testAutoOrientationImageURL;
    }));
}
/**
 * @param {?} exifRotationOrBase64Image
 * @return {?}
 */
function getTransformationsFromExifData(exifRotationOrBase64Image) {
    if (typeof exifRotationOrBase64Image === 'string') {
        exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
    }
    switch (exifRotationOrBase64Image) {
        case 2:
            return { rotate: 0, flip: true };
        case 3:
            return { rotate: 2, flip: false };
        case 4:
            return { rotate: 2, flip: true };
        case 5:
            return { rotate: 1, flip: true };
        case 6:
            return { rotate: 1, flip: false };
        case 7:
            return { rotate: 3, flip: true };
        case 8:
            return { rotate: 3, flip: false };
        default:
            return { rotate: 0, flip: false };
    }
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function getExifRotation(imageBase64) {
    /** @type {?} */
    var view = new DataView(base64ToArrayBuffer(imageBase64));
    if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
    }
    /** @type {?} */
    var length = view.byteLength;
    /** @type {?} */
    var offset = 2;
    while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8)
            return -1;
        /** @type {?} */
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
                return -1;
            }
            /** @type {?} */
            var little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            /** @type {?} */
            var tags = view.getUint16(offset, little);
            offset += 2;
            for (var i = 0; i < tags; i++) {
                if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                    return view.getUint16(offset + (i * 12) + 8, little);
                }
            }
        }
        else if ((marker & 0xFF00) != 0xFF00) {
            break;
        }
        else {
            offset += view.getUint16(offset, false);
        }
    }
    return -1;
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function base64ToArrayBuffer(imageBase64) {
    imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    /** @type {?} */
    var binaryString = atob(imageBase64);
    /** @type {?} */
    var len = binaryString.length;
    /** @type {?} */
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/load-image.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function LoadImageBase64() { }
if (false) {}
var LoadImageService = /** @class */ (function () {
    function LoadImageService() {
        this.autoRotateSupported = supportsAutomaticRotation();
    }
    /**
     * @param {?} file
     * @param {?} cropperSettings
     * @return {?}
     */
    LoadImageService.prototype.loadImageFile = /**
     * @param {?} file
     * @param {?} cropperSettings
     * @return {?}
     */
    function (file, cropperSettings) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var fileReader = new FileReader();
            fileReader.onload = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this.loadImage(event.target.result, file.type, cropperSettings)
                    .then(resolve)
                    .catch(reject);
            });
            fileReader.readAsDataURL(file);
        }));
    };
    /**
     * @private
     * @param {?} imageBase64
     * @param {?} imageType
     * @param {?} cropperSettings
     * @return {?}
     */
    LoadImageService.prototype.loadImage = /**
     * @private
     * @param {?} imageBase64
     * @param {?} imageType
     * @param {?} cropperSettings
     * @return {?}
     */
    function (imageBase64, imageType, cropperSettings) {
        if (!this.isValidImageType(imageType)) {
            return Promise.reject(new Error('Invalid image type'));
        }
        return this.loadBase64Image(imageBase64, cropperSettings);
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    LoadImageService.prototype.isValidImageType = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(type);
    };
    /**
     * @param {?} url
     * @param {?} cropperSettings
     * @return {?}
     */
    LoadImageService.prototype.loadImageFromURL = /**
     * @param {?} url
     * @param {?} cropperSettings
     * @return {?}
     */
    function (url, cropperSettings) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var img = new Image();
            img.onerror = (/**
             * @return {?}
             */
            function () { return reject; });
            img.onload = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var canvas = document.createElement('canvas');
                /** @type {?} */
                var context = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0);
                _this.loadBase64Image(canvas.toDataURL(), cropperSettings).then(resolve);
            });
            img.crossOrigin = 'anonymous';
            img.src = url;
        }));
    };
    /**
     * @param {?} imageBase64
     * @param {?} cropperSettings
     * @return {?}
     */
    LoadImageService.prototype.loadBase64Image = /**
     * @param {?} imageBase64
     * @param {?} cropperSettings
     * @return {?}
     */
    function (imageBase64, cropperSettings) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var originalImage = new Image();
            originalImage.onload = (/**
             * @return {?}
             */
            function () { return resolve({
                originalImage: originalImage,
                originalBase64: imageBase64
            }); });
            originalImage.onerror = reject;
            originalImage.src = imageBase64;
        })).then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.transformImageBase64(res, cropperSettings); }));
    };
    /**
     * @private
     * @param {?} res
     * @param {?} cropperSettings
     * @return {?}
     */
    LoadImageService.prototype.transformImageBase64 = /**
     * @private
     * @param {?} res
     * @param {?} cropperSettings
     * @return {?}
     */
    function (res, cropperSettings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var autoRotate, exifTransform, loadedImage;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.autoRotateSupported];
                    case 1:
                        autoRotate = _a.sent();
                        return [4 /*yield*/, getTransformationsFromExifData(autoRotate ? -1 : res.originalBase64)];
                    case 2:
                        exifTransform = _a.sent();
                        if (!res.originalImage || !res.originalImage.complete) {
                            return [2 /*return*/, Promise.reject(new Error('No image loaded'))];
                        }
                        loadedImage = {
                            original: {
                                base64: res.originalBase64,
                                image: res.originalImage,
                                size: {
                                    width: res.originalImage.naturalWidth,
                                    height: res.originalImage.naturalHeight
                                }
                            },
                            exifTransform: exifTransform
                        };
                        return [2 /*return*/, this.transformLoadedImage(loadedImage, cropperSettings)];
                }
            });
        });
    };
    /**
     * @param {?} loadedImage
     * @param {?} cropperSettings
     * @return {?}
     */
    LoadImageService.prototype.transformLoadedImage = /**
     * @param {?} loadedImage
     * @param {?} cropperSettings
     * @return {?}
     */
    function (loadedImage, cropperSettings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var canvasRotation, originalSize, transformedSize, canvas, ctx, transformedBase64, transformedImage;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        canvasRotation = cropperSettings.canvasRotation + loadedImage.exifTransform.rotate;
                        originalSize = {
                            width: loadedImage.original.image.naturalWidth,
                            height: loadedImage.original.image.naturalHeight
                        };
                        if (canvasRotation === 0 && !loadedImage.exifTransform.flip && !cropperSettings.containWithinAspectRatio) {
                            return [2 /*return*/, {
                                    original: {
                                        base64: loadedImage.original.base64,
                                        image: loadedImage.original.image,
                                        size: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalSize)
                                    },
                                    transformed: {
                                        base64: loadedImage.original.base64,
                                        image: loadedImage.original.image,
                                        size: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalSize)
                                    },
                                    exifTransform: loadedImage.exifTransform
                                }];
                        }
                        transformedSize = this.getTransformedSize(originalSize, loadedImage.exifTransform, cropperSettings);
                        canvas = document.createElement('canvas');
                        canvas.width = transformedSize.width;
                        canvas.height = transformedSize.height;
                        ctx = canvas.getContext('2d');
                        ctx.setTransform(loadedImage.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
                        ctx.rotate(Math.PI * (canvasRotation / 2));
                        ctx.drawImage(loadedImage.original.image, -originalSize.width / 2, -originalSize.height / 2);
                        transformedBase64 = canvas.toDataURL();
                        return [4 /*yield*/, this.loadImageFromBase64(transformedBase64)];
                    case 1:
                        transformedImage = _a.sent();
                        return [2 /*return*/, {
                                original: {
                                    base64: loadedImage.original.base64,
                                    image: loadedImage.original.image,
                                    size: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalSize)
                                },
                                transformed: {
                                    base64: transformedBase64,
                                    image: transformedImage,
                                    size: {
                                        width: transformedImage.width,
                                        height: transformedImage.height
                                    }
                                },
                                exifTransform: loadedImage.exifTransform
                            }];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */
    LoadImageService.prototype.loadImageFromBase64 = /**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */
    function (imageBase64) {
        return new Promise(((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var image = new Image();
            image.onload = (/**
             * @return {?}
             */
            function () { return resolve(image); });
            image.onerror = reject;
            image.src = imageBase64;
        })));
    };
    /**
     * @private
     * @param {?} originalSize
     * @param {?} exifTransform
     * @param {?} cropperSettings
     * @return {?}
     */
    LoadImageService.prototype.getTransformedSize = /**
     * @private
     * @param {?} originalSize
     * @param {?} exifTransform
     * @param {?} cropperSettings
     * @return {?}
     */
    function (originalSize, exifTransform, cropperSettings) {
        /** @type {?} */
        var canvasRotation = cropperSettings.canvasRotation + exifTransform.rotate;
        if (cropperSettings.containWithinAspectRatio) {
            if (canvasRotation % 2) {
                /** @type {?} */
                var minWidthToContain = originalSize.width * cropperSettings.aspectRatio;
                /** @type {?} */
                var minHeightToContain = originalSize.height / cropperSettings.aspectRatio;
                return {
                    width: Math.max(originalSize.height, minWidthToContain),
                    height: Math.max(originalSize.width, minHeightToContain)
                };
            }
            else {
                /** @type {?} */
                var minWidthToContain = originalSize.height * cropperSettings.aspectRatio;
                /** @type {?} */
                var minHeightToContain = originalSize.width / cropperSettings.aspectRatio;
                return {
                    width: Math.max(originalSize.width, minWidthToContain),
                    height: Math.max(originalSize.height, minHeightToContain)
                };
            }
        }
        if (canvasRotation % 2) {
            return {
                height: originalSize.width,
                width: originalSize.height
            };
        }
        return {
            width: originalSize.width,
            height: originalSize.height
        };
    };
    LoadImageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ LoadImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function LoadImageService_Factory() { return new LoadImageService(); }, token: LoadImageService, providedIn: "root" });
    return LoadImageService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/cropper-position.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CropperPositionService = /** @class */ (function () {
    function CropperPositionService() {
    }
    /**
     * @param {?} sourceImage
     * @param {?} cropperPosition
     * @param {?} settings
     * @return {?}
     */
    CropperPositionService.prototype.resetCropperPosition = /**
     * @param {?} sourceImage
     * @param {?} cropperPosition
     * @param {?} settings
     * @return {?}
     */
    function (sourceImage, cropperPosition, settings) {
        /** @type {?} */
        var sourceImageElement = sourceImage.nativeElement;
        if (settings.cropperStaticHeight && settings.cropperStaticWidth) {
            cropperPosition.x1 = 0;
            cropperPosition.x2 = sourceImageElement.offsetWidth > settings.cropperStaticWidth ?
                settings.cropperStaticWidth : sourceImageElement.offsetWidth;
            cropperPosition.y1 = 0;
            cropperPosition.y2 = sourceImageElement.offsetHeight > settings.cropperStaticHeight ?
                settings.cropperStaticHeight : sourceImageElement.offsetHeight;
        }
        else {
            /** @type {?} */
            var cropperWidth = Math.min(settings.cropperScaledMaxWidth, sourceImageElement.offsetWidth);
            /** @type {?} */
            var cropperHeight = Math.min(settings.cropperScaledMaxHeight, sourceImageElement.offsetHeight);
            if (!settings.maintainAspectRatio) {
                cropperPosition.x1 = 0;
                cropperPosition.x2 = cropperWidth;
                cropperPosition.y1 = 0;
                cropperPosition.y2 = cropperHeight;
            }
            else if (cropperWidth / settings.aspectRatio < cropperHeight) {
                cropperPosition.x1 = 0;
                cropperPosition.x2 = cropperWidth;
                /** @type {?} */
                var cropperHeightWithAspectRatio = cropperWidth / settings.aspectRatio;
                cropperPosition.y1 = (sourceImageElement.offsetHeight - cropperHeightWithAspectRatio) / 2;
                cropperPosition.y2 = cropperPosition.y1 + cropperHeightWithAspectRatio;
            }
            else {
                cropperPosition.y1 = 0;
                cropperPosition.y2 = cropperHeight;
                /** @type {?} */
                var cropperWidthWithAspectRatio = cropperHeight * settings.aspectRatio;
                cropperPosition.x1 = (sourceImageElement.offsetWidth - cropperWidthWithAspectRatio) / 2;
                cropperPosition.x2 = cropperPosition.x1 + cropperWidthWithAspectRatio;
            }
        }
    };
    /**
     * @param {?} event
     * @param {?} moveStart
     * @param {?} cropperPosition
     * @return {?}
     */
    CropperPositionService.prototype.move = /**
     * @param {?} event
     * @param {?} moveStart
     * @param {?} cropperPosition
     * @return {?}
     */
    function (event, moveStart, cropperPosition) {
        /** @type {?} */
        var diffX = this.getClientX(event) - moveStart.clientX;
        /** @type {?} */
        var diffY = this.getClientY(event) - moveStart.clientY;
        cropperPosition.x1 = moveStart.x1 + diffX;
        cropperPosition.y1 = moveStart.y1 + diffY;
        cropperPosition.x2 = moveStart.x2 + diffX;
        cropperPosition.y2 = moveStart.y2 + diffY;
    };
    /**
     * @param {?} event
     * @param {?} moveStart
     * @param {?} cropperPosition
     * @param {?} maxSize
     * @param {?} settings
     * @return {?}
     */
    CropperPositionService.prototype.resize = /**
     * @param {?} event
     * @param {?} moveStart
     * @param {?} cropperPosition
     * @param {?} maxSize
     * @param {?} settings
     * @return {?}
     */
    function (event, moveStart, cropperPosition, maxSize, settings) {
        /** @type {?} */
        var moveX = this.getClientX(event) - moveStart.clientX;
        /** @type {?} */
        var moveY = this.getClientY(event) - moveStart.clientY;
        switch (moveStart.position) {
            case 'left':
                cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
                break;
            case 'topleft':
                cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
                cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
                break;
            case 'top':
                cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
                break;
            case 'topright':
                cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
                cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
                break;
            case 'right':
                cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
                break;
            case 'bottomright':
                cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
                cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
                break;
            case 'bottom':
                cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
                break;
            case 'bottomleft':
                cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
                cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
                break;
            case 'center':
                /** @type {?} */
                var scale = event.scale;
                /** @type {?} */
                var newWidth = Math.min(Math.max(settings.cropperScaledMinWidth, (Math.abs(moveStart.x2 - moveStart.x1)) * scale), settings.cropperScaledMaxWidth);
                /** @type {?} */
                var newHeight = Math.min(Math.max(settings.cropperScaledMinHeight, (Math.abs(moveStart.y2 - moveStart.y1)) * scale), settings.cropperScaledMaxHeight);
                cropperPosition.x1 = moveStart.clientX - newWidth / 2;
                cropperPosition.x2 = moveStart.clientX + newWidth / 2;
                cropperPosition.y1 = moveStart.clientY - newHeight / 2;
                cropperPosition.y2 = moveStart.clientY + newHeight / 2;
                if (cropperPosition.x1 < 0) {
                    cropperPosition.x2 -= cropperPosition.x1;
                    cropperPosition.x1 = 0;
                }
                else if (cropperPosition.x2 > maxSize.width) {
                    cropperPosition.x1 -= (cropperPosition.x2 - maxSize.width);
                    cropperPosition.x2 = maxSize.width;
                }
                if (cropperPosition.y1 < 0) {
                    cropperPosition.y2 -= cropperPosition.y1;
                    cropperPosition.y1 = 0;
                }
                else if (cropperPosition.y2 > maxSize.height) {
                    cropperPosition.y1 -= (cropperPosition.y2 - maxSize.height);
                    cropperPosition.y2 = maxSize.height;
                }
                break;
        }
        if (settings.maintainAspectRatio) {
            this.checkAspectRatio(moveStart.position, cropperPosition, maxSize, settings);
        }
    };
    /**
     * @param {?} position
     * @param {?} cropperPosition
     * @param {?} maxSize
     * @param {?} settings
     * @return {?}
     */
    CropperPositionService.prototype.checkAspectRatio = /**
     * @param {?} position
     * @param {?} cropperPosition
     * @param {?} maxSize
     * @param {?} settings
     * @return {?}
     */
    function (position, cropperPosition, maxSize, settings) {
        /** @type {?} */
        var overflowX = 0;
        /** @type {?} */
        var overflowY = 0;
        switch (position) {
            case 'top':
                cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
                overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                overflowY = Math.max(0 - cropperPosition.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y1 += (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'bottom':
                cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
                overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y2 -= (overflowY * settings.aspectRatio) > overflowX ? overflowY : (overflowX / settings.aspectRatio);
                }
                break;
            case 'topleft':
                cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                overflowX = Math.max(0 - cropperPosition.x1, 0);
                overflowY = Math.max(0 - cropperPosition.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x1 += (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y1 += (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'topright':
                cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                overflowY = Math.max(0 - cropperPosition.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y1 += (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'right':
            case 'bottomright':
                cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y2 -= (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'left':
            case 'bottomleft':
                cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                overflowX = Math.max(0 - cropperPosition.x1, 0);
                overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x1 += (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y2 -= (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'center':
                cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
                cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                /** @type {?} */
                var overflowX1 = Math.max(0 - cropperPosition.x1, 0);
                /** @type {?} */
                var overflowX2 = Math.max(cropperPosition.x2 - maxSize.width, 0);
                /** @type {?} */
                var overflowY1 = Math.max(cropperPosition.y2 - maxSize.height, 0);
                /** @type {?} */
                var overflowY2 = Math.max(0 - cropperPosition.y1, 0);
                if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
                    cropperPosition.x1 += (overflowY1 * settings.aspectRatio) > overflowX1 ? (overflowY1 * settings.aspectRatio) : overflowX1;
                    cropperPosition.x2 -= (overflowY2 * settings.aspectRatio) > overflowX2 ? (overflowY2 * settings.aspectRatio) : overflowX2;
                    cropperPosition.y1 += (overflowY2 * settings.aspectRatio) > overflowX2 ? overflowY2 : overflowX2 / settings.aspectRatio;
                    cropperPosition.y2 -= (overflowY1 * settings.aspectRatio) > overflowX1 ? overflowY1 : overflowX1 / settings.aspectRatio;
                }
                break;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CropperPositionService.prototype.getClientX = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX) || 0;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CropperPositionService.prototype.getClientY = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return (event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY) || 0;
    };
    CropperPositionService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ CropperPositionService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function CropperPositionService_Factory() { return new CropperPositionService(); }, token: CropperPositionService, providedIn: "root" });
    return CropperPositionService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/keyboard.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} key
 * @return {?}
 */
function getPositionForKey(key) {
    switch (key) {
        case 'ArrowUp':
            return 'top';
        case 'ArrowRight':
            return 'right';
        case 'ArrowDown':
            return 'bottom';
        case 'ArrowLeft':
        default:
            return 'left';
    }
}
/**
 * @param {?} key
 * @return {?}
 */
function getInvertedPositionForKey(key) {
    switch (key) {
        case 'ArrowUp':
            return 'bottom';
        case 'ArrowRight':
            return 'left';
        case 'ArrowDown':
            return 'top';
        case 'ArrowLeft':
        default:
            return 'right';
    }
}
/**
 * @param {?} key
 * @param {?} stepSize
 * @return {?}
 */
function getEventForKey(key, stepSize) {
    switch (key) {
        case 'ArrowUp':
            return { clientX: 0, clientY: stepSize * -1 };
        case 'ArrowRight':
            return { clientX: stepSize, clientY: 0 };
        case 'ArrowDown':
            return { clientX: 0, clientY: stepSize };
        case 'ArrowLeft':
        default:
            return { clientX: stepSize * -1, clientY: 0 };
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/image-cropper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageCropperComponent = /** @class */ (function () {
    function ImageCropperComponent(cropService, cropperPositionService, loadImageService, sanitizer, cd) {
        this.cropService = cropService;
        this.cropperPositionService = cropperPositionService;
        this.loadImageService = loadImageService;
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.Hammer = typeof window !== 'undefined'
            ? (/** @type {?} */ (((/** @type {?} */ (window))).Hammer))
            : null;
        this.settings = new CropperSettings();
        this.setImageMaxSizeRetries = 0;
        this.marginLeft = '0px';
        this.moveTypes = MoveTypes;
        this.imageVisible = false;
        this.format = this.settings.format;
        this.transform = {};
        this.maintainAspectRatio = this.settings.maintainAspectRatio;
        this.aspectRatio = this.settings.aspectRatio;
        this.resizeToWidth = this.settings.resizeToWidth;
        this.resizeToHeight = this.settings.resizeToHeight;
        this.cropperMinWidth = this.settings.cropperMinWidth;
        this.cropperMinHeight = this.settings.cropperMinHeight;
        this.cropperMaxHeight = this.settings.cropperMaxHeight;
        this.cropperMaxWidth = this.settings.cropperMaxWidth;
        this.cropperStaticWidth = this.settings.cropperStaticWidth;
        this.cropperStaticHeight = this.settings.cropperStaticHeight;
        this.canvasRotation = this.settings.canvasRotation;
        this.initialStepSize = this.settings.initialStepSize;
        this.roundCropper = this.settings.roundCropper;
        this.onlyScaleDown = this.settings.onlyScaleDown;
        this.imageQuality = this.settings.imageQuality;
        this.autoCrop = this.settings.autoCrop;
        this.backgroundColor = this.settings.backgroundColor;
        this.containWithinAspectRatio = this.settings.containWithinAspectRatio;
        this.hideResizeSquares = this.settings.hideResizeSquares;
        this.cropper = {
            x1: -100,
            y1: -100,
            x2: 10000,
            y2: 10000
        };
        this.alignImage = this.settings.alignImage;
        this.disabled = false;
        this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reset();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageCropperComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        this.onChangesUpdateSettings(changes);
        this.onChangesInputImage(changes);
        if (this.loadedImage && this.loadedImage.original.image.complete
            && (changes.containWithinAspectRatio || changes.canvasRotation)) {
            this.loadImageService
                .transformLoadedImage(this.loadedImage, this.settings)
                .then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.setLoadedImage(res); }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return _this.loadImageError(err); }));
        }
        if (changes.cropper) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.setCropperScaledMaxSize();
            this.checkCropperPosition(false);
            this.doAutoCrop();
            this.cd.markForCheck();
        }
        if (changes.aspectRatio && this.imageVisible) {
            this.resetCropperPosition();
        }
        if (changes.transform) {
            this.transform = this.transform || {};
            this.setCssTransform();
            this.doAutoCrop();
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    ImageCropperComponent.prototype.onChangesUpdateSettings = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.settings.setOptionsFromChanges(changes);
        if (this.settings.cropperStaticHeight && this.settings.cropperStaticWidth) {
            this.settings.setOptions({
                hideResizeSquares: true,
                cropperMinWidth: this.settings.cropperStaticWidth,
                cropperMinHeight: this.settings.cropperStaticHeight,
                cropperMaxHeight: this.settings.cropperStaticHeight,
                cropperMaxWidth: this.settings.cropperStaticWidth,
                maintainAspectRatio: false
            });
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    ImageCropperComponent.prototype.onChangesInputImage = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.imageChangedEvent || changes.imageURL || changes.imageBase64 || changes.imageFile) {
            this.reset();
        }
        if (changes.imageChangedEvent && this.isValidImageChangedEvent()) {
            this.loadImageFile(this.imageChangedEvent.target.files[0]);
        }
        if (changes.imageURL && this.imageURL) {
            this.loadImageFromURL(this.imageURL);
        }
        if (changes.imageBase64 && this.imageBase64) {
            this.loadBase64Image(this.imageBase64);
        }
        if (changes.imageFile && this.imageFile) {
            this.loadImageFile(this.imageFile);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.isValidImageChangedEvent = /**
     * @private
     * @return {?}
     */
    function () {
        return this.imageChangedEvent
            && this.imageChangedEvent.target
            && this.imageChangedEvent.target.files
            && this.imageChangedEvent.target.files.length > 0;
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setCssTransform = /**
     * @private
     * @return {?}
     */
    function () {
        this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle('scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' +
            'scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' +
            'rotate(' + (this.transform.rotate || 0) + 'deg)');
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.settings.stepSize = this.initialStepSize;
        this.activatePinchGesture();
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.reset = /**
     * @private
     * @return {?}
     */
    function () {
        this.imageVisible = false;
        this.loadedImage = null;
        this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg'
            + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU'
            + 'AAarVyFEAAAAASUVORK5CYII=';
        this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
        };
        this.maxSize = {
            width: 0,
            height: 0
        };
        this.cropper.x1 = -100;
        this.cropper.y1 = -100;
        this.cropper.x2 = 10000;
        this.cropper.y2 = 10000;
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    ImageCropperComponent.prototype.loadImageFile = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        this.loadImageService
            .loadImageFile(file, this.settings)
            .then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.setLoadedImage(res); }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.loadImageError(err); }));
    };
    /**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */
    ImageCropperComponent.prototype.loadBase64Image = /**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */
    function (imageBase64) {
        var _this = this;
        this.loadImageService
            .loadBase64Image(imageBase64, this.settings)
            .then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.setLoadedImage(res); }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.loadImageError(err); }));
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    ImageCropperComponent.prototype.loadImageFromURL = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        this.loadImageService
            .loadImageFromURL(url, this.settings)
            .then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.setLoadedImage(res); }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.loadImageError(err); }));
    };
    /**
     * @private
     * @param {?} loadedImage
     * @return {?}
     */
    ImageCropperComponent.prototype.setLoadedImage = /**
     * @private
     * @param {?} loadedImage
     * @return {?}
     */
    function (loadedImage) {
        this.loadedImage = loadedImage;
        this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(loadedImage.transformed.base64);
        this.cd.markForCheck();
    };
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    ImageCropperComponent.prototype.loadImageError = /**
     * @private
     * @param {?} error
     * @return {?}
     */
    function (error) {
        console.error(error);
        this.loadImageFailed.emit();
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.imageLoadedInView = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.loadedImage != null) {
            this.imageLoaded.emit(this.loadedImage);
            this.setImageMaxSizeRetries = 0;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.checkImageMaxSizeRecursively(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.checkImageMaxSizeRecursively = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.setImageMaxSizeRetries > 40) {
            this.loadImageFailed.emit();
        }
        else if (this.sourceImageLoaded()) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.setCropperScaledMaxSize();
            this.resetCropperPosition();
            this.cropperReady.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.maxSize));
            this.cd.markForCheck();
        }
        else {
            this.setImageMaxSizeRetries++;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.checkImageMaxSizeRecursively(); }), 50);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.sourceImageLoaded = /**
     * @private
     * @return {?}
     */
    function () {
        return this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0;
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        if (!this.loadedImage) {
            return;
        }
        this.resizeCropperPosition();
        this.setMaxSize();
        this.setCropperScaledMinSize();
        this.setCropperScaledMaxSize();
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.activatePinchGesture = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.Hammer) {
            /** @type {?} */
            var hammer = new this.Hammer(this.wrapper.nativeElement);
            hammer.get('pinch').set({ enable: true });
            hammer.on('pinchmove', this.onPinch.bind(this));
            hammer.on('pinchend', this.pinchStop.bind(this));
            hammer.on('pinchstart', this.startPinch.bind(this));
        }
        else if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            console.warn('[NgxImageCropper] Could not find HammerJS - Pinch Gesture won\'t work');
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.resizeCropperPosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
            this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
            this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.resetCropperPosition = /**
     * @return {?}
     */
    function () {
        this.cropperPositionService.resetCropperPosition(this.sourceImage, this.cropper, this.settings);
        this.doAutoCrop();
        this.imageVisible = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.keyboardAccess = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changeKeyboardStepSize(event);
        this.keyboardMoveCropper(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.changeKeyboardStepSize = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key >= '1' && event.key <= '9') {
            this.settings.stepSize = +event.key;
            return;
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.keyboardMoveCropper = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
        if (!(keyboardWhiteList.includes(event.key))) {
            return;
        }
        /** @type {?} */
        var moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
        /** @type {?} */
        var position = event.altKey ? getInvertedPositionForKey(event.key) : getPositionForKey(event.key);
        /** @type {?} */
        var moveEvent = getEventForKey(event.key, this.settings.stepSize);
        event.preventDefault();
        event.stopPropagation();
        this.startMove({ clientX: 0, clientY: 0 }, moveType, position);
        this.moveImg(moveEvent);
        this.moveStop();
    };
    /**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */
    ImageCropperComponent.prototype.startMove = /**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */
    function (event, moveType, position) {
        if (position === void 0) { position = null; }
        if (this.moveStart && this.moveStart.active && this.moveStart.type === MoveTypes.Pinch) {
            return;
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.moveStart = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ active: true, type: moveType, position: position, clientX: this.cropperPositionService.getClientX(event), clientY: this.cropperPositionService.getClientY(event) }, this.cropper);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.startPinch = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.safeImgDataUrl) {
            return;
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.moveStart = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ active: true, type: MoveTypes.Pinch, position: 'center', clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2, clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2 }, this.cropper);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.moveImg = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.moveStart.active) {
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            if (this.moveStart.type === MoveTypes.Move) {
                this.cropperPositionService.move(event, this.moveStart, this.cropper);
                this.checkCropperPosition(true);
            }
            else if (this.moveStart.type === MoveTypes.Resize) {
                if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
                    this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
                }
                this.checkCropperPosition(false);
            }
            this.cd.detectChanges();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.onPinch = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.moveStart.active) {
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            if (this.moveStart.type === MoveTypes.Pinch) {
                this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
                this.checkCropperPosition(false);
            }
            this.cd.detectChanges();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setMaxSize = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.sourceImage) {
            /** @type {?} */
            var sourceImageElement = this.sourceImage.nativeElement;
            this.maxSize.width = sourceImageElement.offsetWidth;
            this.maxSize.height = sourceImageElement.offsetHeight;
            this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setCropperScaledMinSize = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.loadedImage && this.loadedImage.transformed && this.loadedImage.transformed.image) {
            this.setCropperScaledMinWidth();
            this.setCropperScaledMinHeight();
        }
        else {
            this.settings.cropperScaledMinWidth = 20;
            this.settings.cropperScaledMinHeight = 20;
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setCropperScaledMinWidth = /**
     * @private
     * @return {?}
     */
    function () {
        this.settings.cropperScaledMinWidth = this.cropperMinWidth > 0
            ? Math.max(20, this.cropperMinWidth / this.loadedImage.transformed.image.width * this.maxSize.width)
            : 20;
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setCropperScaledMinHeight = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.maintainAspectRatio) {
            this.settings.cropperScaledMinHeight = Math.max(20, this.settings.cropperScaledMinWidth / this.aspectRatio);
        }
        else if (this.cropperMinHeight > 0) {
            this.settings.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.loadedImage.transformed.image.height * this.maxSize.height);
        }
        else {
            this.settings.cropperScaledMinHeight = 20;
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setCropperScaledMaxSize = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.loadedImage && this.loadedImage.transformed && this.loadedImage.transformed.image) {
            /** @type {?} */
            var ratio = this.loadedImage.transformed.size.width / this.maxSize.width;
            this.settings.cropperScaledMaxWidth = this.cropperMaxWidth > 20 ? this.cropperMaxWidth / ratio : this.maxSize.width;
            this.settings.cropperScaledMaxHeight = this.cropperMaxHeight > 20 ? this.cropperMaxHeight / ratio : this.maxSize.height;
            if (this.maintainAspectRatio) {
                if (this.settings.cropperScaledMaxWidth > this.settings.cropperScaledMaxHeight * this.aspectRatio) {
                    this.settings.cropperScaledMaxWidth = this.settings.cropperScaledMaxHeight * this.aspectRatio;
                }
                else if (this.settings.cropperScaledMaxWidth < this.settings.cropperScaledMaxHeight * this.aspectRatio) {
                    this.settings.cropperScaledMaxHeight = this.settings.cropperScaledMaxWidth / this.aspectRatio;
                }
            }
        }
        else {
            this.settings.cropperScaledMaxWidth = this.maxSize.width;
            this.settings.cropperScaledMaxHeight = this.maxSize.height;
        }
    };
    /**
     * @private
     * @param {?=} maintainSize
     * @return {?}
     */
    ImageCropperComponent.prototype.checkCropperPosition = /**
     * @private
     * @param {?=} maintainSize
     * @return {?}
     */
    function (maintainSize) {
        if (maintainSize === void 0) { maintainSize = false; }
        if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
        }
        if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
        }
        if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
            this.cropper.x2 = this.maxSize.width;
        }
        if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
            this.cropper.y2 = this.maxSize.height;
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.moveStop = /**
     * @return {?}
     */
    function () {
        if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.pinchStop = /**
     * @return {?}
     */
    function () {
        if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.doAutoCrop = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.autoCrop) {
            this.crop();
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.crop = /**
     * @return {?}
     */
    function () {
        if (this.sourceImage && this.sourceImage.nativeElement && this.loadedImage.transformed.image != null) {
            this.startCropImage.emit();
            /** @type {?} */
            var output = this.cropService.crop(this.sourceImage, this.loadedImage, this.cropper, this.settings);
            if (output != null) {
                this.imageCropped.emit(output);
            }
            return output;
        }
        return null;
    };
    ImageCropperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'image-cropper',
                    template: "<div [style.background]=\"imageVisible && backgroundColor\"\n     #wrapper\n>\n    <img\n      #sourceImage\n      class=\"source-image\"\n      *ngIf=\"safeImgDataUrl\"\n      [src]=\"safeImgDataUrl\"\n      [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n      [style.transform]=\"safeTransformStyle\"\n      (load)=\"imageLoadedInView()\"\n    />\n    <div\n        class=\"overlay\"\n        [style.width.px]=\"maxSize.width\"\n        [style.height.px]=\"maxSize.height\"\n        [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n    ></div>\n    <div class=\"cropper\"\n         *ngIf=\"imageVisible\"\n         [class.rounded]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n         (keydown)=\"keyboardAccess($event)\"\n         tabindex=\"0\"\n    >\n        <div\n            (mousedown)=\"startMove($event, moveTypes.Move)\"\n            (touchstart)=\"startMove($event, moveTypes.Move)\"\n            class=\"move\">\n        </div>\n        <ng-container *ngIf=\"!hideResizeSquares\">\n            <span class=\"resize topleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize top\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize topright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize right\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottom\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize left\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize-bar top\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'top')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'top')\">\n            </span>\n            <span class=\"resize-bar right\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'right')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'right')\">\n            </span>\n            <span class=\"resize-bar bottom\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottom')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottom')\">\n            </span>\n            <span class=\"resize-bar left\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'left')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'left')\">\n            </span>\n        </ng-container>\n    </div>\n</div>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}:host>div{width:100%;position:relative}:host>div img.source-image{max-width:100%;max-height:100%;transform-origin:center}:host .overlay{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}:host .cropper{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}:host .cropper:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}:host .cropper .move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .cropper:focus .move{border-color:#1e90ff;border-width:2px}:host .cropper .resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .cropper .resize .square{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .cropper .resize.topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .cropper .resize.top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.topright{top:-12px;right:-12px;cursor:nesw-resize}:host .cropper .resize.right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .cropper .resize.bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .cropper .resize.bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .cropper .resize.left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .cropper .resize-bar{position:absolute;z-index:1}:host .cropper .resize-bar.top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper .resize-bar.bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper.rounded{outline-color:transparent}:host .cropper.rounded:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){:host .cropper{outline-width:100vh}:host .cropper.rounded:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}:host .cropper.rounded .move{border-radius:100%}:host.disabled .cropper .move,:host.disabled .cropper .resize,:host.disabled .cropper .resize-bar{display:none}"]
                }] }
    ];
    /** @nocollapse */
    ImageCropperComponent.ctorParameters = function () { return [
        { type: CropService },
        { type: CropperPositionService },
        { type: LoadImageService },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    ImageCropperComponent.propDecorators = {
        wrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['wrapper', { static: true },] }],
        sourceImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['sourceImage', { static: false },] }],
        imageChangedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        imageURL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        imageBase64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        imageFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        maintainAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        aspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeToWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeToHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cropperMinWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cropperMinHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cropperMaxHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cropperMaxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cropperStaticWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cropperStaticHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        canvasRotation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        initialStepSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        roundCropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onlyScaleDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        imageQuality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        autoCrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        containWithinAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        hideResizeSquares: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        alignImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['style.text-align',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.disabled',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        imageCropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        startCropImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        imageLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        cropperReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        loadImageFailed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:resize',] }],
        moveImg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document:mousemove', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document:touchmove', ['$event'],] }],
        moveStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document:mouseup',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document:touchend',] }]
    };
    return ImageCropperComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/image-cropper.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageCropperModule = /** @class */ (function () {
    function ImageCropperModule() {
    }
    ImageCropperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                    ],
                    declarations: [
                        ImageCropperComponent
                    ],
                    exports: [
                        ImageCropperComponent
                    ]
                },] }
    ];
    return ImageCropperModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/blob.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} base64Image
 * @return {?}
 */
function base64ToFile(base64Image) {
    /** @type {?} */
    var split = base64Image.split(',');
    /** @type {?} */
    var type = split[0].replace('data:', '').replace(';base64', '');
    /** @type {?} */
    var byteString = atob(split[1]);
    /** @type {?} */
    var ab = new ArrayBuffer(byteString.length);
    /** @type {?} */
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i += 1) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: type });
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-image-cropper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-image-cropper.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/config/papel/lista/lista-papel.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/config/papel/lista/lista-papel.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-simples [titulo]=\"titulo\" [navegacao]=\"navegacao\">\r\n    <form autocomplete=\"off\" class=\"form form-horizontal\">\r\n\r\n        <div>\r\n            <combo-pessoa-cliente (clienteChangeEvent)=\"clienteChange()\" [somentePerfilAdministrador]=\"true\"\r\n                [mostrarSistema]=\"true\">\r\n            </combo-pessoa-cliente>\r\n        </div>\r\n        <div class=\"table-responsive table-wrapper-scroll-x table-wrapper-scroll-y rounded  infinite-scroll\"\r\n            infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"50\" (scrolled)=\"onScroll()\"\r\n            [fromRoot]=\"true\" [infiniteScrollContainer]=\"'.infinite-scroll'\">\r\n            <table sortable-table (sorted)=\"onSorted($event)\" class=\"table table-hover table-sm\">\r\n                <thead class=\"thead-custom\">\r\n                    <tr>\r\n                        <th width=\"33%\"><a sortable-column=\"nome\" sort-direction=\"ASC\">Nome</a>\r\n                            <input type=\"text\" ([formControl])=\"filtro\" [(ngModel)]=\"filtro.nome\"\r\n                                [ngStyle]=\"classUpperCase()\" name=\"nome\" class=\"form-control\" id=\"tipoDocumento\"\r\n                                placeholder=\"Pesquisar...\" (ngModelChange)=\"filtrando()\">\r\n                        </th>\r\n                        <th width=\"33%\" *ngIf=\"perfilUsuarioAdmin()\"><a sortable-column=\"assina\">Identificação</a>\r\n                            <input type=\"text\" [(ngModel)]=\"filtro.identificacao\" name=\"identificacao\"\r\n                                class=\"form-control\" [ngStyle]=\"classUpperCase()\" id=\"identificacao\"\r\n                                placeholder=\"Pesquisar...\" (ngModelChange)=\"filtrando()\">\r\n                        </th>\r\n                        <th width=\"33%\" style=\"vertical-align:top;\"  *ngIf=\"perfilUsuarioAdmin()\">\r\n                            Tipos de clientes\r\n                        </th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody [ngStyle]=\"classUpperCase()\">\r\n                    <tr *ngFor=\"let papel of listagem\" (click)=\"selecionarLinha(papel)\" [ngClass]=\"legendaGrid(papel)\"\r\n                        (dblclick)=\"editar(false)\">\r\n                        <td>{{papel.nome}}</td>\r\n                        <td *ngIf=\"perfilUsuarioAdmin()\">{{papel.identificacao}}</td>\r\n                        <td  *ngIf=\"perfilUsuarioAdmin()\">\r\n                            <span *ngIf=\"papel.papelTipoClientes.length>0\">\r\n                                <div *ngFor=\"let tipoCliente of papel.papelTipoClientes; let i = index\"\r\n                                    style=\"display: inline-table\">\r\n                                    <span style=\"display: inline-flex;font-size: x-small;\">\r\n                                        <span style=\"margin-left:5px\">{{tipoCliente.segmento.nome}}</span>\r\n                                        <span style=\"margin-left:5px\" *ngIf=\"i < papel.papelTipoClientes.length -1 \"> -\r\n                                        </span>\r\n                                    </span>\r\n                                </div>\r\n                            </span>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"!listagem.length\">\r\n                        <td colspan=\"2\">Nenhum registro encontrado</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-md-12 text-right\">\r\n            <app-botoes-lista [permiteIncluir]=\"true\" [permiteExcluir]=\"true\" (incluirEvent)=\"incluir()\"\r\n                (editarEvent)=\"editar()\" (excluirEvent)=\"excluir()\" [selecionado]=\"!objetoSelecionado\">\r\n            </app-botoes-lista>\r\n        </div>\r\n        <!--<div class=\"box-footer clearfix\">\r\n            <app-pagination [page]=\"page\" (paginationEvent)=changePage($event)></app-pagination>\r\n        </div>-->\r\n    </form>\r\n</app-form-simples>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/config/papel/novo/novo-papel.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/config/papel/novo/novo-papel.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-simples [titulo]=\"titulo\" [navegacao]=\"navegacao\" [rota]=\"rota\" [modal]=\"modal\" [ngStyle]=\"classUpperCase()\">\r\n    <form class=\"form form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"salvar()\" autocomplete=\"off\" novalidate>\r\n        <div class=\"form-body\">\r\n            <h4 class=\"form-section mb-1 text-center\">\r\n                <div *ngIf=\"!editando && !consultando\"><!--<i class=\"fa fa-plus\"></i>--> Novo cadastro</div>\r\n                <div *ngIf=\"editando && !consultando\"><!--<i class=\"fa fa-edit\"></i>--> Editando cadastro</div>\r\n                <div *ngIf=\"consultando\"><!--i class=\"fa fa-eye\"></i>--> Consultando cadastro</div>\r\n            </h4>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <!--<div [ngClass]=\"[modal?'col-md-12':'col-md-6']\">-->\r\n                    <label for=\"inputNome\" class=\"control-label\">Nome</label>\r\n                    <input type=\"text\" [(ngModel)]=\"Papel.nome\" name=\"inputNome\" class=\"form-control\" id=\"inputNome\"\r\n                        [ngStyle]=\"classUpperCase()\" #nome=\"ngModel\" placeholder=\"Informe\" minlength=\"3\" maxlength=\"255\"\r\n                        [disabled]=\"consultando\" required>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"nome.errors?.required && (nome.dirty || nome.touched)\">Informe\r\n                        o nome do papel\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"nome.errors?.minlength && (nome.dirty || nome.touched)\">Informe\r\n                        no mínimo 3 carateres\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"perfilUsuarioAdmin()\">\r\n                <div class=\"col-md-12\">\r\n                    <label for=\"inputIdentificacao\" class=\"control-label\">Identificação</label>\r\n                    <input type=\"text\" [(ngModel)]=\"Papel.identificacao\" name=\"inputIdentificacao\" class=\"form-control\"\r\n                        [ngStyle]=\"classUpperCase()\" id=\"inputIdentificacao\" #identificacao=\"ngModel\"\r\n                        [disabled]=\"consultando\" placeholder=\"Informe\" minlength=\"3\" maxlength=\"255\" required>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"identificacao.errors?.required && (identificacao.dirty || identificacao.touched)\">Informe\r\n                        a Identificação\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"identificacao.errors?.minlength && (identificacao.dirty || identificacao.touched)\">Informe\r\n                        no mínimo 3 carateres\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"clienteSistema()\" class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"selTipoCliente\" class=\"control-label\">Tipo de cliente</label>\r\n\r\n                    <ng-multiselect-dropdown *ngIf=\"tipoClienteList\" name=\"selTipoCliente\" id=\"selTipoCliente\"\r\n                        [ngStyle]=\"classUpperCase()\" [placeholder]=\"'Para os clientes do tipo  ...'\"\r\n                        [data]=\"tipoClienteList\" [(ngModel)]=\"tipoClienteSelecionandos\" [settings]=\"dropdownSettings\">\r\n                    </ng-multiselect-dropdown>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\" *ngIf=\"false\">\r\n                <div class=\"col-md-2\">\r\n                    <label for=\"inputAssina\" class=\"control-label\">Solicita Assinatura</label>\r\n                    <ui-switch [(ngModel)]=\"TipoDocumento.assina\" name=\"inputNaoAssina\" id=\"inputAssina\"\r\n                        [ngStyle]=\"classUpperCase()\" #assina=\"ngModel\" class=\"switch100\" required checkedLabel=\"Assina\"\r\n                        uncheckedLabel=\"Não Assina\" defaultBgColor=\"red\">\r\n                    </ui-switch>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"assina.invalid && (assina.dirty || assina.touched)\">Escolha o Não Assina\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                {{ message.text }}\r\n            </ngb-alert>\r\n\r\n            <label *ngIf=\"consultando\" for=\"inputAssina\" class=\"control-label\">Este é um tipo de documento padrão do\r\n                sistema e não pode ser editado.</label>\r\n\r\n            <app-botoes-cadastro [editando]=\"editando\" [podeVoltar]=\"podeVoltar\" [consultando]=\"consultando\"\r\n                (cancelarEvent)=\"cancelar()\" (voltarEvent)=\"voltar()\" (excluirEvent)=\"excluir()\">\r\n            </app-botoes-cadastro>\r\n        </div>\r\n    </form>\r\n</app-form-simples>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/config/segmento/lista/lista-segmento.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/config/segmento/lista/lista-segmento.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-simples [titulo]=\"titulo\" [navegacao]=\"navegacao\">\r\n    <form autocomplete=\"off\" class=\"form form-horizontal\">\r\n        <span style=\"display: inline-flex;\">\r\n            <app-botoes-lista [permiteIncluir]=\"true\" [permiteExcluir]=\"true\" (incluirEvent)=\"incluir()\"\r\n                (editarEvent)=\"editar()\" (excluirEvent)=\"excluir()\" [selecionado]=\"!objetoSelecionado\">\r\n            </app-botoes-lista>\r\n        </span>\r\n        <div class=\"table-responsive table-wrapper-scroll-x table-wrapper-scroll-y rounded  infinite-scroll\" infiniteScroll\r\n        [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"50\" (scrolled)=\"onScroll()\" [fromRoot]=\"true\"\r\n        [infiniteScrollContainer]=\"'.infinite-scroll'\">\r\n            <table sortable-table (sorted)=\"onSorted($event)\" class=\"table table-hover table-sm\">\r\n                <thead class=\"thead-custom\">\r\n                    <tr>\r\n                        <th width=\"350px\"><a sortable-column=\"nome\" sort-direction=\"ASC\">Nome</a>\r\n                            <input type=\"text\" ([formControl])=\"filtro\" [(ngModel)]=\"filtro.nome\"\r\n                                [ngStyle]=\"classUpperCase()\" name=\"nome\" class=\"form-control\" id=\"tipoDocumento\"\r\n                                placeholder=\"Pesquisar...\" (ngModelChange)=\"filtrando()\">\r\n                        </th>\r\n                        <th width=\"250px\"><a sortable-column=\"assina\">Identificacao</a>\r\n                            <input type=\"text\" [(ngModel)]=\"filtro.identificacao\" name=\"identificacao\"\r\n                                class=\"form-control\" [ngStyle]=\"classUpperCase()\" id=\"identificacao\"\r\n                                placeholder=\"Pesquisar...\" (ngModelChange)=\"filtrando()\">\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody  [ngStyle]=\"classUpperCase()\" >\r\n                    <tr *ngFor=\"let segmento of listagem\" (click)=\"selecionarLinha(segmento)\" [ngClass]=\"legendaGrid(segmento)\"\r\n                        (dblclick)=\"editar(false)\">\r\n                        <td>{{segmento.nome}}</td>\r\n                        <td>{{segmento.identificacao}}</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"!listagem.length\">\r\n                        <td colspan=\"2\">Nenhum registro encontrado</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"box-footer clearfix\">\r\n            <app-pagination [page]=\"page\" (paginationEvent)=changePage($event)></app-pagination>\r\n        </div>\r\n    </form>\r\n</app-form-simples>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/config/segmento/novo/novo-segmento.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/config/segmento/novo/novo-segmento.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-simples [titulo]=\"titulo\" [navegacao]=\"navegacao\" [rota]=\"rota\" [modal]=\"modal\" [ngStyle]=\"classUpperCase()\">\r\n    <form class=\"form form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"salvar()\" autocomplete=\"off\" novalidate>\r\n        <div class=\"form-body\">\r\n            <h4 class=\"form-section mb-1\">\r\n                <div *ngIf=\"!editando && !consultando\"><i class=\"fa fa-plus\"></i> Novo cadastro</div>\r\n                <div *ngIf=\"editando && !consultando\"><i class=\"fa fa-edit\"></i> Editando cadastro</div>\r\n                <div *ngIf=\"consultando\"><i class=\"fa fa-eye\"></i> Consultando cadastro</div>\r\n            </h4>\r\n\r\n            <div class=\"row\">\r\n                <div [ngClass]=\"[modal?'col-md-12':'col-md-6']\">\r\n                    <label for=\"inputNome\" class=\"control-label\">Nome</label>\r\n                    <input type=\"text\" [(ngModel)]=\"Segmento.nome\" name=\"inputNome\" class=\"form-control\" id=\"inputNome\"\r\n                        [ngStyle]=\"classUpperCase()\" #nome=\"ngModel\" placeholder=\"Informe\" minlength=\"3\" maxlength=\"255\"\r\n                        [disabled]=\"consultando\" required>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"nome.errors?.required && (nome.dirty || nome.touched)\">Informe\r\n                        o nome do segmento\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"nome.errors?.minlength && (nome.dirty || nome.touched)\">Informe\r\n                        no mínimo 3 carateres\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div [ngClass]=\"[modal?'col-md-12':'col-md-6']\">\r\n                    <label for=\"inputIdentificacao\" class=\"control-label\">Identificação</label>\r\n                    <input type=\"text\" [(ngModel)]=\"Segmento.identificacao\" name=\"inputIdentificacao\" class=\"form-control\"\r\n                        [ngStyle]=\"classUpperCase()\" id=\"inputIdentificacao\" #identificacao=\"ngModel\"\r\n                        [disabled]=\"consultando\" placeholder=\"Informe\" minlength=\"3\" maxlength=\"255\" required>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"identificacao.errors?.required && (identificacao.dirty || identificacao.touched)\">Informe\r\n                        a Identificação\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"identificacao.errors?.minlength && (identificacao.dirty || identificacao.touched)\">Informe\r\n                        no mínimo 3 carateres\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                {{ message.text }}\r\n            </ngb-alert>\r\n\r\n            <app-botoes-cadastro [editando]=\"editando\" [podeVoltar]=\"podeVoltar\" [consultando]=\"consultando\"\r\n                (cancelarEvent)=\"cancelar()\" (voltarEvent)=\"voltar()\" (excluirEvent)=\"excluir()\">\r\n            </app-botoes-cadastro>\r\n        </div>\r\n    </form>\r\n</app-form-simples>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-simples [titulo]=\"titulo\" [navegacao]=\"navegacao\">\r\n    <form autocomplete=\"off\" class=\"form form-horizontal\">\r\n\r\n        <div>\r\n            <combo-pessoa-cliente (clienteChangeEvent)=\"clienteChange()\" [somentePerfilAdministrador]=\"true\"\r\n                [mostrarSistema]=\"true\">\r\n            </combo-pessoa-cliente>\r\n        </div>\r\n        <div class=\"table-responsive table-wrapper-scroll-x table-wrapper-scroll-y rounded  infinite-scroll\" infiniteScroll\r\n        [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"50\" (scrolled)=\"onScroll()\" [fromRoot]=\"true\"\r\n        [infiniteScrollContainer]=\"'.infinite-scroll'\">\r\n            <table sortable-table (sorted)=\"onSorted($event)\" class=\"table table-hover table-sm\">\r\n                <thead class=\"thead-custom\">\r\n                    <tr>\r\n                        <th width=\"350px\"><a sortable-column=\"descricao\" sort-direction=\"ASC\">Parâmetro</a>\r\n                            <input type=\"text\" ([formControl])=\"filtro\" [(ngModel)]=\"filtro.descricao\"\r\n                                [ngStyle]=\"classUpperCase()\" name=\"descricao\" class=\"form-control\"\r\n                                id=\"descricao\" placeholder=\"Pesquisar...\" (ngModelChange)=\"filtrando()\">\r\n                        </th>\r\n                        <th width=\"250px\"><a sortable-column=\"valorAtributo\">Valor</a>\r\n                            <input type=\"text\" [(ngModel)]=\"filtro.valorAtributo\" name=\"valorAtributo\" class=\"form-control\"\r\n                                [ngStyle]=\"classUpperCase()\" id=\"valorAtributo\" placeholder=\"Pesquisar...\"\r\n                                (ngModelChange)=\"filtrando()\">\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody [ngStyle]=\"classUpperCase()\">\r\n                    <tr *ngFor=\"let sistemaAtributo of listagem\" (click)=\"selecionarLinha(sistemaAtributo)\"\r\n                        [ngClass]=\"legendaGrid(sistemaAtributo)\" (dblclick)=\"editar(false)\">\r\n                        <td>{{sistemaAtributo.tipoAtributo.descricao}}</td>\r\n\r\n                        <td *ngIf=\"sistemaAtributo.valorAtributo == null\">Não configurado</td>\r\n\r\n                        <td *ngIf=\"sistemaAtributo.valorAtributo != null && (\r\n                                sistemaAtributo.tipoAtributo.tipoValor == 'INTEGER' \r\n                                || sistemaAtributo.tipoAtributo.tipoValor == 'TEXT_SIMPLE' )\">\r\n                            {{sistemaAtributo.valorAtributo}}\r\n                        </td>\r\n                        <td *ngIf=\"sistemaAtributo.valorAtributo != null && \r\n                                   sistemaAtributo.tipoAtributo.tipoValor == 'TEXT_HTML'\">\r\n                            Conteúdo em HTML\r\n                        </td>\r\n\r\n                        <td *ngIf=\"sistemaAtributo.valorAtributo != null && \r\n                                   sistemaAtributo.tipoAtributo.tipoValor == 'PDF'\">\r\n                            Conteúdo em PDF\r\n                        </td>\r\n\r\n                        <td *ngIf=\"sistemaAtributo.valorAtributo != null && (\r\n                                   sistemaAtributo.tipoAtributo.tipoValor == 'DIASSEMANA'\r\n                                   || sistemaAtributo.tipoAtributo.tipoValor =='HORARIOS' )\">\r\n                            <span *ngFor=\"let valor of getValores(sistemaAtributo.valorAtributo ) \"\r\n                                style=\"display: inline-flex\">\r\n                                <span style=\"margin-right:5px\">{{valor.item_text}}</span>\r\n                            </span>\r\n                        </td>\r\n                        <td *ngIf=\"sistemaAtributo.valorAtributo == 'true' \r\n                                && sistemaAtributo.tipoAtributo.tipoValor=='BOOLEAN'\">\r\n                            <i class=\"ft-check-circle primary font-medium-3\" ></i></td>\r\n                        <td *ngIf=\"sistemaAtributo.valorAtributo == 'false'\r\n                                && sistemaAtributo.tipoAtributo.tipoValor=='BOOLEAN'\">\r\n                            <i class=\"ft-minus-circle danger font-medium-3\" ></i></td>\r\n\r\n                    </tr>\r\n                    <tr *ngIf=\"!listagem.length\">\r\n                        <td colspan=\"2\">Nenhum registro encontrado</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row m-2\">\r\n            <div class=\"col-md-12 text-right clearfix\">\r\n                <app-botoes-lista [permiteIncluir]=\"true\" [permiteExcluir]=\"true\"\r\n                    (incluirEvent)=\"incluir()\" (editarEvent)=\"editar()\" (excluirEvent)=\"excluir()\"\r\n                    [selecionado]=\"!objetoSelecionado\">\r\n                </app-botoes-lista>\r\n            </div>\r\n        </div>\r\n        <!--<div class=\"box-footer clearfix\">\r\n            <app-pagination [page]=\"page\" (paginationEvent)=changePage($event)></app-pagination>\r\n        </div>-->\r\n    </form>\r\n</app-form-simples>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-simples [titulo]=\"titulo\" [navegacao]=\"navegacao\" [rota]=\"rota\">\r\n    <form class=\"form form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"salvar()\" autocomplete=\"off\" novalidate>\r\n        <div class=\"form-body\">\r\n            <h4 class=\"form-section mb-1 text-center\">\r\n                <div *ngIf=\"!editando && !consultando\"><!--<i class=\"fa fa-plus\"></i>--> Novo cadastro</div>\r\n                <div *ngIf=\"editando && !consultando\"><!--<i class=\"fa fa-edit\"></i>--> Editando parâmetro</div>\r\n                <div *ngIf=\"consultando\"><!--<i class=\"fa fa-eye\"></i>--> Consultando cadastro</div>\r\n            </h4>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <label type=\"text\" style=\"font-weight:=bold\">{{SistemaAtributo.tipoAtributo.descricao}}</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <!-- pattern=\"/^[0-9]{1,10}$/\" -->\r\n                <div class=\"col-md-2\" *ngIf=\"SistemaAtributo.tipoAtributo.tipoValor=='INTEGER'\">\r\n                    <label for=\"inputValorAtributoInteger\" class=\"control-label\">Valor</label>\r\n                    <input type=\"text\" [(ngModel)]=\"SistemaAtributo.valorAtributo\" name=\"inputValorAtributo\"\r\n                        [ngStyle]=\"classUpperCase()\" class=\"form-control\" id=\"inputValorAtributoInteger\"\r\n                        #valorAtributo=\"ngModel\" placeholder=\"Informe o valor\" maxlength=\"10\" required>\r\n\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"valorAtributo.errors?.required && (valorAtributo.dirty || valorAtributo.touched)\">Informe\r\n                        o Valor\r\n                    </small>\r\n                </div>\r\n                <div class=\"col-md-4\" *ngIf=\"SistemaAtributo.tipoAtributo.tipoValor=='TEXT_SIMPLE'\">\r\n                    <label for=\"inputValorAtributo\" class=\"control-label\">Valor</label>\r\n                    <input type=\"text\" [(ngModel)]=\"SistemaAtributo.valorAtributo\" name=\"inputValorAtributo\"\r\n                           [ngStyle]=\"classUpperCase()\" class=\"form-control\" id=\"inputValorAtributo\"\r\n                           #valorAtributo=\"ngModel\" placeholder=\"Informe o valor\" maxlength=\"250\" required>\r\n\r\n                    <small class=\"form-text text-muted danger\"\r\n                           *ngIf=\"valorAtributo.errors?.required && (valorAtributo.dirty || valorAtributo.touched)\">Informe\r\n                        o Valor\r\n                    </small>\r\n                </div>\r\n\r\n                <div class=\"col-md-3\" *ngIf=\"SistemaAtributo.tipoAtributo.tipoValor=='BOOLEAN'\">\r\n                    <ui-switch [(ngModel)]=\"SistemaAtributo.valorAtributo\" name=\"inputValorAtributo\"\r\n                        id=\"inputValorAtributo\" #valorAtributo=\"ngModel\" class=\"switch100\" required checkedLabel=\"Ativo\"\r\n                        uncheckedLabel=\"Inativo\" >\r\n                    </ui-switch>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\" *ngIf=\"SistemaAtributo.tipoAtributo.tipoValor=='TEXT_HTML'\">\r\n                    <angular-editor name=\"inputValorAtributo\" [config]=\"editorConfig\"\r\n                        [(ngModel)]=\"SistemaAtributo.valorAtributo\"></angular-editor>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\" *ngIf=\"SistemaAtributo.tipoAtributo.tipoValor=='DIASSEMANA'\">\r\n                    <ng-multiselect-dropdown *ngIf=\"diasSemana\" [ngStyle]=\"classUpperCase()\" name=\"inputValorAtributo\"\r\n                        id=\"inputValorAtributo\" [placeholder]=\"'Escolha os dias da semana'\" [data]=\"diasSemana\"\r\n                        [(ngModel)]=\"comboValores\" [settings]=\"diasSemanaSettings\">\r\n                    </ng-multiselect-dropdown>\r\n                </div>\r\n                <div class=\"col-md-12\" *ngIf=\"SistemaAtributo.tipoAtributo.tipoValor=='HORARIOS'\">\r\n                    <ng-multiselect-dropdown *ngIf=\"horarios\" [ngStyle]=\"classUpperCase()\" name=\"inputValorAtributo\"\r\n                        id=\"inputValorAtributo\" [placeholder]=\"'Escolha os horários'\" [data]=\"horarios\"\r\n                        [(ngModel)]=\"comboValores\" [settings]=\"horariosSettings\">\r\n                    </ng-multiselect-dropdown>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\" *ngIf=\"SistemaAtributo.tipoAtributo.tipoValor=='PDF'\">\r\n                    <!-- UPLOAD PDF -->\r\n                    <div class=\"col-md-2\">\r\n                        <span id=\"documento\" class=\"btn btn-raised btn-success btn-file form-control mb-0\">\r\n                            <!--<i class=\"ft ft-paperclip\"></i>--><span > Selecionar novo arquivo</span>\r\n                            <input class=\"form-control\" type=\"file\" id=\"idFile\" accept=\".pdf\" \r\n                                (change)=\"uploadArquivo($event)\" title=\" \" />\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-md-12\"  *ngIf=\"SistemaAtributo.valorAtributo != null\">\r\n                        <div style=\"height:500px\">\r\n                            <ng2-pdfjs-viewer [pdfSrc]=\"byteArray\" viewerId=\"inline\" [print]=\"true\" [diagnosticLogs]=false  [fullScreen]=\"true\" [openFile]=\"false\" [find]=\"false\"></ng2-pdfjs-viewer>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                {{ message.text }}\r\n            </ngb-alert>\r\n\r\n            <app-botoes-cadastro [editando]=\"editando\" [podeVoltar]=\"podeVoltar\" [consultando]=\"consultando\"\r\n                (cancelarEvent)=\"cancelar()\" (voltarEvent)=\"voltar()\" (excluirEvent)=\"excluir()\">\r\n            </app-botoes-cadastro>\r\n        </div>\r\n    </form>\r\n</app-form-simples>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/config/tipoDocumento/lista/lista-tipo-documento.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/config/tipoDocumento/lista/lista-tipo-documento.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-simples [titulo]=\"titulo\" [navegacao]=\"navegacao\">\r\n    <form autocomplete=\"off\" class=\"form form-horizontal\">\r\n\r\n        <div>\r\n            <combo-pessoa-cliente (clienteChangeEvent)=\"clienteChange()\" [somentePerfilAdministrador]=\"true\"\r\n                [mostrarSistema]=\"true\">\r\n            </combo-pessoa-cliente>\r\n        </div>\r\n        <div class=\"table-responsive table-wrapper-scroll-x table-wrapper-scroll-y rounded  infinite-scroll\"\r\n            infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"50\" (scrolled)=\"onScroll()\"\r\n            [fromRoot]=\"true\" [infiniteScrollContainer]=\"'.infinite-scroll'\">\r\n            <table sortable-table (sorted)=\"onSorted($event)\" class=\"table table-hover table-sm\">\r\n                <thead class=\"thead-custom\">\r\n                    <tr>\r\n                        <th width=\"350px\"><a sortable-column=\"nome\" sort-direction=\"ASC\">Nome</a>\r\n                            <input type=\"text\" ([formControl])=\"filtro\" [(ngModel)]=\"filtro.nome\"\r\n                                [ngStyle]=\"classUpperCase()\" name=\"nome\" class=\"form-control\" id=\"tipoDocumento\"\r\n                                placeholder=\"Pesquisar...\" (ngModelChange)=\"filtrando()\">\r\n                        </th>\r\n                        <th width=\"50px\"><a sortable-column=\"assina\">Assina</a>\r\n                            <input type=\"text\" [(ngModel)]=\"filtro.assina\" name=\"naoAssina\" class=\"form-control\"\r\n                                [ngStyle]=\"classUpperCase()\" id=\"assina\" placeholder=\"Pesquisar...\"\r\n                                (ngModelChange)=\"filtrando()\">\r\n                        </th>\r\n                        <th width=\"150px\" style=\"vertical-align:top;\">\r\n                            Papéis\r\n                        </th>\r\n                        <th width=\"150px\" style=\"vertical-align:top;\"  *ngIf=\"perfilUsuarioAdmin()\">\r\n                            Tipos de Clientes\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody [ngStyle]=\"classUpperCase()\">\r\n                    <tr *ngFor=\"let tipoDocumento of listagem\" (click)=\"selecionarLinha(tipoDocumento)\"\r\n                        [ngClass]=\"legendaGrid(tipoDocumento)\" (dblclick)=\"editar(false)\">\r\n                        <td>{{tipoDocumento.nome}}</td>\r\n                        <td>\r\n                            <i class=\"ft-check-circle primary font-medium-3\" *ngIf=\"tipoDocumento.assina\"></i>\r\n                            <i class=\"ft-minus-circle danger font-medium-3\" *ngIf=\"!tipoDocumento.assina\"></i>\r\n                        </td>\r\n                        <td>\r\n                            <div *ngFor=\"let papel of tipoDocumento.papeis; let i = index\"\r\n                                style=\"display: inline-table\">\r\n                                <span style=\"display: inline-flex;font-size: x-small;\">\r\n                                    <span style=\"margin-left:5px\">{{papel.papel.nome}}</span>\r\n                                    <span style=\"margin-left:5px\" *ngIf=\"i < tipoDocumento.papeis.length -1 \"> - </span>\r\n                                </span>\r\n                            </div>\r\n                        </td>\r\n                        <td  *ngIf=\"perfilUsuarioAdmin()\">\r\n                            <div *ngFor=\"let tipoCliente of tipoDocumento.tipoDocumentoTipoClientes; let i = index\"\r\n                                style=\"display: inline-table\">\r\n                                <span style=\"display: inline-flex;font-size: x-small;\">\r\n                                    <span style=\"margin-left:5px\">{{tipoCliente.segmento.nome}}</span>\r\n                                    <span style=\"margin-left:5px\"\r\n                                        *ngIf=\"i < tipoDocumento.tipoDocumentoTipoClientes.length -1 \"> - </span>\r\n                                </span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"!listagem.length\">\r\n                        <td colspan=\"2\">Nenhum registro encontrado</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row m-2 crud-actions\">\n            <div class=\"col-md-12 text-right clearfix\">\r\n                <app-botoes-lista [permiteIncluir]=\"true\" [permiteExcluir]=\"true\" (incluirEvent)=\"incluir()\"\r\n                    (editarEvent)=\"editar()\" (excluirEvent)=\"excluir()\" [selecionado]=\"!objetoSelecionado\">\r\n                </app-botoes-lista>\r\n            </div>\r\n        </div>\r\n        <!--<div class=\"box-footer clearfix\">\r\n            <app-pagination [page]=\"page\" (paginationEvent)=changePage($event)></app-pagination>\r\n        </div>-->\r\n\r\n    </form>\r\n</app-form-simples>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/config/tipoDocumento/modal/novoPapel/tipoDocumento-novo-papel-modal.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/config/tipoDocumento/modal/novoPapel/tipoDocumento-novo-papel-modal.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form autocomplete=\"off\" class=\"form form-horizontal\" #form=\"ngForm\" id=\"formGroup\" novalidate>\r\n    <div class=\"form-body\">\r\n        <app-modal-simples [titulo]=\"'Cadastro > Contrato > Contrato Partes'\" [item]=\"instance\" \r\n            [form]=\"form\">\r\n\r\n\r\n            <div>\r\n                <div class=\"row\">\r\n                    <div [ngClass]=\"[modal?'col-md-12':'col-md-6']\">\r\n                        <label for=\"inputNome\" class=\"control-label\">Nome</label>\r\n                        <input type=\"text\" [(ngModel)]=\"Papel.nome\" name=\"inputNome\" class=\"form-control\" id=\"inputNome\"\r\n                            [ngStyle]=\"classUpperCase()\" #nome=\"ngModel\" placeholder=\"Informe\" minlength=\"3\"\r\n                            maxlength=\"255\" required>\r\n                        <small class=\"form-text text-muted danger\"\r\n                            *ngIf=\"nome.errors?.required && (nome.dirty || nome.touched)\">Informe\r\n                            o nome do papel\r\n                        </small>\r\n                        <small class=\"form-text text-muted danger\"\r\n                            *ngIf=\"nome.errors?.minlength && (nome.dirty || nome.touched)\">Informe\r\n                            no mínimo 3 carateres\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" *ngIf=\"perfilUsuarioAdmin()\">\r\n                    <div [ngClass]=\"[modal?'col-md-12':'col-md-6']\">\r\n                        <label for=\"inputIdentificacao\" class=\"control-label\">Identificação</label>\r\n                        <input type=\"text\" [(ngModel)]=\"Papel.identificacao\" name=\"inputIdentificacao\"\r\n                            [ngStyle]=\"classUpperCase()\" class=\"form-control\" id=\"inputIdentificacao\"\r\n                            #identificacao=\"ngModel\" placeholder=\"Informe\" minlength=\"3\" maxlength=\"255\" required>\r\n                        <small class=\"form-text text-muted danger\"\r\n                            *ngIf=\"identificacao.errors?.required && (identificacao.dirty || identificacao.touched)\">Informe\r\n                            a Identificação\r\n                        </small>\r\n                        <small class=\"form-text text-muted danger\"\r\n                            *ngIf=\"identificacao.errors?.minlength && (identificacao.dirty || identificacao.touched)\">Informe\r\n                            no mínimo 3 carateres\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" *ngIf=\"false\">\r\n                    <div class=\"col-md-2\">\r\n                        <label for=\"inputAssina\" class=\"control-label\">Solicita Assinatura</label>\r\n                        <ui-switch [(ngModel)]=\"TipoDocumento.assina\" name=\"inputNaoAssina\" id=\"inputAssina\"\r\n                            [ngStyle]=\"classUpperCase()\" #assina=\"ngModel\" class=\"switch100\" required\r\n                            checkedLabel=\"Assina\" uncheckedLabel=\"Não Assina\" defaultBgColor=\"red\">\r\n                        </ui-switch>\r\n                        <small class=\"form-text text-muted danger\"\r\n                            *ngIf=\"assina.invalid && (assina.dirty || assina.touched)\">Escolha o Não Assina\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                    {{ message.text }}\r\n                </ngb-alert>\r\n\r\n            </div>\r\n        </app-modal-simples>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/config/tipoDocumento/modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/config/tipoDocumento/modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form autocomplete=\"off\" class=\"form form-horizontal\" #form=\"ngForm\" id=\"formGroup\" novalidate>\r\n    <div class=\"form-body\">\r\n        <app-modal-simples [titulo]=\"'Cadastro > Contrato > Contrato Partes'\" [item]=\"papelEdit\" [form]=\"form\"\r\n            (antesSalvarEvent)=\"antesSalvarEvent()\">\r\n            <div>\r\n                <div class=\"col-md-6\">\r\n                    <select [(ngModel)]=\"papelEdit.papel.id\" class=\"form-control\" name=\"tipoPessoa\"\r\n                        [ngStyle]=\"classUpperCase()\" id=\"inputTipoPessoa\" ng-dropdown #tipoPessoa=\"ngModel\" required>\r\n                        <option *ngFor=\"let tipoPessoa of papelList\" [value]=\"tipoPessoa.item_id\">\r\n                            {{tipoPessoa.item_text}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                    <label class=\"control-label\">Token: </label>\r\n                    <ui-switch [(ngModel)]=\"papelEdit.token\" name=\"papelItemToken\" id=\"token\"\r\n                        [ngStyle]=\"classUpperCase()\" #token=\"ngModel\" class=\"switch100\"\r\n                        checkedLabel=\"Sim\" uncheckedLabel=\"Não\">\r\n                    </ui-switch>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <label class=\"control-label\">Certificado: </label>\r\n                    <ui-switch [(ngModel)]=\"papelEdit.certificate\" name=\"papelItemCertificate\" id=\"certificate\"\r\n                        [ngStyle]=\"classUpperCase()\" #certificate=\"ngModel\" class=\"switch100\"\r\n                        checkedLabel=\"Sim\" uncheckedLabel=\"Não\">\r\n                    </ui-switch>\r\n                </div>\r\n\r\n                <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                    {{ message.text }}\r\n                </ngb-alert>\r\n\r\n            </div>\r\n        </app-modal-simples>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/config/tipoDocumento/novo/novo-tipo-documento.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/config/tipoDocumento/novo/novo-tipo-documento.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-simples [titulo]=\"titulo\" [navegacao]=\"navegacao\" [rota]=\"rota\">\r\n\r\n    <mat-tab-group dynamicHeight=\"true\" disableRipple=\"true\" class=\"m-4\">\r\n\r\n        <mat-tab label=\"Cadastro\">\r\n            <form class=\"form form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"salvar()\" autocomplete=\"off\" novalidate>\r\n                <div class=\"form-body\">\r\n                    <h4 class=\"form-section mb-1 text-center\">\r\n                        <div *ngIf=\"!editando && !consultando\">\r\n                            <!--<i class=\"fa fa-plus\"></i>--> Novo cadastro\r\n                        </div>\r\n                        <div *ngIf=\"editando && !consultando\">\r\n                            <!--<i class=\"fa fa-edit\"></i>--> Editando cadastro\r\n                        </div>\r\n                        <div *ngIf=\"consultando\">\r\n                            <!--<i class=\"fa fa-eye\"></i>--> Consultando cadastro\r\n                        </div>\r\n                    </h4>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <label for=\"inputNome\" class=\"control-label\">Nome</label>\r\n                            <input type=\"text\" [(ngModel)]=\"TipoDocumento.nome\" name=\"inputNome\" class=\"form-control\"\r\n                                [ngStyle]=\"classUpperCase()\" id=\"inputNome\" #nome=\"ngModel\" placeholder=\"Informe\"\r\n                                minlength=\"3\" maxlength=\"255\" required>\r\n\r\n                            <small class=\"form-text text-muted danger\"\r\n                                *ngIf=\"nome.errors?.required && (nome.dirty || nome.touched)\">Informe\r\n                                o nome do tipo de documento\r\n                            </small>\r\n                            <small class=\"form-text text-muted danger\"\r\n                                *ngIf=\"nome.errors?.minlength && (nome.dirty || nome.touched)\">Informe\r\n                                no mínimo 3 carateres\r\n                            </small>\r\n\r\n                            <div *ngIf=\"perfilUsuarioAdmin()\">\r\n                                <label for=\"inputIdentificacao\" class=\"control-label\">Identificação</label>\r\n                                <input type=\"text\" [(ngModel)]=\"TipoDocumento.identificacao\" name=\"inputIdentificacao\"\r\n                                    [ngStyle]=\"classUpperCase()\" class=\"form-control\" id=\"inputIdentificacao\"\r\n                                    #identificacao=\"ngModel\" placeholder=\"Informe\" minlength=\"3\" maxlength=\"255\"\r\n                                    required>\r\n                                <small class=\"form-text text-muted danger\"\r\n                                    *ngIf=\"identificacao.errors?.required && (identificacao.dirty || identificacao.touched)\">Informe\r\n                                    a Identificação\r\n                                </small>\r\n                                <small class=\"form-text text-muted danger\"\r\n                                    *ngIf=\"identificacao.errors?.minlength && (identificacao.dirty || identificacao.touched)\">Informe\r\n                                    no mínimo 3 carateres\r\n                                </small>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"clienteSistema()\" class=\"row\">\r\n                                <label for=\"selTipoCliente\" class=\"control-label\">Tipo Cliente</label>\r\n\r\n                                <ng-multiselect-dropdown *ngIf=\"tipoClienteList\" name=\"selTipoCliente\"\r\n                                    id=\"selTipoCliente\" [disabled]=\"consultando\" [ngStyle]=\"classUpperCase()\"\r\n                                    [placeholder]=\"'Para os clientes do tipo  ...'\" [data]=\"tipoClienteList\"\r\n                                    [(ngModel)]=\"tipoClienteSelecionandos\" [settings]=\"dropdownSettings\">\r\n                                </ng-multiselect-dropdown>\r\n                            </div>\r\n\r\n\r\n\r\n                            <div style=\"display:flex;\">\r\n                                <label for=\"selPapel\" class=\"control-label\">Papeis que devem assinar </label>\r\n                                <a class=\"nav-link position-relative\" ngbTooltip=\"Incluir novo papel\"\r\n                                    *ngIf=\"!consultando\" (click)=\"cadastrarNovoPapel()\">\r\n                                    <i class=\"ft-plus-circle font-medium-3\" style=\"color: #3f51b5\"></i>\r\n                                </a>\r\n                            </div>\r\n\r\n                            <div>\r\n                                <div>\r\n                                    <br />\r\n                                    <app-complete-tab-form [dados]=\"tipoDocumentoPapeisModal\" [cols]=\"titulosPapeis\"\r\n                                        [content]=\"tipoDocumentoPapelForm\"  (change)=\"adicionouPapel()\"\r\n                                        [dadosComplementares]=\"dadosComplementaresPapel\" [showButtons]=\"!clienteSistema()\"\r\n                                        [permiteEditar]=\"true\" [permiteIncluir]=\"true\" [sizeExibir]=\"'lg'\"\r\n                                        [permiteExcluir]=\"true\" [novoRegistro]=\"'Novo Papel'\"\r\n                                        [mensagemExclusao]=\"'Deseja excluir o papel ? '\"\r\n                                        [itemTemplate]=\"detalheArquivo\">\r\n                                        <ng-template #detalheArquivo let-item>\r\n                                            <td>{{item.papel.nome}}</td>\r\n                                            <td>\r\n                                                <i *ngIf=\"item.token\" class=\"ft-check-circle primary font-medium-3\"></i>\r\n                                                <i *ngIf=\"!item.token\" class=\"ft-minus-circle danger font-medium-3\"></i>\r\n                                            </td>\r\n                                            <td>\r\n                                                <i *ngIf=\"item.certificate\" class=\"ft-check-circle primary font-medium-3\"></i>\r\n                                                <i *ngIf=\"!item.certificate\" class=\"ft-minus-circle danger font-medium-3\"></i>\r\n                                            </td>\r\n                                        </ng-template>\r\n                                    </app-complete-tab-form>\r\n\r\n                                    <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                                        {{ message.text }}\r\n                                    </ngb-alert>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"col-md-6\">\r\n                                <label for=\"inputAssina\" class=\"control-label\">Documento exige assinatura</label>\r\n                                <ui-switch [(ngModel)]=\"TipoDocumento.assina\" name=\"inputNaoAssina\" id=\"inputAssina\"\r\n                                    [ngStyle]=\"classUpperCase()\" #assina=\"ngModel\" class=\"switch100\" required\r\n                                    checkedLabel=\"Sim\" uncheckedLabel=\"Não\" [disabled]=\"!editando && !inserindo\">\r\n                                </ui-switch>\r\n                                <small class=\"form-text text-muted danger\"\r\n                                    *ngIf=\"assina.invalid && (assina.dirty || assina.touched)\">Escolha o Não Assina\r\n                                </small>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <label for=\"inputValidacao\" class=\"control-label\">Permite validação online do\r\n                                    documento</label>\r\n                                <ui-switch [(ngModel)]=\"TipoDocumento.validacaoOnLine\" name=\"inputValidacao\"\r\n                                    id=\"inputValidacao\" [ngStyle]=\"classUpperCase()\" #qrCode=\"ngModel\" class=\"switch100\"\r\n                                    required checkedLabel=\"Sim\" uncheckedLabel=\"Não\"\r\n                                    [disabled]=\"!editando && !inserindo\">\r\n                                </ui-switch>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <label for=\"inputQRCode\" class=\"control-label\">Exibir qrcode de validação no\r\n                                    documento</label>\r\n                                <ui-switch [(ngModel)]=\"TipoDocumento.qrcode\" name=\"inputQRCode\" id=\"inputQRCode\"\r\n                                    [ngStyle]=\"classUpperCase()\" #qrCode=\"ngModel\" class=\"switch100\" required\r\n                                    checkedLabel=\"Sim\" uncheckedLabel=\"Não\" [disabled]=\"!editando && !inserindo\">\r\n                                </ui-switch>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                        {{ message.text }}\r\n                    </ngb-alert>\r\n\r\n\r\n                    <label *ngIf=\"consultando\" for=\"inputAssina\" class=\"control-label\">Este é um tipo de documento\r\n                        padrão do\r\n                        sistema e não pode ser editado.</label>\r\n                    <div *ngIf=\"!clienteSistema()\">\r\n                        <div>\r\n                            <br />\r\n                            <app-cadastro-parte-form [dados]=\"contratoParteModal\"\r\n                                [contratoPapelList]=\"papelListCadastroParteDocumento()\"\r\n                                [showButtons]=\"!clienteSistema()\" (change)=\"adicionouContratoParte()\"\r\n                                [tituloModal]=\"'Tipo Documento > Parte Padrão'\" [statusContrato]=\"'ATIVO'\">\r\n                            </app-cadastro-parte-form>\r\n\r\n                            <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                                {{ message.text }}\r\n                            </ngb-alert>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"mostraObservador() && !clienteSistema()\">\r\n                        <div>\r\n                            <br />\r\n                            <app-cadastro-parte-form [dados]=\"contratoObservadoresModal\" [contratoPapelList]=\"[]\"\r\n                                [showButtons]=\"!clienteSistema()\" (change)=\"adicionouObservador()\"\r\n                                [statusContrato]=\"'ATIVO'\" [novoRegistro]=\"'Novo Observador'\"\r\n                                [tipoCadastro]=\"'OBSERVADOR'\"\r\n                                [mensagemExclusao]=\"'Deseja retirar esta parte para assinatura ? '\">\r\n                            </app-cadastro-parte-form>\r\n\r\n                            <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                                {{ message.text }}\r\n                            </ngb-alert>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <app-botoes-cadastro [editando]=\"editando\" [podeVoltar]=\"podeVoltar\" [consultando]=\"false\"\r\n                        (cancelarEvent)=\"cancelar()\" (voltarEvent)=\"voltar()\" (excluirEvent)=\"excluir()\">\r\n                    </app-botoes-cadastro>\r\n                </div>\r\n            </form>\r\n        </mat-tab>\r\n\r\n        <mat-tab label=\"Posições Assinatura\">\r\n            <div class=\"row\" style=\"margin-bottom: 8px;\">\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3 d-flex align-items-center alinha\">\r\n                            <label class=\"btn btn-raised pdf-label btn-indigo\">\r\n                                <input type=\"file\" id=\"pdf\" name=\"pdf\" accept=\".pdf\" class=\"input-file\"\r\n                                    (change)=\"onFileUploaded($event)\">\r\n                                <i class=\"fa fa-file-pdf-o mr-1\"></i> Abrir PDF</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-auto\">\r\n                    <div class=\"pdfView\" *ngIf=\"imgBase64\">\r\n                        <image-cropper class=\"noselect\" [cropper]=\"posicaoAtual.crooper\" [imageBase64]=\"imgBase64\"\r\n                            [cropperMinWidth]=\"0.1\" [cropperMinHeight]=\"0.1\" [initialStepSize]=\"1\"\r\n                            (imageCropped)=\"imageCropped($event)\" (cropperReady)=\"setInitialPosition()\"\r\n                            [maintainAspectRatio]=\"false\" format=\"jpg\">\r\n                        </image-cropper>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col\">\r\n                    <form #formPosicao=\"ngForm\" class=\"form form-horizontal\" autocomplete=\"off\"\r\n                        (ngSubmit)=\"adicionaPosicao()\" novalidate>\r\n                        <div class=\"form-body\">\r\n                            <div class=\"row m-input\" *ngIf=\"imgBase64\">\r\n                                <div class=\"col-md-10\" style=\"padding: 0;\">\r\n                                    <div>\r\n                                        <span class=\"badge badge-secondary\">\r\n                                            Selecione a posição da assinatura.\r\n                                        </span>\r\n                                    </div>\r\n                                    <label for=\"inputPapel\" class=\"control-label\">Papel</label>\r\n                                    <select [(ngModel)]=\"papelPosicaoId\" class=\"form-control\" name=\"papel\"\r\n                                        [ngStyle]=\"classUpperCase()\" [ngStyle]=\"classUpperCase()\" id=\"inputPapel\"\r\n                                        ng-dropdown #papel=\"ngModel\">\r\n                                        <option *ngFor=\"let papeis of this.entidade.papeis\" [value]=\"papeis.id\">\r\n                                            {{papeis.papel.nome}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row m-input\" *ngIf=\"imgBase64\">\r\n                                <div class=\"col-md-3\" style=\"padding: 0;\">\r\n                                    <label class=\"control-label\" for=\"inputX\">Posição X</label>\r\n                                    <input #x=\"ngModel\" [(ngModel)]=\"posicao.x\" class=\"form-control\" id=\"inputX\"\r\n                                        name=\"x\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-md-3\" style=\"padding: 0;\">\r\n                                    <label class=\"control-label\" for=\"inputY\">Posição Y</label>\r\n                                    <input #y=\"ngModel\" [(ngModel)]=\"posicao.y\" class=\"form-control\" id=\"inputY\"\r\n                                        name=\"y\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-md-3\" style=\"padding: 0;\">\r\n                                    <label class=\"control-label\" for=\"width\">Width</label>\r\n                                    <input #width=\"ngModel\" [(ngModel)]=\"posicao.width\" class=\"form-control\" id=\"width\"\r\n                                        name=\"width\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-md-3\" style=\"padding: 0;\">\r\n                                    <label class=\"control-label\" for=\"inputheight\">Height</label>\r\n                                    <input #height=\"ngModel\" [(ngModel)]=\"posicao.height\" class=\"form-control\"\r\n                                        id=\"inputheight\" name=\"height\" type=\"number\">\r\n                                </div>\r\n                            </div>\r\n                            <h4 class=\"form-section mb-0\" *ngIf=\"imgBase64\">\r\n                                <div class=\"btn-group btn-group-justified btn-group-raised\">\r\n                                    <button class=\"btn btn-raised btn-indigo mr-2\" type=\"button\"\r\n                                        (click)=\"adicionaPosicao()\">\r\n                                        <i class=\"fa fa-plus\"></i> Adicionar\r\n                                    </button>\r\n                                </div>\r\n                                <div>\r\n                                    <button [disabled]=\"!isPreviousPage\" class=\"btn btn-raised btn-indigo mr-2\"\r\n                                        type=\"button\" (click)=\"previousImage()\">\r\n                                        <i class=\"fa fa-solid fa-angle-left\"></i> Pagina Anterior\r\n                                    </button>\r\n                                    <button [disabled]=\"!isNextPage\" class=\"btn btn-raised btn-indigo mr-2\"\r\n                                        type=\"button\" (click)=\"nextImage()\">\r\n                                        <i class=\"fa fa-solid fa-angle-right\"></i> Prox. Pagina\r\n                                    </button>\r\n                                    <button [disabled]=\"!isLastPageEnabled\" class=\"btn btn-raised btn-indigo mr-2\"\r\n                                        type=\"button\" (click)=\"lastPage()\">\r\n                                        <i class=\"fa fa-solid fa-arrow-right\"></i> Última Pagina\r\n                                    </button>\r\n                                    <button [disabled]=\"!isAllPageEnabled\" class=\"btn btn-raised btn-indigo mr-2\"\r\n                                        type=\"button\" (click)=\"allPage()\">\r\n                                        <i class=\"fa fa-solid fa-arrow-right-to-bracket\"></i> Todas Paginas\r\n                                    </button>\r\n                                </div>\r\n                            </h4>\r\n                            <div class=\"table-responsive table-wrapper-scroll-x mb-0\">\r\n                                <table sortable-table class=\"table mb-0\" *ngIf=\"true\">\r\n                                    <thead class=\"thead-light\">\r\n                                        <tr>\r\n                                            <th class=\"p-1\" *ngFor=\"let c of colsPosicao; let i = index\"\r\n                                                [ngClass]=\"{'sw-fixed-width': i == 0}\">\r\n                                                {{ c }}\r\n                                            </th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody *ngIf=\"!entidade\">\r\n                                        <tr *ngFor=\"let item of entidade.posicoesAssinatura; let i = index\"\r\n                                            (click)=\"selecionaAssinatura(item)\">\r\n                                            <td style=\"padding: 0\">\r\n                                                <a class=\"btn btn-danger btn-flat mb-0 p-1\" placement=\"top\"\r\n                                                    ngbTooltip=\"Excluir\" (click)=\"excluirPosicao(item)\">\r\n                                                    <i class=\"fa fa-times-circle font-medium-4\"></i>\r\n                                                </a>\r\n                                            </td>\r\n                                            <td>{{ item.papel.papel.nome }}</td>\r\n                                            <td>{{ item.x }}</td>\r\n                                            <td>{{ item.y }}</td>\r\n                                            <td>{{ item.width }}</td>\r\n                                            <td>{{ item.height }}</td>\r\n                                            <td>{{ (item.pagina==-1)?'Última':(item.pagina==0)?'Todas':item.pagina }}\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                    <tr *ngIf=\"!entidade || !entidade.posicoesAssinatura || entidade.posicoesAssinatura.length == 0\">\r\n                                        <td [colSpan]=\"colspan\">Nenhuma posição registrada</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n\r\n        </mat-tab>\r\n\r\n    </mat-tab-group>\r\n\r\n</app-form-simples>"

/***/ }),

/***/ "./src/app/components/config/alertas/lista/lista-alertas.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/config/alertas/lista/lista-alertas.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListaAlertasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaAlertasComponent", function() { return ListaAlertasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaAlertasComponent = /** @class */ (function (_super) {
    __extends(ListaAlertasComponent, _super);
    function ListaAlertasComponent() {
        var _this = _super.call(this) || this;
        _this.titulo = "Lista Configurações de Alerta";
        _this.navegacao = " > Config > Alertas > Listagem";
        _this.rota = "/config/alertas";
        _this.Categoria = "PARAMETROS_ALERTA";
        _this.page = {
            number: 0,
            size: 30,
            order: ''
        };
        return _this;
    }
    ListaAlertasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parametros-cliente-documento',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/lista/lista-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListaAlertasComponent);
    return ListaAlertasComponent;
}(_sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__["ListaSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/alertas/novo/novo-alerta.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/config/alertas/novo/novo-alerta.component.ts ***!
  \*************************************************************************/
/*! exports provided: NovoAlertaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoAlertaComponent", function() { return NovoAlertaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NovoAlertaComponent = /** @class */ (function (_super) {
    __extends(NovoAlertaComponent, _super);
    function NovoAlertaComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.titulo = "Parâmetro de Alerta";
        _this.navegacao = " > Config > Alertas > Editar";
        _this.rota = "/config/alertas";
        return _this;
    }
    NovoAlertaComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], NovoAlertaComponent.prototype, "form", void 0);
    NovoAlertaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-parametros-cliente',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/novo/novo-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NovoAlertaComponent);
    return NovoAlertaComponent;
}(_sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__["NovoSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/config-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/config/config-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ConfigRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigRoutingModule", function() { return ConfigRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_changes_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/changes.guard */ "./src/app/components/security/changes.guard.ts");
/* harmony import */ var _security_role_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../security/role.guard */ "./src/app/components/security/role.guard.ts");
/* harmony import */ var _parametrosCliente_novo_novo_parametros_cliente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parametrosCliente/novo/novo-parametros-cliente.component */ "./src/app/components/config/parametrosCliente/novo/novo-parametros-cliente.component.ts");
/* harmony import */ var _parametrosCliente_lista_lista_parametros_cliente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parametrosCliente/lista/lista-parametros-cliente.component */ "./src/app/components/config/parametrosCliente/lista/lista-parametros-cliente.component.ts");
/* harmony import */ var _tipoDocumento_novo_novo_tipo_documento_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tipoDocumento/novo/novo-tipo-documento.component */ "./src/app/components/config/tipoDocumento/novo/novo-tipo-documento.component.ts");
/* harmony import */ var _tipoDocumento_lista_lista_tipo_documento_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tipoDocumento/lista/lista-tipo-documento.component */ "./src/app/components/config/tipoDocumento/lista/lista-tipo-documento.component.ts");
/* harmony import */ var _papel_novo_novo_papel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./papel/novo/novo-papel.component */ "./src/app/components/config/papel/novo/novo-papel.component.ts");
/* harmony import */ var _papel_lista_lista_papel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./papel/lista/lista-papel.component */ "./src/app/components/config/papel/lista/lista-papel.component.ts");
/* harmony import */ var _emailTemplates_novo_novo_email_templates_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./emailTemplates/novo/novo-email-templates.component */ "./src/app/components/config/emailTemplates/novo/novo-email-templates.component.ts");
/* harmony import */ var _emailTemplates_lista_lista_email_templates_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emailTemplates/lista/lista-email-templates.component */ "./src/app/components/config/emailTemplates/lista/lista-email-templates.component.ts");
/* harmony import */ var _alertas_novo_novo_alerta_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./alertas/novo/novo-alerta.component */ "./src/app/components/config/alertas/novo/novo-alerta.component.ts");
/* harmony import */ var _alertas_lista_lista_alertas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./alertas/lista/lista-alertas.component */ "./src/app/components/config/alertas/lista/lista-alertas.component.ts");
/* harmony import */ var _parametrosSistema_novo_novo_parametros_sistema_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parametrosSistema/novo/novo-parametros-sistema.component */ "./src/app/components/config/parametrosSistema/novo/novo-parametros-sistema.component.ts");
/* harmony import */ var _parametrosSistema_lista_lista_parametros_sistema_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parametrosSistema/lista/lista-parametros-sistema.component */ "./src/app/components/config/parametrosSistema/lista/lista-parametros-sistema.component.ts");
/* harmony import */ var _termo_novo_novo_termo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./termo/novo/novo-termo.component */ "./src/app/components/config/termo/novo/novo-termo.component.ts");
/* harmony import */ var _termo_lista_lista_termos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./termo/lista/lista-termos.component */ "./src/app/components/config/termo/lista/lista-termos.component.ts");
/* harmony import */ var _segmento_novo_novo_segmento_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./segmento/novo/novo-segmento.component */ "./src/app/components/config/segmento/novo/novo-segmento.component.ts");
/* harmony import */ var _segmento_lista_lista_segmento_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./segmento/lista/lista-segmento.component */ "./src/app/components/config/segmento/lista/lista-segmento.component.ts");
/* harmony import */ var _email_novo_novo_parametros_email_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./email/novo/novo-parametros-email.component */ "./src/app/components/config/email/novo/novo-parametros-email.component.ts");
/* harmony import */ var _email_lista_lista_parametros_email_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./email/lista/lista-parametros-email.component */ "./src/app/components/config/email/lista/lista-parametros-email.component.ts");
/* harmony import */ var _whatsapp_novo_novo_parametros_whatsapp_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./whatsapp/novo/novo-parametros-whatsapp.component */ "./src/app/components/config/whatsapp/novo/novo-parametros-whatsapp.component.ts");
/* harmony import */ var _whatsapp_lista_lista_parametros_whatsapp_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./whatsapp/lista/lista-parametros-whatsapp.component */ "./src/app/components/config/whatsapp/lista/lista-parametros-whatsapp.component.ts");
/* harmony import */ var _sms_novo_novo_parametros_sms_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sms/novo/novo-parametros-sms.component */ "./src/app/components/config/sms/novo/novo-parametros-sms.component.ts");
/* harmony import */ var _sms_lista_lista_parametros_sms_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sms/lista/lista-parametros-sms.component */ "./src/app/components/config/sms/lista/lista-parametros-sms.component.ts");
/* harmony import */ var _whatsapplTemplates_novo_novo_whatsapp_templates_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./whatsapplTemplates/novo/novo-whatsapp-templates.component */ "./src/app/components/config/whatsapplTemplates/novo/novo-whatsapp-templates.component.ts");
/* harmony import */ var _whatsapplTemplates_lista_lista_whatsapp_templates_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./whatsapplTemplates/lista/lista-whatsapp-templates.component */ "./src/app/components/config/whatsapplTemplates/lista/lista-whatsapp-templates.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    {
        path: 'config',
        children: [
            {
                path: 'tipoDocumento',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: '60000101' },
                children: [
                    { path: 'novo', component: _tipoDocumento_novo_novo_tipo_documento_component__WEBPACK_IMPORTED_MODULE_6__["NovoTipoDocumentoComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _tipoDocumento_novo_novo_tipo_documento_component__WEBPACK_IMPORTED_MODULE_6__["NovoTipoDocumentoComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _tipoDocumento_lista_lista_tipo_documento_component__WEBPACK_IMPORTED_MODULE_7__["ListaTipoDocumentoComponent"] },
                    { path: '', component: _tipoDocumento_lista_lista_tipo_documento_component__WEBPACK_IMPORTED_MODULE_7__["ListaTipoDocumentoComponent"] },
                ]
            },
            {
                path: 'papel',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: '60000501' },
                children: [
                    { path: 'novo', component: _papel_novo_novo_papel_component__WEBPACK_IMPORTED_MODULE_8__["NovoPapelComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _papel_novo_novo_papel_component__WEBPACK_IMPORTED_MODULE_8__["NovoPapelComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _papel_lista_lista_papel_component__WEBPACK_IMPORTED_MODULE_9__["ListaPapelComponent"] },
                    { path: '', component: _papel_lista_lista_papel_component__WEBPACK_IMPORTED_MODULE_9__["ListaPapelComponent"] },
                ]
            },
            {
                path: 'parametrosCliente',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: '60000202' },
                children: [
                    { path: 'novo', component: _parametrosCliente_novo_novo_parametros_cliente_component__WEBPACK_IMPORTED_MODULE_4__["NovoParametroClienteComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _parametrosCliente_novo_novo_parametros_cliente_component__WEBPACK_IMPORTED_MODULE_4__["NovoParametroClienteComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _parametrosCliente_lista_lista_parametros_cliente_component__WEBPACK_IMPORTED_MODULE_5__["ListaParametrosClienteComponent"] },
                    { path: '', component: _parametrosCliente_lista_lista_parametros_cliente_component__WEBPACK_IMPORTED_MODULE_5__["ListaParametrosClienteComponent"] },
                ]
            },
            {
                path: 'parametrosEmail',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: '60000202' },
                children: [
                    { path: 'novo', component: _email_novo_novo_parametros_email_component__WEBPACK_IMPORTED_MODULE_20__["NovoParametroEmailComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _email_novo_novo_parametros_email_component__WEBPACK_IMPORTED_MODULE_20__["NovoParametroEmailComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _email_lista_lista_parametros_email_component__WEBPACK_IMPORTED_MODULE_21__["ListaParametrosEmailComponent"] },
                    { path: '', component: _email_lista_lista_parametros_email_component__WEBPACK_IMPORTED_MODULE_21__["ListaParametrosEmailComponent"] },
                ]
            },
            {
                path: 'parametrosWhatsApp',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: '60000202' },
                children: [
                    { path: 'novo', component: _whatsapp_novo_novo_parametros_whatsapp_component__WEBPACK_IMPORTED_MODULE_22__["NovoParametroWhatsAppComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _whatsapp_novo_novo_parametros_whatsapp_component__WEBPACK_IMPORTED_MODULE_22__["NovoParametroWhatsAppComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _whatsapp_lista_lista_parametros_whatsapp_component__WEBPACK_IMPORTED_MODULE_23__["ListaParametrosWhatsAppComponent"] },
                    { path: '', component: _whatsapp_lista_lista_parametros_whatsapp_component__WEBPACK_IMPORTED_MODULE_23__["ListaParametrosWhatsAppComponent"] },
                ]
            },
            {
                path: 'parametrosSms',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: '60000202' },
                children: [
                    { path: 'novo', component: _sms_novo_novo_parametros_sms_component__WEBPACK_IMPORTED_MODULE_24__["NovoParametroSmsComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _sms_novo_novo_parametros_sms_component__WEBPACK_IMPORTED_MODULE_24__["NovoParametroSmsComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _sms_lista_lista_parametros_sms_component__WEBPACK_IMPORTED_MODULE_25__["ListaParametrosSmsComponent"] },
                    { path: '', component: _sms_lista_lista_parametros_sms_component__WEBPACK_IMPORTED_MODULE_25__["ListaParametrosSmsComponent"] },
                ]
            },
            {
                path: 'emailsTemplate',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: '60000601' },
                children: [
                    { path: 'novo', component: _emailTemplates_novo_novo_email_templates_component__WEBPACK_IMPORTED_MODULE_10__["NovoEmailTemplatesComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _emailTemplates_novo_novo_email_templates_component__WEBPACK_IMPORTED_MODULE_10__["NovoEmailTemplatesComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _emailTemplates_lista_lista_email_templates_component__WEBPACK_IMPORTED_MODULE_11__["ListaEmailTemplatesComponent"] },
                    { path: '', component: _emailTemplates_lista_lista_email_templates_component__WEBPACK_IMPORTED_MODULE_11__["ListaEmailTemplatesComponent"] },
                ]
            },
            {
                path: 'whatsappTemplate',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: '60000601' },
                children: [
                    { path: 'novo', component: _whatsapplTemplates_novo_novo_whatsapp_templates_component__WEBPACK_IMPORTED_MODULE_26__["NovoWhatsAppTemplatesComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _whatsapplTemplates_novo_novo_whatsapp_templates_component__WEBPACK_IMPORTED_MODULE_26__["NovoWhatsAppTemplatesComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _whatsapplTemplates_lista_lista_whatsapp_templates_component__WEBPACK_IMPORTED_MODULE_27__["ListaWhatsAppTemplatesComponent"] },
                    { path: '', component: _whatsapplTemplates_lista_lista_whatsapp_templates_component__WEBPACK_IMPORTED_MODULE_27__["ListaWhatsAppTemplatesComponent"] },
                ]
            },
            {
                path: 'alertas',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: '60000701' },
                children: [
                    { path: 'novo', component: _alertas_novo_novo_alerta_component__WEBPACK_IMPORTED_MODULE_12__["NovoAlertaComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _alertas_novo_novo_alerta_component__WEBPACK_IMPORTED_MODULE_12__["NovoAlertaComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _alertas_lista_lista_alertas_component__WEBPACK_IMPORTED_MODULE_13__["ListaAlertasComponent"] },
                    { path: '', component: _alertas_lista_lista_alertas_component__WEBPACK_IMPORTED_MODULE_13__["ListaAlertasComponent"] },
                ]
            },
            {
                path: 'parametrosSistema',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: '60000901' },
                children: [
                    { path: 'novo', component: _parametrosSistema_novo_novo_parametros_sistema_component__WEBPACK_IMPORTED_MODULE_14__["NovoParametroSistemaComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _parametrosSistema_novo_novo_parametros_sistema_component__WEBPACK_IMPORTED_MODULE_14__["NovoParametroSistemaComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _parametrosSistema_lista_lista_parametros_sistema_component__WEBPACK_IMPORTED_MODULE_15__["ListaParametrosSistemaComponent"] },
                    { path: '', component: _parametrosSistema_lista_lista_parametros_sistema_component__WEBPACK_IMPORTED_MODULE_15__["ListaParametrosSistemaComponent"] },
                ]
            },
            {
                path: 'termos',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: '60001001' },
                children: [
                    { path: 'novo', component: _termo_novo_novo_termo_component__WEBPACK_IMPORTED_MODULE_16__["NovoTermoComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _termo_novo_novo_termo_component__WEBPACK_IMPORTED_MODULE_16__["NovoTermoComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _termo_lista_lista_termos_component__WEBPACK_IMPORTED_MODULE_17__["ListaTermosComponent"] },
                    { path: '', component: _termo_lista_lista_termos_component__WEBPACK_IMPORTED_MODULE_17__["ListaTermosComponent"] },
                ]
            },
            {
                path: 'segmentos',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: '60001101' },
                children: [
                    { path: 'novo', component: _segmento_novo_novo_segmento_component__WEBPACK_IMPORTED_MODULE_18__["NovoSegmentoComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _segmento_novo_novo_segmento_component__WEBPACK_IMPORTED_MODULE_18__["NovoSegmentoComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _segmento_lista_lista_segmento_component__WEBPACK_IMPORTED_MODULE_19__["ListaSegmentoComponent"] },
                    { path: '', component: _segmento_lista_lista_segmento_component__WEBPACK_IMPORTED_MODULE_19__["ListaSegmentoComponent"] },
                ]
            }
        ]
    }
];
var ConfigRoutingModule = /** @class */ (function () {
    function ConfigRoutingModule() {
    }
    ConfigRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ConfigRoutingModule);
    return ConfigRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/config/config.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/config/config.module.ts ***!
  \****************************************************/
/*! exports provided: ConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _util_pipe_enumPipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/pipe/enumPipe */ "./src/app/components/util/pipe/enumPipe.ts");
/* harmony import */ var _util_pipe_phonePipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/pipe/phonePipe */ "./src/app/components/util/pipe/phonePipe.ts");
/* harmony import */ var _util_pipe_valuesPipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/pipe/valuesPipe */ "./src/app/components/util/pipe/valuesPipe.ts");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/util.module */ "./src/app/components/util/util.module.ts");
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config-routing.module */ "./src/app/components/config/config-routing.module.ts");
/* harmony import */ var _sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sistemaAtributo/novo/novo-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.ts");
/* harmony import */ var _sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sistemaAtributo/lista/lista-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.ts");
/* harmony import */ var _tipoDocumento_lista_lista_tipo_documento_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tipoDocumento/lista/lista-tipo-documento.component */ "./src/app/components/config/tipoDocumento/lista/lista-tipo-documento.component.ts");
/* harmony import */ var _tipoDocumento_novo_novo_tipo_documento_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tipoDocumento/novo/novo-tipo-documento.component */ "./src/app/components/config/tipoDocumento/novo/novo-tipo-documento.component.ts");
/* harmony import */ var _tipoDocumento_modal_novoPapel_tipoDocumento_novo_papel_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tipoDocumento/modal/novoPapel/tipoDocumento-novo-papel-modal.component */ "./src/app/components/config/tipoDocumento/modal/novoPapel/tipoDocumento-novo-papel-modal.component.ts");
/* harmony import */ var _tipoDocumento_modal_tipoDocumentoPapelModal_tipoDocumento_papel_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tipoDocumento/modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component */ "./src/app/components/config/tipoDocumento/modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component.ts");
/* harmony import */ var _parametrosCliente_lista_lista_parametros_cliente_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parametrosCliente/lista/lista-parametros-cliente.component */ "./src/app/components/config/parametrosCliente/lista/lista-parametros-cliente.component.ts");
/* harmony import */ var _parametrosCliente_novo_novo_parametros_cliente_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parametrosCliente/novo/novo-parametros-cliente.component */ "./src/app/components/config/parametrosCliente/novo/novo-parametros-cliente.component.ts");
/* harmony import */ var _papel_novo_novo_papel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./papel/novo/novo-papel.component */ "./src/app/components/config/papel/novo/novo-papel.component.ts");
/* harmony import */ var _papel_lista_lista_papel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./papel/lista/lista-papel.component */ "./src/app/components/config/papel/lista/lista-papel.component.ts");
/* harmony import */ var _emailTemplates_lista_lista_email_templates_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./emailTemplates/lista/lista-email-templates.component */ "./src/app/components/config/emailTemplates/lista/lista-email-templates.component.ts");
/* harmony import */ var _emailTemplates_novo_novo_email_templates_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./emailTemplates/novo/novo-email-templates.component */ "./src/app/components/config/emailTemplates/novo/novo-email-templates.component.ts");
/* harmony import */ var _alertas_novo_novo_alerta_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./alertas/novo/novo-alerta.component */ "./src/app/components/config/alertas/novo/novo-alerta.component.ts");
/* harmony import */ var _alertas_lista_lista_alertas_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./alertas/lista/lista-alertas.component */ "./src/app/components/config/alertas/lista/lista-alertas.component.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _parametrosSistema_novo_novo_parametros_sistema_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./parametrosSistema/novo/novo-parametros-sistema.component */ "./src/app/components/config/parametrosSistema/novo/novo-parametros-sistema.component.ts");
/* harmony import */ var _parametrosSistema_lista_lista_parametros_sistema_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./parametrosSistema/lista/lista-parametros-sistema.component */ "./src/app/components/config/parametrosSistema/lista/lista-parametros-sistema.component.ts");
/* harmony import */ var _termo_novo_novo_termo_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./termo/novo/novo-termo.component */ "./src/app/components/config/termo/novo/novo-termo.component.ts");
/* harmony import */ var _termo_lista_lista_termos_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./termo/lista/lista-termos.component */ "./src/app/components/config/termo/lista/lista-termos.component.ts");
/* harmony import */ var _segmento_novo_novo_segmento_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./segmento/novo/novo-segmento.component */ "./src/app/components/config/segmento/novo/novo-segmento.component.ts");
/* harmony import */ var _segmento_lista_lista_segmento_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./segmento/lista/lista-segmento.component */ "./src/app/components/config/segmento/lista/lista-segmento.component.ts");
/* harmony import */ var _email_novo_novo_parametros_email_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./email/novo/novo-parametros-email.component */ "./src/app/components/config/email/novo/novo-parametros-email.component.ts");
/* harmony import */ var _email_lista_lista_parametros_email_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./email/lista/lista-parametros-email.component */ "./src/app/components/config/email/lista/lista-parametros-email.component.ts");
/* harmony import */ var _whatsapp_novo_novo_parametros_whatsapp_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./whatsapp/novo/novo-parametros-whatsapp.component */ "./src/app/components/config/whatsapp/novo/novo-parametros-whatsapp.component.ts");
/* harmony import */ var _whatsapp_lista_lista_parametros_whatsapp_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./whatsapp/lista/lista-parametros-whatsapp.component */ "./src/app/components/config/whatsapp/lista/lista-parametros-whatsapp.component.ts");
/* harmony import */ var _sms_novo_novo_parametros_sms_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./sms/novo/novo-parametros-sms.component */ "./src/app/components/config/sms/novo/novo-parametros-sms.component.ts");
/* harmony import */ var _sms_lista_lista_parametros_sms_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./sms/lista/lista-parametros-sms.component */ "./src/app/components/config/sms/lista/lista-parametros-sms.component.ts");
/* harmony import */ var _whatsapplTemplates_novo_novo_whatsapp_templates_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./whatsapplTemplates/novo/novo-whatsapp-templates.component */ "./src/app/components/config/whatsapplTemplates/novo/novo-whatsapp-templates.component.ts");
/* harmony import */ var _whatsapplTemplates_lista_lista_whatsapp_templates_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./whatsapplTemplates/lista/lista-whatsapp-templates.component */ "./src/app/components/config/whatsapplTemplates/lista/lista-whatsapp-templates.component.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_7__["UtilModule"],
                _config_routing_module__WEBPACK_IMPORTED_MODULE_8__["ConfigRoutingModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_23__["AngularEditorModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_38__["ImageCropperModule"]
            ],
            exports: [],
            declarations: [
                _sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_9__["NovoSistemaAtributoComponent"],
                _sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_10__["ListaSistemaAtributoComponent"],
                _tipoDocumento_lista_lista_tipo_documento_component__WEBPACK_IMPORTED_MODULE_11__["ListaTipoDocumentoComponent"],
                _tipoDocumento_novo_novo_tipo_documento_component__WEBPACK_IMPORTED_MODULE_12__["NovoTipoDocumentoComponent"],
                _parametrosCliente_lista_lista_parametros_cliente_component__WEBPACK_IMPORTED_MODULE_15__["ListaParametrosClienteComponent"],
                _parametrosCliente_novo_novo_parametros_cliente_component__WEBPACK_IMPORTED_MODULE_16__["NovoParametroClienteComponent"],
                _papel_novo_novo_papel_component__WEBPACK_IMPORTED_MODULE_17__["NovoPapelComponent"],
                _papel_lista_lista_papel_component__WEBPACK_IMPORTED_MODULE_18__["ListaPapelComponent"],
                _tipoDocumento_modal_novoPapel_tipoDocumento_novo_papel_modal_component__WEBPACK_IMPORTED_MODULE_13__["TipoDocumentoNovoPapelModalComponent"],
                _tipoDocumento_modal_tipoDocumentoPapelModal_tipoDocumento_papel_modal_component__WEBPACK_IMPORTED_MODULE_14__["TipoDocumentoPapelModalComponent"],
                _emailTemplates_lista_lista_email_templates_component__WEBPACK_IMPORTED_MODULE_19__["ListaEmailTemplatesComponent"],
                _emailTemplates_novo_novo_email_templates_component__WEBPACK_IMPORTED_MODULE_20__["NovoEmailTemplatesComponent"],
                _alertas_novo_novo_alerta_component__WEBPACK_IMPORTED_MODULE_21__["NovoAlertaComponent"],
                _alertas_lista_lista_alertas_component__WEBPACK_IMPORTED_MODULE_22__["ListaAlertasComponent"],
                _parametrosSistema_novo_novo_parametros_sistema_component__WEBPACK_IMPORTED_MODULE_24__["NovoParametroSistemaComponent"],
                _parametrosSistema_lista_lista_parametros_sistema_component__WEBPACK_IMPORTED_MODULE_25__["ListaParametrosSistemaComponent"],
                _termo_novo_novo_termo_component__WEBPACK_IMPORTED_MODULE_26__["NovoTermoComponent"],
                _termo_lista_lista_termos_component__WEBPACK_IMPORTED_MODULE_27__["ListaTermosComponent"],
                _segmento_novo_novo_segmento_component__WEBPACK_IMPORTED_MODULE_28__["NovoSegmentoComponent"],
                _segmento_lista_lista_segmento_component__WEBPACK_IMPORTED_MODULE_29__["ListaSegmentoComponent"],
                _email_novo_novo_parametros_email_component__WEBPACK_IMPORTED_MODULE_30__["NovoParametroEmailComponent"],
                _email_lista_lista_parametros_email_component__WEBPACK_IMPORTED_MODULE_31__["ListaParametrosEmailComponent"],
                _whatsapp_novo_novo_parametros_whatsapp_component__WEBPACK_IMPORTED_MODULE_32__["NovoParametroWhatsAppComponent"],
                _whatsapp_lista_lista_parametros_whatsapp_component__WEBPACK_IMPORTED_MODULE_33__["ListaParametrosWhatsAppComponent"],
                _sms_novo_novo_parametros_sms_component__WEBPACK_IMPORTED_MODULE_34__["NovoParametroSmsComponent"],
                _sms_lista_lista_parametros_sms_component__WEBPACK_IMPORTED_MODULE_35__["ListaParametrosSmsComponent"],
                _whatsapplTemplates_novo_novo_whatsapp_templates_component__WEBPACK_IMPORTED_MODULE_36__["NovoWhatsAppTemplatesComponent"],
                _whatsapplTemplates_lista_lista_whatsapp_templates_component__WEBPACK_IMPORTED_MODULE_37__["ListaWhatsAppTemplatesComponent"]
            ],
            providers: [
                _util_pipe_enumPipe__WEBPACK_IMPORTED_MODULE_4__["ENumAsStringPipe"], _util_pipe_valuesPipe__WEBPACK_IMPORTED_MODULE_6__["ValuesPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"], ngx_mask__WEBPACK_IMPORTED_MODULE_3__["MaskPipe"], _util_pipe_phonePipe__WEBPACK_IMPORTED_MODULE_5__["PhonePipe"]
            ],
            entryComponents: [
                _tipoDocumento_modal_tipoDocumentoPapelModal_tipoDocumento_papel_modal_component__WEBPACK_IMPORTED_MODULE_14__["TipoDocumentoPapelModalComponent"],
                _tipoDocumento_modal_novoPapel_tipoDocumento_novo_papel_modal_component__WEBPACK_IMPORTED_MODULE_13__["TipoDocumentoNovoPapelModalComponent"]
            ]
        })
    ], ConfigModule);
    return ConfigModule;
}());



/***/ }),

/***/ "./src/app/components/config/email/lista/lista-parametros-email.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/config/email/lista/lista-parametros-email.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListaParametrosEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaParametrosEmailComponent", function() { return ListaParametrosEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaParametrosEmailComponent = /** @class */ (function (_super) {
    __extends(ListaParametrosEmailComponent, _super);
    function ListaParametrosEmailComponent() {
        var _this = _super.call(this) || this;
        _this.titulo = "Lista Parâmetros Cliente";
        _this.navegacao = " > Config > Parametros E-mail > Listagem";
        _this.rota = "/config/parametrosEmail";
        _this.Categoria = "PARAMETROS_EMAIL";
        _this.page = {
            number: 0,
            size: 30,
            order: ''
        };
        return _this;
    }
    ListaParametrosEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parametros-cliente-documento',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/lista/lista-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListaParametrosEmailComponent);
    return ListaParametrosEmailComponent;
}(_sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__["ListaSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/email/novo/novo-parametros-email.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/config/email/novo/novo-parametros-email.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NovoParametroEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoParametroEmailComponent", function() { return NovoParametroEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NovoParametroEmailComponent = /** @class */ (function (_super) {
    __extends(NovoParametroEmailComponent, _super);
    function NovoParametroEmailComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.titulo = "Parâmetro do Cliente";
        _this.navegacao = " > Config > Parâmetro  E-mail > Editar";
        _this.rota = "/config/parametrosEmail";
        return _this;
    }
    NovoParametroEmailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], NovoParametroEmailComponent.prototype, "form", void 0);
    NovoParametroEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-parametros-cliente',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/novo/novo-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NovoParametroEmailComponent);
    return NovoParametroEmailComponent;
}(_sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__["NovoSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/emailTemplates/lista/lista-email-templates.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/config/emailTemplates/lista/lista-email-templates.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ListaEmailTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaEmailTemplatesComponent", function() { return ListaEmailTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaEmailTemplatesComponent = /** @class */ (function (_super) {
    __extends(ListaEmailTemplatesComponent, _super);
    function ListaEmailTemplatesComponent() {
        var _this = _super.call(this) || this;
        _this.titulo = "Lista E-mail Templates";
        _this.navegacao = " > Config > E-mail Templates > Listagem";
        _this.rota = "/config/emailsTemplate";
        _this.Categoria = "EMAIL_TEMPLATES";
        _this.page = {
            number: 0,
            size: 30,
            order: ''
        };
        return _this;
    }
    ListaEmailTemplatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parametros-cliente-documento',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/lista/lista-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListaEmailTemplatesComponent);
    return ListaEmailTemplatesComponent;
}(_sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__["ListaSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/emailTemplates/novo/novo-email-templates.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/config/emailTemplates/novo/novo-email-templates.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NovoEmailTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoEmailTemplatesComponent", function() { return NovoEmailTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NovoEmailTemplatesComponent = /** @class */ (function (_super) {
    __extends(NovoEmailTemplatesComponent, _super);
    function NovoEmailTemplatesComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.titulo = "E-mail Template";
        _this.navegacao = " > Config > E-mail Templates > Editar";
        _this.rota = "/config/emailsTemplate";
        return _this;
    }
    NovoEmailTemplatesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], NovoEmailTemplatesComponent.prototype, "form", void 0);
    NovoEmailTemplatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-parametros-cliente',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/novo/novo-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NovoEmailTemplatesComponent);
    return NovoEmailTemplatesComponent;
}(_sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__["NovoSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/papel/lista/lista-papel.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/config/papel/lista/lista-papel.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlnL3BhcGVsL2xpc3RhL2xpc3RhLXBhcGVsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/config/papel/lista/lista-papel.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/config/papel/lista/lista-papel.component.ts ***!
  \************************************************************************/
/*! exports provided: ListaPapelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPapelComponent", function() { return ListaPapelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _padrao_lista_padrao_lista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../padrao/lista/padrao-lista.component */ "./src/app/components/padrao/lista/padrao-lista.component.ts");
/* harmony import */ var app_services_config_papel_papel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/config/papel/papel.service */ "./src/app/services/config/papel/papel.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListaPapelComponent = /** @class */ (function (_super) {
    __extends(ListaPapelComponent, _super);
    function ListaPapelComponent(papelService) {
        var _this = _super.call(this) || this;
        _this.papelService = papelService;
        _this.titulo = "Lista de Papéis";
        _this.navegacao = " > Config > Papel > Listagem";
        _this.rota = "/config/papel";
        _this.filtro = { id: '', status: 'ATIVO', cliente: _this.shared.clienteSelecionado.cliente };
        _this.page = {
            number: 0,
            size: 30,
            order: 'nome'
        };
        _this.httpService = _this.papelService;
        return _this;
    }
    ListaPapelComponent.prototype.clienteChange = function () {
        this.listagem = [];
        this.filtro.cliente = this.shared.clienteSelecionado.cliente;
        this.page.number = 0;
        _super.prototype.filtrar.call(this);
    };
    ListaPapelComponent.ctorParameters = function () { return [
        { type: app_services_config_papel_papel_service__WEBPACK_IMPORTED_MODULE_2__["PapelService"] }
    ]; };
    ListaPapelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-papel',
            template: __webpack_require__(/*! raw-loader!./lista-papel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/papel/lista/lista-papel.component.html"),
            styles: [__webpack_require__(/*! ./lista-papel.component.scss */ "./src/app/components/config/papel/lista/lista-papel.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_config_papel_papel_service__WEBPACK_IMPORTED_MODULE_2__["PapelService"]])
    ], ListaPapelComponent);
    return ListaPapelComponent;
}(_padrao_lista_padrao_lista_component__WEBPACK_IMPORTED_MODULE_1__["PadraoListaComponent"]));



/***/ }),

/***/ "./src/app/components/config/papel/novo/novo-papel.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/config/papel/novo/novo-papel.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlnL3BhcGVsL25vdm8vbm92by1wYXBlbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/config/papel/novo/novo-papel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/config/papel/novo/novo-papel.component.ts ***!
  \**********************************************************************/
/*! exports provided: NovoPapelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoPapelComponent", function() { return NovoPapelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../padrao/novo/padrao-novo.component */ "./src/app/components/padrao/novo/padrao-novo.component.ts");
/* harmony import */ var app_services_config_papel_papel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/config/papel/papel.service */ "./src/app/services/config/papel/papel.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { UtilService } from '../../../../services/util/util.service';
var NovoPapelComponent = /** @class */ (function (_super) {
    __extends(NovoPapelComponent, _super);
    function NovoPapelComponent(route, papelService) {
        var _this = _super.call(this, route) || this;
        _this.papelService = papelService;
        _this.modal = false;
        _this.listCombos = [];
        _this.tipoClienteList = [];
        _this.tipoClienteSelecionandos = [];
        _this.papelList = [];
        _this.papelSelecionandos = [];
        _this.dropdownSettings = {};
        _this.titulo = "Novo Papel";
        _this.navegacao = " > Config > Papel > Novo";
        _this.rota = "/config/papel";
        //Para carregar os combos
        //this.entidade = [];
        //     this.entidade = {
        //       identificacao: '',
        //       nome: '',
        //       assina: null,
        //       status: 'ATIVO',
        //       papelTipoCLiente: [],
        //       cliente: this.shared.clienteSelecionado.cliente
        //     }
        _this.entidade = null; // se nao for null o getNedw nao funciona
        _this.httpService = _this.papelService;
        _this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            itemsShowLimit: 10,
            allowSearchFilter: true,
            searchPlaceholderText: 'Procurar',
            enableCheckAll: false
        };
        return _this;
    }
    NovoPapelComponent.prototype.afterRetrieveData = function () {
        this.listCombos = this.entidade.listCombos;
        // coloca somente o tipoDocumento para Post
        this.entidade = this.entidade.papel;
        if (this.entidade.cliente.id != this.shared.clienteSelecionado.cliente.id) {
            this.consultando = true;
        }
        //carrega combos enviados da base de dados
        this.carregaCombosDaBaseDados();
        //seleciona os itens que já estao no objeto
        this.InicializaItensSelecionados();
    };
    NovoPapelComponent.prototype.beforeSave = function () {
        this.TrataListaTipoCliente();
    };
    NovoPapelComponent.prototype.TrataListaTipoCliente = function () {
        var _this = this;
        var lstTipoCliente = [];
        this.tipoClienteSelecionandos.forEach(function (tipoCliente) {
            var achou = false;
            if (_this.entidade.papelTipoClientes != undefined) {
                _this.entidade.papelTipoClientes.forEach(function (value) {
                    if (tipoCliente.item_id == value.segmento.id && value.id != "") {
                        lstTipoCliente.push(value);
                        achou = true;
                        return;
                    }
                });
            }
            if (!achou) {
                _this.listCombos['TipoCliente'].forEach(function (value) {
                    if (tipoCliente.item_id == value.id) {
                        lstTipoCliente.push({ id: "", segmento: { id: value.id, identificacao: value.value, nome: value.label } });
                        return;
                    }
                });
            }
        });
        this.entidade.papelTipoClientes = lstTipoCliente;
    };
    NovoPapelComponent.prototype.carregaCombosDaBaseDados = function () {
        this.tipoClienteList = this.utilService.preencheCombos(this.listCombos['TipoCliente']);
    };
    NovoPapelComponent.prototype.InicializaItensSelecionados = function () {
        var _this = this;
        this.tipoClienteSelecionandos = [];
        if (this.entidade.papelTipoClientes != null) {
            this.entidade.papelTipoClientes.forEach(function (value) {
                var item = { item_id: value.segmento.id, item_text: value.segmento.nome };
                _this.tipoClienteSelecionandos.push(item);
            });
        }
    };
    Object.defineProperty(NovoPapelComponent.prototype, "podeVoltar", {
        get: function () {
            return this.consultando || (!this.editando && Boolean(this.form.pristine));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoPapelComponent.prototype, "Papel", {
        get: function () {
            return this.entidade;
        },
        set: function (data) {
            this.entidade = data;
        },
        enumerable: true,
        configurable: true
    });
    NovoPapelComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: app_services_config_papel_papel_service__WEBPACK_IMPORTED_MODULE_4__["PapelService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], NovoPapelComponent.prototype, "form", void 0);
    NovoPapelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-papel',
            template: __webpack_require__(/*! raw-loader!./novo-papel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/papel/novo/novo-papel.component.html"),
            styles: [__webpack_require__(/*! ./novo-papel.component.scss */ "./src/app/components/config/papel/novo/novo-papel.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_services_config_papel_papel_service__WEBPACK_IMPORTED_MODULE_4__["PapelService"]])
    ], NovoPapelComponent);
    return NovoPapelComponent;
}(_padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_3__["PadraoNovoComponent"]));



/***/ }),

/***/ "./src/app/components/config/parametrosCliente/lista/lista-parametros-cliente.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/config/parametrosCliente/lista/lista-parametros-cliente.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ListaParametrosClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaParametrosClienteComponent", function() { return ListaParametrosClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaParametrosClienteComponent = /** @class */ (function (_super) {
    __extends(ListaParametrosClienteComponent, _super);
    function ListaParametrosClienteComponent() {
        var _this = _super.call(this) || this;
        _this.titulo = "Lista Parâmetros Cliente";
        _this.navegacao = " > Config > Tipo Documento > Listagem";
        _this.rota = "/config/parametrosCliente";
        _this.Categoria = "PARAMETROS_CLIENTE";
        _this.page = {
            number: 0,
            size: 30,
            order: ''
        };
        return _this;
    }
    ListaParametrosClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parametros-cliente-documento',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/lista/lista-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListaParametrosClienteComponent);
    return ListaParametrosClienteComponent;
}(_sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__["ListaSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/parametrosCliente/novo/novo-parametros-cliente.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/config/parametrosCliente/novo/novo-parametros-cliente.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NovoParametroClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoParametroClienteComponent", function() { return NovoParametroClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NovoParametroClienteComponent = /** @class */ (function (_super) {
    __extends(NovoParametroClienteComponent, _super);
    function NovoParametroClienteComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.titulo = "Parâmetro do Cliente";
        _this.navegacao = " > Config > Parâmetro Cliente > Editar";
        _this.rota = "/config/parametrosCliente";
        return _this;
    }
    NovoParametroClienteComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], NovoParametroClienteComponent.prototype, "form", void 0);
    NovoParametroClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-parametros-cliente',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/novo/novo-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NovoParametroClienteComponent);
    return NovoParametroClienteComponent;
}(_sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__["NovoSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/parametrosSistema/lista/lista-parametros-sistema.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/config/parametrosSistema/lista/lista-parametros-sistema.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ListaParametrosSistemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaParametrosSistemaComponent", function() { return ListaParametrosSistemaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaParametrosSistemaComponent = /** @class */ (function (_super) {
    __extends(ListaParametrosSistemaComponent, _super);
    function ListaParametrosSistemaComponent() {
        var _this = _super.call(this) || this;
        _this.titulo = "Lista Parametros Sistema";
        _this.navegacao = " > Config > Parâmetros Sistema > Listagem";
        _this.rota = "/config/parametrosSistema";
        _this.Categoria = "SISTEMA";
        _this.page = {
            number: 0,
            size: 30,
            order: ''
        };
        return _this;
    }
    ListaParametrosSistemaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parametros-cliente-documento',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/lista/lista-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListaParametrosSistemaComponent);
    return ListaParametrosSistemaComponent;
}(_sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__["ListaSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/parametrosSistema/novo/novo-parametros-sistema.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/config/parametrosSistema/novo/novo-parametros-sistema.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NovoParametroSistemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoParametroSistemaComponent", function() { return NovoParametroSistemaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NovoParametroSistemaComponent = /** @class */ (function (_super) {
    __extends(NovoParametroSistemaComponent, _super);
    function NovoParametroSistemaComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.titulo = "Parâmetro do Sistema";
        _this.navegacao = " > Config > Parâmetro Sistema > Editar";
        _this.rota = "/config/parametrosSistema";
        return _this;
    }
    NovoParametroSistemaComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], NovoParametroSistemaComponent.prototype, "form", void 0);
    NovoParametroSistemaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-parametros-cliente',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/novo/novo-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NovoParametroSistemaComponent);
    return NovoParametroSistemaComponent;
}(_sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__["NovoSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/segmento/lista/lista-segmento.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/config/segmento/lista/lista-segmento.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlnL3NlZ21lbnRvL2xpc3RhL2xpc3RhLXNlZ21lbnRvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/config/segmento/lista/lista-segmento.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/config/segmento/lista/lista-segmento.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListaSegmentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaSegmentoComponent", function() { return ListaSegmentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _padrao_lista_padrao_lista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../padrao/lista/padrao-lista.component */ "./src/app/components/padrao/lista/padrao-lista.component.ts");
/* harmony import */ var app_services_config_segmento_segmento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/config/segmento/segmento.service */ "./src/app/services/config/segmento/segmento.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListaSegmentoComponent = /** @class */ (function (_super) {
    __extends(ListaSegmentoComponent, _super);
    function ListaSegmentoComponent(segmentoService) {
        var _this = _super.call(this) || this;
        _this.segmentoService = segmentoService;
        _this.titulo = "Lista de Segmentos";
        _this.navegacao = " > Config > Segmentos > Listagem";
        _this.rota = "/config/segmentos";
        _this.filtro = { id: '', status: 'ATIVO' };
        _this.page = {
            number: 0,
            size: 30,
            order: 'nome'
        };
        _this.httpService = _this.segmentoService;
        return _this;
    }
    ListaSegmentoComponent.ctorParameters = function () { return [
        { type: app_services_config_segmento_segmento_service__WEBPACK_IMPORTED_MODULE_2__["SegmentoService"] }
    ]; };
    ListaSegmentoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-segmento',
            template: __webpack_require__(/*! raw-loader!./lista-segmento.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/segmento/lista/lista-segmento.component.html"),
            styles: [__webpack_require__(/*! ./lista-segmento.component.scss */ "./src/app/components/config/segmento/lista/lista-segmento.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_config_segmento_segmento_service__WEBPACK_IMPORTED_MODULE_2__["SegmentoService"]])
    ], ListaSegmentoComponent);
    return ListaSegmentoComponent;
}(_padrao_lista_padrao_lista_component__WEBPACK_IMPORTED_MODULE_1__["PadraoListaComponent"]));



/***/ }),

/***/ "./src/app/components/config/segmento/novo/novo-segmento.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/config/segmento/novo/novo-segmento.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlnL3NlZ21lbnRvL25vdm8vbm92by1zZWdtZW50by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/config/segmento/novo/novo-segmento.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/config/segmento/novo/novo-segmento.component.ts ***!
  \****************************************************************************/
/*! exports provided: NovoSegmentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoSegmentoComponent", function() { return NovoSegmentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../padrao/novo/padrao-novo.component */ "./src/app/components/padrao/novo/padrao-novo.component.ts");
/* harmony import */ var app_services_config_segmento_segmento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/config/segmento/segmento.service */ "./src/app/services/config/segmento/segmento.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NovoSegmentoComponent = /** @class */ (function (_super) {
    __extends(NovoSegmentoComponent, _super);
    function NovoSegmentoComponent(route, segmentoService) {
        var _this = _super.call(this, route) || this;
        _this.segmentoService = segmentoService;
        _this.modal = false;
        _this.titulo = "Novo Segmento";
        _this.navegacao = " > Config > Segmentos > Novo";
        _this.rota = "/config/segmentos";
        //Para carregar os combos
        _this.entidade = { id: '', nome: '', identificacao: '', status: 'ATIVO' };
        _this.httpService = _this.segmentoService;
        return _this;
    }
    Object.defineProperty(NovoSegmentoComponent.prototype, "podeVoltar", {
        get: function () {
            return this.consultando || (!this.editando && Boolean(this.form.pristine));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoSegmentoComponent.prototype, "Segmento", {
        get: function () {
            return this.entidade;
        },
        set: function (data) {
            this.entidade = data;
        },
        enumerable: true,
        configurable: true
    });
    NovoSegmentoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: app_services_config_segmento_segmento_service__WEBPACK_IMPORTED_MODULE_4__["SegmentoService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], NovoSegmentoComponent.prototype, "form", void 0);
    NovoSegmentoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-segmento',
            template: __webpack_require__(/*! raw-loader!./novo-segmento.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/segmento/novo/novo-segmento.component.html"),
            styles: [__webpack_require__(/*! ./novo-segmento.component.scss */ "./src/app/components/config/segmento/novo/novo-segmento.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_services_config_segmento_segmento_service__WEBPACK_IMPORTED_MODULE_4__["SegmentoService"]])
    ], NovoSegmentoComponent);
    return NovoSegmentoComponent;
}(_padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_3__["PadraoNovoComponent"]));



/***/ }),

/***/ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlnL3Npc3RlbWFBdHJpYnV0by9saXN0YS9saXN0YS1zaXN0ZW1hLWF0cmlidXRvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ListaSistemaAtributoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaSistemaAtributoComponent", function() { return ListaSistemaAtributoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _padrao_lista_padrao_lista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../padrao/lista/padrao-lista.component */ "./src/app/components/padrao/lista/padrao-lista.component.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var app_services_config_sistemaAtributo_sistemaAtributo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/config/sistemaAtributo/sistemaAtributo.service */ "./src/app/services/config/sistemaAtributo/sistemaAtributo.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaSistemaAtributoComponent = /** @class */ (function (_super) {
    __extends(ListaSistemaAtributoComponent, _super);
    function ListaSistemaAtributoComponent() {
        var _this = _super.call(this) || this;
        //protected route: ActivatedRoute;
        _this.filtro = { cliente: _this.shared.clienteSelecionado.cliente.id, categoria: '', valorAtributo: '', descricao: '' };
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_2__["AppInjector"].getInjector();
        _this.sistemaAtributoService = injector.get(app_services_config_sistemaAtributo_sistemaAtributo_service__WEBPACK_IMPORTED_MODULE_3__["SistemaAtributoService"]);
        _this.httpService = _this.sistemaAtributoService;
        _this.shared = injector.get(app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]);
        return _this;
    }
    Object.defineProperty(ListaSistemaAtributoComponent.prototype, "Categoria", {
        set: function (value) {
            this.filtro.categoria = value;
        },
        enumerable: true,
        configurable: true
    });
    ListaSistemaAtributoComponent.prototype.clienteChange = function () {
        this.filtro.cliente = this.shared.clienteSelecionado.cliente.id;
        this.page.number = 0;
        this.listagem = [];
        _super.prototype.filtrar.call(this);
    };
    ListaSistemaAtributoComponent.prototype.afterExclusao = function (response) {
        this.shared.clienteSelecionado.sistemaAtributo[response.tipoAtributo.tipoAtributo] = undefined;
        return true;
    };
    ;
    ListaSistemaAtributoComponent.prototype.getValores = function (value) {
        return JSON.parse(value);
    };
    ListaSistemaAtributoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-sistema-atributo',
            template: __webpack_require__(/*! raw-loader!./lista-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ./lista-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListaSistemaAtributoComponent);
    return ListaSistemaAtributoComponent;
}(_padrao_lista_padrao_lista_component__WEBPACK_IMPORTED_MODULE_1__["PadraoListaComponent"]));



/***/ }),

/***/ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlnL3Npc3RlbWFBdHJpYnV0by9ub3ZvL25vdm8tc2lzdGVtYS1hdHJpYnV0by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NovoSistemaAtributoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoSistemaAtributoComponent", function() { return NovoSistemaAtributoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../padrao/novo/padrao-novo.component */ "./src/app/components/padrao/novo/padrao-novo.component.ts");
/* harmony import */ var app_services_config_sistemaAtributo_sistemaAtributo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/config/sistemaAtributo/sistemaAtributo.service */ "./src/app/services/config/sistemaAtributo/sistemaAtributo.service.ts");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lz_string__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NovoSistemaAtributoComponent = /** @class */ (function (_super) {
    __extends(NovoSistemaAtributoComponent, _super);
    function NovoSistemaAtributoComponent(route) {
        var _this = this;
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_3__["AppInjector"].getInjector();
        _this = _super.call(this, route) || this;
        _this.sistemaAtributoService = injector.get(app_services_config_sistemaAtributo_sistemaAtributo_service__WEBPACK_IMPORTED_MODULE_6__["SistemaAtributoService"]);
        // this.shared = injector.get(SharedService);
        _this.util = injector.get(app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]);
        _this.entidade = { tipoAtributo: { descricao: "", tipoValor: "" } };
        _this.httpService = _this.sistemaAtributoService;
        _this.diasSemanaSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            itemsShowLimit: 7,
            allowSearchFilter: true,
            searchPlaceholderText: 'Procurar',
            enableCheckAll: true
        };
        _this.diasSemana = [{ item_id: 1, item_text: 'Domingo' },
            { item_id: 2, item_text: 'Segunda' },
            { item_id: 3, item_text: 'Terça' },
            { item_id: 4, item_text: 'Quarta' },
            { item_id: 5, item_text: 'Quinta' },
            { item_id: 6, item_text: 'Sexta' },
            { item_id: 7, item_text: 'Sábado' }];
        _this.horariosSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            itemsShowLimit: 10,
            allowSearchFilter: false,
            searchPlaceholderText: 'Procurar',
            enableCheckAll: false
        };
        _this.horarios = [];
        for (var index = 0; index < 24; index++) {
            var horario = ("00" + index + ":00").slice(-5);
            _this.horarios.push({ item_id: horario, item_text: horario });
        }
        _this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '0',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'no',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
            ],
            customClasses: [],
            uploadUrl: 'v1/image',
            uploadWithCredentials: false,
            sanitize: false,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [
                [],
                [
                    'customClasses',
                    'insertImage',
                    'insertVideo'
                ]
            ]
        };
        return _this;
    }
    NovoSistemaAtributoComponent.prototype.afterRetrieveData = function () {
        if (this.entidade.cliente == null) {
            this.entidade.cliente = this.shared.clienteSelecionado.cliente;
        }
        if (this.entidade.tipoAtributo.tipoValor == 'BOOLEAN') {
            this.entidade.valorAtributo = this.util.booleanValue(this.entidade.valorAtributo);
        }
        if (this.entidade.tipoAtributo.tipoValor == 'DIASSEMANA'
            || this.entidade.tipoAtributo.tipoValor == 'HORARIOS') {
            this.comboValores = JSON.parse(this.entidade.valorAtributo);
        }
        if (this.entidade.tipoAtributo.tipoValor == 'PDF' && this.entidade.valorAtributo != null) {
            var documentoPDFDescompactado = lz_string__WEBPACK_IMPORTED_MODULE_7__["decompressFromUTF16"](this.entidade.valorAtributo);
            this.documentoPDF = "data:application/pdf;base64," + documentoPDFDescompactado;
            this.byteArray = new Uint8Array(atob(documentoPDFDescompactado).split('').map(function (char) { return char.charCodeAt(0); }));
        }
    };
    NovoSistemaAtributoComponent.prototype.afterSave = function (atributoSalvo) {
        var _a;
        if (this.shared.clienteSelecionado.sistemaAtributo[this.entidade.tipoAtributo.tipoAtributo] != undefined) {
            this.shared.clienteSelecionado.sistemaAtributo[this.entidade.tipoAtributo.tipoAtributo] = this.entidade.valorAtributo;
        }
        else {
            //Adiciona um novo item no sistema Atributo
            var item = (_a = {}, _a[this.entidade.tipoAtributo.tipoAtributo] = this.entidade.valorAtributo, _a);
            var itens = Object.assign(JSON.parse(JSON.stringify(this.shared.clienteSelecionado.sistemaAtributo)), item);
            this.shared.clienteSelecionado.sistemaAtributo = itens;
        }
        return false;
    };
    NovoSistemaAtributoComponent.prototype.afterExclusao = function (entidade) {
        this.shared.clienteSelecionado.sistemaAtributo[entidade.tipoAtributo.tipoAtributo] = undefined;
        return true;
    };
    ;
    Object.defineProperty(NovoSistemaAtributoComponent.prototype, "podeVoltar", {
        get: function () {
            return this.consultando || (!this.editando && Boolean(this.form.pristine));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoSistemaAtributoComponent.prototype, "SistemaAtributo", {
        get: function () {
            return this.entidade;
        },
        set: function (data) {
            this.entidade = data;
        },
        enumerable: true,
        configurable: true
    });
    NovoSistemaAtributoComponent.prototype.beforeSave = function () {
        if (this.entidade.tipoAtributo.tipoValor == 'DIASSEMANA' ||
            this.entidade.tipoAtributo.tipoValor == 'HORARIOS') {
            if (this.comboValores != undefined) {
                this.entidade.valorAtributo = JSON.stringify(this.comboValores.sort(function (a, b) { return (a.item_id > b.item_id ? 1 : -1); }));
            }
            else {
                this.entidade.valorAtributo = null;
            }
        }
    };
    NovoSistemaAtributoComponent.prototype.uploadArquivo = function (event) {
        var _this = this;
        var files = event.target.files;
        if (files.length > 1) {
            this.message.text = "Enviar somente um arquivo";
            return;
        }
        this.util.getFile(files[0]).then(function (data) {
            _this.documentoPDF = "data:application/pdf;base64," + _this.util.byteArrayToBase64(data['bytes']);
            _this.entidade.valorAtributo = lz_string__WEBPACK_IMPORTED_MODULE_7__["compressToUTF16"](_this.util.byteArrayToBase64(data['bytes']));
        });
    };
    NovoSistemaAtributoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], NovoSistemaAtributoComponent.prototype, "form", void 0);
    NovoSistemaAtributoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sistema-atributo',
            template: __webpack_require__(/*! raw-loader!./novo-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ./novo-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NovoSistemaAtributoComponent);
    return NovoSistemaAtributoComponent;
}(_padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_5__["PadraoNovoComponent"]));



/***/ }),

/***/ "./src/app/components/config/sms/lista/lista-parametros-sms.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/config/sms/lista/lista-parametros-sms.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListaParametrosSmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaParametrosSmsComponent", function() { return ListaParametrosSmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaParametrosSmsComponent = /** @class */ (function (_super) {
    __extends(ListaParametrosSmsComponent, _super);
    function ListaParametrosSmsComponent() {
        var _this = _super.call(this) || this;
        _this.titulo = "Lista Parâmetros SMS";
        _this.navegacao = " > Config > Parametros SMS > Listagem";
        _this.rota = "/config/parametrosSms";
        _this.Categoria = "PARAMETROS_SMS";
        _this.page = {
            number: 0,
            size: 30,
            order: ''
        };
        return _this;
    }
    ListaParametrosSmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parametros-cliente-documento',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/lista/lista-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListaParametrosSmsComponent);
    return ListaParametrosSmsComponent;
}(_sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__["ListaSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/sms/novo/novo-parametros-sms.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/config/sms/novo/novo-parametros-sms.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NovoParametroSmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoParametroSmsComponent", function() { return NovoParametroSmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NovoParametroSmsComponent = /** @class */ (function (_super) {
    __extends(NovoParametroSmsComponent, _super);
    function NovoParametroSmsComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.titulo = "Parâmetro do Cliente";
        _this.navegacao = " > Config > Parâmetro SMS > Editar";
        _this.rota = "/config/parametrosSms";
        return _this;
    }
    NovoParametroSmsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], NovoParametroSmsComponent.prototype, "form", void 0);
    NovoParametroSmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-parametros-cliente',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/novo/novo-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NovoParametroSmsComponent);
    return NovoParametroSmsComponent;
}(_sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__["NovoSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/termo/lista/lista-termos.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/config/termo/lista/lista-termos.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListaTermosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaTermosComponent", function() { return ListaTermosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaTermosComponent = /** @class */ (function (_super) {
    __extends(ListaTermosComponent, _super);
    function ListaTermosComponent() {
        var _this = _super.call(this) || this;
        _this.titulo = "Lista Termos";
        _this.navegacao = " > Config > Termos > Listagem";
        _this.rota = "/config/termos";
        _this.Categoria = "TERMOS";
        _this.page = {
            number: 0,
            size: 30,
            order: ''
        };
        return _this;
    }
    ListaTermosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parametros-cliente-documento',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/lista/lista-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListaTermosComponent);
    return ListaTermosComponent;
}(_sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__["ListaSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/termo/novo/novo-termo.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/config/termo/novo/novo-termo.component.ts ***!
  \**********************************************************************/
/*! exports provided: NovoTermoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoTermoComponent", function() { return NovoTermoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NovoTermoComponent = /** @class */ (function (_super) {
    __extends(NovoTermoComponent, _super);
    function NovoTermoComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.titulo = "Termo";
        _this.navegacao = " > Config > Termo > Editar";
        _this.rota = "/config/termos";
        return _this;
    }
    NovoTermoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], NovoTermoComponent.prototype, "form", void 0);
    NovoTermoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-parametros-cliente',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/novo/novo-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NovoTermoComponent);
    return NovoTermoComponent;
}(_sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__["NovoSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/tipoDocumento/lista/lista-tipo-documento.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/config/tipoDocumento/lista/lista-tipo-documento.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlnL3RpcG9Eb2N1bWVudG8vbGlzdGEvbGlzdGEtdGlwby1kb2N1bWVudG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/config/tipoDocumento/lista/lista-tipo-documento.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/config/tipoDocumento/lista/lista-tipo-documento.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListaTipoDocumentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaTipoDocumentoComponent", function() { return ListaTipoDocumentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _padrao_lista_padrao_lista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../padrao/lista/padrao-lista.component */ "./src/app/components/padrao/lista/padrao-lista.component.ts");
/* harmony import */ var app_services_config_tipoDocumento_tipoDocumento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/config/tipoDocumento/tipoDocumento.service */ "./src/app/services/config/tipoDocumento/tipoDocumento.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListaTipoDocumentoComponent = /** @class */ (function (_super) {
    __extends(ListaTipoDocumentoComponent, _super);
    function ListaTipoDocumentoComponent(tipoDocumentoService) {
        var _this = _super.call(this) || this;
        _this.tipoDocumentoService = tipoDocumentoService;
        _this.titulo = "Lista de Tipo Documento";
        _this.navegacao = " > Config > Tipo Documento > Listagem";
        _this.rota = "/config/tipoDocumento";
        _this.filtro = { id: '', status: 'ATIVO', cliente: _this.shared.clienteSelecionado.cliente };
        _this.page = {
            number: 0,
            size: 30,
            order: 'nome'
        };
        _this.httpService = _this.tipoDocumentoService;
        return _this;
    }
    ListaTipoDocumentoComponent.prototype.clienteChange = function () {
        this.listagem = [];
        this.filtro.cliente = this.shared.clienteSelecionado.cliente;
        this.page.number = 0;
        _super.prototype.filtrar.call(this);
    };
    ListaTipoDocumentoComponent.prototype.perfilUsuarioAdmin = function () {
        //return this.shared.usuario.perfil==PerfilEnum.ROLE_ADMIN
        var result = this.shared.perfilUsuarioAdmin();
        return result;
    };
    ListaTipoDocumentoComponent.ctorParameters = function () { return [
        { type: app_services_config_tipoDocumento_tipoDocumento_service__WEBPACK_IMPORTED_MODULE_2__["TipoDocumentoService"] }
    ]; };
    ListaTipoDocumentoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-tipo-documento',
            template: __webpack_require__(/*! raw-loader!./lista-tipo-documento.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/tipoDocumento/lista/lista-tipo-documento.component.html"),
            styles: [__webpack_require__(/*! ./lista-tipo-documento.component.scss */ "./src/app/components/config/tipoDocumento/lista/lista-tipo-documento.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_config_tipoDocumento_tipoDocumento_service__WEBPACK_IMPORTED_MODULE_2__["TipoDocumentoService"]])
    ], ListaTipoDocumentoComponent);
    return ListaTipoDocumentoComponent;
}(_padrao_lista_padrao_lista_component__WEBPACK_IMPORTED_MODULE_1__["PadraoListaComponent"]));



/***/ }),

/***/ "./src/app/components/config/tipoDocumento/modal/novoPapel/tipoDocumento-novo-papel-modal.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/config/tipoDocumento/modal/novoPapel/tipoDocumento-novo-papel-modal.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n\n.label-radio-check {\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 6px 0;\n  text-transform: none;\n}\n\n:host ::ng-deep .ng-select-container {\n  border-color: inherit;\n}\n\n:host ::ng-deep .switch100 > span.switch {\n  width: 100%;\n}\n\n:host ::ng-deep .linhaSelecionada {\n  background-color: #cde;\n}\n\n.sw-input-group {\n  margin-bottom: 0;\n}\n\n.sw-input-group input {\n  border-right-style: none;\n}\n\n.sw-input-group .input-group-btn {\n  z-index: 2;\n}\n\n.sw-input-group .input-group-btn button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.sw-input-group .input-group-btn button[disabled] {\n  pointer-events: none;\n}\n\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n\n:host ::ng-deep button[disabled] {\n  cursor: not-allowed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-x {\n  display: block;\n  max-width: auto;\n  margin: 0 auto;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n:host ::ng-deep .table-fixed {\n  table-layout: fixed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-y {\n  max-height: 300px;\n  min-height: 200px;\n  overflow-y: auto;\n}\n\n:host ::ng-deep .alert-custom .alert {\n  margin-bottom: 0.25em;\n}\n\n:host ::ng-deep ngb-rating .star {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n\n:host ::ng-deep ngb-rating .star.filled {\n  color: gold;\n}\n\ntable td {\n  padding: 0.4rem;\n  vertical-align: middle;\n}\n\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\n  max-height: 32px;\n  min-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maWcvdGlwb0RvY3VtZW50by9tb2RhbC9ub3ZvUGFwZWwvRDpcXEFzc2luYS5OZXRcXFByb2pldG9zXFxHaXRIdWJcXEFzc2luYS5OZXQuUG9ydGFsXFxhc3NpbmEubmV0LndlYi5wb3J0YWwtdjEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbmZpZ1xcdGlwb0RvY3VtZW50b1xcbW9kYWxcXG5vdm9QYXBlbFxcdGlwb0RvY3VtZW50by1ub3ZvLXBhcGVsLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbmZpZy90aXBvRG9jdW1lbnRvL21vZGFsL25vdm9QYXBlbC90aXBvRG9jdW1lbnRvLW5vdm8tcGFwZWwtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRyxrQkFBQTtFQUNBLGdCQUFBO0FDTkg7O0FEU0E7RUFDRyxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNOSDs7QURTQTtFQUNHLHFCQUFBO0FDTkg7O0FEU0E7RUFDRyxXQUFBO0FDTkg7O0FEU0E7RUFDRyxzQkFBQTtBQ05IOztBRFNBO0VBQ0csZ0JBQUE7QUNOSDs7QURRRztFQUNHLHdCQUFBO0FDTk47O0FEU0c7RUFDRyxVQUFBO0FDUE47O0FEU007RUFDRyx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUNQVDs7QURVTTtFQUNHLG9CQUFBO0FDUlQ7O0FEYUE7RUFDRyxrQkFBQTtFQUNBLGdCQUFBO0FDVkg7O0FEWUc7RUFDRyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDVk47O0FEY0E7RUFDRyxtQkFBQTtBQ1hIOztBRGNBO0VBQ0csY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtBQ1hIOztBRGNBO0VBQ0csbUJBQUE7QUNYSDs7QURjQTtFQUNHLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1hIOztBRGNBO0VBQ0cscUJBQUE7QUNYSDs7QURjQTtFQUNHLGlCQUFBO0VBQ0EsY0FBQTtBQ1hIOztBRGNHO0VBQ0csV0FBQTtBQ1pOOztBRGdCQTtFQUNHLGVBQUE7RUFDQSxzQkFBQTtBQ2JIOztBRGdCQTtFQUNHLGdCQUFBO0VBQ0EsZ0JBQUE7QUNiSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlnL3RpcG9Eb2N1bWVudG8vbW9kYWwvbm92b1BhcGVsL3RpcG9Eb2N1bWVudG8tbm92by1wYXBlbC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZvcm0tYm9keSB7XHJcblxyXG5cclxufVxyXG5cclxuLmNvbnRyb2wtbGFiZWwge1xyXG4gICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmxhYmVsLXJhZGlvLWNoZWNrIHtcclxuICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICBtYXJnaW46IDZweCAwO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaDEwMD5zcGFuLnN3aXRjaCB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpbmhhU2VsZWNpb25hZGEge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlO1xyXG59XHJcblxyXG4uc3ctaW5wdXQtZ3JvdXAge1xyXG4gICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgaW5wdXQge1xyXG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XHJcbiAgIH1cclxuXHJcbiAgIC5pbnB1dC1ncm91cC1idG4ge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbi5idG4uYnRuLWZpbGUge1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICBpbnB1dFt0eXBlPSdmaWxlJ10ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGN1cnNvcjogaW5oZXJpdDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXgge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWF4LXdpZHRoOiBhdXRvO1xyXG4gICBtYXJnaW46IDAgYXV0bztcclxuICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtZml4ZWQge1xyXG4gICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG4gICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYWxlcnQtY3VzdG9tIC5hbGVydCB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG5nYi1yYXRpbmcgLnN0YXIge1xyXG4gICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgY29sb3I6ICNiMGM0ZGU7XHJcblxyXG4gICAvLyBGaWxsZWQgU3RhclxyXG4gICAmLmZpbGxlZCB7XHJcbiAgICAgIGNvbG9yOiBnb2xkO1xyXG4gICB9XHJcbn1cclxuXHJcbnRhYmxlIHRkIHtcclxuICAgcGFkZGluZzogMC40cmVtO1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgbWF4LWhlaWdodDogMzJweDtcclxuICAgbWluLWhlaWdodDogMzJweDtcclxufVxyXG5cclxuXHJcbiIsIi5jb250cm9sLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubGFiZWwtcmFkaW8tY2hlY2sge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogNnB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc3dpdGNoMTAwID4gc3Bhbi5zd2l0Y2gge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5oYVNlbGVjaW9uYWRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTtcbn1cblxuLnN3LWlucHV0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zdy1pbnB1dC1ncm91cCBpbnB1dCB7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbn1cbi5zdy1pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuIHtcbiAgei1pbmRleDogMjtcbn1cbi5zdy1pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuIGJ1dHRvbiB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuLnN3LWlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG4gYnV0dG9uW2Rpc2FibGVkXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYnRuLmJ0bi1maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJ0bi5idG4tZmlsZSBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjdXJzb3I6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1maXhlZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteSB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbGVydC1jdXN0b20gLmFsZXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmdiLXJhdGluZyAuc3RhciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2IwYzRkZTtcbn1cbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyLmZpbGxlZCB7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDMycHg7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/config/tipoDocumento/modal/novoPapel/tipoDocumento-novo-papel-modal.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/config/tipoDocumento/modal/novoPapel/tipoDocumento-novo-papel-modal.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: TipoDocumentoNovoPapelModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoDocumentoNovoPapelModalComponent", function() { return TipoDocumentoNovoPapelModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TipoDocumentoNovoPapelModalComponent = /** @class */ (function () {
    function TipoDocumentoNovoPapelModalComponent(activeModal, shared) {
        this.activeModal = activeModal;
        this.shared = shared;
        this.modal = true;
    }
    TipoDocumentoNovoPapelModalComponent.prototype.ngOnInit = function () {
        if (this.instance) {
        }
    };
    Object.defineProperty(TipoDocumentoNovoPapelModalComponent.prototype, "Papel", {
        get: function () {
            return this.instance;
        },
        set: function (data) {
            this.instance = data;
        },
        enumerable: true,
        configurable: true
    });
    TipoDocumentoNovoPapelModalComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    TipoDocumentoNovoPapelModalComponent.prototype.perfilUsuarioAdmin = function () {
        var result = this.shared.perfilUsuarioAdmin();
        return result;
    };
    TipoDocumentoNovoPapelModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], TipoDocumentoNovoPapelModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoDocumentoNovoPapelModalComponent.prototype, "instance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TipoDocumentoNovoPapelModalComponent.prototype, "listaOriginal", void 0);
    TipoDocumentoNovoPapelModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assinar-modal',
            template: __webpack_require__(/*! raw-loader!./tipoDocumento-novo-papel-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/tipoDocumento/modal/novoPapel/tipoDocumento-novo-papel-modal.component.html"),
            styles: [__webpack_require__(/*! ./tipoDocumento-novo-papel-modal.component.scss */ "./src/app/components/config/tipoDocumento/modal/novoPapel/tipoDocumento-novo-papel-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], TipoDocumentoNovoPapelModalComponent);
    return TipoDocumentoNovoPapelModalComponent;
}());



/***/ }),

/***/ "./src/app/components/config/tipoDocumento/modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/config/tipoDocumento/modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .section {\r\n  min-height: 89.3%;\r\n} */\r\n\r\n/*:host ::ng-deep .table .thead-custom th {\r\n background-color: #ffffff !important;\r\n}*/\r\n\r\n:host ::ng-deep .font-family-rubik {\r\n   font-family: 'Rubik', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;\r\n}\r\n\r\n.sw-spiner ::ng-deep .black-overlay {\r\n   position: fixed;\r\n}\r\n\r\n/*.sw-spiner ::ng-deep .loading-text {\r\n   position: fixed;\r\n}*/\r\n\r\n:host ::ng-deep .progress {\r\n   height: 1.5rem;\r\n}\r\n\r\n:host ::ng-deep .ng-select-container {\r\n   border-color: inherit;\r\n}\r\n\r\n:host ::ng-deep .linhaSelecionada {\r\n   background-color: #cde;\r\n}\r\n\r\n:host ::ng-deep .linhaSelecionada2 {\r\n   background-color: silver;\r\n}\r\n\r\n:host ::ng-deep .content-header {\r\n   margin-top: 0.5rem;\r\n\r\n}\r\n\r\n:host ::ng-deep .content-sub-header {\r\n   margin-bottom: 0.25rem;\r\n}\r\n\r\n:host ::ng-deep .content-form .card {\r\n   margin: 0;\r\n}\r\n\r\n:host ::ng-deep .content-form .card .card-block {\n   padding: 0.5rem;\n}\r\n\r\n:host ::ng-deep .crud-page {\n   height: calc(100vh - 112px);\n   min-height: 0;\n   overflow: hidden;\n}\r\n\r\n:host ::ng-deep .wrapper {\n   height: 100vh;\n   overflow: hidden;\n}\r\n\r\n:host ::ng-deep .main-panel,\n:host ::ng-deep .main-content,\n:host ::ng-deep .content-wrapper,\n:host ::ng-deep .container-fluid {\n   max-height: none !important;\n   overflow-y: hidden !important;\n}\r\n\r\n:host ::ng-deep .main-panel {\n   height: 100vh !important;\n}\r\n\r\n:host ::ng-deep .main-content {\n   height: calc(100vh - 112px) !important;\n   min-height: 0 !important;\n}\r\n\r\n:host ::ng-deep .crud-content,\n:host ::ng-deep .crud-content .content-body,\n:host ::ng-deep .crud-content .card,\n:host ::ng-deep .crud-content .card-body,\n:host ::ng-deep .crud-content .card-block {\n   min-height: 0;\n   overflow-y: visible !important;\n}\r\n\r\n:host ::ng-deep .crud-content .card {\n   height: calc(100vh - 150px);\n   min-height: 0;\n}\r\n\r\n:host ::ng-deep .crud-content .card-body,\n:host ::ng-deep .crud-content .card-block,\n:host ::ng-deep .crud-content form.form {\n   display: -webkit-box;\n   display: flex;\n   -webkit-box-orient: vertical;\n   -webkit-box-direction: normal;\n           flex-direction: column;\n}\r\n\r\n:host ::ng-deep .crud-content .card-body,\n:host ::ng-deep .crud-content .card-block {\n   height: calc(100vh - 150px);\n   min-height: 0;\n}\r\n\r\n:host ::ng-deep .crud-content form.form {\n   -webkit-box-flex: 1;\n           flex: 1 1 auto;\n   min-height: 0;\n}\r\n\r\n:host ::ng-deep .crud-content .card-block > form.form > .form-body {\n   display: -webkit-box;\n   display: flex;\n   -webkit-box-flex: 1;\n           flex: 1 1 auto;\n   -webkit-box-orient: vertical;\n   -webkit-box-direction: normal;\n           flex-direction: column;\n   min-height: 0;\n   padding-bottom: 0.25rem;\n   overflow-x: hidden;\n   overflow-y: visible;\n}\r\n\r\n:host ::ng-deep .crud-content .box-footer {\n   -webkit-box-flex: 0;\n           flex: 0 0 auto;\n}\r\n\r\n:host ::ng-deep .content-form .form-actions {\n   margin-top: 10px;\n   padding: 20px 0 0;\n}\r\n\r\n:host ::ng-deep .page-link {\r\n   line-height: 1rem;\r\n}\r\n\r\n:host ::ng-deep .btn-orange {\r\n   background-color: #FDD835;\r\n   color: white;\r\n}\r\n\r\n:host ::ng-deep th[sortable-column] {\r\n   cursor: pointer;\r\n}\r\n\r\n:host ::ng-deep .switch100>span.switch {\r\n   width: 100%;\r\n}\r\n\r\n:host ::ng-deep.switch.checked {\r\n   background: #34b563!important;}\r\n\r\n:host ::ng-deep.switch.switch-medium {\r\n   background: #bf2025;\r\n   color:#fff;\r\n   height: 20px;\r\n   border-radius: 20px;\r\n}\r\n\r\n:host ::ng-deep.switch.switch-medium small {\r\n   width: 20px;\r\n   height: 20px;\r\n   }\r\n\r\n:host ::ng-deep.switch.switch-medium > .switch-pane > span {\r\n      font-size: 14px;\r\n      line-height: 20px;}\r\n\r\n:host ::ng-deep .control-label {\r\n   margin-top: .5rem;\r\n   margin-bottom: 0;\r\n}\r\n\r\n:host ::ng-deep .table-wrapper-scroll-x {\r\n   display: block;\r\n   max-width: auto;\r\n   margin: 0 auto;\r\n   overflow-x: auto;\r\n   -ms-overflow-style: -ms-autohiding-scrollbar;\r\n}\r\n\r\n:host ::ng-deep .table-fixed {\r\n   table-layout: fixed;\r\n}\r\n\r\n:host ::ng-deep .table-wrapper-scroll-y {\n   -webkit-box-flex: 1;\n           flex: 1 1 auto;\n   max-height: none;\n   min-height: 280px;\n   overflow-y: auto;\n}\r\n\r\n:host ::ng-deep .crud-content .table-wrapper-scroll-y {\n   max-height: calc(100vh - 260px);\n   min-height: 280px;\n}\r\n\r\n:host ::ng-deep .crud-actions {\n   -webkit-box-align: center;\n           align-items: center;\n   background: #f7f7f7;\n   border-top: 1px solid #d9d9d9;\n   bottom: 22px;\n   box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.06);\n   display: -webkit-box;\n   display: flex;\n   flex-wrap: wrap;\n   gap: 0.35rem;\n   -webkit-box-pack: end;\n           justify-content: flex-end;\n   margin: 0 -0.5rem -0.5rem;\n   padding: 0.25rem 0.5rem;\n   position: -webkit-sticky;\n   position: sticky;\n   z-index: 20;\n}\r\n\r\n:host ::ng-deep .crud-content form.form > .crud-actions,\n:host ::ng-deep .crud-content form.form > app-botoes-lista,\n:host ::ng-deep .crud-content form.form > app-botoes-cadastro {\n   -webkit-box-flex: 0;\n           flex: 0 0 auto;\n}\r\n\r\n:host ::ng-deep .row.crud-actions {\n   margin-left: -0.5rem;\n   margin-right: -0.5rem;\n}\r\n\r\n:host ::ng-deep .row.crud-actions > [class*=\"col-\"],\n:host ::ng-deep .crud-actions > .col-md-12 {\n   max-width: 100%;\n   padding-left: 0;\n   padding-right: 0;\n   width: 100%;\n}\r\n\r\n:host ::ng-deep .crud-actions.modal-footer {\n   border-left: 0;\n   border-right: 0;\n   border-bottom: 0;\n}\r\n\r\n:host ::ng-deep app-botoes-cadastro .crud-actions {\n   bottom: auto;\n   margin-top: 0.5rem;\n   margin-bottom: 0;\n   position: static;\n}\r\n\r\n:host ::ng-deep .crud-content app-botoes-cadastro {\n   display: block;\n   padding-bottom: 1.75rem;\n}\r\n\r\n:host ::ng-deep .crud-actions .btn,\n:host ::ng-deep .crud-actions button {\n   margin-bottom: 0.1rem;\n   margin-top: 0.1rem;\n   padding-bottom: 0.55rem;\n   padding-top: 0.55rem;\n   white-space: normal;\n}\r\n\r\n:host ::ng-deep .crud-actions > span,\n:host ::ng-deep .crud-actions > div {\n   -webkit-box-align: center;\n           align-items: center;\n   display: -webkit-box !important;\n   display: flex !important;\n   flex-wrap: wrap;\n   gap: 0.35rem;\n   -webkit-box-pack: end;\n           justify-content: flex-end;\n}\r\n\r\n:host ::ng-deep .crud-actions .crud-actions {\n   background: transparent;\n   border-top: 0;\n   box-shadow: none;\n   margin: 0;\n   padding: 0;\n   position: static;\n}\r\n\r\n:host ::ng-deep .table-wrapper-scroll-yy {\r\n   max-height: 138px;\r\n   overflow-y: overlay;\r\n}\r\n\r\n:host ::ng-deep table th {\r\n   border:none;\r\n   color:#595959;\r\n   font-weight: normal;\r\n   font-size: 1.1rem;\r\n   position: -webkit-sticky;\r\n   position: sticky;\r\n   text-align:center;\r\n   background: #f7f7f7;\r\n   border-bottom: 1px solid #a6a9ae;\r\n   padding: 1.2rem 0.45rem;\r\n   border-collapse: collapse;\r\n   top: 0;\r\n}\r\n\r\n:host ::ng-deep .btn.btn-file {\r\n   position: relative;\r\n   overflow: hidden;\r\n}\r\n\r\n:host ::ng-deep .btn.btn-file>input[type='file'] {\r\n   position: absolute;\r\n   top: 0;\r\n   right: 0;\r\n   min-width: 100%;\r\n   min-height: 100%;\r\n   font-size: 100px;\r\n   text-align: right;\r\n   opacity: 0;\r\n   filter: alpha(opacity=0);\r\n   outline: none;\r\n   background: white;\r\n   cursor: inherit;\r\n   display: block;\r\n}\r\n\r\n:host ::ng-deep .table td {\n   border-top:none;\n   padding: 0.32rem 0.45rem;\n   vertical-align: middle;\n}\r\n\r\n:host ::ng-deep app-complete-tab-form .table td {\n   padding: 0.4rem;\r\n   vertical-align: middle;\n}\r\n\r\n:host ::ng-deep .table tbody tr:nth-child(even):not(.linhaSelecionada):not(.linhaSelecionada2) {\n   background-color: #f1fbf5;\n}\r\n\r\n:host ::ng-deep .table tbody tr:nth-child(odd):not(.linhaSelecionada):not(.linhaSelecionada2) {\n   background-color: #ffffff;\n}\r\n\r\n:host ::ng-deep .table tbody tr:hover:not(.linhaSelecionada):not(.linhaSelecionada2) {\n   background-color: #e7f7ee;\n}\r\n\r\n:host ::ng-deep .table tbody td span {\r\n   white-space: nowrap;\r\n   overflow: hidden;\r\n   text-overflow: ellipsis;\r\n   display: block;\r\n}\r\n\r\n:host ::ng-deep .table thead {\r\n   background:#f7f7f7;\r\n }\r\n\r\n:host ::ng-deep .card-fullscreen {\r\n   padding: 20px 0;\r\n  /* background-color: #f5f7fa;*/\r\n   display: block;\r\n   z-index: 9999;\r\n   position: fixed;\r\n   width: 100% !important;\r\n   height: 100% !important;\r\n   top: 0;\r\n   right: 0;\r\n   left: 0;\r\n   bottom: 0;\r\n   overflow: auto;\r\n}\r\n\r\n:host ::ng-deep .label-radio-check {\r\n   font-size: 1rem;\r\n   font-weight: normal;\r\n   margin: 6px 0;\r\n   text-transform: none;\r\n}\r\n\r\n:host ::ng-deep button[disabled] {\r\n   cursor: not-allowed;\r\n}\r\n\r\n:host ::ng-deep .readonlyDiv {\r\n   pointer-events: none;\r\n   opacity: 0.6;\r\n}\r\n\r\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\r\n   max-height: 32px;\r\n   min-height: 32px;\r\n}\r\n\r\n:host ::ng-deep .table-border-style {\r\n   border-bottom: #a6a9ae 1px solid;\r\n   border-radius: 0.25rem;\r\n   border-collapse: collapse;\r\n}\r\n\r\n::ng-deep .mat-tab-body-content {\n  overflow: visible !important;\n}\r\n\r\n@media (max-width: 767px) {\n   :host ::ng-deep .content-header {\n      font-size: 1.1rem;\n      padding-left: 0.5rem !important;\n      padding-right: 0.5rem !important;\n   }\n\n   :host ::ng-deep .crud-content .card {\n      min-height: calc(100vh - 125px);\n   }\n\n   :host ::ng-deep .crud-content .table-wrapper-scroll-y {\n      max-height: none;\n      min-height: 260px;\n   }\n\n   :host ::ng-deep .content-form .card .card-block {\n      padding: 0.35rem;\n   }\n\n   :host ::ng-deep .table-wrapper-scroll-x {\n      width: 100%;\n   }\n\n   :host ::ng-deep .table th,\n   :host ::ng-deep .table td {\n      font-size: 0.85rem;\n      padding: 0.35rem;\n   }\n\n   :host ::ng-deep .table th {\n      padding-top: 0.6rem;\n      padding-bottom: 0.6rem;\n   }\n\n   :host ::ng-deep .crud-actions {\n      -webkit-box-pack: stretch;\n              justify-content: stretch;\n      margin-left: -0.35rem;\n      margin-right: -0.35rem;\n      padding: 0.55rem 0.35rem;\n   }\n\n   :host ::ng-deep .crud-actions .btn,\n   :host ::ng-deep .crud-actions button {\n      -webkit-box-flex: 1;\n              flex: 1 1 130px;\n      font-size: 0.9rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n   }\n\n   :host ::ng-deep .crud-actions > span,\n   :host ::ng-deep .crud-actions > div {\n      -webkit-box-flex: 1;\n              flex: 1 1 100%;\n      -webkit-box-pack: stretch;\n              justify-content: stretch;\n   }\n}\r\n\r\n.control-label {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\r\n\r\n.label-radio-check {\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 6px 0;\n  text-transform: none;\n}\r\n\r\n:host ::ng-deep .ng-select-container {\n  border-color: inherit;\n}\r\n\r\n:host ::ng-deep .switch100 > span.switch {\n  width: 100%;\n}\r\n\r\n:host ::ng-deep .linhaSelecionada {\n  background-color: #cde;\n}\r\n\r\n.sw-input-group {\n  margin-bottom: 0;\n}\r\n\r\n.sw-input-group input {\n  border-right-style: none;\n}\r\n\r\n.sw-input-group .input-group-btn {\n  z-index: 2;\n}\r\n\r\n.sw-input-group .input-group-btn button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\r\n\r\n.sw-input-group .input-group-btn button[disabled] {\n  pointer-events: none;\n}\r\n\r\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\r\n\r\n.btn.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\r\n\r\n:host ::ng-deep button[disabled] {\n  cursor: not-allowed;\n}\r\n\r\n:host ::ng-deep .table-wrapper-scroll-x {\n  display: block;\n  max-width: auto;\n  margin: 0 auto;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\r\n\r\n:host ::ng-deep .table-fixed {\n  table-layout: fixed;\n}\r\n\r\n:host ::ng-deep .table-wrapper-scroll-y {\n  max-height: 300px;\n  min-height: 200px;\n  overflow-y: auto;\n}\r\n\r\n:host ::ng-deep .alert-custom .alert {\n  margin-bottom: 0.25em;\n}\r\n\r\n:host ::ng-deep ngb-rating .star {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\r\n\r\n:host ::ng-deep ngb-rating .star.filled {\n  color: gold;\n}\r\n\r\ntable td {\n  padding: 0.4rem;\n  vertical-align: middle;\n}\r\n\r\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\n  max-height: 32px;\n  min-height: 32px;\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlnL3RpcG9Eb2N1bWVudG8vbW9kYWwvdGlwb0RvY3VtZW50b1BhcGVsTW9kYWwvRDpcXEFzc2luYS5OZXRcXFByb2pldG9zXFxHaXRIdWJcXEFzc2luYS5OZXQuUG9ydGFsXFxhc3NpbmEubmV0LndlYi5wb3J0YWwtdjEvc3JjXFxhc3NldHNcXHNhc3NcXF9tb2RhbC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbmZpZy90aXBvRG9jdW1lbnRvL21vZGFsL3RpcG9Eb2N1bWVudG9QYXBlbE1vZGFsL3RpcG9Eb2N1bWVudG8tcGFwZWwtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7O0VBRUU7O0FBRUY7R0FDRywrRUFBK0U7QUFDbEY7O0FBRUE7R0FDRyxlQUFlO0FBQ2xCOztBQUVBOztFQUVFOztBQUVGO0dBQ0csY0FBYztBQUNqQjs7QUFFQTtHQUNHLHFCQUFxQjtBQUN4Qjs7QUFFQTtHQUNHLHNCQUFzQjtBQUN6Qjs7QUFFQTtHQUNHLHdCQUF3QjtBQUMzQjs7QUFFQTtHQUNHLGtCQUFrQjs7QUFFckI7O0FBRUE7R0FDRyxzQkFBc0I7QUFDekI7O0FBRUE7R0FDRyxTQUFTO0FBQ1o7O0FBRUE7R0FDRyxlQUFlO0FBQ2xCOztBQUVBO0dBQ0csMkJBQTJCO0dBQzNCLGFBQWE7R0FDYixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxhQUFhO0dBQ2IsZ0JBQWdCO0FBQ25COztBQUVBOzs7O0dBSUcsMkJBQTJCO0dBQzNCLDZCQUE2QjtBQUNoQzs7QUFFQTtHQUNHLHdCQUF3QjtBQUMzQjs7QUFFQTtHQUNHLHNDQUFzQztHQUN0Qyx3QkFBd0I7QUFDM0I7O0FBRUE7Ozs7O0dBS0csYUFBYTtHQUNiLDhCQUE4QjtBQUNqQzs7QUFFQTtHQUNHLDJCQUEyQjtHQUMzQixhQUFhO0FBQ2hCOztBQUVBOzs7R0FHRyxvQkFBYTtHQUFiLGFBQWE7R0FDYiw0QkFBc0I7R0FBdEIsNkJBQXNCO1dBQXRCLHNCQUFzQjtBQUN6Qjs7QUFFQTs7R0FFRywyQkFBMkI7R0FDM0IsYUFBYTtBQUNoQjs7QUFFQTtHQUNHLG1CQUFjO1dBQWQsY0FBYztHQUNkLGFBQWE7QUFDaEI7O0FBRUE7R0FDRyxvQkFBYTtHQUFiLGFBQWE7R0FDYixtQkFBYztXQUFkLGNBQWM7R0FDZCw0QkFBc0I7R0FBdEIsNkJBQXNCO1dBQXRCLHNCQUFzQjtHQUN0QixhQUFhO0dBQ2IsdUJBQXVCO0dBQ3ZCLGtCQUFrQjtHQUNsQixtQkFBbUI7QUFDdEI7O0FBRUE7R0FDRyxtQkFBYztXQUFkLGNBQWM7QUFDakI7O0FBRUE7R0FDRyxnQkFBZ0I7R0FDaEIsaUJBQWlCO0FBQ3BCOztBQUVBO0dBQ0csaUJBQWlCO0FBQ3BCOztBQUVBO0dBQ0cseUJBQXlCO0dBQ3pCLFlBQVk7QUFDZjs7QUFFQTtHQUNHLGVBQWU7QUFDbEI7O0FBRUE7R0FDRyxXQUFXO0FBQ2Q7O0FBQ0E7R0FDRyw2QkFBNkIsQ0FBQzs7QUFFakM7R0FDRyxtQkFBbUI7R0FDbkIsVUFBVTtHQUNWLFlBQVk7R0FDWixtQkFBbUI7QUFDdEI7O0FBQ0E7R0FDRyxXQUFXO0dBQ1gsWUFBWTtHQUNaOztBQUVBO01BQ0csZUFBZTtNQUNmLGlCQUFpQixDQUFDOztBQUV4QjtHQUNHLGlCQUFpQjtHQUNqQixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxjQUFjO0dBQ2QsZUFBZTtHQUNmLGNBQWM7R0FDZCxnQkFBZ0I7R0FDaEIsNENBQTRDO0FBQy9DOztBQUVBO0dBQ0csbUJBQW1CO0FBQ3RCOztBQUVBO0dBQ0csbUJBQWM7V0FBZCxjQUFjO0dBQ2QsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRywrQkFBK0I7R0FDL0IsaUJBQWlCO0FBQ3BCOztBQUVBO0dBQ0cseUJBQW1CO1dBQW5CLG1CQUFtQjtHQUNuQixtQkFBbUI7R0FDbkIsNkJBQTZCO0dBQzdCLFlBQVk7R0FDWiwyQ0FBMkM7R0FDM0Msb0JBQWE7R0FBYixhQUFhO0dBQ2IsZUFBZTtHQUNmLFlBQVk7R0FDWixxQkFBeUI7V0FBekIseUJBQXlCO0dBQ3pCLHlCQUF5QjtHQUN6Qix1QkFBdUI7R0FDdkIsd0JBQWdCO0dBQWhCLGdCQUFnQjtHQUNoQixXQUFXO0FBQ2Q7O0FBRUE7OztHQUdHLG1CQUFjO1dBQWQsY0FBYztBQUNqQjs7QUFFQTtHQUNHLG9CQUFvQjtHQUNwQixxQkFBcUI7QUFDeEI7O0FBRUE7O0dBRUcsZUFBZTtHQUNmLGVBQWU7R0FDZixnQkFBZ0I7R0FDaEIsV0FBVztBQUNkOztBQUVBO0dBQ0csY0FBYztHQUNkLGVBQWU7R0FDZixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxjQUFjO0dBQ2QsdUJBQXVCO0FBQzFCOztBQUVBOztHQUVHLHFCQUFxQjtHQUNyQixrQkFBa0I7R0FDbEIsdUJBQXVCO0dBQ3ZCLG9CQUFvQjtHQUNwQixtQkFBbUI7QUFDdEI7O0FBRUE7O0dBRUcseUJBQW1CO1dBQW5CLG1CQUFtQjtHQUNuQiwrQkFBd0I7R0FBeEIsd0JBQXdCO0dBQ3hCLGVBQWU7R0FDZixZQUFZO0dBQ1oscUJBQXlCO1dBQXpCLHlCQUF5QjtBQUM1Qjs7QUFFQTtHQUNHLHVCQUF1QjtHQUN2QixhQUFhO0dBQ2IsZ0JBQWdCO0dBQ2hCLFNBQVM7R0FDVCxVQUFVO0dBQ1YsZ0JBQWdCO0FBQ25COztBQUVBO0dBQ0csaUJBQWlCO0dBQ2pCLG1CQUFtQjtBQUN0Qjs7QUFFQTtHQUNHLFdBQVc7R0FDWCxhQUFhO0dBQ2IsbUJBQW1CO0dBQ25CLGlCQUFpQjtHQUNqQix3QkFBZ0I7R0FBaEIsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixtQkFBbUI7R0FDbkIsZ0NBQWdDO0dBQ2hDLHVCQUF1QjtHQUN2Qix5QkFBeUI7R0FDekIsTUFBTTtBQUNUOztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLGdCQUFnQjtBQUNuQjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixNQUFNO0dBQ04sUUFBUTtHQUNSLGVBQWU7R0FDZixnQkFBZ0I7R0FDaEIsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixVQUFVO0dBQ1Ysd0JBQXdCO0dBQ3hCLGFBQWE7R0FDYixpQkFBaUI7R0FDakIsZUFBZTtHQUNmLGNBQWM7QUFDakI7O0FBRUE7R0FDRyxlQUFlO0dBQ2Ysd0JBQXdCO0dBQ3hCLHNCQUFzQjtBQUN6Qjs7QUFFQTtHQUNHLGVBQWU7R0FDZixzQkFBc0I7QUFDekI7O0FBRUE7R0FDRyx5QkFBeUI7QUFDNUI7O0FBRUE7R0FDRyx5QkFBeUI7QUFDNUI7O0FBRUE7R0FDRyx5QkFBeUI7QUFDNUI7O0FBRUE7R0FDRyxtQkFBbUI7R0FDbkIsZ0JBQWdCO0dBQ2hCLHVCQUF1QjtHQUN2QixjQUFjO0FBQ2pCOztBQUVBO0dBQ0csa0JBQWtCO0NBQ3BCOztBQUVEO0dBQ0csZUFBZTtFQUNoQiw4QkFBOEI7R0FDN0IsY0FBYztHQUNkLGFBQWE7R0FDYixlQUFlO0dBQ2Ysc0JBQXNCO0dBQ3RCLHVCQUF1QjtHQUN2QixNQUFNO0dBQ04sUUFBUTtHQUNSLE9BQU87R0FDUCxTQUFTO0dBQ1QsY0FBYztBQUNqQjs7QUFFQTtHQUNHLGVBQWU7R0FDZixtQkFBbUI7R0FDbkIsYUFBYTtHQUNiLG9CQUFvQjtBQUN2Qjs7QUFFQTtHQUNHLG1CQUFtQjtBQUN0Qjs7QUFFQTtHQUNHLG9CQUFvQjtHQUNwQixZQUFZO0FBQ2Y7O0FBRUE7R0FDRyxnQkFBZ0I7R0FDaEIsZ0JBQWdCO0FBQ25COztBQUVBO0dBQ0csZ0NBQWdDO0dBQ2hDLHNCQUFzQjtHQUN0Qix5QkFBeUI7QUFDNUI7O0FBR0E7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7R0FDRztNQUNHLGlCQUFpQjtNQUNqQiwrQkFBK0I7TUFDL0IsZ0NBQWdDO0dBQ25DOztHQUVBO01BQ0csK0JBQStCO0dBQ2xDOztHQUVBO01BQ0csZ0JBQWdCO01BQ2hCLGlCQUFpQjtHQUNwQjs7R0FFQTtNQUNHLGdCQUFnQjtHQUNuQjs7R0FFQTtNQUNHLFdBQVc7R0FDZDs7R0FFQTs7TUFFRyxrQkFBa0I7TUFDbEIsZ0JBQWdCO0dBQ25COztHQUVBO01BQ0csbUJBQW1CO01BQ25CLHNCQUFzQjtHQUN6Qjs7R0FFQTtNQUNHLHlCQUF3QjtjQUF4Qix3QkFBd0I7TUFDeEIscUJBQXFCO01BQ3JCLHNCQUFzQjtNQUN0Qix3QkFBd0I7R0FDM0I7O0dBRUE7O01BRUcsbUJBQWU7Y0FBZixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLG9CQUFvQjtNQUNwQixxQkFBcUI7R0FDeEI7O0dBRUE7O01BRUcsbUJBQWM7Y0FBZCxjQUFjO01BQ2QseUJBQXdCO2NBQXhCLHdCQUF3QjtHQUMzQjtBQUNIOztBQzViQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNMSDs7QURRQTtFQUNHLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ0xIOztBRFFBO0VBQ0cscUJBQUE7QUNMSDs7QURRQTtFQUNHLFdBQUE7QUNMSDs7QURRQTtFQUNHLHNCQUFBO0FDTEg7O0FEUUE7RUFDRyxnQkFBQTtBQ0xIOztBRE9HO0VBQ0csd0JBQUE7QUNMTjs7QURRRztFQUNHLFVBQUE7QUNOTjs7QURRTTtFQUNHLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQ05UOztBRFNNO0VBQ0csb0JBQUE7QUNQVDs7QURZQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNUSDs7QURXRztFQUNHLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNUTjs7QURhQTtFQUNHLG1CQUFBO0FDVkg7O0FEYUE7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FDVkg7O0FEYUE7RUFDRyxtQkFBQTtBQ1ZIOztBRGFBO0VBQ0csaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDVkg7O0FEYUE7RUFDRyxxQkFBQTtBQ1ZIOztBRGFBO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0FDVkg7O0FEYUc7RUFDRyxXQUFBO0FDWE47O0FEZUE7RUFDRyxlQUFBO0VBQ0Esc0JBQUE7QUNaSDs7QURlQTtFQUNHLGdCQUFBO0VBQ0EsZ0JBQUE7QUNaSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlnL3RpcG9Eb2N1bWVudG8vbW9kYWwvdGlwb0RvY3VtZW50b1BhcGVsTW9kYWwvdGlwb0RvY3VtZW50by1wYXBlbC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5zZWN0aW9uIHtcclxuICBtaW4taGVpZ2h0OiA4OS4zJTtcclxufSAqL1xyXG5cclxuLyo6aG9zdCA6Om5nLWRlZXAgLnRhYmxlIC50aGVhZC1jdXN0b20gdGgge1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59Ki9cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZm9udC1mYW1pbHktcnViaWsge1xyXG4gICBmb250LWZhbWlseTogJ1J1YmlrJywgJ1NlZ29lIFVJJywgJ1JvYm90bycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc3ctc3BpbmVyIDo6bmctZGVlcCAuYmxhY2stb3ZlcmxheSB7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLyouc3ctc3BpbmVyIDo6bmctZGVlcCAubG9hZGluZy10ZXh0IHtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG59Ki9cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucHJvZ3Jlc3Mge1xyXG4gICBoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpbmhhU2VsZWNpb25hZGEge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpbmhhU2VsZWNpb25hZGEyIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRlbnQtaGVhZGVyIHtcclxuICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG5cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LXN1Yi1oZWFkZXIge1xyXG4gICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRlbnQtZm9ybSAuY2FyZCB7XHJcbiAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LWZvcm0gLmNhcmQgLmNhcmQtYmxvY2sge1xuICAgcGFkZGluZzogMC41cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtcGFnZSB7XG4gICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTJweCk7XG4gICBtaW4taGVpZ2h0OiAwO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC53cmFwcGVyIHtcbiAgIGhlaWdodDogMTAwdmg7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1haW4tcGFuZWwsXG46aG9zdCA6Om5nLWRlZXAgLm1haW4tY29udGVudCxcbjpob3N0IDo6bmctZGVlcCAuY29udGVudC13cmFwcGVyLFxuOmhvc3QgOjpuZy1kZWVwIC5jb250YWluZXItZmx1aWQge1xuICAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWFpbi1wYW5lbCB7XG4gICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWFpbi1jb250ZW50IHtcbiAgIGhlaWdodDogY2FsYygxMDB2aCAtIDExMnB4KSAhaW1wb3J0YW50O1xuICAgbWluLWhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCxcbjpob3N0IDo6bmctZGVlcCAuY3J1ZC1jb250ZW50IC5jb250ZW50LWJvZHksXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCAuY2FyZCxcbjpob3N0IDo6bmctZGVlcCAuY3J1ZC1jb250ZW50IC5jYXJkLWJvZHksXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCAuY2FyZC1ibG9jayB7XG4gICBtaW4taGVpZ2h0OiAwO1xuICAgb3ZlcmZsb3cteTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCAuY2FyZCB7XG4gICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XG4gICBtaW4taGVpZ2h0OiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCAuY2FyZC1ib2R5LFxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgLmNhcmQtYmxvY2ssXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCBmb3JtLmZvcm0ge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3J1ZC1jb250ZW50IC5jYXJkLWJvZHksXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCAuY2FyZC1ibG9jayB7XG4gICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XG4gICBtaW4taGVpZ2h0OiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCBmb3JtLmZvcm0ge1xuICAgZmxleDogMSAxIGF1dG87XG4gICBtaW4taGVpZ2h0OiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCAuY2FyZC1ibG9jayA+IGZvcm0uZm9ybSA+IC5mb3JtLWJvZHkge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXg6IDEgMSBhdXRvO1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIG1pbi1oZWlnaHQ6IDA7XG4gICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgIG92ZXJmbG93LXk6IHZpc2libGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3J1ZC1jb250ZW50IC5ib3gtZm9vdGVyIHtcbiAgIGZsZXg6IDAgMCBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRlbnQtZm9ybSAuZm9ybS1hY3Rpb25zIHtcbiAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICBwYWRkaW5nOiAyMHB4IDAgMDtcbn1cblxyXG46aG9zdCA6Om5nLWRlZXAgLnBhZ2UtbGluayB7XHJcbiAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1vcmFuZ2Uge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkREODM1O1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB0aFtzb3J0YWJsZS1jb2x1bW5dIHtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaDEwMD5zcGFuLnN3aXRjaCB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcC5zd2l0Y2guY2hlY2tlZCB7XHJcbiAgIGJhY2tncm91bmQ6ICMzNGI1NjMhaW1wb3J0YW50O31cclxuXHJcbjpob3N0IDo6bmctZGVlcC5zd2l0Y2guc3dpdGNoLW1lZGl1bSB7XHJcbiAgIGJhY2tncm91bmQ6ICNiZjIwMjU7XHJcbiAgIGNvbG9yOiNmZmY7XHJcbiAgIGhlaWdodDogMjBweDtcclxuICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAuc3dpdGNoLnN3aXRjaC1tZWRpdW0gc21hbGwge1xyXG4gICB3aWR0aDogMjBweDtcclxuICAgaGVpZ2h0OiAyMHB4O1xyXG4gICB9XHJcblxyXG4gICA6aG9zdCA6Om5nLWRlZXAuc3dpdGNoLnN3aXRjaC1tZWRpdW0gPiAuc3dpdGNoLXBhbmUgPiBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDt9XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRyb2wtbGFiZWwge1xyXG4gICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC14IHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIG1heC13aWR0aDogYXV0bztcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWZpeGVkIHtcclxuICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcbiAgIGZsZXg6IDEgMSBhdXRvO1xuICAgbWF4LWhlaWdodDogbm9uZTtcbiAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xuICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xuICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI2MHB4KTtcbiAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtYWN0aW9ucyB7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICAgYm90dG9tOiAyMnB4O1xuICAgYm94LXNoYWRvdzogMCAtNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LXdyYXA6IHdyYXA7XG4gICBnYXA6IDAuMzVyZW07XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgbWFyZ2luOiAwIC0wLjVyZW0gLTAuNXJlbTtcbiAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgcG9zaXRpb246IHN0aWNreTtcbiAgIHotaW5kZXg6IDIwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCBmb3JtLmZvcm0gPiAuY3J1ZC1hY3Rpb25zLFxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgZm9ybS5mb3JtID4gYXBwLWJvdG9lcy1saXN0YSxcbjpob3N0IDo6bmctZGVlcCAuY3J1ZC1jb250ZW50IGZvcm0uZm9ybSA+IGFwcC1ib3RvZXMtY2FkYXN0cm8ge1xuICAgZmxleDogMCAwIGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAucm93LmNydWQtYWN0aW9ucyB7XG4gICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcbiAgIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5yb3cuY3J1ZC1hY3Rpb25zID4gW2NsYXNzKj1cImNvbC1cIl0sXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtYWN0aW9ucyA+IC5jb2wtbWQtMTIge1xuICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgcGFkZGluZy1yaWdodDogMDtcbiAgIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtYWN0aW9ucy5tb2RhbC1mb290ZXIge1xuICAgYm9yZGVyLWxlZnQ6IDA7XG4gICBib3JkZXItcmlnaHQ6IDA7XG4gICBib3JkZXItYm90dG9tOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYXBwLWJvdG9lcy1jYWRhc3RybyAuY3J1ZC1hY3Rpb25zIHtcbiAgIGJvdHRvbTogYXV0bztcbiAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgIG1hcmdpbi1ib3R0b206IDA7XG4gICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCBhcHAtYm90b2VzLWNhZGFzdHJvIHtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgcGFkZGluZy1ib3R0b206IDEuNzVyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3J1ZC1hY3Rpb25zIC5idG4sXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtYWN0aW9ucyBidXR0b24ge1xuICAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xuICAgbWFyZ2luLXRvcDogMC4xcmVtO1xuICAgcGFkZGluZy1ib3R0b206IDAuNTVyZW07XG4gICBwYWRkaW5nLXRvcDogMC41NXJlbTtcbiAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3J1ZC1hY3Rpb25zID4gc3Bhbixcbjpob3N0IDo6bmctZGVlcCAuY3J1ZC1hY3Rpb25zID4gZGl2IHtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICBmbGV4LXdyYXA6IHdyYXA7XG4gICBnYXA6IDAuMzVyZW07XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtYWN0aW9ucyAuY3J1ZC1hY3Rpb25zIHtcbiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgYm9yZGVyLXRvcDogMDtcbiAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICBtYXJnaW46IDA7XG4gICBwYWRkaW5nOiAwO1xuICAgcG9zaXRpb246IHN0YXRpYztcbn1cblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXl5IHtcclxuICAgbWF4LWhlaWdodDogMTM4cHg7XHJcbiAgIG92ZXJmbG93LXk6IG92ZXJsYXk7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB0YWJsZSB0aCB7XHJcbiAgIGJvcmRlcjpub25lO1xyXG4gICBjb2xvcjojNTk1OTU5O1xyXG4gICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTZhOWFlO1xyXG4gICBwYWRkaW5nOiAxLjJyZW0gMC40NXJlbTtcclxuICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgdG9wOiAwO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi5idG4tZmlsZSB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5idG4uYnRuLWZpbGU+aW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICB0b3A6IDA7XHJcbiAgIHJpZ2h0OiAwO1xyXG4gICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBvcGFjaXR5OiAwO1xyXG4gICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgIG91dGxpbmU6IG5vbmU7XHJcbiAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICBjdXJzb3I6IGluaGVyaXQ7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRkIHtcbiAgIGJvcmRlci10b3A6bm9uZTtcbiAgIHBhZGRpbmc6IDAuMzJyZW0gMC40NXJlbTtcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBhcHAtY29tcGxldGUtdGFiLWZvcm0gLnRhYmxlIHRkIHtcbiAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbik6bm90KC5saW5oYVNlbGVjaW9uYWRhKTpub3QoLmxpbmhhU2VsZWNpb25hZGEyKSB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmYmY1O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChvZGQpOm5vdCgubGluaGFTZWxlY2lvbmFkYSk6bm90KC5saW5oYVNlbGVjaW9uYWRhMikge1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZSB0Ym9keSB0cjpob3Zlcjpub3QoLmxpbmhhU2VsZWNpb25hZGEpOm5vdCgubGluaGFTZWxlY2lvbmFkYTIpIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlN2Y3ZWU7XG59XG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZSB0Ym9keSB0ZCBzcGFuIHtcclxuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRoZWFkIHtcclxuICAgYmFja2dyb3VuZDojZjdmN2Y3O1xyXG4gfVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkLWZ1bGxzY3JlZW4ge1xyXG4gICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYTsqL1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgei1pbmRleDogOTk5OTtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgdG9wOiAwO1xyXG4gICByaWdodDogMDtcclxuICAgbGVmdDogMDtcclxuICAgYm90dG9tOiAwO1xyXG4gICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5sYWJlbC1yYWRpby1jaGVjayB7XHJcbiAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgbWFyZ2luOiA2cHggMDtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5yZWFkb25seURpdiB7XHJcbiAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICBtYXgtaGVpZ2h0OiAzMnB4O1xyXG4gICBtaW4taGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWJvcmRlci1zdHlsZSB7XHJcbiAgIGJvcmRlci1ib3R0b206ICNhNmE5YWUgMXB4IHNvbGlkO1xyXG4gICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LWhlYWRlciB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgIH1cblxuICAgOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgLmNhcmQge1xuICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEyNXB4KTtcbiAgIH1cblxuICAgOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xuICAgICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICAgIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICAgfVxuXG4gICA6aG9zdCA6Om5nLWRlZXAgLmNvbnRlbnQtZm9ybSAuY2FyZCAuY2FyZC1ibG9jayB7XG4gICAgICBwYWRkaW5nOiAwLjM1cmVtO1xuICAgfVxuXG4gICA6aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXgge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG5cbiAgIDpob3N0IDo6bmctZGVlcCAudGFibGUgdGgsXG4gICA6aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRkIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgIHBhZGRpbmc6IDAuMzVyZW07XG4gICB9XG5cbiAgIDpob3N0IDo6bmctZGVlcCAudGFibGUgdGgge1xuICAgICAgcGFkZGluZy10b3A6IDAuNnJlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjZyZW07XG4gICB9XG5cbiAgIDpob3N0IDo6bmctZGVlcCAuY3J1ZC1hY3Rpb25zIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMC4zNXJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLTAuMzVyZW07XG4gICAgICBwYWRkaW5nOiAwLjU1cmVtIDAuMzVyZW07XG4gICB9XG5cbiAgIDpob3N0IDo6bmctZGVlcCAuY3J1ZC1hY3Rpb25zIC5idG4sXG4gICA6aG9zdCA6Om5nLWRlZXAgLmNydWQtYWN0aW9ucyBidXR0b24ge1xuICAgICAgZmxleDogMSAxIDEzMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgIH1cblxuICAgOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWFjdGlvbnMgPiBzcGFuLFxuICAgOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWFjdGlvbnMgPiBkaXYge1xuICAgICAgZmxleDogMSAxIDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICB9XG59XG4iLCJcclxuXHJcbi5mb3JtLWJvZHkge1xyXG5cclxuXHJcbn1cclxuXHJcbi5jb250cm9sLWxhYmVsIHtcclxuICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sYWJlbC1yYWRpby1jaGVjayB7XHJcbiAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgbWFyZ2luOiA2cHggMDtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2gxMDA+c3Bhbi5zd2l0Y2gge1xyXG4gICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5oYVNlbGVjaW9uYWRhIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTtcclxufVxyXG5cclxuLnN3LWlucHV0LWdyb3VwIHtcclxuICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICB9XHJcblxyXG4gICAuaW5wdXQtZ3JvdXAtYnRuIHtcclxuICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG4uYnRuLmJ0bi1maWxlIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBjdXJzb3I6IGluaGVyaXQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC14IHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIG1heC13aWR0aDogYXV0bztcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWZpeGVkIHtcclxuICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmFsZXJ0LWN1c3RvbSAuYWxlcnQge1xyXG4gICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyIHtcclxuICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgIGNvbG9yOiAjYjBjNGRlO1xyXG5cclxuICAgLy8gRmlsbGVkIFN0YXJcclxuICAgJi5maWxsZWQge1xyXG4gICAgICBjb2xvcjogZ29sZDtcclxuICAgfVxyXG59XHJcblxyXG50YWJsZSB0ZCB7XHJcbiAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgIG1heC1oZWlnaHQ6IDMycHg7XHJcbiAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcblxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXBwLmNvbXBvbmVudC5jc3NcIjtcbi5jb250cm9sLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubGFiZWwtcmFkaW8tY2hlY2sge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogNnB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc3dpdGNoMTAwID4gc3Bhbi5zd2l0Y2gge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5oYVNlbGVjaW9uYWRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTtcbn1cblxuLnN3LWlucHV0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zdy1pbnB1dC1ncm91cCBpbnB1dCB7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbn1cbi5zdy1pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuIHtcbiAgei1pbmRleDogMjtcbn1cbi5zdy1pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuIGJ1dHRvbiB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuLnN3LWlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG4gYnV0dG9uW2Rpc2FibGVkXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYnRuLmJ0bi1maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJ0bi5idG4tZmlsZSBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjdXJzb3I6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1maXhlZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteSB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbGVydC1jdXN0b20gLmFsZXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmdiLXJhdGluZyAuc3RhciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2IwYzRkZTtcbn1cbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyLmZpbGxlZCB7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDMycHg7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/config/tipoDocumento/modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/config/tipoDocumento/modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: TipoDocumentoPapelModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoDocumentoPapelModalComponent", function() { return TipoDocumentoPapelModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TipoDocumentoPapelModalComponent = /** @class */ (function () {
    function TipoDocumentoPapelModalComponent(activeModal, shared) {
        this.activeModal = activeModal;
        this.shared = shared;
        this.papelEdit = { status: 'ATIVO', token: false, 'certificate': false, papel: { id: "", nome: "" } };
        this.papelList = [];
        this.modal = true;
    }
    TipoDocumentoPapelModalComponent.prototype.ngOnInit = function () {
        if (this.instance) {
            this.papelEdit = this.instance;
            //this.titulo = "Cadastro > " + this.origem + " > Editar Telefone";
        }
        else {
            this.papelEdit = { token: false, 'certificate': false, papel: { id: "", nome: "" } };
            //this.titulo = "Cadastro > " + this.origem + " > Novo Telefone"
        }
    };
    Object.defineProperty(TipoDocumentoPapelModalComponent.prototype, "dadosComplementares", {
        set: function (dadosComplementares) {
            this._dadosComplementares = dadosComplementares;
            if (dadosComplementares.comboPapeis != undefined) {
                this.papelList = dadosComplementares.comboPapeis;
            }
        },
        enumerable: true,
        configurable: true
    });
    TipoDocumentoPapelModalComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    TipoDocumentoPapelModalComponent.prototype.perfilUsuarioAdmin = function () {
        var result = this.shared.perfilUsuarioAdmin();
        return result;
    };
    TipoDocumentoPapelModalComponent.prototype.antesSalvarEvent = function () {
        var _this = this;
        var item = this.papelList.find(function (x) { return x.item_id == _this.papelEdit.papel.id; });
        if (item != undefined)
            this.papelEdit.papel.nome = item.item_text;
        this.instance = this.papelEdit;
    };
    TipoDocumentoPapelModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], TipoDocumentoPapelModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoDocumentoPapelModalComponent.prototype, "instance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TipoDocumentoPapelModalComponent.prototype, "listaOriginal", void 0);
    TipoDocumentoPapelModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assinar-modal',
            template: __webpack_require__(/*! raw-loader!./tipoDocumento-papel-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/tipoDocumento/modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component.html"),
            styles: [__webpack_require__(/*! ./tipoDocumento-papel-modal.component.scss */ "./src/app/components/config/tipoDocumento/modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], TipoDocumentoPapelModalComponent);
    return TipoDocumentoPapelModalComponent;
}());



/***/ }),

/***/ "./src/app/components/config/tipoDocumento/novo/novo-tipo-documento.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/config/tipoDocumento/novo/novo-tipo-documento.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padd {\n  padding: 30px 16px 0 12px;\n}\n\n.pdf-label {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.input-file {\n  display: none;\n}\n\n.pdfView {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border: 5px solid black;\n}\n\n#canvas {\n  width: 100%;\n  height: 100%;\n  border: 10px solid transparent;\n}\n\n.input-descricao div {\n  width: 500px;\n}\n\n.input-descricao {\n  padding-top: 5px;\n}\n\n.alinha {\n  margin-top: 25px;\n}\n\n.sw-fixed-width {\n  width: 90px;\n  min-width: 90px;\n}\n\n.wrapper {\n  margin: 16px 0;\n  padding: 8px;\n}\n\n.wrapper .row {\n  margin-bottom: 8px;\n}\n\n.m-input {\n  margin: 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maWcvdGlwb0RvY3VtZW50by9ub3ZvL0Q6XFxBc3NpbmEuTmV0XFxQcm9qZXRvc1xcR2l0SHViXFxBc3NpbmEuTmV0LlBvcnRhbFxcYXNzaW5hLm5ldC53ZWIucG9ydGFsLXYxL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb25maWdcXHRpcG9Eb2N1bWVudG9cXG5vdm9cXG5vdm8tdGlwby1kb2N1bWVudG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlnL3RpcG9Eb2N1bWVudG8vbm92by9ub3ZvLXRpcG8tZG9jdW1lbnRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbmZpZy90aXBvRG9jdW1lbnRvL25vdm8vbm92by10aXBvLWRvY3VtZW50by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkIHtcclxuICBwYWRkaW5nOiAzMHB4IDE2cHggMCAxMnB4O1xyXG59XHJcblxyXG4ucGRmLWxhYmVsIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1maWxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucGRmVmlldyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI2NhbnZhcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmlucHV0LWRlc2NyaWNhbyBkaXZ7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtZGVzY3JpY2Fve1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5hbGluaGF7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnN3LWZpeGVkLXdpZHRoIHtcclxuICB3aWR0aDogOTBweDtcclxuICBtaW4td2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBtYXJnaW46IDE2cHggMDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi53cmFwcGVyIC5yb3cge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLm0taW5wdXQge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn0iLCIucGFkZCB7XG4gIHBhZGRpbmc6IDMwcHggMTZweCAwIDEycHg7XG59XG5cbi5wZGYtbGFiZWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbnB1dC1maWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBkZlZpZXcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG59XG5cbiNjYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5pbnB1dC1kZXNjcmljYW8gZGl2IHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4uaW5wdXQtZGVzY3JpY2FvIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmFsaW5oYSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5zdy1maXhlZC13aWR0aCB7XG4gIHdpZHRoOiA5MHB4O1xuICBtaW4td2lkdGg6IDkwcHg7XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLndyYXBwZXIgLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm0taW5wdXQge1xuICBtYXJnaW46IDhweCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/config/tipoDocumento/novo/novo-tipo-documento.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/config/tipoDocumento/novo/novo-tipo-documento.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NovoTipoDocumentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoTipoDocumentoComponent", function() { return NovoTipoDocumentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../padrao/novo/padrao-novo.component */ "./src/app/components/padrao/novo/padrao-novo.component.ts");
/* harmony import */ var _modal_novoPapel_tipoDocumento_novo_papel_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/novoPapel/tipoDocumento-novo-papel-modal.component */ "./src/app/components/config/tipoDocumento/modal/novoPapel/tipoDocumento-novo-papel-modal.component.ts");
/* harmony import */ var _modal_tipoDocumentoPapelModal_tipoDocumento_papel_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component */ "./src/app/components/config/tipoDocumento/modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component.ts");
/* harmony import */ var app_services_config_tipoDocumento_tipoDocumento_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/config/tipoDocumento/tipoDocumento.service */ "./src/app/services/config/tipoDocumento/tipoDocumento.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_services_util_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/util/logger.service */ "./src/app/services/util/logger.service.ts");
/* harmony import */ var _services_util_pdf_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/util/pdf.service */ "./src/app/services/util/pdf.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NovoTipoDocumentoComponent = /** @class */ (function (_super) {
    __extends(NovoTipoDocumentoComponent, _super);
    function NovoTipoDocumentoComponent(route, tipoDocumentoService, modalService, pdfService) {
        var _this = _super.call(this, route) || this;
        _this.tipoDocumentoService = tipoDocumentoService;
        _this.modalService = modalService;
        _this.pdfService = pdfService;
        _this.partes = { listagem: [], dirty: false };
        _this.observadores = { listagem: [], dirty: false };
        _this.papeis = { listagem: [], dirty: false };
        _this.titulosPapeis = ['Ação', 'Papel', 'Token', 'Certificado'];
        _this.tipoDocumentoPapelForm = _modal_tipoDocumentoPapelModal_tipoDocumento_papel_modal_component__WEBPACK_IMPORTED_MODULE_6__["TipoDocumentoPapelModalComponent"];
        _this.papelObservador = { id: "" };
        _this.listCombos = [];
        _this.listPartes = [];
        _this.tipoClienteList = [];
        _this.tipoClienteSelecionandos = [];
        _this.papelList = [];
        _this.papelListCadastroParte = [];
        _this.papelSelecionandos = [];
        _this.salvaPapelSelecionados = [];
        _this.dropdownSettings = {};
        _this.tipoDocumentoNovoPapelModalComponent = _modal_novoPapel_tipoDocumento_novo_papel_modal_component__WEBPACK_IMPORTED_MODULE_5__["TipoDocumentoNovoPapelModalComponent"];
        _this.posicaoAtual = { crooper: { x1: 0, x2: 80, y1: 0, y2: 80 }, width: 0, height: 0 };
        _this.contador = 0;
        _this.fileContent = "";
        _this.url = null;
        _this.content = null;
        _this.isLastPage = false;
        _this.isAllPage = false;
        _this.isLastPageEnabled = false;
        _this.isAllPageEnabled = false;
        _this.nomeCampo = "";
        _this.paginaAtual = 1;
        _this.cols = ["#", "Tag", "Descrição", "Página"];
        _this.colsPosicao = ["#", "Papel", "X", "Y", "Width", "Height", "Página"];
        _this.colspan = _this.cols.length;
        _this.titulo = "Novo Tipo Documento";
        _this.navegacao = " > Config > Tipo Documento > Novo";
        _this.rota = "/config/tipoDocumento";
        //this.entidade = { id: "", status : "ATIVO", cliente: { id: this.shared.clienteSelecionado.cliente.id } };
        //Para carregar os combos
        _this.entidade = null; //[]; tem que ser null para o getNew funcionar
        _this.httpService = _this.tipoDocumentoService;
        _this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            item_token: 'item_token',
            item_certificate: 'item_certificate',
            itemsShowLimit: 10,
            allowSearchFilter: true,
            searchPlaceholderText: 'Procurar',
            enableCheckAll: false
        };
        return _this;
    }
    Object.defineProperty(NovoTipoDocumentoComponent.prototype, "podeVoltar", {
        get: function () {
            return this.consultando || (!this.editando && Boolean(this.form.pristine));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoTipoDocumentoComponent.prototype, "TipoDocumento", {
        get: function () {
            if (this.entidade == null) {
                return { nome: "", identificacao: "" };
            }
            return this.entidade;
        },
        set: function (data) {
            this.entidade = data;
        },
        enumerable: true,
        configurable: true
    });
    NovoTipoDocumentoComponent.prototype.afterRetrieveData = function () {
        this.listCombos = this.entidade.listCombos;
        this.listPartes = this.entidade.partes;
        // coloca somente o tipoDocumento para Post
        this.entidade = this.entidade.tipoDocumento;
        if (this.entidade.assina == null)
            this.entidade.assina = false;
        if (this.entidade.validacaoOnLine == null)
            this.entidade.validacaoOnLine = false;
        if (this.entidade.qrcode == null)
            this.entidade.qrcode = false;
        this.posicao = {};
        if (this.entidade.cliente.id != this.shared.clienteSelecionado.cliente.id) {
            this.consultando = true;
        }
        if (!this.entidade.posicoesAssinatura) {
            this.entidade.posicoesAssinatura = [];
        }
        //carrega combos enviados da base de dados
        this.carregaCombosDaBaseDados();
        this.contratoPartesInit(this.listPartes);
        this.contratoPapeisInit(this.entidade.papeis);
        //seleciona os itens que já estao no objeto
        this.InicializaItensSelecionados();
    };
    NovoTipoDocumentoComponent.prototype.InicializaItensSelecionados = function () {
        var _this = this;
        this.tipoClienteSelecionandos = [];
        if (this.entidade.tipoDocumentoTipoClientes != null) {
            this.entidade.tipoDocumentoTipoClientes.forEach(function (value) {
                var item = { item_id: value.segmento.id, item_text: value.segmento.nome };
                _this.tipoClienteSelecionandos.push(item);
            });
        }
        this.papelSelecionandos = [];
        if (this.entidade.papeis != null) {
            this.entidade.papeis.forEach(function (value) {
                var item = { item_id: value.papel.id, item_text: value.papel.nome, item_token: value.token, item_certificate: value.certificate };
                _this.papelSelecionandos.push(item);
            });
        }
        this.salvaPapelSelecionados = this.papelSelecionandos;
    };
    NovoTipoDocumentoComponent.prototype.carregaCombosDaBaseDados = function () {
        this.tipoClienteList = this.utilService.preencheCombos(this.listCombos['TipoCliente']);
        this.papelObservador = this.listCombos['Papel'].find(function (papel) { return papel.value == 'OBSERVADOR'; });
        this.papelListCadastroParte = this.listCombos['Papel'].filter(function (papel) { return papel.value != 'OBSERVADOR'; });
        //this.papelListCadastroParte = this.papelListCadastroParte.filter(papel1 =>
        //  !this.entidade.papeis.some(entPapel => entPapel.papel.id === papel1.id)
        //);
        this.papelList = this.utilService.preencheCombos(this.papelListCadastroParte);
    };
    NovoTipoDocumentoComponent.prototype.beforeSave = function () {
        this.TrataListaTipoCliente();
        this.TrataListaTipoPapel();
    };
    NovoTipoDocumentoComponent.prototype.TrataListaTipoPapel = function () {
        var _this = this;
        var lstPapel = [];
        this.papelSelecionandos.forEach(function (papel) {
            var achou = false;
            if (_this.entidade.papeis != undefined) {
                _this.entidade.papeis.forEach(function (value) {
                    if (papel.item_id == value.papel.id || papel.item_id == value.id) {
                        lstPapel.push(value);
                        achou = true;
                        return;
                    }
                });
            }
            if (!achou) {
                _this.listCombos['Papel'].forEach(function (value) {
                    if (papel.item_id == value.value || papel.item_id == value.id) {
                        lstPapel.push({ id: "", papel: { id: value.id, identificacao: value.value, nome: value.label, token: value.token, certificate: value.certificate } });
                        return;
                    }
                });
            }
        });
        this.entidade.papeis = lstPapel;
    };
    NovoTipoDocumentoComponent.prototype.TrataListaTipoCliente = function () {
        var _this = this;
        var lstTipoCliente = [];
        this.tipoClienteSelecionandos.forEach(function (tipoCliente) {
            var achou = false;
            if (_this.entidade.tipoDocumentoTipoClientes != undefined) {
                _this.entidade.tipoDocumentoTipoClientes.forEach(function (value) {
                    if (tipoCliente.item_id == value.segmento.id && value.id != "") {
                        lstTipoCliente.push(value);
                        achou = true;
                        return;
                    }
                });
            }
            if (!achou) {
                _this.listCombos['TipoCliente'].forEach(function (value) {
                    if (tipoCliente.item_id == value.id) {
                        lstTipoCliente.push({
                            id: "",
                            segmento: { id: value.id, identificacao: value.value, nome: value.label }
                        });
                        return;
                    }
                });
            }
        });
        this.entidade.tipoDocumentoTipoClientes = lstTipoCliente;
    };
    NovoTipoDocumentoComponent.prototype.cadastrarNovoPapel = function () {
        var _this = this;
        var modalRef = this.modalService.open(this.tipoDocumentoNovoPapelModalComponent, {
            backdrop: 'static', centered: true, keyboard: false, size: null
        });
        //se nao zerar a lista antes nao atualiza o objeto na tela
        var novoPapel = { id: "", nome: "", identificacao: "" };
        var papelListTemp = this.papelList;
        this.papelList = [];
        var papelSelecionandosTemp = this.papelSelecionandos;
        this.papelSelecionandos = [];
        modalRef.componentInstance.instance = novoPapel;
        modalRef.componentInstance.listaOriginal = papelListTemp;
        modalRef.result.then(function (result) {
            if (result && result != 'close') {
                if (result == "incluido") {
                    _this.incluiNovoPapel(papelListTemp, papelSelecionandosTemp, novoPapel);
                }
                else {
                    _this.papelList = papelListTemp;
                }
            }
        }).catch(function (result) {
            console.log(result);
        });
    };
    NovoTipoDocumentoComponent.prototype.onItemSelect = function (value) {
        this.papelSelecionandos = this.salvaPapelSelecionados;
        this.papelSelecionandos.push({ 'item_id': value.item_id, 'item_text': value.item_text, 'item_token': false, 'item_certificate': false });
        this.salvaPapelSelecionados = this.papelSelecionandos;
    };
    NovoTipoDocumentoComponent.prototype.onItemDeSelect = function (value) {
        var _this = this;
        this.papelSelecionandos = this.salvaPapelSelecionados;
        this.papelSelecionandos.forEach(function (element, index) {
            if (element.item_id == value.item_id)
                _this.papelSelecionandos.splice(index, 1);
        });
        this.salvaPapelSelecionados = this.papelSelecionandos;
    };
    NovoTipoDocumentoComponent.prototype.incluiNovoPapel = function (papelListTemp, papelSelecionandosTemp, novoPapel) {
        var bExistente = false;
        this.listCombos['Papel'].forEach(function (value) {
            if (novoPapel.identificacao.toUpperCase() == value.value.toUpperCase()) {
                novoPapel = { id: value.id, identificacao: value.value, nome: value.label, token: value.token, certificate: value.certificate };
                bExistente = true;
                return;
            }
        });
        //inclui na listagem que veio do banco para poder salvar
        if (!bExistente) {
            this.listCombos['Papel'].push({ id: novoPapel.id, value: novoPapel.identificacao, label: novoPapel.nome, token: novoPapel.token, certificate: novoPapel.certificate });
            //incluina listagem de seleção
            var item = { item_id: novoPapel.identificacao, item_text: novoPapel.nome, item_token: novoPapel.token, item_certificate: novoPapel.certificate };
            papelListTemp.push(item);
            papelListTemp.sort(function (a, b) { return (a.item_text.toUpperCase() < b.item_text.toUpperCase() ? -1 : 1); });
        }
        this.papelList = papelListTemp;
        //ja seleciona o item
        var itemSelecionado = { item_id: novoPapel.identificacao, item_text: novoPapel.nome, item_token: novoPapel.item_token, item_certificate: novoPapel.item_certificate };
        papelSelecionandosTemp.push(itemSelecionado);
        this.papelSelecionandos = papelSelecionandosTemp;
    };
    NovoTipoDocumentoComponent.prototype.adicionaPosicao = function () {
        var _this = this;
        this.posicao.papel = this.entidade.papeis.filter(function (p) { return p.id === _this.papelPosicaoId; })[0];
        this.entidade.posicoesAssinatura.push(this.posicao);
        this.posicao = {};
    };
    NovoTipoDocumentoComponent.prototype.excluirPosicao = function (item) {
        var index = this.entidade.posicoesAssinatura.indexOf(item, 0);
        if (index != -1)
            this.entidade.posicoesAssinatura.splice(index, 1);
    };
    Object.defineProperty(NovoTipoDocumentoComponent.prototype, "contratoParteModal", {
        get: function () {
            return this.partes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoTipoDocumentoComponent.prototype, "contratoObservadoresModal", {
        get: function () {
            return this.observadores;
        },
        enumerable: true,
        configurable: true
    });
    NovoTipoDocumentoComponent.prototype.setInitialPosition = function () {
        this.posicaoAtual.crooper = { x1: 0, x2: 80, y1: 0, y2: 80 };
    };
    NovoTipoDocumentoComponent.prototype.adicionouContratoParte = function () {
        this.listPartes = JSON.parse(JSON.stringify(this.partes.listagem));
        this.listPartes = this.entidade.contrato.partes.concat(this.observadores.listagem);
    };
    NovoTipoDocumentoComponent.prototype.adicionouObservador = function () {
        var _this = this;
        this.observadores.listagem.forEach(function (observador) {
            if (observador.papel.length == 0) {
                observador.papel.push({ id: "", papel: _this.papelObservador });
            }
        });
        this.listPartes = JSON.parse(JSON.stringify(this.partes.listagem));
        this.listPartes = this.listPartes.concat(this.observadores.listagem);
    };
    NovoTipoDocumentoComponent.prototype.contratoPapeisInit = function (listagem) {
        var _this = this;
        this.papeis = { listagem: [], dirty: false };
        console.log(this.papeis);
        if (listagem != null) {
            listagem.forEach(function (item) {
                if (item.token == null)
                    item.token = false;
                if (item.certificate == null)
                    item.certificate = false;
                _this.papeis.listagem.push(item);
            });
        }
    };
    NovoTipoDocumentoComponent.prototype.contratoPartesInit = function (listagem) {
        var _this = this;
        this.partes = { listagem: [], dirty: false };
        this.observadores = { listagem: [], dirty: false };
        if (listagem != null) {
            listagem.forEach(function (item) {
                if (item.papel.length == 0 && item.contatos.length == 0) {
                    _this.partes.listagem.push(item);
                }
                else {
                    for (var ipapel in item.papel) {
                        var papel = item.papel[ipapel];
                        if (_this.papelObservador && papel.papel.id == _this.papelObservador.id) {
                            _this.observadores.listagem.push(item);
                        }
                        else {
                            _this.partes.listagem.push(item);
                        }
                        //pode verificar somente o primeiro
                        break;
                    }
                    ;
                }
                for (var icontato in item.contatos) {
                    var contato = item.contatos[icontato];
                    if (contato.papel.length == 0) {
                        _this.partes.listagem.push(item);
                    }
                    else {
                        for (var ipapel in contato.papel) {
                            var papel = contato.papel[ipapel];
                            if (papel.papel.id == _this.papelObservador.id) {
                                _this.observadores.listagem.push(item);
                            }
                            else {
                                _this.partes.listagem.push(item);
                            }
                            //pode verificar somente o primeiro
                            break;
                        }
                        ;
                    }
                    //pode verificar somente o primeiro
                    break;
                }
                ;
            });
        }
    };
    NovoTipoDocumentoComponent.prototype.salvar = function (validar) {
        var _this = this;
        this.message = null;
        if (validar == undefined || validar == true) {
            this.checkCustomErrors();
            if (this.form.invalid) {
                app_services_util_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"].setAsTouched(this.form.form);
                this.showMessage({
                    type: 'danger',
                    text: "Existem informações inválidas ou nulas. Favor verificar!"
                });
                return;
            }
            if (!this.validateForm()) {
                return;
            }
        }
        this.loading.show();
        this.beforeSave();
        this.entidade.papeis = this.papeis.listagem;
        var tipoDocumentoRequest = {
            tipoDocumento: this.entidade,
            cliente: this.shared.clienteSelecionado.cliente,
            partes: this.listPartes
        };
        this.httpService.saveUpdate(tipoDocumentoRequest).subscribe(function (responseApi) {
            if (_this.afterSave(responseApi)) {
                app_services_util_logger_service__WEBPACK_IMPORTED_MODULE_9__["LOGGER"].log('saveUpdate', responseApi);
            }
            else {
                _this.loading.hide();
                _this.cancelar();
                _this.dialog.success((_this.formulario ? _this.formulario : 'Registro') + " salvo com sucesso!");
            }
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    NovoTipoDocumentoComponent.prototype.selecionaAssinatura = function (item) {
        this.posicaoAtual.crooper.x1 = item.x;
        this.posicaoAtual.crooper.y1 = item.y;
        this.posicaoAtual.height = item.height;
        this.posicaoAtual.width = item.width;
    };
    NovoTipoDocumentoComponent.prototype.papelListCadastroParteDocumento = function () {
        var idSelecionados = this.papelSelecionandos.map(function (item) { return item.item_id; });
        return this.papelListCadastroParte.filter(function (p) { return idSelecionados.includes(p.id); });
    };
    NovoTipoDocumentoComponent.prototype.onFileUploaded = function (event) {
        if (this.imgBase64) {
            this.imgBase64 = undefined;
        }
        this.getPdfArrayByte(event.target.files[0]);
    };
    NovoTipoDocumentoComponent.prototype.getPdfArrayByte = function (file) {
        var _this = this;
        this.loading.show();
        this.utilService
            .getFile(file)
            .then(function (res) {
            _this.convertPdfToImg(res.base64StringFile);
            _this.pdfModelo = res.bytes;
        })
            .catch(function (err) {
            _this.loading.hide();
            _this.errorHandler.handle(err);
        });
    };
    NovoTipoDocumentoComponent.prototype.convertPdfToImg = function (pdf) {
        var _this = this;
        this.pdfService
            .convertPdfToImage(pdf)
            .then(function (img) {
            _this.imgList = _this.criaListaImagens(img.data);
            _this.contador = -1;
            _this.isLastPage = false;
            _this.isAllPage = false;
            _this.isAllPageEnabled = true;
            _this.isLastPageEnabled = true;
            _this.nextImage();
            _this.loading.hide();
        })
            .catch(function (err) {
            _this.errorHandler.handle(err);
        });
    };
    NovoTipoDocumentoComponent.prototype.criaListaImagens = function (lista) {
        if (lista === void 0) { lista = []; }
        return lista.map(function (img) { return "data:@file/png;base64,".concat(img); });
    };
    NovoTipoDocumentoComponent.prototype.imageCropped = function (event) {
        this.posicao.x = event.cropperPosition.x1;
        this.posicao.y = event.cropperPosition.y1;
        this.posicao.width = event.width;
        this.posicao.height = event.height;
        if (this.isLastPage)
            this.posicao.pagina = -1;
        else if (this.isAllPage)
            this.posicao.pagina = 0;
        else
            this.posicao.pagina = this.contador + 1;
    };
    NovoTipoDocumentoComponent.prototype.nextImage = function () {
        this.contador++;
        this.imgBase64 = this.imgList[this.contador];
        this.isNextPage = this.contador + 1 < this.imgList.length - 1;
        this.isPreviousPage = this.contador - 1 >= 0;
        this.posicao.pagina = this.contador;
    };
    NovoTipoDocumentoComponent.prototype.previousImage = function () {
        this.contador--;
        this.imgBase64 = this.imgList[this.contador];
        this.isNextPage = this.contador < this.imgList.length - 1;
        this.isPreviousPage = this.contador - 1 >= 0;
        this.posicao.pagina = this.contador;
    };
    NovoTipoDocumentoComponent.prototype.lastPage = function () {
        this.isLastPage = !this.isLastPage;
        this.contador = this.imgList.length - 1;
        if (this.isLastPage) {
            this.imgBase64 = this.imgList[this.contador];
            this.isNextPage = false;
            this.isPreviousPage = false;
            this.isAllPageEnabled = false;
        }
        else {
            this.contador = this.imgList.length;
            this.isAllPageEnabled = true;
            this.previousImage();
        }
    };
    NovoTipoDocumentoComponent.prototype.allPage = function () {
        this.isAllPage = !this.isAllPage;
        this.contador = this.imgList.length - 1;
        if (this.isAllPage) {
            this.imgBase64 = this.imgList[0];
            this.isNextPage = false;
            this.isPreviousPage = false;
            this.isLastPageEnabled = false;
        }
        else {
            this.contador = -1;
            this.nextImage();
            this.isLastPageEnabled = true;
        }
    };
    Object.defineProperty(NovoTipoDocumentoComponent.prototype, "tipoDocumentoPapeisModal", {
        get: function () {
            return this.papeis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoTipoDocumentoComponent.prototype, "dadosComplementaresPapel", {
        get: function () {
            var dadosComplementares = {
                comboPapeis: this.papelList
            };
            return dadosComplementares;
        },
        enumerable: true,
        configurable: true
    });
    NovoTipoDocumentoComponent.prototype.adicionouPapel = function () {
        this.entidade.papeis = this.papeis.listagem;
    };
    NovoTipoDocumentoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: app_services_config_tipoDocumento_tipoDocumento_service__WEBPACK_IMPORTED_MODULE_7__["TipoDocumentoService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: _services_util_pdf_service__WEBPACK_IMPORTED_MODULE_10__["PdfService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], NovoTipoDocumentoComponent.prototype, "form", void 0);
    NovoTipoDocumentoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-tipo-documento',
            template: __webpack_require__(/*! raw-loader!./novo-tipo-documento.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/tipoDocumento/novo/novo-tipo-documento.component.html"),
            styles: [__webpack_require__(/*! ./novo-tipo-documento.component.scss */ "./src/app/components/config/tipoDocumento/novo/novo-tipo-documento.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            app_services_config_tipoDocumento_tipoDocumento_service__WEBPACK_IMPORTED_MODULE_7__["TipoDocumentoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _services_util_pdf_service__WEBPACK_IMPORTED_MODULE_10__["PdfService"]])
    ], NovoTipoDocumentoComponent);
    return NovoTipoDocumentoComponent;
}(_padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_4__["PadraoNovoComponent"]));



/***/ }),

/***/ "./src/app/components/config/whatsapp/lista/lista-parametros-whatsapp.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/config/whatsapp/lista/lista-parametros-whatsapp.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListaParametrosWhatsAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaParametrosWhatsAppComponent", function() { return ListaParametrosWhatsAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaParametrosWhatsAppComponent = /** @class */ (function (_super) {
    __extends(ListaParametrosWhatsAppComponent, _super);
    function ListaParametrosWhatsAppComponent() {
        var _this = _super.call(this) || this;
        _this.titulo = "Lista Parâmetros WhatsApp";
        _this.navegacao = " > Config > Parâmetros WhatsApp > Listagem";
        _this.rota = "/config/parametrosWhatsApp";
        _this.Categoria = "PARAMETROS_WHATSAPP";
        _this.page = {
            number: 0,
            size: 30,
            order: ''
        };
        return _this;
    }
    ListaParametrosWhatsAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parametros-cliente-documento',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/lista/lista-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListaParametrosWhatsAppComponent);
    return ListaParametrosWhatsAppComponent;
}(_sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__["ListaSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/whatsapp/novo/novo-parametros-whatsapp.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/config/whatsapp/novo/novo-parametros-whatsapp.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NovoParametroWhatsAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoParametroWhatsAppComponent", function() { return NovoParametroWhatsAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NovoParametroWhatsAppComponent = /** @class */ (function (_super) {
    __extends(NovoParametroWhatsAppComponent, _super);
    function NovoParametroWhatsAppComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.titulo = "Parâmetro do WhatsApp";
        _this.navegacao = " > Config > Parâmetro WhatsApp > Editar";
        _this.rota = "/config/parametrosWhatsApp";
        return _this;
    }
    NovoParametroWhatsAppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], NovoParametroWhatsAppComponent.prototype, "form", void 0);
    NovoParametroWhatsAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-parametros-cliente',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/novo/novo-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NovoParametroWhatsAppComponent);
    return NovoParametroWhatsAppComponent;
}(_sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__["NovoSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/whatsapplTemplates/lista/lista-whatsapp-templates.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/config/whatsapplTemplates/lista/lista-whatsapp-templates.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ListaWhatsAppTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaWhatsAppTemplatesComponent", function() { return ListaWhatsAppTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaWhatsAppTemplatesComponent = /** @class */ (function (_super) {
    __extends(ListaWhatsAppTemplatesComponent, _super);
    function ListaWhatsAppTemplatesComponent() {
        var _this = _super.call(this) || this;
        _this.titulo = "Lista WhatsApp Templates";
        _this.navegacao = " > Config > WhatsApp Templates > Listagem";
        _this.rota = "/config/whatsappTemplate";
        _this.Categoria = "WHATSAPP_TEMPLATES";
        _this.page = {
            number: 0,
            size: 30,
            order: ''
        };
        return _this;
    }
    ListaWhatsAppTemplatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parametros-cliente-documento',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/lista/lista-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/lista/lista-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/lista/lista-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListaWhatsAppTemplatesComponent);
    return ListaWhatsAppTemplatesComponent;
}(_sistemaAtributo_lista_lista_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_1__["ListaSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/components/config/whatsapplTemplates/novo/novo-whatsapp-templates.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/config/whatsapplTemplates/novo/novo-whatsapp-templates.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NovoWhatsAppTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoWhatsAppTemplatesComponent", function() { return NovoWhatsAppTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NovoWhatsAppTemplatesComponent = /** @class */ (function (_super) {
    __extends(NovoWhatsAppTemplatesComponent, _super);
    function NovoWhatsAppTemplatesComponent(route) {
        var _this = _super.call(this, route) || this;
        _this.titulo = "WhatsApp Template";
        _this.navegacao = " > Config > WhatsApp Templates > Editar";
        _this.rota = "/config/whatsappTemplate";
        return _this;
    }
    NovoWhatsAppTemplatesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], NovoWhatsAppTemplatesComponent.prototype, "form", void 0);
    NovoWhatsAppTemplatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-parametros-cliente',
            template: __webpack_require__(/*! raw-loader!../../sistemaAtributo/novo/novo-sistema-atributo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.html"),
            styles: [__webpack_require__(/*! ../../sistemaAtributo/novo/novo-sistema-atributo.component.scss */ "./src/app/components/config/sistemaAtributo/novo/novo-sistema-atributo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NovoWhatsAppTemplatesComponent);
    return NovoWhatsAppTemplatesComponent;
}(_sistemaAtributo_novo_novo_sistema_atributo_component__WEBPACK_IMPORTED_MODULE_3__["NovoSistemaAtributoComponent"]));



/***/ }),

/***/ "./src/app/services/config/segmento/segmento.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/config/segmento/segmento.service.ts ***!
  \**************************************************************/
/*! exports provided: SegmentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentoService", function() { return SegmentoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/http.service */ "./src/app/services/util/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SegmentoService = /** @class */ (function (_super) {
    __extends(SegmentoService, _super);
    function SegmentoService(http) {
        var _this = _super.call(this, http) || this;
        _this.setApiUrl('/v1/config/segmento');
        return _this;
    }
    SegmentoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SegmentoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SegmentoService);
    return SegmentoService;
}(_util_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));



/***/ }),

/***/ "./src/app/services/config/sistemaAtributo/sistemaAtributo.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/services/config/sistemaAtributo/sistemaAtributo.service.ts ***!
  \****************************************************************************/
/*! exports provided: SistemaAtributoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SistemaAtributoService", function() { return SistemaAtributoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/http.service */ "./src/app/services/util/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SistemaAtributoService = /** @class */ (function (_super) {
    __extends(SistemaAtributoService, _super);
    function SistemaAtributoService(http) {
        var _this = _super.call(this, http) || this;
        _this.setApiUrl('/v1/config/sistemaAtributo');
        return _this;
    }
    SistemaAtributoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SistemaAtributoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SistemaAtributoService);
    return SistemaAtributoService;
}(_util_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));



/***/ })

}]);
//# sourceMappingURL=components-config-config-module.js.map