import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const newElement = (
    <a href='https://www.google.com'>click here to visit google</a>
)
function OtherElement() {
    return (
        <h1>This is other element</h1>
    )
}
const thirdelemrnt = React.createElement(
    'a',
    { href: 'https://www.bing.com' },
    'click here to visit bing'
)
createRoot(document.getElementById('root')).render(
   <>
     {newElement}
    <OtherElement />
   { thirdelemrnt}
   </>
)
