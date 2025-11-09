import { formatDate } from "../utils/DateFomatter.js";
import { GOOGLE_STORAGE_URL } from "../utils/config.js";

export const Comment = ({ id, content, authorNickname, authorProfileImage, createdAt, author }) => {
    return (
        `
        <div id="${id}" class="comment-item">
            <div class="comment-profile" style="background-image: url(${GOOGLE_STORAGE_URL}/${authorProfileImage})"></div>

            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-author">${authorNickname}</span>
                    <span class="comment-date">${formatDate(createdAt)}</span>
                </div>
                <div class="comment-text">${content}</div>
            </div>

            <div class="${author ? "comment-actions" : "comment-actions disable"}">
                <button class="comment-btn edit-btn">수정</button>
                <button class="comment-btn delete-btn">삭제</button>
            </div>
        </div>
        `
    );
}