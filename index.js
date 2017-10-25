'use strict';

const GitHubApiClient = require('./github-api-client.class');

const client = new GitHubApiClient(),
  handle = 'supaheckafresh';


(async () => {
  try {
    const [ user, repos ] = await Promise.all([client.fetchUser(handle), client.fetchRepos(handle)]);

    console.log(`User ${user.name} has ${repos.length} repositories.`);

  } catch (err) {
    console.error(`ERROR: ${err.message}`);
  }
})();

