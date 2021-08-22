var btn_show_results = document.querySelectorAll('.show_result_btn');
var show_result_Eles = document.querySelectorAll('.show_result_text');

btn_show_results.forEach((btn_show_result, index) => {
 btn_show_result.onclick = () => {
  switch (index) {
    case 0:
      handleBT1(index);
      break;
    case 1:
      handleBT2(index);
      break;
    case 2:
      handleBT3(index);
      break;
    case 3:
      handleBT4(index);
      break;

    case 4:
      handleBT5(index);
      break;
    case 5:
      handleBT6(index);
      break;

    case 6:
     handleBT7(index);
     break;
  }
 }
})




renderUI = (index, finalTxt) => {   //hàm render ra UI
  show_result_Eles[index].innerHTML = finalTxt;
}







// ------------------------------BÀI TẬP 1------------------------------


handleBT1 = (index) => {
  var finalTxt = "";
  var chanTxt = "";
  var leTxt = "";


  //--------CÁCH 1: DÙNG WHILE--------
        // var i =0;   //bước nhảy
        // while(i<=100) {
        //   if(i%2===0) {
        //     chanTxt += i + " ";
        //   } else {
        //     leTxt += i + " ";
        //   }
        //   i++;
        // }



  //--------CÁCH 2: DÙNG FOR--------
     
 for(var i =0 ; i <= 100; i++) {
   if(i%2 ===0) {
    chanTxt += i + " ";
   } else {
    leTxt += i + " ";
   }
 }


  // console.log(chanTxt +'\n' + leTxt);

  finalTxt = "số các số "+ "<span style = 'background-color: red; color: white; padding: 0 10px'>chẳn</span>" + " là: " + chanTxt + "<br>"
  + "số các số "+ "<span style = 'background-color: blue; color: white; padding: 0 10px'>lẻ</span>" + " là: " + leTxt;


  renderUI(index, finalTxt);

}


// ------------------------------BÀI TẬP ------------------------------




handleBT2 = (index) => {
  var finalTxt = "";
  var couter = 0;       //số các số chia hết cho 3


  //--------CÁCH 1: DÙNG WHILE--------
  // var i = 0;    //bước nhảy
  
  // while( i <= 1000) {
  //   if(i%3 ===0) {
  //     couter++;
  //   }
  //   i++;
  // }



  //--------CÁCH 2: DÙNG FOR--------

  for(var i = 0; i <1000; i++) {
    if(i%3 ===0) {
      couter++;
    }
  }

  finalTxt = "có " + "<span style = 'background-color: red; color: white; padding: 0 10px'>"+ couter +"</span>" + "số chia hết cho 3"
  renderUI(index, finalTxt);

  
}




// --------BÀI TẬP 3----------

handleBT3 = (index) => {
  var finalTxt = "";
  var sum = 0;
  var i =0;
 
  while(sum<10000) {
    i++;
    sum += i ;
  }

  // console.log('giá trị i', i)


  finalTxt = "số nguyên dương nhỏ nhất thõa điều kiện là: " + "<span style = 'background-color: red; color: white; padding: 0 10px'>"+ i +"</span>"
  renderUI(index, finalTxt);

}














// --------BÀI TẬP 4----------



handleBT4 = (index) => {
  var finalTxt = "";
  var sum=0;
 
  var x = parseInt(document.getElementById('numberX').value);
  var n = parseInt(document.getElementById('numberN').value);
  // console.log(x, n)

  for(var i=1; i<=n; i++) {
    sum += Math.pow(x,i);
  }


  finalTxt = "Tổng là: " + "<span style = 'background-color: red; color: white; padding: 0 10px'>"+ sum +"</span>";
  renderUI(index, finalTxt);


}




// --------BÀI TẬP 5----------



handleBT5 = (index) => {
  var finalTxt = "";
  var giaithua_Number = parseInt(document.getElementById('giaithua_Number').value);
  var result = 1;
  for(var i=1; i<=giaithua_Number; i++) {
    result *= i;
  }
  finalTxt = "Giai thừa là: " + "<span style = 'background-color: red; color: white; padding: 0 10px'>"+ result +"</span>";
  renderUI(index, finalTxt);


}




// --------BÀI TẬP 6----------



handleBT6 = (index) => {
  var finalTxt = "";
  for(var i = 1; i <= 10; i++) {
    if (i%2===0) {
    finalTxt += "<div style = 'background-color: red; color: white; padding: 10px 20px'>Div chẳn</div>"

    }else {
    finalTxt += "<div style = 'background-color: blue; color: white; padding: 10px 20px'>Div lẻ</div>"

    }
  }


  renderUI(index, finalTxt);


}




// --------BÀI TẬP 7----------



handleBT7 = (index) => {
  var finalTxt = "";
  var number = parseInt(document.getElementById('myNumber').value);
  // console.log(number);
  var flag = 0;
  
  if(number<2) {
    renderUI(index, 'đây không phải só nguyên tố');

  } else {
    for(var i =2; i <= number; i++) {
      // console.log(i)
      for(var j = 2; j <= (Math.sqrt(i)); j++) {
        // console.log(i,j)
        if(i%j === 0) {
          // console.log('chia hết');
          flag++;
          break;      //chỉ cần chia hết cho 1 trong j thì break khỏi vòng lặp j luôn vì k phải là số nguyên tố r
        } 
      
      }

      if(flag !== 0) {
        // console.log(i + ' không phải là số nguyên tố');

      } else {  //flag vẫn =0   ===> i lúc này là só nguyên tố
        // console.log(i + ' là số nguyên tố');

        finalTxt += i + " ";
      }
      flag = 0;
      // console.log('finalTXT', finalTxt, i)
    }


    
  renderUI(index, finalTxt);

  }
 



}
