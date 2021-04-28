import React, { Children } from 'react'

const Button = (props) => {

    return <div style={{color: 'blue', background: 'green', borderRadius: "5px"}}>{props.children}</div>
    

}



export default Button