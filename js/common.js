const header = document.querySelector('.header');

//모바일버전 네비게이션 오픈했을 때 스크롤 생성
// header.addEventListener('mouseenter', function () {
//     this.classList.add('active');
// });
// header.addEventListener('mouseleave', function () {
//     this.classList.remove('active');
// });






const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', function () {
    // this.classList.toggle('on');
    header.classList.toggle('active');
});



window.addEventListener('resize', function () {
    var windowWidth = window.outerWidth;

    console.log('리사이즈' + windowWidth);
});

