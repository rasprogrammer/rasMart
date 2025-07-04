const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["admin", "vendor", "customer", "delivery"],
            default: "customer"
        },
        phone: {
            type: String,
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        twoFactorEnabled: {
            type: String,
            default: false
        },
        kycDetails: {
            aadhar: String,
            pan: String,
            bankAccount: String,
            ifscCode: String,
            approved: {
                type: Boolean,
                default: false
            }
        },
        addressBook: [{
            name: String,
            phone: String,
            pincode: String,
            locality: String,
            address: String,
            city: String,
            state: String,
            landmark: String,
            alternatePhone: String,
            addressType: {
                type: String,
                enum: ["home", "work", "other"],
                default: "home"
            }
        }],
        resetToken: String,
        resetTokenExpiry: Date
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

module.exports = {
    User
};