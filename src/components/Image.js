export const Image = ({id, url}) => {
    return (
        `
        <div id="${id}" class="image" style="background-image: url(${url})">
            <div class="image-cancel"></div>
        </div>
        `
    )
}