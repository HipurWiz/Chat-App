import React from 'react';

const Button = ({onClick = null, children = null, classname = null}) => (
    <button onClick={onClick} class={classname}>{children}</button>
)

export default Button;