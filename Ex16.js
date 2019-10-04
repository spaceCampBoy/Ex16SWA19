const XMLHttpRequest = this.XMLHttpRequest
console.log("hello")
function getHorsensWeatherData(callback)
{
    const request = new XMLHttpRequest();
    request.addEventListener('load', () => {
        console.log("here")
        callback(JSON.parse(request.responseText))
    })
    request.open('GET', `http://localhost:8080/data/Horsens`)
    request.send()
}

function displayData(data)
{
    var body = document.body;
    body.innerHTML = '<table id="weatherData"><tbody>' + 
    '<tr><th>place</th>' + 
    '<th>precipitation_type</th>' +
    '<th>time</th>' +
    '<th>type</th>' +
    '<th>unit</th>' +
    '<th>value</th></tr>'

    for (let index = 0; index < data.length; index++) {
        const  e = data[index];
        body.innerHTML += 
            '<tr><td>' + e.place + ' </td>' + 
            '<td>' + e.precipitation_type + ' </td>' +
            '<td>' + e.time + ' </td>' +
            '<td>' + e.type + ' </td>' +
            '<td>' + e.unit + ' </td>' +
            '<td>' + e.value + ' </td></tr>';
    }
    body.innerHTML += '</tbody></table>'
}

getHorsensWeatherData(displayData)

