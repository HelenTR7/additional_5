module.exports = function check(str, bracketsConfig) 
{
  var bool=true;//значение ответа функции
  var i=str.length;
  i=+i;  
  //alert("V stroke simvolov:  "+(i));// длина строки
 
var s;
var bracketsConfig2=[];
bracketsConfig2=bracketsConfig;
s=bracketsConfig2.length;
//alert("Dlina massiva proverki:  "+(s));
if(i%2==1)
  {
    //alert("Srazu otbrosili nehetno, false");
    bool=false;
} else{
 
  for(var j=0; j<(i/2-1);j++)
  {
  str=del(str, bracketsConfig, s, i,bool);
  //alert('New str:   '+str); 
  }
  
////////берем строку и удаляем правильные скобки///////////////////////////

function del(str, bracketsConfig, s, i,bool)
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
        else 
          { 
            if(elem_hvost=='')
            {
            //alert("NAtknulis na PUSTOTY, false");
            bool=false;
          }
          }

                 
      }

}
    
  }
 
return newstr;
}
////////////////////////////////////////////////////////
//return bool;
//alert("Sodergimoe stroki: "+str);
 for(var i=0;i<s;i++)
 {
  if(str.charAt(0)==bracketsConfig[i][1])
  {
    //alert("pervi zakr skobka");
   bool=false;
  }

 }
 if(str==undefined)
  {
    //alert("raznie skobki");
    bool=false;
  }
return bool;
}

}
