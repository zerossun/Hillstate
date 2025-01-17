// hover 이벤트를 적용하는 함수
function applyHoverEffect() {
  // $(".pc").hover(
  //   function () {
  //     // 호버 시 서브메뉴와 배경을 표시
  //     $(this).find(".pc-submenu").stop().slideDown(200);
  //     $(".pc-nav_bg").stop().slideDown(200);
  //   },
  //   function () {
  //     // 호버 해제 시 서브메뉴와 배경을 숨김
  //     $(this).find(".pc-submenu").stop().slideUp(200);
  //     $(".pc-nav_bg").stop().slideUp(200);
  //   }
  // );

  $(".pc").on("mouseenter", function (event) {
    // 이벤트 버블링 방지
    event.stopPropagation();

    // 호버 시 서브메뉴와 배경을 표시
    $(this).find(".pc-submenu").stop().slideDown(200);
    $(".pc-nav_bg").stop().slideDown(200);
  });

  $(".pc").on("mouseleave", function (event) {
    // 이벤트 버블링 방지
    event.stopPropagation();

    // 호버 해제 시 서브메뉴와 배경을 숨김
    $(this).find(".pc-submenu").stop().slideUp(200);
    $(".pc-nav_bg").stop().slideUp(200);
  });
}

//모바일
function applyMobileEffect() {
  //menu toggle
  $(function () {
    $(".mobile")
      .off("click")
      .on("click", function () {
        $(".m-lgb").toggle();
      });
  });
}

function applyMobileEffect_2() {
  //submenu toggle
  $(function () {
    $(".m-menu > .m-menu-title > .m-menu-img")
      .off("click")
      .on("click", function () {
        const submenu = $(this).closest(".m-menu").find(".m-submenu");

        // 다른 서브메뉴 닫기
        $(".m-submenu").not(submenu).stop(true, true).slideUp(200);

        // 현재 서브메뉴 토글
        submenu.stop(true, true).slideToggle(200);

        // 버튼 이미지 전환
        $(".m-menu-img").not(this).removeClass("toggle");
        $(this).toggleClass("toggle");
      });
  });
}

function subEffect() {
  //submenu toggle
  $(function () {
    $(".sub-main-pager_m > .pager_m-title > .pager_m-img")
      .off("click")
      .on("click", function () {
        const submenu_2 = $(this)
          .closest(".sub-main-pager_m")
          .find(".pager_m-con");

        // 다른 서브메뉴 닫기
        // $(".m-submenu").not(submenu).stop(true, true).slideUp(200);

        // 현재 서브메뉴 토글
        submenu_2.stop(true, true).slideToggle(200);

        // 버튼 이미지 전환
        $(".pager_m-img").not(this).removeClass("toggle");
        $(this).toggleClass("toggle");
      });
  });
}

function scrollTop() {
  $(".m_top_btn").on("click", function () {
    $("html ,body").animate(
      {
        scrollTop: 0,
      },
      200
    );
    return false;
  });
}
