// Creates a blank Javascript Object
function Color(r,g,b){
    this.r = r
    this.g = g
    this.b = b
    // console.log(this)
}

Color.prototype.rgb = function (){
    const {r,g,b} = this
    return `rgb(${r},${g},${b})`
}

Color.prototype.hex = function(){
    const {r,g,b} = this
    return `#` + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)
}

Color.prototype.rgba = function(a=1.0){
    const {r,g,b} = this
    return `rgba(${r},${g},${b},${a})`
}

// Links this object to another object 
const color1 = new Color(200,100,100)
const color2 = new Color(122,30,123)
const color3 = new Color(201,123,123)

document.body.style.backgroundColor= color1.rgb()
document.body.style.backgroundColor= color2.hex()
document.body.style.backgroundColor= color2.rgba(0.8)
