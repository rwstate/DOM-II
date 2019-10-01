let rockets = document.querySelectorAll(".block");
let blastIndex = 0
let intervalRun = ''
rockets.forEach(rocket => {
    rocket.addEventListener("mousedown", event => {
        let travels = 0
        intervalRun = setInterval(function(){
            travels += 1
            event.target.style.marginLeft = `${travels}px`
        }, 10)
    })

    rocket.addEventListener("mouseup", event => {
        clearInterval(intervalRun)
        blastIndex += 1
        event.target.style.order = -blastIndex
        travels = 0
    })
})

