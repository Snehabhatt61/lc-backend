const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lcSchema = new Schema({
    commodity: {
        type: String,
    },
    price: {
        type: String,
    },
    deliveryDate: {
        type: Date,
    },
    deliveryVehicle: {
        type: String,
    },
    deliveryTerms: {
        type: String,
    },
    quantityAndterms: {
        type: String,
    },
    surveyCompany: {
        type: String,
    },
    insuranceCompany: {
        type: String,
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    priceReference : {
        type: String
    },
    priceAdjustments: {
        type: String
    },
    calorificValue: {
        type: Number
    },
    glutenContent: {
        type: String
    },
    glucose: {
        type: Number
    }

});

// Info module will represent 'info' collection 
module.exports = mongoose.model('lc-formsubmit', lcSchema);

// module.exports = lcSchema;