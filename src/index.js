module.exports = function check(str, bracketsConfig) {
  var bool=true;//значение ответа функции
  var i=str.length-1;
  i=+i;  
  //alert("V stroke simvolov:  "+(i+1));// длина строки
  if(((i+1)%2)==1)
  {
    //alert("Nehetnoe kol-vo, skobki neverni");
    bool=false;
  }

  for(var j=i; j>0; j--)//пробегаем по строке
  {
var a=true;
var elem=str.charAt(j);//доступ к элементам строки
//alert(elem);
//alert(bracketsConfig[0][0]);//доступ к элементам подмассивов
//i--;
if(elem==bracketsConfig[0[0]]){}


  }
return bool;

}
