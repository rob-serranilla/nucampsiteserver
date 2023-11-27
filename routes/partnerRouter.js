const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});

//route for /:partnerId
partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send partner id: ${req.params.partnerId} to you!`);
})
.post((req, res) => {
    res.end(`Will add partner id: ${req.params.partnerId} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.write(`Updating partner id: ${req.params.partnerId}\n`);
    res.end(`partner name: ${req.body.name} and description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end('Deleting all partners');
})

module.exports = partnerRouter;