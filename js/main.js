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
    $(".boxsix").animate({ bottom: "0px" });
  }
);

//section show

$("button#triger").click(function () {
  $(".show").css("display", "none").slideDown();
});
$("#heading").click(function () {
  $(".show").css("display", "block").slideUp();
});
$(".order").click(function(){
    $("#order").css("display","none")
})
//form
$("tab").hide();
$(".add").hide();
$(".infom").hide();
$(".yes").hide();
$(".no").hide();
$(".infom h5").hide();
$(".order").click(function () {
  var pizzaSize = $(".size").val();
  var pizzaToppings = $(".toppings").val();
  var pizzaCrust = $(".crust").val();
  var total =
    parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
  var order = 1;
  var grandTotal = 0;
  $("table").show();
  $(".add").show();
  $(".order").hide();
  $("#size").html($(".size").text() + " - " + pizzaSize);
  $("#toppings").html($(".toppings").text() + " - " + pizzaToppings);
  $("#crust").html($(".crust").text() + " - " + pizzaCrust);
  $("#total").html(total);
  function Pizza(size, toppings, crust, total, orderNo) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.total = total;
    this.orderNo = orderNo;
  }

    
  $(".btn.add-pizza").click(function () {
    var pizzaSize = $(".size").val();
    var pizzaToppings = $(".toppings").val();
    var pizzaCrust = $(".crust").val();
    var total =
      parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
    order = order + 1;
    grandTotal = grandTotal + total;
    var newPizza = new Pizza(
      pizzaSize,
      pizzaToppings,
      pizzaCrust,
      total,
      order
    );
    var row =
      '<tr><th scope="row">' +
      newPizza.orderNo +
      '</th><td id="size">' +
      $(".size").text() +
      " - " +
      newPizza.size +
      '</td><td id="toppings">' +
      $(".toppings").text() +
      " - " +
      newPizza.toppings +
      '</td><td id="crust">' +
      $(".crust").text() +
      " - " +
      newPizza.crust +
      '</td><td id="total">' +
      newPizza.total +
      "</td></tr>";
    $("#pizza_").append(row);
  });
});
