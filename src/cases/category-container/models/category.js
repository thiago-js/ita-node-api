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
            unique: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)
export const CategoryModel = mongoose.model('Category', schema)
