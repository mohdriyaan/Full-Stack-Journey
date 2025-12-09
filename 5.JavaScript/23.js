// Nested Loops
// for(let i = 1; i<=10; i++){
//     console.log(`i is ${i} `)
//     for(let j = 1; j < 4; j++ ){
//         console.log(`      j is ${j}`)
//     }
// }

const seatingChart = [
    ["Kristen", "Erik", "Namita"],
    ["helloes","alo","kirk"],
    ["kraty","quee","lappy"]
]

for(let i = 0; i<=seatingChart.length-1; i++){
    const row = seatingChart[i]
    console.log(`#ROW ${i + 1}`)
    for(let j = 0 ; j<row.length;j++){
        console.log(row[j])
    }
}

// for..of loop
for(let row of seatingChart){
    for(let students of row){
        console.log(students)
    }
}
