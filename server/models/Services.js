const { Schema, model, Types } = require('mongoose');

const BusinessCardSchema = new Schema(
    {
        BusinessCardId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        contactName: {
            type: String,
            required: true,
            trim: true
        },

        phone: {
            type: String,
            trim: true
        },
        
        email: {
            type: String,
            match: [/.{1,}@(.{1,}[^@])\.\w{2,63}/g, 'Please Enter Valid Email Address']
        },
        
        website: {
            type: String,
            trim: true
        }
    }
)

const servicesSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        cost: {
            type: Number,
            required: true,
            min: 0
        },

        frequency: {
            type: String
        },

        date: {
            type: Date,
            required: true
        },

        description: {
            type: String,
            required: true,
            maxLength: 500
        },

        contact: [BusinessCardSchema]

    }
);

const Services = model('Services', servicesSchema);

module.exports = Services;