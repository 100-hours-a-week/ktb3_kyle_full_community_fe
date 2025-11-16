export const ImageContainer = () => {
    return(
        `
        <div class="image-box">
            <label class="label-text">이미지</label>
            <div class="image-wrapper">
                <div id="image-input" class="image-input">
                    <input type="file" id="image-upload" accept="image/*" multiple>
                </div>
            
                <div id="image-list" class="image-list"></div>
            </div>
        </div>
        `
    )
}