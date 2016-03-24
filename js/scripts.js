$(document).ready(function() {
  $("#triangle").submit(function(event) {
    var S1userinput= parseInt($("input#side1").val());
    var S2userinput= parseInt($("input#side2").val());
    var S3userinput= parseInt($("input#side3").val());


    if (S1userinput, S2userinput === S3userinput) {
      var equilateral = "equilateral";
      $(".triangle").text(equilateral);
      $("#results").show();
    } else if (S1userinput === S2userinput || S1userinput === S3userinput || S2userinput === S3userinput) {
      var isosceles= "isosceles";
      $(".triangle").text(isosceles);
      $("#results").show();
  } else if (S1userinput !== S2userinput && S2userinput !== S3userinput && S1userinput !== S3userinput) {
      var scalene= "scalene";
      $(".triangle").text(scalene);
      $("#results").show();
    } else {
      alert("Doesn't fit neatly into our triangle categories, sowy.");
    }
    event.preventDefault();
  });
});
