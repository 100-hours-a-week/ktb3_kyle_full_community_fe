import { formatDate } from "../utils/DateFomatter.js";
import { GOOGLE_STORAGE_URL } from "../utils/config.js";

export const PostCard = ({id, title, authorNickname, authorProfileImage, likeCount, viewCount, commentCount, createdAt}) => {
    return `
        <div id="${id}" class="post-card" onclick="location.href = 'http://localhost:3000/src/pages/post-detail.html?postId=${id}'">
            <div class="post-top">
                <div class="post-header">
                    <div class="post-title">${title}</div>
                </div>

                <div class="post-info">
                    <span>좋아요 ${likeCount}</span>
                    <span>댓글 ${commentCount}</span>
                    <span>조회수 ${viewCount}</span>
                    <span class="post-date">${formatDate(createdAt)}</span>
                </div>
            </div>

            <div class="post-user">
                <div class="user-profile" style="background-image: url(${GOOGLE_STORAGE_URL}/${authorProfileImage})"></div>
                <span class="user-name">${authorNickname}</span>
            </div>
        </div>
    `;
}