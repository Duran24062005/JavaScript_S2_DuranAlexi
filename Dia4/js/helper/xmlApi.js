export function getCharacters(page) {
  const xhr = new XMLHttpRequest();
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`; // Reemplaza con la URL de tu API

  xhr.open('GET', url);

  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
      // Procesa la respuesta aquí
    } else {
      console.error('Error en la solicitud:', xhr.status, xhr.statusText);
    }
  };

  xhr.onerror = function() {
    console.error('Error de red al realizar la solicitud.');
  };

  xhr.send();
}