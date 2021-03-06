const { Schema, model } = require('mongoose');

const businessCardSchema = require('./BusinessCard');

const servicesSchema = new Schema(
    {
        serviceTitle: {
            type: String,
            required: true,
            trim: true
        },

        serviceCost: {
            type: String,
            required: true
        },

        serviceFrequency: {
            type: String
        },

        serviceDate: {
            type: String
        },

        serviceDescription: {
            type: String,
            maxLength: 500,
            trim: true
        },

        contact: [businessCardSchema]

    }
);



module.exports = servicesSchema;