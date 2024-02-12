document.querySelector(".menu a").addEventListener("click", function (e) {
  e.preventDefault(); // Evita que el enlace realice su acción por defecto
  var file = this.dataset.file;

  document.querySelector("#contenido").src = file;
});

var iframe = document.querySelector('#contenido');

iframe.addEventListener('load', function() {
  // Asegúrate de que el iframe ha cargado completamente
  if (iframe.contentDocument.readyState === 'complete') {
    // Ajusta la altura del iframe a la altura de su contenido
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  }
});