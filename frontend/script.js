console.log('hello world');

function loadEvent() {
    console.log('loaded');

    let rootElement = document.getElementById('root')

    rootElement.innerHTML = "sziasztok"
    /* console.dir(document.getElementById('root'))
    console.dir(document.querySelector('#root')) */

    document.getElementById('root').innerHTML += "ciao" /*ez akkor néz ki így ha nem használjuk a let-et*/

    rootElement.insertAdjacentHTML("beforeend", `
        <h1>This is the tiffffftle</h1>
    `)
}

window.addEventListener("load", loadEvent)