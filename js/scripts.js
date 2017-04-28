$(function() {
  $("#start-btn").click(function () {
    $("#form-info").show();
    $(".jumbotron").show();
    $(".main-header").hide();
    $("#main-page").hide();
  });
  $("#form-info").submit(function (event) {
    event.preventDefault();
    var quest1 = $("#quest1").val();
    var quest2 = $("#quest2").val();
    var quest3 = $("#quest3").val();
    var quest4 = $("#quest4").val();
    var quest5 = $("#quest5").val();

    if (quest1=="css" && quest5=="css" && quest4=="css" && quest3!=="c") {
      console.log("Your track is totally css");
    } else if (quest1=="css" && quest3=="java") {
      console.log("Java or css");
    } else if (quest1=="css" && quest3=="css") {
      console.log("Css!");
    } else if (quest3=="c" && quest1=="c" && quest2=="c") {
      console.log("Totally c");
    } else if ((quest3=="java" && (quest2=="c" || quest5=="java")) && quest1 !=="css") {
      console.log("Java mobile");
    } else if ((quest3=="c" || quest4=="java") && quest1!=="css" && quest3!=="css") {
      console.log("java or c");
    } else if ((quest3=="c" || quest4=="java") && quest3!=="css" && quest2=="c") {
      console.log("C or java");
    }else if (quest3=="java"&& quest2=="java"&&quest1!=="css") {
      console.log("java mobile");
    } else if (quest3=="java" && (quest5=="java" || quest1=="c")) {
      console.log("java c");
    } else if (quest1=="css" && quest3=="c") {
      console.log("You are art person with big ambission) your track Css Some industrial companies needs css desners.");
    } else if (quest3=="css") {
      console.log("css too");
    }
  });
});
