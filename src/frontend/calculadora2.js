function main2()
{
 var resp = document.getElementById('resp2');
 var num1 = parseFloat(document.getElementById("num4").value);
 var num2 = parseFloat(document.getElementById("num5").value);
 
 var texto='';

 if(document.getElementById('soma2').checked)
  texto = soma2(num1, num2);

 resp.innerHTML = texto;
}

function soma2(x, y)
{
  
  return (x+y);
}