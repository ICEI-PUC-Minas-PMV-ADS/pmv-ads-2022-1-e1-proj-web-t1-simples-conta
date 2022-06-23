function main2()
{
 var resp = document.getElementById('resp');
 var num1 = parseFloat(document.getElementById("num1").value);
 var num2 = parseFloat(document.getElementById("num2").value);
 
 var texto='';

 if(document.getElementById('soma').checked)
  texto = soma(num1, num2);

 resp.innerHTML = texto;
}

function soma(x, y)
{
  
  return (x+y);
}