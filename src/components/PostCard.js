import { formatDate } from "../utils/DateFomatter.js";
import { GOOGLE_STORAGE_URL } from "../utils/config.js";

export const PostCard = ({id, title, authorNickname, authorProfileImage, likeCount, viewCount, commentCount, createdAt}) => {
    const imagePath = authorProfileImage === null ? "/src/assets/profile.svg" : `${GOOGLE_STORAGE_URL}/${authorProfileImage}`;

    return `
        <div id="${id}" class="post-card" onclick="location.href = 'http://localhost:3000/src/pages/post-detail.html?postId=${id}'">
            <div class="post-user">
                <div class="user-profile" style="background-image: url(${imagePath})"></div>
                <span class="user-name">${authorNickname}</span>
                <img src="/src/assets/dot.svg" alt="dot">
                <span class="post-date">${formatDate(createdAt)}</span>
            </div>
            
            <div class="post-top">
                <div class="post-header">
                    <div class="post-title">${title}</div>
                </div>

                <div class="post-info">
                    <span><img src="/src/assets/heart.svg" alt="heart"> ${likeCount}</span>
                    <span><img src="/src/assets/comment.svg" alt="comment"> ${commentCount}</span>
                    <span><img src="/src/assets/view.svg" alt="view"> ${viewCount}</span>
                </div>
            </div>
        </div>
    `;
}
