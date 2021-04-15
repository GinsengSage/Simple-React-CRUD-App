import React, {useContext} from "react";
import {FireBaseContext} from "../context/firebase/fireBaseContext";

export const ShopItem = ({shopItem}) => {
    const {removeShopItem} = useContext(FireBaseContext)
    return (
        <div className="w-25 d-flex flex-column bg-light mx-1 my-1 justify-content-center align-items-center px-4 py-4">
            <img src={`/images/${shopItem.image}`} alt="Text" className="w-75"></img>
            <h2>{shopItem.name}</h2>
            <p>${shopItem.price}.00</p>
            <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeShopItem(shopItem.id)}
            >Delete</button>
        </div>
    )
}
