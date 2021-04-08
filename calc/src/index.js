import "bootstrap";
import $ from "jquery";

const Calculator = require("@mroutput/jscalc");
var c = new Calculator();
var clr = false;
var lastchar;

// JQuery
$(document).ready(() => {
  var display = $("#display");

  $(".btn").on("click", function (event) {
    var val = $(event.currentTarget).data("val");

    if (val == "+") {
      val = " + ";
    }

    if (val == "=") {
      var ans = c.exec(display.val());
      display.val(ans);
      clr = true;
      return;
    }

    if (clr) {
      display.val(val);
      clr = false;
    } else {
      display.val(display.val() + val);
    }
  });
});
