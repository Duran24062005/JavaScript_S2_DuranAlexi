
function showPeoples() {
    const xhr = new XMLHttpRequest()
    const url = `https://swapi.py4e.com/api/people/`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        try {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                alert(data.results[0].name);
            } else {
                alert('Aún no hay datos');
            };
            
        } catch (error) {
            console.log('Error inesperado: ' + error)
        }
    };
    xhr.send();
};

window.addEventListener('load', function () {
    showPeoples();
});