import React from 'react'
import './split.css'

function Split(props) {
    const combinedClassName = `split ${props.className}`
    return (
        <div className={combinedClassName}>
             {props.children}
        </div>
    );
}

export default Split;