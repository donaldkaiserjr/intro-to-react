import React, { useState } from 'react'
import './SearchBar.css'


const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")
    // const searchValue = "the search value"       This is what you can't do in React. The above line handles this


    const handleInputChange = (event) => {  //event is the event that got fired
       setSearchValue(event.target.value)  // this is the event that the user wants to be inside of that user input field below
    }



    const handleClearClick = () => {
        setSearchValue("")                  // sets the input field to clear
    }

    const shouldDisplayButton = searchValue.length > 0


    const filterProducts = props.products.filter((product) => {
        return product.includes(searchValue)
    })


    return (
    <div>
       <input type="text"  value={searchValue} onChange={handleInputChange} />
       {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}

        <div>
            {filterProducts.map((product) => {
                return <p key={product}>{product}</p>
            })}
        </div>
       
    </div>
    )
}

export default SearchBar