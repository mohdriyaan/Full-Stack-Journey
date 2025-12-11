const fs = require("fs")
const folderName = process.argv[2] || "Project" // third argument in the terminal like node boilerPlate.js Project1, here Project1 will selected
// fs.mkdir("dogs",{recursive:true},(err)=>{
//     if(err) throw err
// })

// fs.mkdirSync("Cats")

// console.log("I come after the mkdir in the file")
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, "")
    fs.writeFileSync(`${folderName}/app.js`, "")
    fs.writeFileSync(`${folderName}/styles.css`, "")
} catch (e) {
    console.log(e)
}










