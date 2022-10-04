let stage1_inp = document.querySelectorAll('.stage1_inp');
let next = document.querySelector('.next')
let bar = document.querySelector('.bar')
let stage1Com = ''

$('.simple_val').click(function () {
    $('.valuation_type_cont').css('display', 'none')
    $('.val_cotn1').css('display', 'flex')
});
$('.full_val').click(function () {
    $('.valuation_type_cont').css('display', 'none')
    $('.val_cotn2').css('display', 'flex')
});

next.addEventListener('click', function () {
    for (let x = 0; x < stage1_inp.length; x++) {
        if (stage1_inp[x].value == '') {
            stage1_inp[x].style.border = '2px solid red';
        } else {
            stage1_inp[x].style.border = '2px solid green';
        }
    }
    if ($('.inp_1').val() == '') {
        // scrollTo(22, 0)
        // alert(window.innerHeight - document.querySelector('.inp_1').getBoundingClientRect().top)
    } else if ($('.inp21').val() == '') {
        
    } else if($('.inp_3').val() == ''){
        
    } else if($('.inp_4').val() == ''){
        
    } else if($('.inp_5').val() == ''){
        
    } else if($('.inp_6').val() == ''){
        // scrollTo(1000, 0)
        // alert(window.innerHeight - document.querySelector('.inp_6').getBoundingClientRect().top)
    } else {
        bar.classList.add('bar_inc')
        $('.form1').addClass('form1_move')
        $('.form2').addClass('form2_move')
        $('.simple_full_val_cont').addClass('cont_inc')


        var r = window.matchMedia("(max-width: 550px)")
        myFunction(r)
        r.addListener(myFunction)


        function myFunction(x) {
            if (r.matches) {
              $('.form2').removeClass('form2_move')
              $('.form2').addClass('form2_moveS')
            } else {
                $('.form2').addClass('form2_move')
              $('.form2').removeClass('form2_moveS')
            }
        }
    }
});


$('.stage2').click(function () {
    if ($('.inp_1').val() == '') {

    } else if ($('.inp21').val() == '') {
        
    } else if ($('.inp_3').val() == '') {
        
    } else if ($('.inp_4').val() == '') {
        
    } else if ($('.inp_5').val() == '') {
        
    } else if ($('.inp_6').val() == '') {
        
    } else {
        bar.classList.add('bar_inc')
        $('.form1').addClass('form1_move')
        $('.form2').addClass('form2_move')
        $('.simple_full_val_cont').addClass('cont_inc')


        var r = window.matchMedia("(max-width: 550px)")
        myFunction(r)
        r.addListener(myFunction)


        function myFunction(x) {
            if (r.matches) {
              $('.form2').removeClass('form2_move')
              $('.form2').addClass('form2_moveS')
            } else {
                $('.form2').addClass('form2_move')
              $('.form2').removeClass('form2_moveS')
            }
        }
    }
});


// alert($('.simple_full_val_cont').outerHeight(true))
$('.prev').click(function () {
    bar.classList.remove('bar_inc')
    $('.form1').removeClass('form1_move')
    $('.form2').removeClass('form2_move')
    $('.simple_full_val_cont').removeClass('cont_inc')
});
$('.stage1').click(function () {
    bar.classList.remove('bar_inc')
    $('.form1').removeClass('form1_move')
    $('.form2').removeClass('form2_move')
    $('.simple_full_val_cont').removeClass('cont_inc')
});

$('.rechoose_val').click(function () {
    location.reload();
})

$('.cancel_valuation').click(function () {
    $('.confirm_valuation').removeClass('show2') 
});

let form2_inp = document.querySelectorAll('.form2_inp');
let send = document.querySelector('.send');

send.addEventListener('click', function () {
    for (let x = 0; x < form2_inp.length; x++) {
        if (form2_inp[x].value == '') {
            form2_inp[x].style.border = '2px solid red';
        } else {
            form2_inp[x].style.border = '2px solid green';
        }
    }
    if (document.querySelector('.inp21').value == '') {
        // scrollTo
    } else if (document.querySelector('.inp22').value == '') {
        
    } else if(document.querySelector('.inp23').value == ''){
        
    } else if(document.querySelector('.inp24').value == ''){
        
    } else if(document.querySelector('.inp25').value == ''){
        
    } else if(document.querySelector('.inp26').value == ''){
        
    } else if(document.querySelector('.inp27').value == ''){
        
    } else if(document.querySelector('.inp28').value == ''){
        
    } else if(document.querySelector('.inp29').value == ''){
        
    } else if(document.querySelector('.inp210').value == ''){
        
    } else if(document.querySelector('.inp211').value == ''){
        
    } else {
        $('.confirm_valuation').addClass('show2') 
    }
});



let finp = document.querySelectorAll('.finp');
let send2 = document.querySelector('.send2');

send2.addEventListener('click', function () {
    for (let x = 0; x < finp.length; x++) {
        if (finp[x].value == '') {
            finp[x].style.border = '2px solid red';
        } else {
            finp[x].style.border = '2px solid green';
        }
    }
    if (document.querySelector('.finp_1').value == '') {
        // alert('dd')
    } else if (document.querySelector('.finp_2').value == '') {
        
    } else if(document.querySelector('.finp_3').value == ''){
        
    } else if(document.querySelector('.finp_4').value == ''){
        
    } else if(document.querySelector('.finp_5').value == ''){
        
    } else if(document.querySelector('.finp_6').value == ''){
        
    } else if(document.querySelector('.finp_7').value == ''){
        
    } else if(document.querySelector('.finp_8').value == ''){
        
    } else if(document.querySelector('.finp_9').value == ''){
        
    } else {
        $('.confirm_valuation2').addClass('show2') 
        alert('dd')
    }
});


// alert(window.innerWidth)