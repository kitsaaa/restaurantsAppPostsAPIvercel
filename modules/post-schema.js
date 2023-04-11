const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let postSchema = new Schema({
    title: String,
    postDate: String,
    featuredImage: String,
    post: String,
    postedBy: String,
    rating: Number,
    numberOfRatings: Number,
    comments: [{author: String, comment: String, userID: String}],
    isPrivate: Boolean,
    views: String,
    category: String
}, {
    versionKey: false
});

module.exports = postSchema;