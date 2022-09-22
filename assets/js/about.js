let nagii = document.querySelector('.front_img')

function slide() {
    setTimeout(() => {
        nagii.src = 'assets/images/bb.jpg'
    }, 6000);
    setTimeout(() => {
        nagii.src = 'assets/images/cc.jpg'
    }, 9000);
}slide()
setInterval(() => {
    nagii.src = 'assets/images/aa.jpg'
    setTimeout(() => {
        nagii.src = 'assets/images/bb.jpg'
    }, 6000);
    setTimeout(() => {
        nagii.src = 'assets/images/cc.jpg'
    }, 9000);
}, 12000);




let windowHeightT = window.innerHeight;



function sImage() {
    let revealTop = document.querySelector('.g_img_cont').getBoundingClientRect().top;
    let windowpoint = 200;
    if (revealTop < windowHeightT - windowpoint) {
        setTimeout(() => {
            $('.frame').addClass('img_ani_move')
        }, 500);
        $('.man').addClass('img_ani_move')
        setTimeout(() => {
            $('.phone').addClass('phone_move')
        }, 300);
        setTimeout(() => {
            $('.dollar').addClass('img_ani_move')
        }, 800);
        setTimeout(() => {
            $('.pen').addClass('img_ani_move')
        }, 1100);
    }
}sImage()

window.addEventListener('scroll', () => {
    sImage()
});

// alert(window.innerWidth)

// let p = prompt('hey')
function fullScreen(click_btn, img_tag, image) {
    $(click_btn).click(function () {
        $('.view_img_cont').css('display', 'flex')
        document.querySelector(img_tag).src = image;
    });
}

$('.x').click(function () {
    $('.view_img_cont').css('display', 'none')
})

fullScreen('.full_view1', '.view_image', 'assets/images/per1.jpg');
fullScreen('.full_view2', '.view_image', 'assets/images/per2.jpg');
fullScreen('.full_view3', '.view_image', 'assets/images/per3.jpg');


let h = 0;
let i = 0;
let j = 0;

window.addEventListener('scroll', () => {
    let revealTop = document.querySelector('.rating_box1').getBoundingClientRect().top;
    let windowpoint = 200;
    if (revealTop < windowHeightT - windowpoint) {
        setInterval(() => {
            $('.box_rate1').text(h);
            if (h == 456) {
                clearInterval
            } else {
                h += 1;
            }
        }, 1);
    }
});
window.addEventListener('scroll', () => {
    let revealTop = document.querySelector('.rating_box2').getBoundingClientRect().top;
    let windowpoint = 200;
    if (revealTop < windowHeightT - windowpoint) {
        setInterval(() => {
            $('.box_rate2').text(i);
            if (i == 1006) {
                clearInterval
            } else {
                i += 2;
            }
        }, 1);
    }
});
window.addEventListener('scroll', () => {
    let revealTop = document.querySelector('.rating_box3').getBoundingClientRect().top;
    let windowpoint = 200;
    if (revealTop < windowHeightT - windowpoint) {
        setInterval(() => {
            $('.box_rate3').text(j);
            if (j == 300) {
                clearInterval
            } else {
                j += 1;
            }
        }, 1);
    }
});

