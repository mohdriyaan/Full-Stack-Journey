// Area of the triangle
// area = (base*height)/2

function area(base,height){
    if(isNaN(base)||isNaN(height)){
        return ("Invalid numbers")
    }
    
    const area = (base*height)/2

    return area
}

console.log(area(3,3))