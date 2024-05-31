const express = require('express');
const GithubService = require('./../services/github.service');

const router = express.Router();
const serviceGithub = new GithubService();

router.get('/',
    async (req, res, next) => {
        try {
            const popularRepositories = await serviceGithub.mostPopularRepositories();
            res.json(popularRepositories);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;