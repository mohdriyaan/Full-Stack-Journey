// Roots of quadratic equation

function quadratic(a,b,c){
    let discriminant = b*b-4*a*c
    let root1, root2
    if(discriminant>0){
        root1 = (-b+Math.sqrt(discriminant))/2*a
        root2 = (-b-Math.sqrt(discriminant))/2*a
        console.log(`${root1} and ${root2} are real and different`)
    }else if(discriminant==0){
        root1=root2= -b/2*a
        console.log(`${root1} and ${root2} are real and equal`) 
    }else if(discriminant<0){
        let realPart = (-b/2*a)  
        let imgPart = (Math.sqrt(-(discriminant))/2*a).toPrecision(3) 
        console.log(`The roots ${realPart}+${imgPart}i and ${realPart}-${imgPart}i are complex and different`)

    }
}

quadratic(1,-3,10)