Init();

function Init(){
    LoadJSON(jsonArr => ShowClasses(jsonArr));
}

function LoadJSON(callback) {

    const ajax = new XMLHttpRequest();
    ajax.overrideMimeType("application/json");
    ajax.open('GET', 'assets/clases_dynamycs.json', true); // Replace 'my_data' with the path to your file
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(JSON.parse(ajax.responseText));
        }
    };
    ajax.send(null);
}

function ShowClasses(classList){
    let classContainer = document.getElementById("classes"); 
    let template = ``;
    classList.forEach(item => {
        template += `
            <div class="col-3 mt-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body"> 
                        <h4>Clase ${item.classNum}<pre class="text-muted" style="display:inline;">     ${item.recordingDate}</pre></h3>
                        <hr>
                        <h5 class="card-title mb-4">${item.classTopic}</h5>
                        <a class="btn btn-primary " href="${item.recordingParts.part1}" class="card-link" target="_blank">Parte 1</a>
                        <a class="btn btn-primary " href="${item.recordingParts.part2}" class="card-link" target="_blank">Parte 2</a>
                    </div>
                </div>
            </div>
        `;
    });
    classContainer.innerHTML = template;
}


