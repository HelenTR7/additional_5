module.exports = function check(str, bracketsConfig) 
{
  var bool=true;//значение ответа функции
  var i=str.length;
  i=+i;  
  //alert("V stroke simvolov:  "+i);// длина строки
 
var s,lih=0;
var bracketsConfig2=[];
bracketsConfig2=bracketsConfig;
s=bracketsConfig2.length;
if(i%2==1){bool=false;}
else{ 
   for(var j=0; j<(i/2-1);j++)
  {
  str=del(str, bracketsConfig, s, i,bool);
 
if(str==undefined){ return false;}/////?????????????????
  }

////////берем строку и удаляем правильные скобки///////////////////////////

function del(str, bracketsConfig, s, i,bool)
{
  for(var j=i; j>0; j--)//пробегаем по строке
  {
var elem=str.charAt(j);//доступ к элементам строки
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
       
      }
}    
  } 
return newstr;
}
////////////////////////////////////////////////////////

}
var o=0;

for(var u=0;u<s;u++)
{

if((str.charAt(0)==bracketsConfig[u][0])&&(str.charAt(1)==bracketsConfig[u][1])){ o++;}//если совпало хоть с одним массивом
}
if((o>0)&&(str.length==2)){bool=true; //alert("vozvr "+bool);
}
else{ bool= false; //alert("vozvr "+bool); 
}
return bool;
}
