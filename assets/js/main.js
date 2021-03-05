//custom js
$(document).ready(function () {
  //owl slider
  $("#banner-slider .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
  });
});
$(".deliver").click(function () {
  $("#sum-order form").show();
});
$(function () {
  $(".summary").hide();
  $(".cdata-overlay").hide();
  $(".order-summary").hide();
  //Get inputs
  $("#checkout").click(function () {
    let deliveryPrice = 500;

    $(".order-summary").show();
     $(".pickup").show();

    if ($("option:selected").text() == "") {
      e.preventDefault();
      e.stopImmediatePropagation();
      alert("select pizza all pizza options");
    }
    // let options = ["tomato", "onions", "mushroom", "greenpepper", "olives", "pineapple", "sweetcorn", "macon", "mince", "beef", "chicken"];
    let flavour = $(".flavour option:selected").val();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let toppings = [];
    $.each($(".selectpicker option:selected"), function () {
      toppings.push($(this).val());
    });
    // console.log(toppings);
    let number = $("#number").val();
    // console.log(size);
    //Function order
    let order = (f, s, c, t, n, d, g, total) => {
      return { f, s, c, t, n, d, g, total };
    };
    //check price
    let price, totalPrice;
    switch (flavour) {
      case (flavour = "vegtikka"):
        switch (size) {
          case (size = "regular  @ 300"):
            price = 300;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "medium  @ 600"):
            price = 600;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "large  @ 1200"):
            price = 1200;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
        }
        break;
      case (flavour = "chickentikka"):
        switch (size) {
          case (size = "regular  @ 300"):
            price = 300;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "medium  @ 600"):
            price = 600;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "large  @ 1200"):
            price = 1200;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
        }
        break;
      case (flavour = "periperi"):
        switch (size) {
          case (size = "regular  @ 300"):
            price = 300;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "medium  @ 600"):
            price = 600;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "large  @ 1200  @ 1200"):
            price = 1200;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
        }
        break;
      case (flavour = "bbq"):
        switch (size) {
          case (size = "regular  @ 300"):
            price = 300;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "medium  @ 600"):
            price = 600;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "large  @ 1200"):
            price = 1200;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
        }
        break;
      case (flavour = "boerewors"):
        switch (size) {
          case (size = "regular  @ 300"):
            price = 300;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "medium  @ 600"):
            price = 600;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "large  @ 1200"):
            price = 1200;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
        }
        break;
      case (flavour = "hawaiian"):
        switch (size) {
          case (size = "regular  @ 300"):
            price = 300;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "medium  @ 600"):
            price = 600;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "large  @ 1200"):
            price = 1200;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
        }
        break;
      case (flavour = "mushroom"):
        switch (size) {
          case (size = "regular  @ 300"):
            price = 300;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "medium  @ 600"):
            price = 600;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "large  @ 1200"):
            price = 1200;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
        }
        break;
      case (flavour = "regina"):
        switch (size) {
          case (size = "regular  @ 300"):
            price = 300;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "medium  @ 600"):
            price = 600;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
          case (size = "large  @ 1200"):
            price = 1200;
            if (crust === "thin @ Ksh. 100") {
              totalPrice = price * number + 100;
            } else if (crust === "thick  @ Ksh. 150") {
              totalPrice = price * number + 150;
            } else if (crust === "flatbread @ sh. 180") {
              totalPrice = price * number + 180;
            } else {
              totalPrice = price * number + 280;
            }
            break;
        }
        break;
    }
    let toppingPrice = 0;
    for (var i = 0; i < toppings.length; i++) {
      var Topping = toppings[i];

      switch (Topping) {
        case (Topping = "tomato @ sh. 80"):
          toppingPrice += 80;
          break;
        case (Topping = "onions @ sh. 80"):
          toppingPrice += 80;
          break;
        case (Topping = "mushroom  @ sh. 80"):
          toppingPrice += 80;
          break;
        case (Topping = "greenpepper  @ sh. 80"):
          toppingPrice += 80;
          break;
        case (Topping = "olives @ sh. 120"):
          toppingPrice += 120;
          break;
        case (Topping = "pineapple @ sh. 120"):
          toppingPrice += 120;
          break;
        case (Topping = "sweetcorn @ sh. 120"):
          toppingPrice += 120;
          break;
        case (Topping = "macon @ sh. 120"):
          toppingPrice += 120;
          break;
        case (Topping = "mince @ sh. 120"):
          toppingPrice += 120;
          break;
        case (Topping = "beef @ sh. 170"):
          toppingPrice += 170;
          break;
        case (Topping = "chicken  @ sh. 170"):
          toppingPrice += 170;
          break;
      }
    }
    // console.log((toppingPrice + totalPrice)); //can be stored in a total price variable.
    totalPrice = toppingPrice + totalPrice;
    grandtotal = totalPrice + deliveryPrice;
    //Execute order function
    let newOrder = order(
      flavour,
      size,
      crust,
      toppings,
      number,
      deliveryPrice,
      totalPrice,
      grandtotal
    );
    console.log(newOrder); // test func
    //create a new object
    // let myOrder = JSON.stringify(JSON.parse(newOrder));
    //Write to the order
    $(".summary").slideDown(2000);
    $(".new-order").hide();
    $(".cdata-overlay").slideUp();
    $("#list").slideDown();
    $(".deliver").show(1000);
    $(".delivernot").show(1000);
    $("#list").text(" ");
    $("#list")
      .append(
        "<br>" +
          "Flavour :   " +
          newOrder.f +
          "<br>" +
          "Size :   " +
          newOrder.s +
          "<br>" +
          "Crust :     " +
          newOrder.c +
          "<br>" +
          "Toppings :    " +
          newOrder.t +
          "<br>" +
          " Number of pizzas :    " +
          newOrder.n +
          "<br>" +
          "<br><br>"
      )
      .css("font-family", "system-ui")
      .css("font-size", "24px");
    //Deliver
    $(".deliver").click(function () {
      $(".summary").slideUp();
      $("#list").slideUp();
      $(".summary").text("Provide location details").slideDown();
      $(".summary").text("Delivery fee is ksh.500 ").slideDown();
      $(".deliver").hide(1000);

      $(".pickup").hide(1000);
      $(".cdata-overlay").slideDown();
    });
    grandtotal = totalPrice + deliveryPrice;
    pickupAmount = grandtotal - deliveryPrice;
    $(".main-delivery").click(function (e) {
      var person = $("input[id=personname]").val();
      var location = $("input[id=personlocation]").val();
      if ($(".cdata").val() == "") {
        e.preventDefault();
        e.stopImmediatePropagation();
        alert("Input can not be left blank");
      } else {
        $(".data").submit(function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          console.log(person);
          console.log(location);
        });
      }
      $(".summary").slideDown(2000);
      $(".cdata-overlay").slideUp();
      $("#list").slideDown();
      $("#checkout").show(1000);
      $(".new-order").show();
      $(".new-order").click(function () {
        $("#sum-order").hide();
        $(".pickup").show();
      });

      $("#list").text(" ");
      $("#list")
        .append(
          "<br>" +
            "Flavour :   " +
            newOrder.f +
            "<br>" +
            "Size :   " +
            newOrder.s +
            "<br>" +
            "Crust :     " +
            newOrder.c +
            "<br>" +
            "Toppings :    " +
            newOrder.t +
            "<br>" +
            "Number of pizzas :    " +
            newOrder.n +
            "<br>" +
            "Delivery Price :    " +
            newOrder.d +
            "<br>" +
            "Total Price :  " +
            newOrder.total +
            "<br>" +
            person +
            ", We have recieved your order and it will be delivered to you at " +
            location +
            ". Prepare sh. " +
            grandtotal +
            "<br><br>"
        )

        .css("font-family", "system-ui")
        .css("font-size", "24px");
      // console.log(deliveryPrice);
    });
    console.log(grandtotal);

    $(".pickup").click(function (e) {
      $(".summary").slideUp();
      $(".deliver").hide();
      $(".pickup").hide();
      $(".cdata-overlay").hide();

      $(".summary").show();
      $(".cdata-overlay").hide();
      $("#list").slideDown();
      $("#checkout").show();
      $(".new-order").show();
      $(".new-order").click(function () {
        $("#sum-order").hide();
        $(".pickup").show();
      });

      $("#list").text(" ");
      $("#list")
        .append(
          "<br>" +
            "Flavour :   " +
            newOrder.f +
            "<br>" +
            "Size :   " +
            newOrder.s +
            "<br>" +
            "Crust :     " +
            newOrder.c +
            "<br>" +
            "Toppings :    " +
            newOrder.t +
            "<br>" +
            "Number of pizzas :    " +
            newOrder.n +
            "<br>" +
            "Total Price :  " +
            pickupAmount +
            "<br>" +
            "We have recieved your order!Please pick it up at Pizza Palace Nairobi. Prepare sh. " +
            pickupAmount +
            "<br><br>"
        )

        .css("font-family", "system-ui")
        .css("font-size", "24px");
    });
  });
});
