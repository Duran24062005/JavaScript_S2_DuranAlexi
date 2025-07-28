let xhr = new XMLHttpRequest();
xhr.open('GET', "https://rickandmortyapi.com/api/character");

xhr.send();

xhr.onload = function () {
    if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        
    }
}

xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      alert(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      alert(`Received ${event.loaded} bytes`); // no Content-Length
    }
  
  };
  
  xhr.onerror = function() {
    alert("Request failed");
  };