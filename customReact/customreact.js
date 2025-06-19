function customRender(ReactElement,container){
    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.children

    for (const prop in ReactElement.props) {
        if(prop==='children') continue
       domElement.setAttribute(prop,ReactElement.props[prop])
    } 
    container.appendChild(domElement)
}



const mainContainer = document.getElementById('root')
const ReactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blanl'
    },
    children : "Click me to visit Google"
}

customRender(ReactElement, mainContainer)
