# d3-lasso

d3-lasso.js is a D3 plugin that allows you to tag elements on a page by drawing a line over or around objects. Functions can be run based on the lasso action. This functionality can be useful for brushing or filtering.

An example of the lasso implemented in a scatterplot can be found here: [http://bl.ocks.org/skokenes/a85800be6d89c76c1ca98493ae777572](http://bl.ocks.org/skokenes/a85800be6d89c76c1ca98493ae777572)

Lassoing tags
--
When the lasso is used, it tags elements with properties of possible, not possible, selected, and not selected:

- possible: while drawing a lasso, if an element is part of the final selection that would be made if the lasso was completed at that instance, the element is tagged as possible
- not possible: while drawing a lasso, if an element is not part of the final selection that would be made if the lasso was completed at that instance, the element is tagged as not possible
- selected: when a lasso is completed, all elements that were tagged as possible get tagged as selected
- not selected: when a lasso is completed, all elements that were tagged as not possible get tagged as not selected

The tags can be used in combination with functions to perform actions like styling the possible or selected values while the lasso is in use.

## Installing

If you use NPM, `npm install d3-lasso`. Otherwise, download the [latest release](https://github.com/skokenes/d3-lasso/releases/latest).

## API Reference

**lasso**()

Creates a new lasso object. This object can then have parameters set before the lasso is drawn.
```
var lasso = d3.lasso(); // creates a new lasso
```

lasso.**items**(_[selection]_)

The items() parameter takes in a d3 selection. Each element in the selection will be tagged with lasso-specific properties when the lasso is used. If no input is specified, the function returns the lasso's current items.
```
lasso.items(d3.selectAll("circle")); // sets all circles on the page to be lasso-able
```

lasso.**possibleItems**(_[selection]_)

The possibleItems() parameter returns items that are currently tagged as being "possible".

lasso.**notPossibleItems**(_[selection]_)

The notPossibleItems() parameter returns items that are currently tagged as being "not possible".

lasso.**selectedItems**(_[selection]_)

The selectedItems() parameter returns items that are currently tagged as being "selected".

lasso.**notSelectedItems**(_[selection]_)

The notSelectedItems() parameter returns items that are currently tagged as being "not selected".

lasso.**hoverSelect**(_[bool]_)

The hoverSelect() parameter takes in a boolean that determines whether objects can be lassoed by hovering over an element during lassoing. The default value is set to true. If no input is specified, the function returns the lasso's current hover parameter.
```
lasso.hoverSelect(true); // allows hovering of elements for selection during lassoing
```

lasso.**closePathSelect**(_[bool]_)

The closePathSelect() parameter takes in a boolean that determines whether objects can be lassoed by drawing a loop around them. The default value is set to true. If no input is specified, the function returns the lasso's current parameter.
```
lasso.closePathSelect(true); // allows looping of elements for selection during lassoing
```

lasso.**closePathDistance**(_[num]_)

The closePathDistance() parameter takes in a number that specifies the maximum distance in pixels from the lasso origin that a lasso needs to be drawn in order to complete the loop and select elements. This parameter only works if closePathSelect is set to true; If no input is specified, the function returns the lasso's current parameter.
```
lasso.closePathDistance(75); // the lasso loop will complete itself whenever the lasso end is within 75 pixels of the origin
```

lasso.**targetArea**(_[sel]_)

The targetArea() parameter takes in a selection representing the element to be used as a target area for the lasso event. If no input is specified, the function returns the current area selection.
```
lasso.targetArea(d3.select("#myLassoRect")); // the lasso will be trigger whenever a user clicks and drags on #myLassoRect
```

lasso.**on**(_type,[func]_)

The on() parameter takes in a type of event and a function for that event. There are 3 types of events that can be defined:
- start: this function will be executed whenever a lasso is started
- draw: this function will execute repeatedly as the lasso is drawn
- end: this function will be executed whenever a lasso is completed

If no function is specified, the function will return the current function defined for the type specified.
```
lasso.on("start",function() { alert("lasso started!"); }); // every time a lasso is started, an alert will trigger
```

Initiating a lasso
--
Once a lasso object is defined, it can be added to a page by calling it on an element like an svg.
```
var lasso = d3.lasso()
                .items(d3.selectAll("circle")) // Create a lasso and provide it some target elements
                .targetArea(de.select("#myLassoRect")); // Sets the drag area for the lasso on the rectangle #myLassoRect
d3.select("svg").call(lasso); // Initiate the lasso on an svg element
```

If a lasso is going to be used on graphical elements that have been translated via a g element acting as a container, which is a common practice for incorporating chart margins, then the lasso should be called on that g element so that it is in the same coordinate system as the graphical elements.
