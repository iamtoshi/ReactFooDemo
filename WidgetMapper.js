import Banner from './Banner.js';
import CardWidget from './CardWidget.js';
import React from 'react';

export default function(widgets) {
    widgets && widgets.map((widget) => {
        return (widget.name==="BANNER") ? <Banner data = {widget.data}/> : null
        }
    )
}