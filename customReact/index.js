
function custumrender(roots,element)
{
    const elementcreate=document.createElement(element.type);
    elementcreate.innerText=element.children;
    for(const i in element.props)
    {
        elementcreate.setAttribute(i,element.props[i]);
    }
    roots.appendChild(elementcreate);
}

const element={
    type:'a',
    props:{href:'http://www.google.com',
        target:'_blank'
    },
    children:'hello world'

}

const root=document.getElementById('root');
custumrender(root,element);