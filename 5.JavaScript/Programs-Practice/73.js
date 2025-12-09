// JavaScript Program to Create Two Dimensional Array
function twoDimensionArray(x,y){
    let arr = []
    for(let i = 0; i<x; i++){
        arr[i] = []
    }

    for(let i = 0; i<x; i++){
        for(let j = 0; j<y; j++){
            arr[i][j] = j
        }
    }

    console.log(arr)
}

twoDimensionArray(3,3)