const express = require('express');
const productList = require('./products.json');
const { filterByPropertyContent } = require('./filter-helper');

const app = express(),
    bodyParser = require('body-parser'),
    port = 3100;


const products = productList;
const MAX_PRODUCTS_TO_SEND = 50;

app.use(bodyParser.json());


app.get('/api/products', (req, res) => {
    const { page, limit = MAX_PRODUCTS_TO_SEND, term } = req.query;
    let productsToReturn = filterByPropertyContent(products, 'name', term) || [];

    if (!productsToReturn.length) { //if no matches are found by the product's name it filters according to its' description
        productsToReturn = filterByPropertyContent(products, 'description', term);
    }

    let startIndex = page * limit || 0;
    let endIndex = (page * 2) * limit;

    if (startIndex >= productsToReturn.length) { //makes sure to always return the last products in case the request's pages exceed the products length
        startIndex = productsToReturn.length - limit;
    }

    res.json(productsToReturn.slice(startIndex, endIndex));
});

app.get('/', (req, res) => {
    res.send('Healthcheck succesful');
})


app.listen(port, () => {
    console.log(`Listening for product calls on port ${port}`);
});