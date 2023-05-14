$(function(){
  // 메인 슬라이드
  $("a").click(function(e){
    e.preventDefault();  
  });
  const headerEl = document.querySelector('header');

  window.addEventListener('scroll', function(){
    if (window.scrollY > 10){
      headerEl.classList.add('active');
    } else {
      headerEl.classList.remove('active'); 
    }  
  });

  $("header nav .sub").hide();
  $("header nav > ul > li > a").hover(function(){
      $("header nav .sub").stop().slideDown();
      $("header nav .sub").css("z-index",11);
      $(this).next().css("z-index",20);
  });
  $(".header-box").mouseleave(function(){
      $("header nav .sub").stop().slideUp();
  });

  // 탭메뉴
  // 모든 탭 내용 숨김

  var swiper01 = new Swiper(".mySwiper", {
    // 무한반복
    loop:true,
    speed : 2500,
    slideActiveClass: "active",
    effect : 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    },
    pagination: {
        el:".pagination-progressbar",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });
  var swiper02 = new Swiper(".mySwiper", {
      loop: true,
      effect : 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed : 2500,
      slideActiveClass: "active",
      pagination: {
      el:".pagination-fraction",
      type: "fraction",
      },
    });
  // 스와이퍼 연동
  swiper01.controller.control =swiper02;
  swiper02.controller.control =swiper01;

  

  $(".start").on("click",function(){
      swiper01.autoplay.start();
      return false;
  });
    $(".stop").on("click",function(){
      swiper01.autoplay.stop();
      return false; 
    });
    $(".stop").click(function(){
      $(".start").addClass("active");
      $(".stop").addClass("active");
    });
    $(".start").click(function(){
      $(".start").removeClass("active");
      $(".stop").removeClass("active");
    });

    function slidePlay(){
    var swiper03 = new Swiper(".proSwiper", {
      slidesPerView:4,
      loop:true,
      autoplay: {
      delay: 2500,
      loopAdditionalSlides: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      },
      pagination: {
        el:".proSwiper .controller .pagination-fraction",
        type: "fraction",
      },
      navigation: {
        nextEl: " .proSwiper .controller .swiper-button-next",
        prevEl: ".proSwiper .controller .swiper-button-prev",
    },
    });

  var swiper04 = new Swiper(".proSwiper1", {
    slidesPerView:4,
    loop:true,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 2500,
      loopAdditionalSlides: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      },
    pagination: {
      el:".proSwiper1 .controller .pagination-fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: " .proSwiper1 .controller .swiper-button-next",
      prevEl: ".proSwiper1 .controller .swiper-button-prev",
  },
  });
  }

  $(".product .swiper").hide();
  $(".product .swiper:first").show();
  var $tablink = $(".pro-text ul li a").click(function(){
    var idx=$tablink.index(this);
    $(".pro-text ul li a").removeClass("active")
    $(".pro-text ul li a").eq(idx).addClass("active");
    $(".product .swiper").hide();
    $(".product .swiper").eq(idx).show();
    slidePlay();
  });
  slidePlay();
  // 이벤트 슬라이드

  var swiper05 = new Swiper(".eventSwiper", {
    slidesPerView:4,
    spaceBetween: 50,
    loop:true, 
    slideActiveClass: "active",
    autoplay: {
      delay: 4000,
      },
    navigation: {
      nextEl: '.eventSwiper .controller .swiper-button-next',
      prevEl: '.eventSwiper .controller .swiper-button-prev',
    },
    pagination: {
      el:".eventSwiper .controller .pagination-fraction",
      type: "fraction",
    },
  });
  var swiper06 = new Swiper(".newsSwiper", {
    loop:true,  //반복
    slidesPerView:"auto",
    spaceBetween: 26,
    loop:true,  //반복
    autoplay: {
      delay: 4000,
      },
    navigation: {
      nextEl: '.newsSwiper .swiper-button-next',
      prevEl: '.newsSwiper .swiper-button-prev',
    },
});






  // 모바일에서만 실행
  // if($(window).width() <=1024){

  // // 햄버거 메뉴 클릭하면 팝업 메뉴가 왼쪽에서 나타남
  // $(".menu").click(function(){
  //     $(".popup_menu").animate({"left":0});
  //     // 윈도우 화면 스크롤 막음
  //     $("html,body").css('overflow-y','hidden')
  // });
  
  // // 팝업 메뉴의 닫기 버튼을 클릭하면 팝업 메뉴가 왼쪽으로 들어감
  // $(".close_btn").click(function(){
  //     $(".popup_menu").animate({"left":"-110vw"});
  //     // 윈도우의 화면 스크롤 활성화
  //     $("html,body").css('overflow-y','visible')
  // });
  // // 팝업 메뉴의 아코디언 메뉴
  // var poppup_nav =$(".popup_menu .popup_nav nav > ul > li > a");
  // poppup_nav.click(function(){
  //     if ($(this).attr('class')!= "active"){
  //     poppup_nav.next().slideUp();
  //     poppup_nav.removeClass("active");
  //         $(this).next().slideDown();
  //         $(this).addClass('active');
  //     }else {
  //         $(this).next().slideUp();
  //         $(this).removeClass('active');
  //     }
      
  // });    
  
 



});
