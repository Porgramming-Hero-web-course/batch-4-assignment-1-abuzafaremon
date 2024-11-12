{
  // Problem - Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
  type Circle = {
    shape: string;
    radius: number;
  };

  type Rectangle = {
    shape: string;
    width: number;
    height: number;
  };

  const calculateShapeArea = (
    shape: Circle | Rectangle
  ): number | undefined => {
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
