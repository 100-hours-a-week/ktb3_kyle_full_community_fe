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
                    <span class="post-date">${formatDate(createdAt)}</span>
                </div>
                <div class="${author ? 'post-actions' : 'post-actions disable'}">
                    <button id="edit-button" class="edit-btn">수정</button>
                    <button id="delete-button" class="delete-btn">삭제</button>
                </div>
            </div>

            <hr class="divider"/>

            <div class="post-image-slider">
                <div class="image-counter" id="image-counter">1 / 1</div>
                <button class="slide-btn left-btn">&#10094;</button>
                <div class="image-wrapper">
                    <div class="image-track" id="image-track">
                    </div>
                </div>
                <button class="slide-btn right-btn">&#10095;</button>
            </div>

            <p class="post-content">
                ${content}
            </p>

            <div class="post-stats">
                <div id="like-count" class="${liked ? "stat-box enable" : "stat-box"}">${formatNumber(likeCount)}<br><span>좋아요수</span></div>
                <div class="stat-box">${viewCount}<br><span>조회수</span></div>
                <div class="stat-box">${commentCount}<br><span>댓글</span></div>
            </div>
        `
    )
}