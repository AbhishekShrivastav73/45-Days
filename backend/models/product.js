const mongoose = require('mongoose');


let postScheme = mongoose.Schema({
    title : String,
    content : String,
    auth : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }

})
let Post = mongoose.model("Post",postScheme)

module.exports = Post;