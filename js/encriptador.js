
const btnCriptografar = document.querySelector(".btn__criptografar");
const textoEsquerda = document.querySelector(".texto__esquerda");
const aviso = document.querySelector(".texto__aviso");
const resposta = document.querySelector(".resposta");
const posicaoBoneco = document.querySelector(".posicao__boneco");
const btnCopiar = document.querySelector(".btn__copiar");
const btnDescriptografar = document.querySelector(".btn__descriptografar");

btnCriptografar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEsquerda.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "O campo do texto está vazio";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Não pode conter acentos e caracteres especiais";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "O texto tem que ser em minúsculo";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/g, "enter");
        texto = texto.replace(/i/g, "imes");
        texto = texto.replace(/a/g, "ai");
        texto = texto.replace(/o/g, "ober");
        texto = texto.replace(/u/g, "ufat");

        resposta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        posicaoBoneco.remove(); 
    }
});

btnDescriptografar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEsquerda.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "O campo do texto esta vazio";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Não pode conter acentos e caracteres especiais";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "O texto tem que ser em minúsculo";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/g, "e");
        texto = texto.replace(/imes/g, "i");
        texto = texto.replace(/ai/g, "a");
        texto = texto.replace(/ober/g, "o");
        texto = texto.replace(/ufat/g, "u");

        resposta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        posicaoBoneco.remove(); 
    }
});

btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    const copiar = resposta;
    const texto = copiar.textContent.replace(/\n/g, '');
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = texto;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    textoEsquerda.value = "";
    copiar.textContent = "";
    alert("Texto copiado e apagado!");
    window.location.reload();
});