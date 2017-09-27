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

//alert("Dlina massiva proverki:  "+s);



  ///////////////////////////////////////////////////////////////////////////////
  
function poisk(str,bracketsConfig,s,i)//считаем кол-во скобок одного вида
{ 
  var f=0;
  s=s-1;
  var first=0;
  var second=0;
  for(var j=(i-1); j>=0; j--)//пробегаем по строке
{
var elem=str.charAt(j);//доступ к элементам строки
//alert(elem);
//alert(s);
//alert(bracketsConfig[s][0]);

    if(elem==bracketsConfig[s][0])
      {
        first++; 
      }
   
       else if(elem==bracketsConfig[s][1])
      {
        second++; 
      }


}

    if(first!=second)
  {
   f=1;
  }
  return f;
}


////////////////////////////////////////////////////////////////////////////////
var f=0;
for(var u=0;u<s;u++)
{
  var h=0;
f=poisk(str,bracketsConfig,s,i);
h=h+f;
}

if(h>0)
 {bool=false;}
else{ 
 
  for(var j=0; j<(i/2-1);j++)
  {
  str=del(str, bracketsConfig, s, i,bool);
 // alert('New str:   '+str); 
  }




////////берем строку и удаляем правильные скобки///////////////////////////

function del(str, bracketsConfig, s, i,bool)
{


  for(var j=i; j>0; j--)//пробегаем по строке
  {

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
}

//alert("Sodergimoe stroki: "+str);
 for(var i=0;i<s;i++)
 {
  if(str.charAt(0)==bracketsConfig[i][1])
  {
   // alert("pervi zakr skobka");
   bool=false;
  }

 }
 if(str==undefined)
  {
    //alert("raznie skobki");
    bool=false;
  }
  //alert("vozvrahaem  "+bool);
return bool;




}
