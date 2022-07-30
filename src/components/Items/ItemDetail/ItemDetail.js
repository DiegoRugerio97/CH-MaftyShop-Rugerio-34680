// ItemDetail components, holds more information about product and also ItemCount component for specific product.
// ItemCount component
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail =({itemImg, itemName, itemDescription, itemStock}) =>{
    return <>
    <h1>{itemName}</h1>
    <ItemCount initial={1} stock ={itemStock} onAdd ={console.log("Clicked!")}/>
    </>
}

export default ItemDetail;