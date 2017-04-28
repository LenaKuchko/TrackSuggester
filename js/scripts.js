$(function() {
  $("#form-info").submit(function (event) {
    event.preventDefault();
    var quest1 = $("#quest1").val();
    var quest2 = $("#quest2").val();
    var quest3 = $("#quest3").val();
    var quest4 = $("#quest4").val();
    var quest5 = $("#quest5").val();

    if (quest1=="css" && quest5=="css" && quest4=="css" && quest3!=="c") {
      console.log("Your track is totally css");
    } else if (quest1=="css" && quest2=="java" && (quest4=="css" || quest5=="java") && quest3!=="c") {
      console.log("CSS or java");
    } else if ((quest1=="css" || quest5=="java") && quest3!=="c") {
      console.log("Java or css");
    } else if (quest3=="c" && quest1=="c" && quest5=="c") {
      console.log("Totally c");
    } else if (quest4=="java" || quest1=="c" && quest3=="c") {
      console.log("C or Java back-end");
    } else if ((quest3=="c" || quest4=="java") && quest1!=="css") {
      console.log("java or c");
    } else if (quest1=="java" && quest3=="java") {
      console.log("java mobile");
    } else if (quest3=="java" && quest5=="java" ||quest1=="c")) {
      console.log("java c");
    }
  });
});
