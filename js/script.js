$(document).ready(function () {
  // 마우스를 누르고 있는 상태
  let hikaruHolding = false;
  let yoshikiHolding = false;

  // 마우스가 캐릭터 위에 있는 상태
  let hikaruOver = false;
  let yoshikiOver = false;

  // 히카루 Hover

  $(".hikaru-hover").on("mouseenter", function () {
    hikaruOver = true;

    if (!yoshikiHolding) {
      $(".hikaru-profile").stop(true, true).fadeIn(300);
      $(".yoshiki-profile").stop(true, true).fadeOut(200);
    }
  });

  $(".hikaru-hover").on("mouseleave", function () {
    hikaruOver = false;

    if (!hikaruHolding) {
      $(".hikaru-profile").stop(true, true).fadeOut(300);
    }
  });

  // 히카루 Hold

  $(".hikaru-hover").on("mousedown", function () {
    if (!yoshikiHolding) {
      hikaruHolding = true;

      $(".yoshiki-profile").stop(true, true).fadeOut(200);

      // 요시키 이미지 변경
      $(".yoshiki-change").attr("src", "./assets/히카루가 죽은 여름_요시키누끼.등O.어두운ver.png");

      $(".poster").addClass("show-hikaru-monster");
      $(".hikaru-profile").stop(true, true).fadeIn(300);
    }
  });

  // 요시키 Hover

  $(".yoshiki-hover").on("mouseenter", function () {
    yoshikiOver = true;

    if (!hikaruHolding) {
      $(".yoshiki-profile").stop(true, true).fadeIn(300);
      $(".hikaru-profile").stop(true, true).fadeOut(200);
    }
  });

  $(".yoshiki-hover").on("mouseleave", function () {
    yoshikiOver = false;

    if (!yoshikiHolding) {
      $(".yoshiki-profile").stop(true, true).fadeOut(300);
    }
  });

  // 요시키 Hold

  $(".yoshiki-hover").on("mousedown", function () {
    if (!hikaruHolding) {
      yoshikiHolding = true;

      $(".hikaru-profile").stop(true, true).fadeOut(200);

      // 문양이 있는 요시키 이미지
      $(".yoshiki-change").attr("src", "./assets/히카루가 죽은 여름_요시키누끼.등O.png");

      $(".poster").addClass("show-yoshiki-hold");
      $(".yoshiki-profile").stop(true, true).fadeIn(300);
    }
  });

  // 마우스를 놓으면 Hold 해제

  $(document).on("mouseup", function () {
    // 히카루 Hold 해제
    if (hikaruHolding) {
      hikaruHolding = false;

      $(".poster").removeClass("show-hikaru-monster");

      // 요시키 이미지 복원
      $(".yoshiki-change").attr("src", "./assets/히카루가 죽은 여름_요시키누끼.등O.png");

      if (!hikaruOver) {
        $(".hikaru-profile").stop(true, true).fadeOut(300);
      }

      if (yoshikiOver) {
        $(".yoshiki-profile").stop(true, true).fadeIn(300);
      }
    }

    // 요시키 Hold 해제
    if (yoshikiHolding) {
      yoshikiHolding = false;

      $(".poster").removeClass("show-yoshiki-hold");

      if (!yoshikiOver) {
        $(".yoshiki-profile").stop(true, true).fadeOut(300);
      }

      if (hikaruOver) {
        $(".hikaru-profile").stop(true, true).fadeIn(300);
      }
    }
  });

  // 제목 光 Hover

  $(".title-hikaru-hover").on("mouseenter", function () {
    $(".poster").addClass("show-title-glitch");
  });

  $(".title-hikaru-hover").on("mouseleave", function () {
    $(".poster").removeClass("show-title-glitch");
  });
});
