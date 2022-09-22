
function bgChange() {
    $('.bgc').css('background', localStorage.getItem('bg_color'))
    $('.txc').css('color', localStorage.getItem('tx_color'))
    
    $('.txc1').css('color', localStorage.getItem('tx_color1'))
    $('.txc2').css('color', localStorage.getItem('tx_color2'))

    $('.bdc').css('border', localStorage.getItem('border'))
    $('.bdg').css('bg_gray', localStorage.getItem('gray'))
}bgChange()


c = 0;
$('.bg_mode_cont').click(function () {
    if (c == 0) {
        localStorage.setItem('bg', 'dark');
        localStorage.setItem('bg_color', 'black')
        localStorage.setItem('tx_color', 'white')
        localStorage.setItem('tx_color1', 'purple')
        localStorage.setItem('tx_color2', 'indigo')
        localStorage.setItem('border', '4px solid white')
        iconChange()
        setTimeout(() => {
            bgChange()
        }, 1);
        c = 1;
    } else {
        localStorage.setItem('bg', 'fair');
        localStorage.setItem('bg_color', 'white')
        localStorage.setItem('tx_color', 'black')
        localStorage.setItem('tx_color1', 'black')
        localStorage.setItem('tx_color2', 'black')
        localStorage.setItem('border', '4px solid black')
        iconChange()
        setTimeout(() => {
            bgChange()
        }, 1);
        c = 0;
    }
});

function iconChange() {
    if (localStorage.getItem('bg') == 'dark') {
        $('.bg_mode_cont').html('<i class="bg_mode bx bx-sun" style="color: white"></i>')
        c = 1;
    } else {
        $('.bg_mode_cont').html('<i class="bg_mode bx bx-moon" style="color: black"></i>')
    }
}iconChange()