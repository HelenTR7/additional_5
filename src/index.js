module.exports = function check(str, bracketsConfig) {
  var bool=true;//значение ответа функции
  var i=str.length-1;
  i=+i;  
  alert("V stroke simvolov:  "+(i+1));// длина строки
  if(((i+1)%2)==1)
  {
    alert("Nehetnoe kol-vo, skobki neverni");
    bool=false;
  }

var s;
var bracketsConfig2=[];
bracketsConfig2=bracketsConfig;
s=bracketsConfig2.length;
alert("Dlina massiva proverki:  "+(s));

 
  for(var j=0; j<(i/2-1);j++)
  {
  str=del(str, bracketsConfig, s, bool);
  alert('New str:   '+str); 
  }
  
////////берем строку и удаляем правильные скобки///////////////////////////

function del(str, bracketsConfig, s, bool)
{


  for(var j=i; j>0; j--)//пробегаем по строке
  {
var a=true;
var elem=str.charAt(j);//доступ к элементам строки
//alert(elem);
//alert(bracketsConfig[0][0]);//доступ к элементам подмассивов



for(var u=0;u<s;u++)
{

    if(elem==bracketsConfig[u][0])
      {
        var k=j;//новый счетчик опир на номер найденной открыв скобки
        var elem_hvost=str.charAt(k+1);
        if(elem_hvost==bracketsConfig[u][1])
        {
          var podmass_str=bracketsConfig[u].join('');
          var re = podmass_str;
          var newstr = str.replace(re, '');//удаляем найденные скобки
        }
        else bool=false;
        
      }

}
    





  }
 
return newstr;
}
////////////////////////////////////////////////////////
//return bool;

if(str=="")
{
return true;
}
else return false;

}
