import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
window.addEventListener('DOMContentLoaded',() => {
    debugger;
    console.log("Hello");
    ReactDom.render(<App />, document.getElementById("root"));
});
