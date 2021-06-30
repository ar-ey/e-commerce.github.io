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
function validateForm() {
    var name = document.forms["contact_form"]["fullname"].value;

    var email = document.forms["contact_form"]["email"].value;
    var message = document.forms["contact_form"]["message"].value;

    if (name == "") {

        const fname = document.getElementById("fnamegroup")
        const fnamespan = document.getElementById("fnamespan")
        fname.classList.toggle("has-feedback")
        fname.classList.toggle("has-error")
        fnamespan.classList.toggle("glyphicon-remove")
        fnamespan.classList.remove("glyphicon-ok")


    }
    else if (name != "") {
        const fnamespan = document.getElementById("fnamespan")
        const fname = document.getElementById("fnamegroup")
        fname.classList.remove("has-error")
        fnamespan.classList.remove("glyphicon-remove")

        fname.classList.toggle("has-success")
        fnamespan.classList.toggle("glyphicon-ok")


    }

    if (email == "") {
        const fnamespan = document.getElementById("emailspan")
        const email = document.getElementById("emailgroup")
        email.classList.toggle("has-feedback")
        email.classList.toggle("has-error")
        emailspan.classList.toggle("glyphicon-remove")
    }
    if (message == "") {
        const msgspan = document.getElementById("msgspan")
        const message = document.getElementById("messagegroup")
        message.classList.toggle("has-feedback")
        msgspan.classList.toggle("glyphicon-remove")
        message.classList.toggle("has-error")

    }
}
var count = 0;
var count1 = 0;
var count2 = 1;
var count3 = 1;
var total = 0;
var total2 = 79;
var total3 = 159;

function minusQuantity() {

    let value = document.getElementById('quantityValue')
    let totalValue = document.getElementById('total')
    if (count > 0)
        count--;
    total = 159 * (count + count1)
    value.innerHTML = count;
    totalValue.innerHTML = total

}
function addQuantity() {
    let value = document.getElementById('quantityValue')
    let totalValue = document.getElementById('total')
    count++;
    total = 159 * (count + count1)
    value.innerHTML = count;
    totalValue.innerHTML = total

}

function minusQuantity1() {

    let value = document.getElementById('quantityValue1')
    let totalValue = document.getElementById('total')
    if (count1 > 0)
        count1--;
    total = 159 * (count + count1)
    value.innerHTML = count1;
    totalValue.innerHTML = total


}
function addQuantity1() {
    let value = document.getElementById('quantityValue1')
    let totalValue = document.getElementById('total')
    count1++;
    total = 159 * (count + count1)
    value.innerHTML = count1;
    totalValue.innerHTML = total

}



function minusQuantity2() {

    let value = document.getElementById('quantityValue2')
    let totalValue = document.getElementById('total2')
    if (count2 > 0)
        count2--;
    total2 = 79 * count2
    value.innerHTML = count2;
    totalValue.innerHTML = total2


}
function addQuantity2() {
    let value = document.getElementById('quantityValue2')
    let totalValue = document.getElementById('total2')
    count2++;
    total2 = 79 * count2
    value.innerHTML = count2;
    totalValue.innerHTML = total2

}
function minusQuantity3() {

    let value = document.getElementById('quantityValue3')
    let totalValue = document.getElementById('total3')
    if (count3 > 0)
        count3--;
    total3 = 159 * count3
    value.innerHTML = count3;
    totalValue.innerHTML = total3


}
function addQuantity3() {
    let value = document.getElementById('quantityValue3')
    let totalValue = document.getElementById('total3')
    count3++;
    total3 = 159 * count3
    value.innerHTML = count3;
    totalValue.innerHTML = total3

}
function compute() {
    let sub = document.getElementById('subtotal');
    let grand = document.getElementById('grandtotal');

    let subtotal = total2 + total3
    let grandtotal = total2 + total3 + 45
    sub.innerHTML = subtotal
    grand.innerHTML = grandtotal
}





