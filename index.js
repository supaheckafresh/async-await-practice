'use strict';

const GitHubApiClient = require('./github-api-client.class');

const client = new GitHubApiClient(),
  handle = 'supaheckafresh';


(async () => {
  try {
    const resp = await Promise.all([client.fetchUser(handle), client.fetchRepos(handle)]),
      user = resp[0], repos = resp[1];

    console.log(`User ${user.name} has ${repos.length} repositories.`);

  } catch (err) {
    console.error(`ERROR: ${err.message}`);
  }
})();

