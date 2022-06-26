function main()
{
 var resp = document.getElementById('resp');
 var num1 = parseFloat(document.getElementById("num1").value);
 var num2 = parseFloat(document.getElementById("num2").value);
 var num3 = parseFloat(document.getElementById("num3").value);
 var texto='';

 if(document.getElementById('soma').checked)
  texto = soma(num1, num2, num3);

  resp.innerHTML = texto;
  console.log(texto);
}

function soma(x, y, z)
{
  
  return (x+y+z);
}

