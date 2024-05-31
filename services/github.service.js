const boom = require('@hapi/boom');
const axios = require('axios');

class GithubService {

    constructor() { }

    async mostPopularRepositories() {
        try {
            const response = await axios.get('https://api.github.com/users/google/repos', {
                params: {
                    sort: 'stars',
                    per_page: 10
                }
            });
    
            const popularRepos = response.data
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, 10)
                .map(repo => ({
                    name: repo.name,
                    stars: repo.stargazers_count,
                    url: repo.html_url
                }));
    
            return popularRepos
        } catch (error) {
            throw boom.badRequest('Failed to fetch repositories from GitHub');
        }
    }


}

module.exports = GithubService;
