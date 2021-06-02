const baseUrl = 'https://api.github.com/users/sidwonder/repos';

class Api {
    constructor(url) {
        this.url = url;
    }

    getRepos() {
        return fetch(this.url)
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(`Error: ${res.status}`);
                }
                return res.json();
            })
    }
}

const api = new Api(baseUrl);
export default api;