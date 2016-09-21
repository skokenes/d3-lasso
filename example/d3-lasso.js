(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-selection'), require('robust-point-in-polygon')) :
    typeof define === 'function' && define.amd ? define(['exports', 'd3-selection', 'robust-point-in-polygon'], factory) :
    (factory((global.d3 = global.d3 || {}),global.d3,global.classifyPoint));
}(this, function (exports,d3Selection,classifyPoint) { 'use strict';

    console.log(classifyPoint);

    function lasso() {

        // Function to execute on call
        function lasso() {
            console.log("lasso!");
        }

        lasso.prop = 42;

        return lasso;
    };

    exports.lasso = lasso;

    Object.defineProperty(exports, '__esModule', { value: true });

}));