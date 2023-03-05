/* import React from 'react';

const ListOption = ({children, tiempo}) => {
    return (
        <li style={customStyle} >{children} {tiempo}</li>
    )
}

export default ListOption; */

/* -- USAR PROPS PARA PASAR LOS COLORES */

import React from 'react';
import './style.css';

const ListOption = (props) => {
    console.log(props);
    return (
        <li {...props} >{props.children} {props.tiempo}</li>
    )
}

export default ListOption;