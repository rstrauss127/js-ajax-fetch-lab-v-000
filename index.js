const baseURL = 'https://api.github.com';
const user = '<YOUR_USERNAME>';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function getHeader(){
  return { Authorization: `token ${getToken()}` }
}

function forkRepo() {
  const prefix = 'https://api.github.com/repos/';
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const postscript = '/forks';
  const path = prefix + repo + postscript;
  fetch(path, {
    method: 'post',
    headers: getHeader()
  }).then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  link = json.html_url;
  html = '<a href="#">' + link + '</a>';
  document.getElementById('results').innerHTML = html;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#body').value;
  const body = JSON.stringify({ title: title, body: content });
  const path = `https://api.github.com/repos/${getOwner()}/${getRepo()}/issues`;
  fetch(path, {
    method: 'post',
    headers: getHeader(),
    body: body
  })
  .then(res => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
