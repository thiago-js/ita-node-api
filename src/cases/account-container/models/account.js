import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        userid: {
            type: String,
            required: true,
        },

        title: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
        },

        balance: {
            type: Number,
            required: true,
        },

        logo: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)
export const accountModel = mongoose.model('Account', schema)
