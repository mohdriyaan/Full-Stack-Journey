const mongoose = require("mongoose")
const {Schema} = mongoose

mongoose.connect("mongodb://localhost:27017/relationshipDemo")
    .then(()=>{
        console.log("DB connected Successfully!")
    })
    .catch((err)=>{
        console.log(err)
    })

const userSchema = new Schema({
    username : String,
    age : Number
})

const tweetSchema = new Schema({
    text : String,
    likes : Number,
    user : {type : Schema.Types.ObjectId , ref : "User"}
})

const User = mongoose.model("User",userSchema)
const Tweet = mongoose.model("Tweet",tweetSchema)

const makeTweets = async() => {
    // const user = new User({
    //     username:"chickenbun193",
    //     age:97
    // })
    const user = await User.findOne({username:"chickenbun193"})
    const tweet2 = new Tweet({
        text:".qwnd.kq lqwndlk",
        likes: 10
    })
    tweet2.user = user
    await user.save()
    await tweet2.save()
}

// makeTweets()
Tweet.find({}).populate("user","username")
    .then((res)=>console.log(res))


