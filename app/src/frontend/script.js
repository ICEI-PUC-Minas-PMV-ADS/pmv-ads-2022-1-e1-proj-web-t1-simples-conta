window.addEventListener("load"), function() {
    let salvar = document.getElementById("btnAdd");
    

    salvar.addEventListener("click", function() {
      let input2=valor.value
      let input1=chave.value
      localStorage.setItem(input2,input1);
        exibir();
    });


    limpar.addEventListener("click", function() {
        localStorage.clear();
        exibir();
    });

    window.addEventListener("storage", function(event) {
        let key = event.key;
        let newValue= event.newValue;
        let oldValue = event.oldValue;
        let storageArea= event.storageArea;

        key.innerHTML(key+"\n" +newValue + "\n" + oldValue +"\n" + storageArea);
       exibir();
      });
      
      function exibir() {
        let str = "";
        for ( let i = 0, len = localStorage.length; i < len; i++ ) {
          let key = localStorage.key(i);
          let valor = localStorage.getItem(key);
          str+=`${[i+1]} . ${key} : ${valor}<br>`;
        }
  
        valor.value = ""; 
        chave.value = "";
        conteudo.innerHTML = str;
      }
      
      exibir();
    
}