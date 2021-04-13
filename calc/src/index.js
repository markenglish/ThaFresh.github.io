import "bootstrap";
import $ from "jquery";
import "alpinejs";

// JQuery
$(document).ready(() => {
  var inputLst = ["followersFB", "followersInsta", "followersLI", "associated", "associatedLeader", "associatedFollowers", "perceivedQuality", "customerContact", "potential", "loyalty"];

  inputLst.forEach((fn) => {
    console.log(fn);
  });
});
