let rockets = document.querySelectorAll(".block");
let blastIndex = 0
let intervalRun = ''
let travels = 0
rockets.forEach(rocket => {
    rocket.addEventListener("mousedown", event => {
        clearInterval(intervalRun)
        intervalRun = setInterval(function(){
            if (travels > 800) {
                clearInterval(intervalRun)
            }
            travels += 1
            event.target.style.marginLeft = `${travels}px`
        }, 10)
    })

    rocket.addEventListener("mouseup", event => {
        clearInterval(intervalRun)
        blastIndex += 1
        event.target.style.order = -blastIndex
        intervalRun = setInterval(function(){
            if (travels === 0) {
                clearInterval(intervalRun)
            }
            travels -= 1
            event.target.style.marginLeft = `${travels}px`
        }, 10)
    })
})

