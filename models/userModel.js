const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required: [true,"add username"],
    },
    email: {
        type : String,
        required: [true,"add email"],
        unique: [true, "email duplicate"],
    },
    password: {
        type : String,
        required: [true,"add password"],
    }
}, {
    timestamps : true,
});

module.exports = mongoose.model("User", userSchema);