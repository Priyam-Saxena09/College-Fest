const event = document.querySelector("title").textContent.split(" ")[0]
fetch("http://localhost:3000/eve?event=" + event).then((response) => {
    response.json().then((data) => {
        document.querySelector(".cont").innerHTML = ""
        document.querySelector(".cont").innerHTML = `<span><a href="/reg?event=${data.eve[0].name}"><b>${data.eve[0].name}</b></a></span>
        <span><a href="/reg?event=${data.eve[1].name}"><b>${data.eve[1].name}</b></a></span>
        <span><a href="/reg?event=${data.eve[2].name}"><b>${data.eve[2].name}</b></a></span>
        <span><a href="/reg?event=${data.eve[3].name}"><b>${data.eve[3].name}</b></a></span>
        <span><a href="/reg?event=${data.eve[4].name}"><b>${data.eve[4].name}</b></a></span>
        <span><a href="/reg?event=${data.eve[5].name}"><b>${data.eve[5].name}</b></a></span>`
    })
})