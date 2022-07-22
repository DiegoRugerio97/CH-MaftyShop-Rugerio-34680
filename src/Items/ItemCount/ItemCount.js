// React BS imports

// React imports
import React from 'react';
import { useState, useEffect } from 'react';


// Styles   
import "./ItemCount.css";


const ItemCount = (props) => {

    const [counter, setCounter] = useState(props.initial);
    const [isOverStock, setIsOverStock] = useState(true);
    const [isOne, setIsOne] = useState(true);
    const [noStock, setNoStock] = useState(false);

    // Effect for validation purposes, validates everytime counter changes and at mounting
    useEffect(() => {
        let isOutStock = props.stock === 0;
        if(isOutStock){
            setNoStock(true);
            setCounter(0);
        }
        
        let biggerThanOne = counter > 1;
        setIsOne(!biggerThanOne);

        let lessThanStock = counter < props.stock;
        setIsOverStock(!lessThanStock);

    }, [counter, props.stock])

    // Updating counter when clicked, if it is 1, doesn't subtract
    const onSubtractItemHandler = () => {
        if (!isOne) {
            setCounter(prevState => prevState - 1);
        }
        return;

    }

    // Updating counter when clicked, if it is at stock's limit, doesn't add
    const onAddItemHandler = () => {
        if (!isOverStock) {
            setCounter(prevState => prevState + 1);
        }
        return;
    }

    // Updating counter manually, validates for text inputs as well as values over stock value and 0.
    const onChangeItemHandler = (e) => {
        let isNumberValid = parseInt(e.target.value) <= props.stock && parseInt(e.target.value) > 0;
        if (isNumberValid) {
            let number = parseInt(e.target.value);
            setCounter(number);
        }
        return;
    }

    // Adding items to Cart
    const onAddHandler = (e) => {
        e.preventDefault();
        if(noStock){
            return;
        }
        props.onAdd(counter);
        setCounter(props.initial);
    }

    // Dynamic styling
    let buttonClassAdd = `${isOverStock && "disabledControls"} itemButton`;
    let buttonClassSubstract = `${isOne && "disabledControls"} itemButton`;


    return (
        <div className='item'>
            <span className = "itemStockDes">Stock disponible: {props.stock}</span>
            <form onSubmit={onAddHandler} className="itemForm">
                <div className='itemGroup'>
                    <button type="button" className={buttonClassSubstract} onClick={onSubtractItemHandler}><i className="fa-solid fa-minus" /></button>
                    <input value={counter} className='itemInput' onChange={onChangeItemHandler} />
                    <button type="button" className={buttonClassAdd} onClick={onAddItemHandler}><i className="fa-solid fa-plus" /></button>
                </div>
                <button type="submit" className="addButton">Agregar al carrito</button>
            </form>
            
        </div>
    );
}

export default ItemCount;