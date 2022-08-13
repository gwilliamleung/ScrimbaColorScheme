document.getElementById("btn").addEventListener("click",function(){
    const colorPicked = document.getElementById("color").value
    const schemePicked = document.getElementById("scheme").value
    console.log(colorPicked,schemePicked)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicked.substring(1)}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("colorBody").innerHTML = ''
            for (var i = 0 in data.colors){
                document.getElementById("colorBody").innerHTML += `
                <h1>${data.colors[i].hex.value}</h1>`
            }
        })
})