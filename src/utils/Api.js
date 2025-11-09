import {API_BASE_URL} from "./config.js";

class Api {
    get(path) {
        return fetch(`${API_BASE_URL}${path}`, {
            credentials: "include"
        });
    }

    post(path, body) {
        return fetch(`${API_BASE_URL}${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(body)
        });
    }

    patch(path, body) {
        return fetch(`${API_BASE_URL}${path}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(body)
        });
    }

    delete(path) {
        return fetch(`${API_BASE_URL}${path}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        });
    }
}

export default new Api();