var body = document.body;
    body.innerHTML = '<table id="weatherData"><tbody>' + 
    '<tr><th>place</th>' + 
    '<th>precipitation_type</th>' +
    '<th>time</th>' +
    '<th>type</th>' +
    '<th>unit</th>' +
    '<th>value</th></tr></tbody></table>'

const XMLHttpRequest = this.XMLHttpRequest
function getHorsensWeatherDataXHR(callback)
{
    const request = new XMLHttpRequest();
    request.addEventListener('load', () => {
        console.log("here")
        callback(JSON.parse(request.responseText))
    })
    request.open('GET', `http://localhost:8080/data/Horsens`)
    request.send()
}

function getHorsensWeatherDataFetch(callback)
{
    let promise = fetch(`http://localhost:8080/data/Horsens`).then(res => res.ok ? res.json() : Promise.reject(res.statusText))
    promise.then(res => callback(res))
}

function displayData(data)
{
    console.log(data)

    var tableRef = document.getElementById('weatherData').getElementsByTagName('tbody')[0];

    for (let index = 0; index < data.length; index++) {
        const  e = data[index];
        // Insert a row in the table at the last row
        var newRow   = tableRef.insertRow();

        var newCell  = newRow.insertCell(0);
        var newText  = document.createTextNode(e.place);
        newCell.appendChild(newText);

        newCell  = newRow.insertCell(1);
        newText  = document.createTextNode(e.precipitation_type);
        newCell.appendChild(newText);

        newCell  = newRow.insertCell(2);
        newText  = document.createTextNode(e.time);
        newCell.appendChild(newText);

        newCell  = newRow.insertCell(3);
        newText  = document.createTextNode(e.type);
        newCell.appendChild(newText);

        newCell  = newRow.insertCell(4);
        newText  = document.createTextNode(e.unit);
        newCell.appendChild(newText);

        newCell  = newRow.insertCell(5);
        newText  = document.createTextNode(e.value);
        newCell.appendChild(newText);

        // body.innerHTML += 
        //     '<tr><td>' + e.place + ' </td>' + 
        //     '<td>' + e.precipitation_type + ' </td>' +
        //     '<td>' + e.time + ' </td>' +
        //     '<td>' + e.type + ' </td>' +
        //     '<td>' + e.unit + ' </td>' +
        //     '<td>' + e.value + ' </td></tr>';
    }
}

getHorsensWeatherDataXHR(displayData)
getHorsensWeatherDataFetch(displayData)

