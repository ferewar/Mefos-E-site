const { Products } = require('../models/product');

const productData = [
    {
        name: 'Computer',
    },
    {
        name: 'Laptop',
    },
    { 
        name: 'SmartPhone',
    },
    {
        name: 'SmartWatch',
    },
];

const seedProducts = () => Products.bulkCreate(productData);
module.exports = seedProducts;