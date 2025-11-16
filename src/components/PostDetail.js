import { formatDate } from "../utils/DateFomatter.js";
import { formatNumber } from "../utils/NumberFormatter.js";
import { GOOGLE_STORAGE_URL } from "../utils/config.js";

export const PostDetail = (
    { likeCount, liked },
    { title, content, authorNickname, authorProfileImage, viewCount, commentCount, createdAt, imagePaths, author }
) => {
    return (
        `
            <h1 class="post-title">${title}</h1>

            <div class="post-user-info">
                <div class="post-author">
                    <div id="author-image" class="author-img" style="background-image: url(${GOOGLE_STORAGE_URL}/${authorProfileImage})"></div>
                    <span class="author-name">${authorNickname}</span>
                    <img src="/src/assets/dot.svg" alt="dot">
                    <span class="post-date">${formatDate(createdAt)}</span>
                </div>
                <div class="${author ? 'post-actions' : 'post-actions disable'}">
                    <button id="edit-button" class="edit-btn"></button>
                    <button id="delete-button" class="delete-btn"></button>
                </div>
            </div>

            <hr class="divider"/>

            <div class="post-image-slider">
                <div class="image-counter" id="image-counter">1 / 1</div>
                <button class="slide-btn left-btn"></button>
                <div class="image-wrapper">
                    <div class="image-track" id="image-track">
                    </div>
                </div>
                <button class="slide-btn right-btn"></button>
            </div>

            <p class="post-content">
                ${content}
            </p>

            <div class="post-stats2">
                <div id="like-count" class="${liked ? "like-box liked" : "like-box"}">${formatNumber(likeCount)}</div>
                <div class="view-box">${formatNumber(viewCount)}</div>
                <div class="comment-box">${formatNumber(commentCount)}</div>
            </div>
        `
    )
}