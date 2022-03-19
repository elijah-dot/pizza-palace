// efects// section three

$("#ab").click(function () {
  $("#para1").css("display", "block");
  $("#ab").css("display", "none");
});
$("#para1").click(function () {
  $("#ab").css("display", "block");
  $("#para1").css("display", "none");
});

$("#cd").click(function () {
  $("#para2").css("display", "block");
  $("#cd").css("display", "none");
});
$("#para2").click(function () {
  $("#cd").css("display", "block");
  $("#para2").css("display", "none");
});

$("#ef").click(function () {
  $("#para3").css("display", "block");
  $("#ef").css("display", "none");
});
$("#para3").click(function () {
  $("#ef").css("display", "block");
  $("#para3").css("display", "none");
});

// section four



$(".boxfour").hover(
  function () {
    $(".topone").css("display", "block");
    $(".boxfour").animate({ bottom: "10px" });
  },
  function () {
    $(".topone").css("display", "none");
    $(".boxfour").animate({ bottom: "0px" });
  }
);
$(".boxfive").hover(
  function () {
    $(".toptwo").css("display", "block");
    $(".boxfive").animate({ bottom: "10px" });
  },
  function () {
    $(".toptwo").css("display", "none");
    $(".boxfive").animate({ bottom: "0px" });
  }
);
$(".boxsix").hover(
  function () {
    $(".topthree").css("display", "block");
    $(".boxsix").animate({ bottom: "10px" });
  },
  function () {
    $(".topthree").css("display", "none");
    $(".box").animate({ bottom: "0px" });
  }
);
