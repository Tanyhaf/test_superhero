import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const superheroSchema = new Schema({
    nickname: {
        type: String,
        trim: true,
    },
    real_name: {
        type: String,
        trim: true,
    },
    origin_description: {
        type: String,
    },
    superpowers: {
        type: String,
    },
    catch_phrase: {
        type: String,
    },
}, { timestamps: true });

export const superheroModel = model('superhero', superheroSchema);
