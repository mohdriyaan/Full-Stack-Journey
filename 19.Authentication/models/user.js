const mongoose = require("mongoose")
const {Schema} = mongoose
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    username : {
        type : String,
        required : [true, "Username is required"]
    },
    password:{
        type : String,
        required : [true, "Password is required"]
    }  
})

userSchema.statics.findAndValidate = async function(username,password){
    const foundUser = await this.findOne({username})
    if(!foundUser){
        console.log("User not found")
        return;
    }
    const isValid = await bcrypt.compare(password,foundUser.password)
    return isValid ? foundUser : false
}

const User = mongoose.model("User",userSchema)

module.exports = User