const fetch = require('node-fetch');

module.exports =  class GitHubApiClient {

  fetchUser(handle) { return _fetch(handle); }

  fetchRepos(handle) { return _fetch(handle, 'repos'); }

};

async function _fetch(handle, path) {
  let url = `https://api.github.com/users/${handle}`;
  if (path) url += `/${path}`;

  const resp = await fetch(url),
    body = await resp.json();

  if (resp.status !== 200) throw Error(body.message);

  return body;
}
