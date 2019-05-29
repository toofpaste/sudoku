// import { Sudoku } from './script.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

var globe = 0;

function createSquare(all1){
  for(var q = 0; q < 9; q++){
    for(var a = 0; a < 9; a++){
      if(all1[q] === all1[a] && a !== q){
        all1[a] = Math.floor(Math.random() * 9) + 1;
        a = 0;
        q = 0;
      }

    }
  }
  return all1;
}
function addNum(all1){
  for(var i = 0; i < 9; i++){
    var random = Math.floor(Math.random() * 9) + 1;
    all1[i] = random;
  }
  return all1;
}
function checkTopRow(all1, all2){
  var arr2 = all2.slice(0, 2 + 1);
  // console.log("0,2 " + arr2);
  for(var s1 = 0; s1 < 3; s1++){
    if(arr2.includes(all1[s1])){
      return false;
    }
  }
  return true;
}
//3, 4, 5
function checkMidRow(all1, all2){
  var arr3 = all2.slice(3, 5 + 1);
  // console.log("3,5 " + arr3);
  for(var s2 = 3; s2 < 6; s2++){
    if(arr3.includes(all1[s2])){
      return false;
    }
  }
  return true;
}
function checkBotRow(all1, all2){
  var arr4 = all2.slice(6, 8 + 1);
  // console.log("6,8 " + arr4);
  for(var s3 = 6; s3 < 9; s3++){
    if(arr4.includes(all1[s3])){
      return false;
    }
  }
  return true;
}


function checkTopEndRow(all1, all2, all3){
  var arr2 = all1.slice(0, 2 + 1);
  var arr3 = all2.slice(0, 2 + 1);
  // console.log("0,2 " + arr2);
  for(var s1 = 0; s1 < 3; s1++){
    if(arr2.includes(all3[s1]) || arr3.includes(all3[s1])){
      return false;
    }
  }
  return true;
}
//3, 4, 5
function checkMidEndRow(all1, all2, all3){
  var arr3 = all1.slice(3, 5 + 1);
  var arr4 = all2.slice(3, 5 + 1);
  // console.log("all1: " + all1);
  // console.log("3,5 " + arr3);
  for(var s2 = 3; s2 < 6; s2++){
    if(arr3.includes(all3[s2])|| arr4.includes(all3[s2])){
      return false;
    }
  }
  return true;
}
//check first array vs 2nd and 3rd array passed
function checkBotEndRow(all1, all2, all3){
  var arr4 = all1.slice(6, 8 + 1);
  var arr5 = all2.slice(6, 8 + 1);
  // console.log("6,8 " + arr4);
  for(var s3 = 6; s3 < 9; s3++){
    if(arr4.includes(all3[s3])|| arr4.includes(all3[s3])){
      return false;
    }
  }
  return true;
}
function fixMidSquare(all1, all2){
  var x = 0;
  var i = 0;
  while(i <= 3){
    x++;
    globe++;
    if(x >= 1000000){
      console.log("unable to fix mid square");
      break;
    }
    if(checkTopRow(all1, all2) && checkMidRow(all1, all2) && checkBotRow(all1, all2)){
      break;
    }
    if(i <= 3){
      i = 0;
      all2 = addNum(all2);
      all2 = createSquare(all2);
    }
  }
  return all2;
}
//checkTopEndRow(all1, all2, all3) && checkMidEndRow(all1, all2, all3) && checkBotEndRow(all1, all2, all3)
function fixEndSquare(all1, all2, all3){
  var x = 0;
  var i = 0;
  while(i <= 3){
    globe++;
    x++;
    if(x >= 1000000){
      console.log("unable to fix end row");
      break;
    }
    if(checkCorrect(all1, all2, all3, 0)){
      break;
    }else{
      if(i <= 3){
        i = 0;
        all3 = addNum(all3);
        all3 = createSquare(all3);
      }
    }
  }
  return all3;
}

//0  3 6
function checkFirstCol(all1, all2){
  var arr2 = [];
  var arr3 = [];

  arr3[0] = all2[0];
  arr3[1] = all2[3];
  arr3[2] = all2[6];

  arr2[0] = all1[0];
  arr2[1] = all1[3];
  arr2[2] = all1[6];
  for(var s1 = 0; s1 < 3; s1++){
    if(arr2.includes(arr3[s1])){
      return false;
    }
  }
  return true;
}

//1 4 7
function checkSecondCol(all1, all2){
  var arr2 = [];
  var arr3 = [];

  arr3[0] = all2[1];
  arr3[1] = all2[4];
  arr3[2] = all2[7];

  arr2[0] = all1[1];
  arr2[1] = all1[4];
  arr2[2] = all1[7];
  for(var s1 = 0; s1 < 3; s1++){
    if(arr2.includes(arr3[s1])){
      return false;
    }
  }
  return true;
}

//2 5 8
function checkThirdCol(all1, all2){
  var arr2 = [];
  var arr3 = [];

  arr3[0] = all2[2];
  arr3[1] = all2[5];
  arr3[2] = all2[8];

  arr2[0] = all1[2];
  arr2[1] = all1[5];
  arr2[2] = all1[8];
  for(var s1 = 0; s1 < 3; s1++){
    if(arr2.includes(arr3[s1])){
      return false;
    }
  }
  return true;
}

//0 3 6
function checkFirstEndCol(all1, all2, all3){
  var arr4 = [];
  var arr5 = [];
  var arr6 = [];
  arr6[0] = all3[0];
  arr6[1] = all3[3];
  arr6[2] = all3[6];


  arr4[0] = all1[0];
  arr4[1] = all1[3];
  arr4[2] = all1[6];

  arr5[0] = all2[0];
  arr5[1] = all2[3];
  arr5[2] == all2[6];
  for(var s3 = 0; s3 < 3; s3++){
    if(arr4.includes(arr6[s3])|| arr5.includes(arr6[s3])){
      return false;
    }
  }
  return true;
}

//1 4 7
function checkSecondEndCol(all1, all2, all3){
  var arr4 = [];
  var arr5 = [];
  var arr6 = [];
  arr6[0] = all3[1];
  arr6[1] = all3[4];
  arr6[2] = all3[7];

  arr4[0] = all1[1];
  arr4[1] = all1[4];
  arr4[2] = all1[7];

  arr5[0] = all2[1];
  arr5[1] = all2[4];
  arr5[2] == all2[7];
  for(var s3 = 0; s3 < 3; s3++){
    if(arr4.includes(arr6[s3])|| arr5.includes(arr6[s3])){
      return false;
    }
  }
  return true;
}

//2 5 8
function checkThirdEndCol(all1, all2, all3){
  var arr4 = [];
  var arr5 = [];
  var arr6 = [];
  arr6[0] = all3[2];
  arr6[1] = all3[5];
  arr6[2] = all3[8];

  arr4[0] = all1[2];
  arr4[1] = all1[5];
  arr4[2] = all1[8];

  arr5[0] = all2[2];
  arr5[1] = all2[5];
  arr5[2] == all2[8];
  for(var s3 = 0; s3 < 3; s3++){
    if(arr4.includes(arr6[s3])|| arr5.includes(arr6[s3])){
      return false;
    }
  }
  return true;
}

// (checkTopRow(all1, all2) && checkMidRow(all1, all2) && checkBotRow(all1, all2) && checkFirstCol(all1, all2) && checkSecondCol(all1, all2) && checkThirdCol(all1, all2))
//
// (checkTopEndRow(all1, all2, all3) && checkMidEndRow(all1, all2, all3) && checkBotEndRow(all1, all2, all3) && checkFirstEndCol(all1, all2, all3) && checkSecondEndCol(all1, all2, all3) && checkThirdEndCol(all1, all2, all3))
function fixColMidSquare(all1, all2){
  var x = 0;
  var i = 0;
  while(i <= 3){
    x++;
    globe++;
    if(x >= 10000){
      console.log("unable to fix mid collumn");
      break;
    }
    if(checkFirstCol(all1, all2) && checkSecondCol(all1, all2) && checkThirdCol(all1, all2)){
      break;
    }
    if(i <= 3){
      i = 0;
      all2 = addNum(all2);
      all2 = createSquare(all2);
    }
  }
  return all2;
}
//checkFirstEndCol(all1, all2, all3) && checkSecondEndCol(all1, all2, all3) && checkThirdEndCol(all1, all2, all3)
function fixColEndSquare(all1, all2, all3){
  var x = 0;
  var i = 0;
  while(i <= 3){
    globe++;
    x++;
    if(x >= 10000){
      console.log("unable to fix end collumn");
      break;
    }
    if(checkCorrect(all1, all2, all3, 1)){
      break;
    }else{
      if(i <= 3){
        i = 0;
        all2 = addNum(all2);
        all2 = createSquare(all2);
        all3 = addNum(all3);
        all3 = createSquare(all3);
      }
    }
  }
  return [all2, all3];
}

function fixEverything(all1, all2, all3, all4, all5, all6, all7, all8, all9){
  var x = 0;
  var i = 0;
  while(i <= 3){
    x++;
    globe++;
    if(x >= 1000000){
      console.log("unable to fix everything");
      break;
    }
    if(checkCorrect(all1, all2, all3, 0) && checkCorrect(all4, all5, all6, 0) && checkCorrect(all7, all8, all9, 0) && checkCorrect(all1, all4, all7, 1) && checkCorrect(all2, all5, all8, 1) && checkCorrect(all3, all6, all9, 1)){
      break;
    }else{
      if(i <= 3){
        i = 0;
        all1 = addNum(all1);
        all1 = createSquare(all1);
        all2 = addNum(all2);
        all2 = createSquare(all2);
        all3 = addNum(all3);
        all3 = createSquare(all3);
        all4 = addNum(all4);
        all4 = createSquare(all4);
        all5 = addNum(all5);
        all5 = createSquare(all5);
        all6 = addNum(all6);
        all6 = createSquare(all6);
        all7 = addNum(all7);
        all7 = createSquare(all7);
        all8 = addNum(all8);
        all8 = createSquare(all8);
        all9 = addNum(all9);
        all9 = createSquare(all9);
      }
    }
  }
  return [all1, all2, all3, all4, all5, all6, all7, all8, all9];
}



function checkCorrect(all1, all2, all3, tf){
  var count = 0;
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  var arr4 = [];
  var arr5 = [];
  var arr6 = [];
  var arr7 = [];
  var arr8 = [];
  var arr9 = [];
  //0 3
  //3 6
  //6 9
  if(tf === 0){
    arr1 = all1.slice(0,3);
    arr2 = all2.slice(0,3);
    arr3 = all3.slice(0,3);

    arr4 = all1.slice(3,6);
    arr5 = all2.slice(3,6);
    arr6 = all3.slice(3,6);

    arr7 = all1.slice(6,9);
    arr8 = all2.slice(6,9);
    arr9 = all3.slice(6,9);
    for(var ct = 0; ct < 3; ct++){
      if(arr1.includes(all2[ct]) || arr1.includes(all3[ct]) || arr2.includes(all1[ct]) || arr2.includes(all3[ct]) || arr3.includes(all1[ct]) || arr3.includes(all2[ct]) || arr4.includes(all2[ct+3]) || arr4.includes(all3[ct+3]) || arr5.includes(all1[ct+3]) || arr5.includes(all3[ct+3]) || arr6.includes(all1[ct+3]) || arr6.includes(all2[ct+3]) || arr7.includes(all2[ct+6]) || arr7.includes(all3[ct+6]) || arr8.includes(all1[ct+6]) || arr8.includes(all3[ct+6]) || arr9.includes(all1[ct+6]) || arr9.includes(all2[ct+6])){
        return false;
      }

    }
  }
  //0  3 6
  //1 4 7
  //2 5 8
  if(tf === 1){
    arr1[0] = all1[0];
    arr1[1] = all1[3];
    arr1[2] = all1[6];

    arr2[0] = all2[0];
    arr2[1] = all2[3];
    arr2[2] = all2[6];

    arr3[0] = all3[0];
    arr3[1] = all3[3];
    arr3[2] = all3[6];



    arr4[0] = all1[1];
    arr4[1] = all1[4];
    arr4[2] = all1[7];

    arr5[0] = all2[1];
    arr5[1] = all2[4];
    arr5[2] = all2[7];

    arr6[0] = all3[1];
    arr6[1] = all3[4];
    arr6[2] = all3[7];



    arr7[0] = all1[2];
    arr7[1] = all1[5];
    arr7[2] = all1[8];

    arr8[0] = all2[2];
    arr8[1] = all2[5];
    arr8[2] = all2[8];

    arr9[0] = all3[2];
    arr9[1] = all3[5];
    arr9[2] = all3[8];
    for(var ct1 = 0; ct1 < 3; ct1++){
      if(arr1.includes(arr2[ct1]) || arr1.includes(arr3[ct1]) || arr2.includes(arr1[ct1]) || arr2.includes(arr3[ct1]) || arr3.includes(arr1[ct1]) || arr3.includes(arr2[ct1]) ||       arr4.includes(arr5[ct1]) || arr4.includes(arr6[ct1]) || arr5.includes(arr4[ct1]) || arr5.includes(arr6[ct1]) || arr6.includes(arr4[ct1]) || arr6.includes(arr5[ct1]) ||        arr7.includes(arr8[ct1]) || arr7.includes(arr9[ct1]) || arr8.includes(arr7[ct1]) || arr8.includes(arr9[ct1]) || arr9.includes(arr7[ct1]) || arr9.includes(arr8[ct1])){
        return false;
      }

    }
  }
  return true;
}
// var all1 = [2,9,6,5,8,4,7,1,3];
// var all2 = [3,1,8,9,7,2,6,4,5];
// var all3 = [5,7,4,6,1,3,2,8,9];
// var all4 = [6,2,5,9,3,1,4,7,8];
// var all5 = [8,9,7,4,2,6,5,3,1];
// var all6 = [3,4,1,8,5,7,9,2,6];
// var all7 = [1,6,7,8,5,9,3,4,2];
// var all8 = [2,5,3,7,6,4,1,8,9];
// var all9 = [4,9,8,1,3,2,7,6,5];

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
  all1 = addNum(all1);
  all2 = addNum(all2);
  all3 = addNum(all3);
  all4 = addNum(all4);
  all5 = addNum(all5);
  all6 = addNum(all6);
  all7 = addNum(all7);
  all8 = addNum(all8);
  all9 = addNum(all9);
  // var all1 = [2,9,6,5,8,4,7,1,1];
  // var all2 = [3,1,8,9,7,2,6,4,1];
  // var all3 = [5,7,4,6,1,3,2,8,1];
  // var all4 = [6,2,5,9,3,1,4,7,1];
  // var all5 = [8,9,7,4,2,6,5,3,1];
  // var all6 = [3,4,1,8,5,7,9,2,1];
  // var all7 = [1,6,7,8,5,9,3,4,1];
  // var all8 = [2,5,3,7,6,4,1,8,1];
  // var all9 = [4,9,8,1,3,2,7,6,1];
  // all1 = createSquare(all1);
  // all2 = createSquare(all2);
  // all3 = createSquare(all3);
  // all4 = createSquare(all4);
  // all5 = createSquare(all5);
  // all6 = createSquare(all6);
  // all7 = createSquare(all7);
  // all8 = createSquare(all8);
  // all9 = createSquare(all9);
  // console.log("all1: " + all1);
  // console.log("all2: " + all2);
  // console.log("all3: " + all3);
  // console.log("all4: " + all4);
  // console.log("all5: " + all5);
  // console.log("all6: " + all6);
  // console.log("all7: " + all7);
  // console.log("all8: " + all8);
  // console.log("all9: " + all9);
  // debugger;

  // all5 = createSquare(all5);
  // all4 = fixMidSquare(all5, all4);
  // all5 = fixColMidSquare(all2, all5);
  //
  // all9 = fixColMidSquare(all3, all9);
  // all1 = createSquare(all1);
  // console.log("SQUARE 1 COMPLETED");
  // all2 = createSquare(all2);
  // all2 = fixMidSquare(all1, all2);
  // console.log("SQUARE 2 COMPLETED");
  // all3 = createSquare(all3);
  // all3 = fixEndSquare(all1, all2, all3);
  // console.log("SQUARE 3 COMPLETED");
  // all4 = createSquare(all4);
  // all4 = fixColMidSquare(all1, all4);
  // console.log("SQUARE 4 COMPLETED");
  // all5 = createSquare(all5);
  // all5 = fixMidSquare(all4, all5);
  // all5 = fixColMidSquare(all2, all5);
  // console.log("SQUARE 5 COMPLETED");
  // all6 = createSquare(all6);
  // all6 = fixEndSquare(all4, all5, all6);
  // all6 = fixColMidSquare(all3, all6);
  // console.log("SQUARE 6 COMPLETED");
  // all7 = createSquare(all7);
  // all7 = fixColEndSquare(all1, all4, all7);
  // console.log("SQUARE 7 COMPLETED");
  // all8 = createSquare(all8);
  // all8 = fixMidSquare(all7, all8);
  // all8 = fixColEndSquare(all2, all5, all8);
  // console.log("SQUARE 8 COMPLETED");
  // all9 = createSquare(all9);
  // all9 = fixEndSquare(all7, all8, all9);
  // all9 = fixColEndSquare(all3, all6, all9);
  // console.log("SQUARE 9 COMPLETED");
  let run = true;
  var count = 0;
  var count2 = 0;
  while(run){
    globe++;
    count++;
    console.log("try: " + count);

    if(checkCorrect(all1, all2, all3, 0) && checkCorrect(all4, all5, all6, 0) && checkCorrect(all1, all4, all7, 1) && checkCorrect(all2, all5, all8, 1) && checkCorrect(all3, all6, all9, 1) && checkCorrect(all7, all8, all9, 0)){
      run = false;
      break;
    }else{
      // all1 = [2,9,6,5,8,4,7,1,1];
      // all2 = [3,1,8,9,7,2,6,1,1];
      // all3 = [5,7,4,6,1,3,2,1,1];
      // all4 = [6,2,5,9,3,1,4,1,1];
      // all5 = [8,9,7,4,2,6,5,1,1];
      // all6 = [3,4,1,8,5,7,9,1,1];
      // all7 = [1,6,7,8,5,9,3,1,1];
      // all8 = [2,5,3,7,6,4,1,1,1];
      // all9 = [4,9,8,1,3,2,7,1,1];
      // all1 = createSquare(all1);
      // all2 = createSquare(all2);
      // all3 = createSquare(all3);
      // all4 = createSquare(all4);
      // all5 = createSquare(all5);
      // all6 = createSquare(all6);
      // all7 = createSquare(all7);
      // all8 = createSquare(all8);
      // all9 = createSquare(all9);
      // console.log("all1: " + all1);
      // console.log("all2: " + all2);
      // console.log("all3: " + all3);
      // console.log("all4: " + all4);
      // console.log("all5: " + all5);
      // console.log("all6: " + all6);
      // console.log("all7: " + all7);
      // console.log("all8: " + all8);
      // console.log("all9: " + all9);
      // debugger;
    all1 = [];
    all2 = [];
    all3 = [];
    all4 = [];
    all5 = [];
    all6 = [];
    all7 = [];
    all8 = [];
    all9 = [];

    all1 = addNum(all1);
    all2 = addNum(all2);
    all3 = addNum(all3);
    all4 = addNum(all4);
    all5 = addNum(all5);
    all6 = addNum(all6);
    all7 = addNum(all7);
    all8 = addNum(all8);
    all9 = addNum(all9);
    all1 = createSquare(all1);
    all2 = createSquare(all2);
    all3 = createSquare(all3);
    all4 = createSquare(all4);
    all5 = createSquare(all5);
    all6 = createSquare(all6);
    all7 = createSquare(all7);
    all8 = createSquare(all8);
    all9 = createSquare(all9);
  }
    // console.log("row1: " + checkCorrect(all1, all2, all3, 0));
    // console.log("row2: " + checkCorrect(all4, all5, all6, 0));
    // console.log("row3: " + checkCorrect(all7, all8, all9, 0));
    // console.log("col1: " + checkCorrect(all1, all4, all7, 1));
    // console.log("col2: " + checkCorrect(all2, all5, all8, 1));
    // console.log("col3: " + checkCorrect(all3, all6, all9, 1));
    // console.log("all1: " + all1);
    // console.log("all2: " + all2);
    // console.log("all3: " + all3);
    // console.log("all4: " + all4);
    // console.log("all5: " + all5);
    // console.log("all6: " + all6);
    // console.log("all7: " + all7);
    // console.log("all8: " + all8);
    // console.log("all9: " + all9);
    if(count >= 5){
      // console.log("last ditch effort");
      // var allArr = fixEverything(all1, all2, all3, all4, all5, all6, all7, all8, all9);
      // all1 = allArr[0];
      // all2 = allArr[1];
      // all3 = allArr[2];
      // all4 = allArr[3];
      // all5 = allArr[4];
      // all6 = allArr[5];
      // all7 = allArr[6];
      // all8 = allArr[7];
      // all9 = allArr[8];
      if(checkCorrect(all1, all2, all3, 0) && checkCorrect(all4, all5, all6, 0) && checkCorrect(all7, all8, all9, 0) && checkCorrect(all1, all4, all7, 1) && checkCorrect(all2, all5, all8, 1) && checkCorrect(all3, all6, all9, 1)){
        console.log("HOLY SHIT IT WORKED");
      }else {
        console.log("failed");
      }
      run = false;
      break;
    }
    if(checkCorrect(all1, all2, all3, 0) && checkCorrect(all4, all5, all6, 0) && checkCorrect(all1, all4, all7, 1) && checkCorrect(all2, all5, all8, 1) && checkCorrect(all3, all6, all9, 1) && checkCorrect(all7, all8, all9, 0)){
      run = false;
      break;
    }else {
      count2 = 0;
      all1 = createSquare(all1);
      console.log("SQUARE 1 COMPLETED~~~~~~~");
      all2 = createSquare(all2);
      all2 = fixMidSquare(all1, all2);
      console.log("SQUARE 2 COMPLETED~~~~~~~");
      all3 = createSquare(all3);
      all3 = fixEndSquare(all1, all2, all3);
      console.log("SQUARE 3 COMPLETED~~~~~~~");
      all4 = createSquare(all4);

      console.log("SQUARE 4 COMPLETED~~~~~~~");
      all5 = createSquare(all5);
      all5 = fixMidSquare(all4, all5);
      all5 = fixColMidSquare(all2, all5);
      console.log("SQUARE 5 COMPLETED~~~~~~~");
      all6 = createSquare(all6);
      all6 = fixEndSquare(all4, all5, all6);

      console.log("SQUARE 6 COMPLETED~~~~~~~");
      all7 = createSquare(all7);

      console.log("SQUARE 7 COMPLETED~~~~~~~");
      all8 = createSquare(all8);
      all8 = fixMidSquare(all7, all8);

      console.log("SQUARE 8 COMPLETED~~~~~~~");
      all9 = createSquare(all9);
      all9 = fixEndSquare(all7, all8, all9);
      //all9 = fixColEndSquare(all3, all6, all9);
      console.log("SQUARE 9 COMPLETED~~~~~~~");
      while(count2 <= 100){
        globe++;
        console.log("inner TRY: " + count2);
        console.log("row1: " + checkCorrect(all1, all2, all3, 0));
        console.log("row2: " + checkCorrect(all4, all5, all6, 0));
        console.log("row3: " + checkCorrect(all7, all8, all9, 0));
        console.log("col1: " + checkCorrect(all1, all4, all7, 1));
        console.log("col2: " + checkCorrect(all2, all5, all8, 1));
        console.log("col3: " + checkCorrect(all3, all6, all9, 1));
        // for(var f1 = 0; f1 < 9; f1++){
        //
        //   $(".main-box .box1" + " .inBox" + (f1+ 1)).text(all1[f1]);
        //   $(".main-box .box2" + " .inBox" + (f1+ 1)).text(all2[f1]);
        //   $(".main-box .box3" + " .inBox" + (f1+ 1)).text(all3[f1]);
        //   $(".main-box .box4" + " .inBox" + (f1+ 1)).text(all4[f1]);
        //   $(".main-box .box5" + " .inBox" + (f1+ 1)).text(all5[f1]);
        //   $(".main-box .box6" + " .inBox" + (f1+ 1)).text(all6[f1]);
        //   $(".main-box .box7" + " .inBox" + (f1+ 1)).text(all7[f1]);
        //   $(".main-box .box8" + " .inBox" + (f1+ 1)).text(all8[f1]);
        //   $(".main-box .box9" + " .inBox" + (f1+ 1)).text(all9[f1]);
        // }
        //
        count2++;
        if(!checkCorrect(all1, all4, all7, 1)){
          var temp1 = [];
          //all4 = fixColEndSquare(all1, all3, all4);
          temp1 = fixColEndSquare(all1, all4, all7);
          all4 = temp1[0];
          all7 = temp1[1];
        }
        if(!checkCorrect(all2, all5, all8, 1)){
          var temp2 = [];
          //all5 = fixColEndSquare(all2, all8, all5);
          temp2 = fixColEndSquare(all2, all5, all8);
          all5 = temp2[0];
          all8 = temp2[1];
        }
        if(!checkCorrect(all3, all6, all9, 1)){
          var temp3 = [];
          //all6 = fixColEndSquare(all3, all9, all6);
          temp3 = fixColEndSquare(all3, all6, all9);
          all6 = temp3[0];
          all9 = temp3[1];
         }
        if(!checkCorrect(all1, all2, all3, 0)){
          all1 = createSquare(all1);
          console.log("SQUARE 1 COMPLETE");
          all2 = createSquare(all2);
          all2 = fixMidSquare(all1, all2);
          console.log("SQUARE 2 COMPLETE");
          all3 = createSquare(all3);
          all3 = fixEndSquare(all1, all2, all3);
          console.log("SQUARE 3 COMPLETED");
        }
        if(!checkCorrect(all4, all5, all6, 0)){
          all4 = createSquare(all4);
          console.log("SQUARE 4 COMPLETED");
          all5 = createSquare(all5);
          all5 = fixMidSquare(all4, all5);
          console.log("SQUARE 5 COMPLETED");
          all6 = createSquare(all6);
          all6 = fixEndSquare(all4, all5, all6);
          console.log("SQUARE 6 COMPLETED");
        }
        if(!checkCorrect(all7, all8, all9, 0)){
          all7 = createSquare(all7);
          console.log("SQUARE 7 COMPLETED");
          all8 = createSquare(all8);
          all8 = fixMidSquare(all7, all8);

          console.log("SQUARE 8 COMPLETED");
          all9 = createSquare(all9);
          all9 = fixEndSquare(all7, all8, all9);
          console.log("SQUARE 9 COMPLETED");
        }

      }

      // all4 = fixEndSquare(all5, all6, all4);
      // all4 = fixColEndSquare(all1, all8, all4);
      //
      // all6 = fixEndSquare(all5, all4, all6);
      // all6 = fixColEndSquare(all3, all9, all6);
      //
      // all7 = fixEndSquare(all9, all8, all7);
      // all7 = fixColEndSquare(all4, all1, all7);
      //
      // all8 = fixEndSquare(all9, all7, all8);
      // all8 = fixColEndSquare(all5, all2, all8);
    }
  }

  // all4 = fixMidSquare(all5, all4);
  // all4 = fixColMidSquare(all1, all4);
  //
  // all6 = fixEndSquare(all5, all4, all6);
  // all6 = fixColMidSquare(all3, all6);
  //
  // all7 = fixMidSquare(all9, all7);
  // all7 = fixColEndSquare(all4, all1, all7);
  //
  // all8 = fixEndSquare(all9, all7, all8);
  // all8 = fixColEndSquare(all5, all2, all8);

  //all2 changes
  //mid all1 all2
  //mid all5

  //all3 changes
  //end all1 all2 all3
  //end all4
  //end all5
  // console.log(all1);
  // console.log(all2);
  // checkTopRow(all1, all2);
  // checkMidRow(all1, all2);
  // checkBotRow(all1, all2);

  //
  // console.log("all1: " + all1);
  // console.log("all2: " + all2);
  // console.log("all3: " + all3);
  // console.log("all4: " + all4);
  // console.log("all5: " + all5);
  // console.log("all6: " + all6);
  // console.log("all7: " + all7);
  // console.log("all8: " + all8);
  // console.log("all9: " + all9);

  console.log("total puzzles tried: " + globe);
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
