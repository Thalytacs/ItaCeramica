// alternar entre mostrar e ocultar a barra lateral ao clicar no ícone do menu
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// fecha a barra lateral com o botão
function w3_close() {
  mySidebar.style.display = "none";
}

function confirma() {
  confirm("Deseja adicionar item ao carrinho?")
}
