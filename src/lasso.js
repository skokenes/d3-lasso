import * as selection from "d3-selection";
import classifyPoint from "robust-point-in-polygon";

export default function() {

    var items,
        closePathDistance,
        closePathSelect,
        isPathClosed,
        hoverSelect,
        targetArea;

    // Function to execute on call
    function lasso() {
    }

    lasso.items  = function(_) {
        if (!arguments.length) return items;
        items = _;
        var nodes = items.nodes();
        nodes.forEach(function(n) {
            n.__lasso = {
                "possible": false,
                "selected": false
            };
        });
        return lasso;
    };

    // Distance required before path auto closes loop
    lasso.closePathDistance  = function(_) {
        if (!arguments.length) return closePathDistance;
        closePathDistance = _;
        return lasso;
    };

    // Option to loop select or not
    lasso.closePathSelect = function(_) {
        if (!arguments.length) return closePathSelect;
        closePathSelect = _===true ? true : false;
        return lasso;
    };

    // Not sure what this is for
    lasso.isPathClosed = function(_) {
        if (!arguments.length) return isPathClosed;
        isPathClosed = _===true ? true : false;
        return lasso;
    };

    // Option to select on hover or not
    lasso.hoverSelect = function(_) {
        if (!arguments.length) return hoverSelect;
        hoverSelect = _===true ? true : false;
        return lasso;
    };

    // Events
    lasso.on = function(type,_) {
        if(!arguments.length) return on;
        if(arguments.length===1) return on[type];
        var types = ["start","draw","end"];
        if(types.indexOf(type)>-1) {
            on[type] = _;
        }
        return lasso;
    };

    // Area where lasso can be triggered from
    lasso.targetArea = function(_) {
        if(!arguments.length) return targetArea;
        targetArea = _;
        return lasso;
    }


    
    return lasso;
};
