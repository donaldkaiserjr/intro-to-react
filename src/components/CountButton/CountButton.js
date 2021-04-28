import React, { useState, useEffect } from 'react';
import "./CountButton.css"


const CountButton = (props) => {

    // const currentCount = 0    This line won't work in React. Below, setCurrentCount is a function we use to tell React to update the currentCount. 
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)     // here you're telling react to set the current count and increment it + 1
    }





    useEffect(() => {               //useEffect only gets called when the browser is refreshed UNLESS you put something in the array. 
        console.log(currentCount)
       if(currentCount === 10) {
           setCurrentCount(0)
       }
    }, [currentCount])                          //The array can be empty but there must be an array always.
    // useEffect is great when you have to load data from somewhere else.





    return (
        <div>
            <button
                onClick={handleClick}>+{props.incrementBy}</button>
            <div className='count-display'>{currentCount}</div>
        </div>
    )
}


export default CountButton;