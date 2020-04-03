import mongoose from 'mongoose'
import crypto from 'crypto'

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            select: false,
            set: value => crypto.createHash('md5').update(value).digest('hex'),
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

export const UserModel = mongoose.model('User', schema)
