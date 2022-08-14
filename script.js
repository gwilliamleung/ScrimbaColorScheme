document.getElementById("btn").addEventListener("click",function(){
    const colorPicked = document.getElementById("color").value
    const schemePicked = document.getElementById("scheme").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicked.substring(1)}&mode=${schemePicked.toLowerCase()}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.colors[1].name.value)
            document.getElementById("colorBody").innerHTML = ''
            document.getElementById("textBody").innerHTML = ''
            for (var i = 0 in data.colors){
                document.getElementById("colorBody").innerHTML += `
                <div class="colorRow" id="color${i}"></div>`
                document.getElementById("textBody").innerHTML += `
                <div class="textRow">${data.colors[i].hex.value}</div>`
                document.getElementById(`color${i}`).style.backgroundColor = `${data.colors[i].hex.value}`
            }
        })
})