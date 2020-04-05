import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        userid: {
            type: String,
            required: true,
        },

        accountid: {
            type: String,
            required: true,
        },

        accountName: {
            type: String,
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
        },

        category: {
            type: String,
            required: true,
        },

        tag: {
            type: String,
            lowercase: true,
        },

        type: {
            type: String,
            lowercase: true,
            trim: true,
        },

        value: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

export const TransactionModel = mongoose.model('Transaction', schema)
