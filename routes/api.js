const express = require("express");
const Product_info = require('../models/ProductSchema');

// Creates a new Router Object
const router = express.Router();
const Info = require('../models/info');
const lcSchema = require('../models/lc');


// =============================================
// LC-Project

router.post('/lcData', (req, res) => {
    console.log(req.body);
    let data = new lcSchema ({
        commodity : req.body.commodity,
        price : req.body.price,
        deliveryDate:req.body.deliveryDate,
        deliveryVehicle :req.body.deliveryVehicle,
        deliveryTerms :req.body.deliveryTerms,
        quantityAndterms:req.body.quantityAndterms ,
        surveyCompany:req.body.surveyCompany ,
        insuranceCompany: req.body.insuranceCompany,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        priceReference: req.body.priceReference,
        priceAdjustments: req.body.priceAdjustments,
        calorificValue: req.body.calorificValue,
        glutenContent: req.body.glutenContent,
        glucose : req.body.glucose 
    })
    data.save((response) => {
        res.send(response);
    })
});
module.exports = router;
