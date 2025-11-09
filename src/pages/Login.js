class Login {
    template() {
        return `
<div class="container">
    <div class="login-box">
        <h2 class="login-title">로그인</h2>

        <div class="input-wrapper"> <!-- 392 x 221을 감싸는 div -->
            <label for="email">이메일</label>
            <input type="text" id="email" placeholder="이메일을 입력하세요"/>

            <label for="password">비밀번호</label>
            <input type="password" id="password" placeholder="비밀번호를 입력하세요"/>

            <p class="helper-text">* helper text</p>
        </div>

        <button class="login-btn">로그인</button> <!-- 383 x 37 -->

        <button class="signup-btn">회원가입</button> <!-- 68 x 30 -->
    </div>
</div>
    `
    }
}

export default new Login();