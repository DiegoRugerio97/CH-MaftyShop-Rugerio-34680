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

    // Effect for validation purposes, validates everytime counter changes and at mounting
    useEffect(() => {
        if (counter > 1) {
            setIsOne(false);
        }
        else {
            setIsOne(true);
        }
        if (counter < props.stock) {
            setIsOverStock(false);
        }
        else {
            setIsOverStock(true);
        }
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

    // Dynamic styling
    let buttonClassAdd = `${isOverStock && "disabledControls"} itemButton`;
    let buttonClassSubstract = `${isOne && "disabledControls"} itemButton`;


    return (
        <div className='item'>
            <form className='itemForm'>
                <button className={buttonClassSubstract} onClick={onSubtractItemHandler}><i className="fa-solid fa-minus" /></button>
                <input value={counter} className='itemInput' onChange={onChangeItemHandler} />
                <button className={buttonClassAdd} onClick={onAddItemHandler}><i className="fa-solid fa-plus" /></button>
            </form>
            <button type="Submit" onSubmit={props.onAdd} className="addButton">Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;