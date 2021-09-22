/*
Problem-1 Rectangle Object
Create a rectangle object with length and width properties
Create two methods area and perimeter, that will return the area and perimeter of the rectangle
*/

var rectangle = {
  length : 10,
  width : 20,
  areaOfRectangle: function() {
    var area = this.length * this.width;
    
    return area;
  },
  perimeterOfRectangle: function(){
    var area = 2*(this.length + this.width);
    return area;
  }
}
console.log(typeof(rectangle.area))
console.log("area of rectangle : " + rectangle.areaOfRectangle());
console.log("perimeter of rectangle : " + rectangle.perimeterOfRectangle());
