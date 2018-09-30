export function fetchMembers() {
  const url = `https://api.github.com/orgs/hackyourfuture-cph/members`;
  return fetch(url).then(response => response.json());
}
