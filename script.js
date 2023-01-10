let btn = document.querySelector('.btn')
let input = document.getElementById('input')
let copy = document.querySelector('.fa-copy')
let notify = document.querySelector(".alert-container")

btn.addEventListener('click', () => {
     password()
});


function password() {
    const characters = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ~;:.,`/\|!@#₦%^&*[]-()_+=-}{?><"
    const passwordLength = 14;
    let passwordChars = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomResult = Math.floor(Math.random() * characters.length);
         passwordChars += characters.substring(randomResult, randomResult + 1);
        console.log(randomResult, passwordChars );
    }
    input.value = passwordChars;
    notify.innerText = passwordChars + " Copied!";
};

copy.addEventListener('click', () => {
    copyPassword()
    if(input.value){
    notify.classList.remove("active");
    setTimeout(() => {
        notify.classList.add("active");
    }, 2000);
}
});

function copyPassword() {
    input.select();
    input.setSelectionRange(0, 10000)
    navigator.clipboard.writeText(input.value)
    
}