'use strict'
{
  // 問題① 配列の中で重複する値を削除し、新たな配列として出力する
  const array = [2, 4, 7, 5, 4, 3, 8];
  const result = array.filter(function(x, i, number){
    return number.indexOf(x) === i;
  });
  console.log(result);
}
{
  // 問題② 2020年、2021年が閏年かどうか確認する。
  function isLeapYear(year){
    if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
      return true;
    }
    return false;
  }
  
  let checkYear2020 = 2020;
  if(isLeapYear(checkYear2020)){
    console.log(checkYear2020 + '年はうるう年です');
  }else{
    console.log(checkYear2020 + '年はうるう年ではありません');
  }
  
  let checkYear2021 = 2021;
  if(isLeapYear(checkYear2021)){
    console.log(checkYear2021 + '年はうるう年です');
  }else{
    console.log(checkYear2021 + '年はうるう年ではありません');
  }
  
}