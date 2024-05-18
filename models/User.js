const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true, minlength: 6},
    role: {type:Number, default:3} // role: 1 -> super admin, role: 2 -> normal admin, role: 3 -> normal user
    },
    {timestamps: true}
);

const User = mongoose.model("user",userSchema);
module.exports = User;
