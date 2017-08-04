webpackJsonp([1],{

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(50);
__webpack_require__(186); // import your scss file into component module
var Demo = function (_super) {
    __extends(Demo, _super);
    function Demo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Demo.prototype.render = function () {
        return React.createElement(
            "div",
            { className: "react-container" },
            React.createElement(
                "p",
                null,
                "This part is using React Component"
            ),
            React.createElement(
                "div",
                { className: "Demo" },
                React.createElement(
                    "p",
                    null,
                    "ASP.NET + React App, M Salman Al Farisi"
                )
            )
        );
    };
    return Demo;
}(React.Component);
exports.default = Demo;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var ReactDOM = __webpack_require__(51);
var React = __webpack_require__(50);
var Demo_1 = __webpack_require__(185);
ReactDOM.render(React.createElement(Demo_1.default, null), document.getElementById('react-homepage-root'));

/***/ })

},[84]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi9Gcm9udGVuZC9Ib21lcGFnZS9Db21wb25lbnRzL0RlbW8vRGVtby50c3giLCIuLlxcLi5cXC4vRnJvbnRlbmQvSG9tZXBhZ2UvQ29tcG9uZW50cy9EZW1vL0RlbW8uc2NzcyIsIi4uXFwuLlxcLi9Gcm9udGVuZC9Ib21lcGFnZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdDQUErQjtBQUMvQixvQkFBcUIsTUFBK0M7QUFFcEU7QUFBbUIsb0JBQXlCO0FBQTVDO21FQVlBO0FBQUM7QUFWVSxtQkFBTSxTQUFiO0FBQ1c7QUFDQztjQUFVLFdBQ1Y7QUFDQTs7Ozs7QUFBSTs7a0JBQVUsV0FDVjtBQUloQjs7Ozs7OztBQUFDO0FBQ0wsV0FBQztBQUFBLEVBWnVCLE1BWXZCO0FBRUQsa0JBQW9CLEs7Ozs7Ozs7QUNqQnBCLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DQUFzQztBQUN0QyxnQ0FBK0I7QUFFL0IsaUNBQTBDO0FBRWxDLFNBQU8sT0FDWCxvQkFBQyxPQUFPLGdCQUNBLFNBQWUsZUFDekIsd0IiLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9EZW1vLnNjc3MnOyAvLyBpbXBvcnQgeW91ciBzY3NzIGZpbGUgaW50byBjb21wb25lbnQgbW9kdWxlXHJcblxyXG5jbGFzcyBEZW1vIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhpcyBwYXJ0IGlzIHVzaW5nIFJlYWN0IENvbXBvbmVudDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGVtb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkFTUC5ORVQgKyBSZWFjdCBBcHAsIE0gU2FsbWFuIEFsIEZhcmlzaTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbW87XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRnJvbnRlbmQvSG9tZXBhZ2UvQ29tcG9uZW50cy9EZW1vL0RlbW8udHN4IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0Zyb250ZW5kL0hvbWVwYWdlL0NvbXBvbmVudHMvRGVtby9EZW1vLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRGVtbyBmcm9tICcuL0NvbXBvbmVudHMvRGVtby9EZW1vJztcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxEZW1vIC8+LCBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1ob21lcGFnZS1yb290JylcclxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Gcm9udGVuZC9Ib21lcGFnZS9pbmRleC50c3giXSwic291cmNlUm9vdCI6IiJ9