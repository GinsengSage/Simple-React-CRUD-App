import React from "react";
import {ShopItem} from "./ShopItem";

export const ShopItems = ({shopItems}) => {
    return (
        <div className="w-100 justify-content-center d-flex flex-row flex-wrap">
            {shopItems.map(shopItem => (
                <ShopItem
                    shopItem={shopItem}
                />
                )
            )}
        </div>
    )
}
