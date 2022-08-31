// ItemCount component - Track counter state to add items
// React imports
import React from 'react';
import { useState, useEffect } from 'react';
// Styles   
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {

    // States
    const [counter, setCounter] = useState(initial);
    const [isOverStock, setIsOverStock] = useState(true);
    const [isOne, setIsOne] = useState(true);
    const [noStock, setNoStock] = useState(false);

    // Effect for validation purposes, validates everytime counter changes and at mounting
    useEffect(() => {
        let isOutStock = stock === 0;
        if (isOutStock) {
            setNoStock(true);
            setCounter(0);
        }

        let biggerThanOne = counter > 1;
        setIsOne(!biggerThanOne);

        let lessThanStock = counter < stock;
        setIsOverStock(!lessThanStock);

    }, [counter, stock])

    // Updating counter when clicked, if it is 1, doesn't subtract
    const onSubtractItemHandler = () => {
        if (isOne) {
            return;
        }
        setCounter(prevState => prevState - 1);
    }

    // Updating counter when clicked, if it is at stock's limit, doesn't add
    const onAddItemHandler = () => {
        if (isOverStock) {
            return;
        }
        setCounter(prevState => prevState + 1);
    }

    // Updating counter manually, validates for text inputs as well as values over stock value and 0.
    const onChangeItemHandler = (e) => {
        let isNumberValid = parseInt(e.target.value) <= stock && parseInt(e.target.value) > 0;
        if (!isNumberValid) {
            return;
        }
        let number = parseInt(e.target.value);
        setCounter(number);
    }

    // Adding items to Cart
    const onAddHandler = (e) => {
        e.preventDefault();
        if (noStock) {
            return;
        }
        onAdd(counter);
        setCounter(initial);
    }

    // Dynamic styling
    let buttonClassAdd = `${isOverStock && "disabledControls"} item-button`;
    let buttonClassSubstract = `${isOne && "disabledControls"} item-button`;

    return (
        <div className='item'>
            <span className="item-stockDes">Stock disponible: {stock}</span>
            <form onSubmit={onAddHandler} className="item-form">
                <div className='item-group'>
                    <button type="button" className={buttonClassSubstract} onClick={onSubtractItemHandler}><i className="fa-solid fa-minus" /></button>
                    <input value={counter} className='item-input' onChange={onChangeItemHandler} />
                    <button type="button" className={buttonClassAdd} onClick={onAddItemHandler}><i className="fa-solid fa-plus" /></button>
                </div>
                <button type="submit" className="addButton">Agregar al carrito</button>
            </form>

        </div>
    );
}

export default ItemCount;