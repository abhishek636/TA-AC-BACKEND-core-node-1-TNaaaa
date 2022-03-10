function areaOfSquare(l){
    a = l*l;
    console.log(`area of square ${a}`);
}

function areaOfRectangle(a,b){
    A = a*b;
    console.log(`area of rectangle ${A}`);
}

function areaOfCircle(r){
    A = 3.14*r*r;
    console.log(`area of rectangle ${A}`);
}

module.exports = {
    circle: areaOfCircle,
    rectangle: areaOfRectangle,
    square: areaOfSquare
}