const API_URL = "https://api.github.com";

const getGistUrl = (username) => {
  return `${API_URL}/users/${username}/gists`;
};

const getGistUrlByID = (gistId) => {
  return `${API_URL}/gists/${gistId}`;
};

export {getGistUrl, getGistUrlByID};
