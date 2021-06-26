window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("navbar-fixed-top", window.scrollY > 80)
})
function openChat() {
    const chat = document.getElementById('mychat')
    const closechat = document.getElementById('openmychat')
    closechat.addEventListener('click', () => {
        chat.style.display = "block";
    })
}
function closeChat() {
    const chat = document.getElementById('mychat')
    const closechat = document.getElementById('closemychat')
    closechat.addEventListener('click', () => {
        chat.style.display = "none";
    })
}