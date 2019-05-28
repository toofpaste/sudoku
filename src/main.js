// import { Sudoku } from './script.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  var all1 = [];
  var all2 = [];
  var all3 = [];
  var all4 = [];
  var all5 = [];
  var all6 = [];
  var all7 = [];
  var all8 = [];
  var all9 = [];
    for(var i = 0; i < 9; i++){
        var random = Math.floor(Math.random() * 9) + 1;
        all1[i] = random;
        random = Math.floor(Math.random() * 9) + 1;
        all2[i] = random;
        random = Math.floor(Math.random() * 9) + 1;
        all3[i] = random;
        random = Math.floor(Math.random() * 9) + 1;
        all4[i] = random;
        random = Math.floor(Math.random() * 9) + 1;
        all5[i] = random;
        random = Math.floor(Math.random() * 9) + 1;
        all6[i] = random;
        random = Math.floor(Math.random() * 9) + 1;
        all7[i] = random;
        random = Math.floor(Math.random() * 9) + 1;
        all8[i] = random;
        random = Math.floor(Math.random() * 9) + 1;
        all9[i] = random;
    }
  for(var q = 0; q < 9; q++){
    for(var a = 0; a < 9; a++){
      if(all1[q] === all1[a] && a !== q){
        all1[q] = Math.floor(Math.random() * 9) + 1;
        a = 0;
        q--;
      }

    }
  }
  for(var q5 = 0; q5 < 9; q5++){
    for(var a5 = 0; a5 < 9; a5++){
      if(all5[q5] === all5[a5] && a5 !== q5){
        all5[q5] = Math.floor(Math.random() * 9) + 1;
        a5 = 0;
        q5--;
      }

    }
  }
  for(var q9 = 0; q9 < 9; q9++){
    for(var a9 = 0; a9 < 9; a9++){
      if(all9[q9] === all9[a9] && a9 !== q9){
        all9[q9] = Math.floor(Math.random() * 9) + 1;
        a9 = 0;
        q9--;
      }

    }
  }

  //1 3 5 8
  for(var q2 = 0; q2 < 9; q2++){
    for(var a2 = 0; a2 < 9; a2++){
      if(all2[q2] === all2[a2] && a2 !== q2){
        all2[q2] = Math.floor(Math.random() * 9) + 1;
        a2 = 0;
        q2--;
      }

    }
  }

  //1 2 6 9
  for(var q3 = 0; q3 < 9; q3++){
    for(var a3 = 0; a3 < 9; a3++){
      if(all3[q3] === all3[a3] && a3 !== q3){
        all3[q3] = Math.floor(Math.random() * 9) + 1;
        a3 = 0;
        q3--;
      }

    }
  }

  //1 5 6 7
  for(var q4 = 0; q4 < 9; q4++){
    for(var a4 = 0; a4 < 9; a4++){
      if(all4[q4] === all4[a4] && a4 !== q4){
        all4[q4] = Math.floor(Math.random() * 9) + 1;
        a4 = 0;
        q4--;
      }

    }
  }


  //3 4 5 9
  for(var q6 = 0; q6 < 9; q6++){
    for(var a6 = 0; a6 < 9; a6++){
      if(all6[q6] === all6[a6] && a6 !== q6){
        all6[q6] = Math.floor(Math.random() * 9) + 1;
        a6 = 0;
        q6--;
      }

    }
  }

 //1 4 8 9
  for(var q7 = 0; q7 < 9; q7++){
    for(var a7 = 0; a7 < 9; a7++){
      if(all7[q7] === all7[a7] && a7 !== q7){
        all7[q7] = Math.floor(Math.random() * 9) + 1;
        a7 = 0;
        q7--;
      }

    }
  }

  //2 5 7 9
  for(var q8 = 0; q8 < 9; q8++){
    for(var a8 = 0; a8 < 9; a8++){
      if(all8[q8] === all8[a8] && a8 !== q8){
        all8[q8] = Math.floor(Math.random() * 9) + 1;
        a8 = 0;
        q8--;
      }

    }
  }



// && (all1[k1] === all2[k1] || all1[k1] === all2[k1 + 1] || all1[k1] === all2[k1 + 2] || all1[k1] === all3[k1] || all1[k1] === all3[k1+1] || all1[k1] === all3[k1+2])


    for(var f = 0; f < 9; f++){

      $(".main-box .box1" + " .inBox" + (f+ 1)).text(all1[f]);
      $(".main-box .box2" + " .inBox" + (f+ 1)).text(all2[f]);
      $(".main-box .box3" + " .inBox" + (f+ 1)).text(all3[f]);
      $(".main-box .box4" + " .inBox" + (f+ 1)).text(all4[f]);
      $(".main-box .box5" + " .inBox" + (f+ 1)).text(all5[f]);
      $(".main-box .box6" + " .inBox" + (f+ 1)).text(all6[f]);
      $(".main-box .box7" + " .inBox" + (f+ 1)).text(all7[f]);
      $(".main-box .box8" + " .inBox" + (f+ 1)).text(all8[f]);
      $(".main-box .box9" + " .inBox" + (f+ 1)).text(all9[f]);
    }
});
