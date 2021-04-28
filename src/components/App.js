import React, { useState, useEffect } from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'
import Button from "./Button/Button"


const App = () => {
    
    const [productsState, setProductsState] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray) => {
                const newProductsState = productsArray.map((product) => {
                    return product.title
                })
                setProductsState(newProductsState)
            })
        }, [])


    const hasProducts = productsState.length > 0

    return(
            
            <div>
                <Button>Hello World </Button>
                <CountButton incrementBy={100} buttonColor={'lightblue'} />

                 {hasProducts ? <SearchBar products= {productsState}/> : "Loading"}  
                 {/* if there are products, render out the SearchBar, else show "loading" */}
                
                
            </div>
       
    )
}

export default App