"use strict";
{
    const calculateShapeArea = (shape) => {
        if ("radius" in shape) {
            return Math.PI * shape.radius * shape.radius;
        }
        if ("width" in shape && "height" in shape) {
            return shape.width * shape.height;
        }
    };
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
    //
}
