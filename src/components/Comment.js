import { formatDate } from "../utils/DateFomatter.js";
import { GOOGLE_STORAGE_URL } from "../utils/config.js";

export const Comment = ({ id, content, authorNickname, authorProfileImage, createdAt, author }) => {
    const imagePath = authorProfileImage === null ? "/src/assets/profile.svg" : `${GOOGLE_STORAGE_URL}/${authorProfileImage}`;
    return (
        `
        <div id="${id}" class="comment-item">
            <div class="comment-profile" style="background-image: url(${imagePath})"></div>
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-author">${authorNickname}</span>
                    <img src="/src/assets/dot.svg" alt="dot">
                    <span class="comment-date">${formatDate(createdAt)}</span>
                </div>
                <div class="comment-text">${content}</div>
            </div>

            <div class="${author ? "comment-actions" : "comment-actions disable"}">
                <button class="comment-btn edit-btn"></button>
                <button class="comment-btn delete-btn"></button>
            </div>
        </div>
        `
    );
}