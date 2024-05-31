const express = require('express');
const popularRepositoriesRouter = require('./popular-repositories.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/popular-repositories/google', popularRepositoriesRouter);
}

module.exports = routerApi;
