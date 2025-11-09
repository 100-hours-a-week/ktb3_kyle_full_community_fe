import api from "./Api.js";
import { GOOGLE_STORAGE_URL } from "./config.js";

export const Dropdown = async () => {
    const logout = document.getElementById("logout");
    const dropdown = document.getElementById("dropdown");
    const headerProfile = document.getElementById("header-profile-image");

    await api.get(`/users/profile`)
        .then((res) => res.json())
        .then((json) => headerProfile.style.backgroundImage = `url(${GOOGLE_STORAGE_URL}/${json.data.profileImage})`);

    headerProfile.onclick = () => dropdown.classList.toggle("show");
    logout.onclick = () => {
        api.delete(`/logout`)
            .then(() => location.replace("http://localhost:3000/src/pages/login.html"));
    }

    window.onclick = (e) => {
        if (!e.target.closest(".header-profile-container")) {
            dropdown.classList.remove("show");
        }
    }
}