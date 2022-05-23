const URL = process.env.REACT_APP_BASE_URL;

export async function fetchPost(endpoint, objectToSend, token) {
  const authorization = token ? { Authorization: `Bearer ${token}` } : '';
  const res = await fetch(URL + endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authorization },
    body: JSON.stringify(objectToSend),
  });
  const resInJson = await res.json();
  return resInJson;
}
