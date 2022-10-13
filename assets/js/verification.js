let email_ver = document.querySelector('.email_ver')
let update_ver = document.querySelector('.update_ver')
let phone_ver = document.querySelector('.phone_ver')
let phoneT_ver = document.querySelector('.phoneT_ver')
let email_ver_cont = document.querySelector('.email_ver_cont')
let update_det_cont = document.querySelector('.update_det_cont')
let phone_ver_cont = document.querySelector('.phone_ver_cont')
let phone_ver_cont2 = document.querySelector('.phone_ver_cont2')


function showForm(clicked, show, hide1, hide2, hide3) {
    clicked.addEventListener('click', function () {
       show.style.display = 'flex' 
       hide1.style.display = 'none' 
       hide2.style.display = 'none' 
       hide3.style.display = 'none' 
    });
}

showForm(email_ver, email_ver_cont, update_det_cont, phone_ver_cont, phone_ver_cont2)
showForm(update_ver, update_det_cont, email_ver_cont, phone_ver_cont, phone_ver_cont2)
showForm(phone_ver, phone_ver_cont, email_ver_cont, update_det_cont, phone_ver_cont2)
showForm(phoneT_ver, phone_ver_cont2, email_ver_cont, update_det_cont, phone_ver_cont)