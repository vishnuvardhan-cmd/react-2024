
function customRender(reactElement,dataElement){
     const domElement=document.createElement(reactElement.type)
     domElement.innerHTML=reactElement.children
     for(const k in reactElement.props){
        domElement.setAttribute(k,reactElement.props[k])
     }
     dataElement.appendChild(domElement)
}

const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank",
    },
    children:"click to visit google"
}

const dataElement=document.querySelector('#root');

customRender(reactElement,dataElement)