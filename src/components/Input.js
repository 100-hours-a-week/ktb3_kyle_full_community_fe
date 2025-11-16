export const Input = ({ inputId, type, placeholder, helperId, label, helperText }) => {
    console.log(inputId + " create");
    return (
        `
         <label for="${inputId}">${label}</label>
         <div class="input-box">
            <input type="${type}" id="${inputId}" placeholder="${placeholder}"/>
            <p id="${helperId}" class="helper-text">${helperText}</p>
        </div>       
        `
    )
}