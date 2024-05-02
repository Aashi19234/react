
// how to render an a tag 
//and how react sees it after compiling the code

// here we are creating dom element using reactelement
function customrender(reactelement,root){
    /*const domelement=document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.children
    domelement.setAttribute('href',reactelement.props.href)
    domelement.setAttribute('target',reactelement.props.target)
    root.appendChild(domelement)*/

    // loop based function
    // this avoids repition of code which we were doing in first case while setting the attributes

    const domelement=document.createElement(reactelement.type)
domelement.innerHTML=reactelement.children
for (const prop in reactelement.props) {
    if (prop==='children') continue;
    domelement.setAttribute(prop,reactelement.props[prop])
    }
    root.appendChild(domelement)
}

// here's how the element after compiling the code looks
const reactelement ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'

    },
    children:'Click me to visit google'
}


const root= document.getElementById('root')

customrender(reactelement,root)
// render(jisko render krna h, jisme render krna h)
