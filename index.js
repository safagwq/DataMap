var __extends = (this && this.__extends) || (function () {
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function prop(from, type, rule) {
    if (type === void 0) { type = ''; }
    if (rule === void 0) { rule = ''; }
    return function (target, propName) {
        if (!target._propRules) {
            target._propRules = {};
        }
        target._propRules[propName] = {
            rule: rule,
            type: type,
            from: from || propName
        };
    };
}
var BaseTypeData = /** @class */ (function () {
    function BaseTypeData() {
    }
    BaseTypeData.create = function (constructor, data) {
        var newData = new constructor();
        Object.keys(newData).forEach(function (propName) {
            if (newData._propRules[propName]) {
                var rultItem = newData._propRules[propName];
                if (rultItem.type == '') {
                    rultItem.type = typeof newData[propName];
                }
                newData[propName] = data[rultItem.from];
            }
            else {
                newData[propName] = data[propName];
            }
        });
        return newData;
    };
    return BaseTypeData;
}());
var Dict = /** @class */ (function (_super) {
    __extends(Dict, _super);
    function Dict() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 0;
        _this.name = '';
        _this.type = 0;
        _this.description = '';
        _this.value = 0;
        return _this;
    }
    __decorate([
        prop('dictid')
    ], Dict.prototype, "id");
    __decorate([
        prop('dictname')
    ], Dict.prototype, "name");
    __decorate([
        prop('dicttype')
    ], Dict.prototype, "type");
    __decorate([
        prop('dictvalue')
    ], Dict.prototype, "value");
    return Dict;
}(BaseTypeData));
var srcData = [
    {
        dictid: 10,
        dictname: '测试',
        dicttype: 1,
        description: '',
        dictvalue: 1
    },
    {
        dictid: null,
        dictname: '测试',
        dicttype: 1,
        description: '',
        dictvalue: 1
    },
];
console.log(Dict.create(Dict, srcData[0]));
