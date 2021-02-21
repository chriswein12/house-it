const { Schema, model } = require('mongoose');

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

const BusinessCard = model('BusinessCard', BusinessCardSchema);

module.exports = BusinessCard;