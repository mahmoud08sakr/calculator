

const display = document.getElementById("display")
console.log(display);

const button = Array.from(document.querySelectorAll(".btn"));

button.map(button => {
    button.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        switch (e.target.innerText) {
            case "C":
                display.innerText = " "
                break;
            case "←":
                display.innerText = display.innerText.slice(0, -1)
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText)

                }
                catch {
                    display.innerText = "ERROR!!"
                }
                break;



            default:
                display.innerText += e.target.innerText
        }
    })
})



/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../JS/particles.json', function () {
    console.log('callback - particles.js config loaded');
});


// const sink = document.addEventListener("keydown" , function(e){
// console.log(sink);

// })