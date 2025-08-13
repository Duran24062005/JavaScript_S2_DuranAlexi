document.addEventListener('DOMContentLoaded', () => {
    const datosContenedor = document.querySelector('.opciones');
    const taskinput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");

    async function fetchData() {
        const response = await fetch('https://689a1741fed141b96ba1d686.mockapi.io/tasks');
        let data = await response.json();
        return data;
    }

    async function fetchDataById(id) {
        const response = await fetch(`https://689a1741fed141b96ba1d686.mockapi.io/tasks/${id}`);
        let data = await response.json();
        return data;
    }
    
    // console.log(fetchData());

    // ##################
    // ## Danger Zone ##
    // ##################
    async function addNewTask() {
        const task = taskinput.value;
        
        console.log(task);
        if (task.trim() === '') return;
        await fetch('https://689a1741fed141b96ba1d686.mockapi.io/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              task,status: 'hold on'
            })
        });
        taskinput.value = '';
        const data = await fetchData();
        displayCapsula(data);
    }

    async function checkTask(id) {
        try {
            const element = await fetchDataById(id);
            console.log(element);
            
            let newSatus;
            if (element.status === "ready") {
                newSatus = "hold on";
            } else {
                newSatus = "ready";
            }
            await fetch(`https://689a1741fed141b96ba1d686.mockapi.io/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({
                    status: newSatus
                })
            });
            const data = await fetchData();
            displayCapsula(data);

        } catch (error) {
            console.log(`Fatal new error: ${error}`);
            
        }
    }

    async function deleteTask(id) {
        try {
            await fetch(`https://689a1741fed141b96ba1d686.mockapi.io/tasks/${id}`, {
                method: 'DELETE'
            });
            const data = await fetchData();
            displayCapsula(data);
        } catch (error) {
           console.log(`Fatal new error: ${error}`);
            
        }
    }

    function displayCapsula(capsula) {
        datosContenedor.innerHTML = "";
        capsula.forEach(cap => {
            const capDiv = document.createElement('div');
            if (cap.status === "ready") {
                capDiv.classList.add('capsulaNegativo');
                capDiv.innerHTML = `
                <div class="infoTextNegativo">
                    <p>${cap.task}</p>
                </div>
                <div class="terminadoNegativo">
                    <img src="./storage/img/pngwing.com (2).png" alt="check img" data-id="${cap.id}"></img>
                </div>
                <div class="eliminadoNegativo">
                    <img src="./storage/img/pngwing.com (4).png" alt="delete img" data-id="${cap.id}"></img>
                </div>
            `;
            datosContenedor.appendChild(capDiv);
            } else {
                capDiv.classList.add('capsula');
                capDiv.innerHTML = `
                <div class="infoText">
                    <p>${cap.task}</p>
                </div>
                <div class="terminado">
                    <img src="./storage/img/pngwing.com (2).png" alt="check img" data-id="${cap.id}"></img>
                </div>
                <div class="eliminado">
                    <img src="./storage/img/pngwing.com (4).png" alt="delete img" data-id="${cap.id}"></img>
                </div>
                `;
                datosContenedor.appendChild(capDiv);
        };
        });
    }

    fetchData().then(data => {
        displayCapsula(data);
    })
    
    addTaskButton.addEventListener('click', addNewTask);
    datosContenedor.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const id = e.target.getAttribute('data-id');
            
            // Verificar si es el botón de check
            if (e.target.closest('.terminado') || e.target.closest('.terminadoNegativo')) {
                checkTask(id);
            }

            // Verificar si es el botón de delete
            if (e.target.closest('.eliminado') || e.target.closest('.eliminadoNegativo')) {
                deleteTask(id);
            }
        }
    });

});