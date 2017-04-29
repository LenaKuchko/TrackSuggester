$(function() {
  $("#start-btn").click(function () {
    // $("#form-info").show();
    // $(".jumbotron").show();

    $("#anim").fadeTo("slow" , 0.0, function(){});
    setTimeout (function () {
      $("#form-info").show();
      $(".jumbotron").show();
      $("#anim").hide();
    }, 500);
// QUESTION:
    // $("#anim2").fadeIn("slow", function(){});
    // setTimeout (function () {
    //   $("#anim2").show();
    // }, 500);
  });
  $("#form-info").submit(function (event) {
    event.preventDefault();
    var result;
    $("#form-info").hide();
    var name = $("#name").val();
    var quest1 = $("#quest1").val();
    var quest2 = $("#quest2").val();
    var quest3 = $("#quest3").val();
    var quest4 = $("#quest4").val();
    var quest5 = $("#quest5").val();

    if (!quest1 || !quest2 || !quest3 || !quest4 || !quest5) {
      alert("Please, fill all fields.");
      $("#form-info").show();
      return;
    } else if (quest1=="css" && quest3=="css" && quest4=="css") {
      result = "css";
      $("#css").show();
    } else if (quest1=="css" && quest3=="java") {
      result = "java";
      $("#java-css").show();
    } else if (quest3=="c" && quest1=="c" && quest2=="c") {
      result = "C#";
      $("#c").show();
    } else if ((quest3=="java" && (quest2=="c" || quest5=="java")) && quest1 !=="css") {
      result = "Java/mobile";
      $("#java-mobile").show();
    } else if ((quest3=="c" || quest4=="java") && quest1!=="css" && quest3!=="css") {
      result = "Java";
      $("#java-c").show();
    } else if ((quest3=="c" || quest4=="java") && quest3!=="css" && quest2=="c") {
      result = "c/java";
      $("#c-java").show();
    }else if (quest3=="java"&& quest2=="java"&&quest1!=="css") {
      result = "Java/mobile";
      $("#java-mobile").show();
    } else if (quest3=="java" && (quest5=="java" || quest1=="c")) {
      result = "Java";
      $("#java-c").show();
    } else if (quest1=="css" && quest3=="c") {
      result = "Css";
      $("#css").show();
    } else if (quest3=="css") {
      result = "Css";
      $("#css").show();
    } else alert ("Sorry, no matches");

    $(".questions").remove();
    $(".jumbotron").append("<h2>Congradulations! "+name+" Your track is: </h2> <h1>"+ result+"</h1>");
  });
});
