$(function() {
  $("#start-btn").click(function () {
    $("#form-info").show();
    $(".jumbotron").show();
    $(".main-header").hide();
    $("#main-page").hide();
  });
  $("#form-info").submit(function (event) {
    event.preventDefault();
    var result;
    $("#form-info").hide();
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
      console.log("css");
    } else if (quest1=="css" && quest3=="java") {
      result = "java";
      $("#java-css").show();
      console.log("java/css");
    } else if (quest3=="c" && quest1=="c" && quest2=="c") {
      result = "C#";
      $("#c").show();
      console.log("c");
    } else if ((quest3=="java" && (quest2=="c" || quest5=="java")) && quest1 !=="css") {
      result = "java/mobile";
      $("#java-mobile").show();
      console.log("java/mobile");
    } else if ((quest3=="c" || quest4=="java") && quest1!=="css" && quest3!=="css") {
      result = "Java";
      $("#java-c").show();
      console.log("java/c");
    } else if ((quest3=="c" || quest4=="java") && quest3!=="css" && quest2=="c") {
      result = "c/java";
      $("#c-java").show();
      console.log("C#");
    }else if (quest3=="java"&& quest2=="java"&&quest1!=="css") {
      result = "java/mobile";
      $("#java-mobile").show();
      console.log("java/mobile");
    } else if (quest3=="java" && (quest5=="java" || quest1=="c")) {
      result = "java/c";
      $("#java-c").show();
      console.log("java/c");
    } else if (quest1=="css" && quest3=="c") {
      result = "css";
      $("#css").show();
      console.log(" css/c You are art person with big ambission) your track Css Some industrial companies needs css desners.");
    } else if (quest3=="css") {
      result = "css";
      console.log("css/c");
      $("#css").show();
    } else alert ("Sorry, no matches");
    console.log(result);
    $(".questions").remove();
    $(".jumbotron").append("<h1>Congradulations! Your track is: </h1> <h1>"+ result+"</h1>");
  });
});
