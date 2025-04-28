$(document).ready(function(){ //시작
  
  AOS.init();
// 모바일 메뉴

  $(".mgnb-wrap").hide();
  $(".btn-menu").click(function(){
    $(".mgnb-wrap").fadeIn();
  });

  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").fadeOut();
  });

  // 검색영역
  $(".search").hide();

  $(".btn-search").click(function(){
    $(".search").fadeToggle();
    $("header").toggleClass("active");
    $(this).toggleClass("active");
  });


  //상단 메뉴
  $(".depth2, .depth2-bg").hide();

  $("header nav .gnb > li").mouseenter(function(){
    $(this).children(".depth2").stop().fadeIn();
    $(".depth2-bg").stop().fadeIn();
    $("header").addClass("active")
  });

  $("header nav .gnb > li").mouseleave(function(){
    $(this).children(".depth2").stop().fadeOut();
    $(".depth2-bg").stop().fadeOut();
    $("header").removeClass("active")
  });

  //모바일 2차 메뉴
  $(".mgnb > li").click(function(){
    $(this).children(".mdepth2").slideDown();
  });

  //main-banner
  const mb = new Swiper('.mb', {
    
    autoplay: {
      delay: 5000, 
      disableOnInteraction: false,
    },
    loop: true, 
    speed: 1000, 
   
    navigation: {
      nextEl: ".swiper-button-next", 
      prevEl: ".swiper-button-prev", 
    },
    pagination: {
      el: ".swiper-pagination", 
      type: "fraction",
      clickable: true, 
    },

    
  });

  // 재생 정지 기능 추가
    $(".mb-play").hide();

    $(".mb-pause").click(function(){
      mb.autoplay.stop();
      $(".mb-play").show();
      $(".mb-pause").hide();
    });

    $(".mb-play").click(function(){
      mb.autoplay.start();
      $(".mb-play").hide();
      $(".mb-pause").show();
    });

    // 공지사항 슬라이드

    const news_list = new Swiper('.news-list', {
      direction: "vertical",
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
      },
      loop: true, 
      speed: 800, 
  });

    const prd_list = new Swiper('.prd-list', {
      loop: true, 
      slidesPerView: 1.5, 
      spaceBetween: 20,
     
      speed: 1000, 
      autoplay: {
        delay: 5000, 
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination", 
        type: "progressbar",
        clickable: true, 
      },
      breakpoints: { // 반응형 슬라이드
        1200: {
          slidesPerView: 5,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: false,
        },
      },
    
  });

  // 아코디언 배너
  $("#store ul li").eq(0).addClass("active");
  $("#store ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active")
  });

  // 탭메뉴
  $("#brand .brand-img  ul li").not(":first").hide();

  //#brand .brand-name ul li 클릭하면 다음과 같은 일이 일어남

  //1. 선택한 li만 active가 붙고 나머지는 active가 없어져야 함
  //2. 선택한 li만 순번을 담을 변수를 하나 생성
  //3. #brand .brand-img ul li 중에 순번과 동일한 요소만 보여주고 나머지는 숨겨야함

  
  $("#brand .brand-name ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    let tea = $(this).index();

    $("#brand .brand-img ul li").eq(tea).fadeIn().siblings().hide();

  });
  
  // 외워서 기능사 시험 칠 때 써야함


}); //실행틀 끝