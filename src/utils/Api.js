import { API_BASE_URL } from "./config.js";

class Api {
    constructor() {
        this.csrfToken = null;
        this.csrfPromise = null;
    }

    async ensureCsrfToken() {
        if (this.csrfToken) return this.csrfToken;

        if (!this.csrfPromise) {
            this.csrfPromise = fetch(`${API_BASE_URL}/csrf`, {
                credentials: "include"
            })
                .then(async (res) => {
                    const cookieToken = this.getCookie("XSRF-TOKEN");
                    this.csrfToken = cookieToken || null;
                    return this.csrfToken;
                })
                .finally(() => {
                    this.csrfPromise = null;
                });
        }

        return this.csrfPromise;
    }

    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
    }

    buildHeaders(contentType = null) {
        const headers = {};
        if (contentType) headers["Content-Type"] = contentType;
        if (this.csrfToken) headers["X-XSRF-TOKEN"] = this.csrfToken;
        return headers;
    }

    async request(path, method = "GET", body = undefined) {
        await this.ensureCsrfToken();

        const isFormData = body instanceof FormData;
        const headers = this.buildHeaders(isFormData ? null : body ? "application/json" : null);

        return fetch(`${API_BASE_URL}${path}`, {
            method,
            credentials: "include",
            headers,
            body: isFormData ? body : body ? JSON.stringify(body) : undefined
        });
    }

    async get(path) {
        return this.request(path, "GET");
    }

    async post(path, body) {
        return this.request(path, "POST", body);
    }

    async patch(path, body) {
        return this.request(path, "PATCH", body);
    }

    async delete(path) {
        return this.request(path, "DELETE");
    }
}

export default new Api();
