$(document).ready(function() {
    $("input[type='button']").click(function(event) {
      var ans1 = $("input[name='Quest1']:checked").val();
      var ans2 = $("input[name='Quest2']:checked").val();
      var ans3 = $("input[name='Quest3']:checked").val();
      var ans4 = $("input[name='Quest4']:checked").val();
      var ans5 = $("input[name='Quest5']:checked").val();
      var ans6 = $("input[name='Quest6']:checked").val();
      var ans7 = $("input[name='Quest7']:checked").val();
    //   var answers = ["A","B","A","B","B","C","C"],
      var score = 0;
      if (ans1 === "A"){
      score += 10;
    }
    else{
        score += 0;
    }
    if (ans2 === "A"){
        score += 10;
      }
      else{
          score += 0;
      }
      if (ans3 === "B"){
        score += 10;
      }
      else{
          score += 0;
      }
      
    });
});