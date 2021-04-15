import React, {useReducer} from "react";
import axios from "axios";
import {FireBaseContext} from "./fireBaseContext";
import {fireBaseReducer} from "./fireBaseReducer";
import {ADD_ITEM, FETCH_ITEMS, REMOVE_ITEM, SHOW_LOADER} from "../types";

const url = process.env.REACT_APP_DB_URL

export const FireBaseState = ({children}) => {
    const initialState = {
        shopItems: [],
        loading: false
    }
    const [state, dispatch] = useReducer(fireBaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchShopItems = async () => {
        showLoader()
        const res = await axios.get(`${url}/shopItems.json`)

        let payload = []
        if(res){
             payload = Object.keys(res.data).map(key => {
                return{
                    ...res.data[key],
                    id:key
                }
            })
        }
        dispatch({
            type:FETCH_ITEMS,
            payload
        })

    }

    const addShopItem = async (name, price, image) => {
        const shopItem = {
            name,
            price,
            image
        }
        try{
            const res = await axios.post(`${url}/shopItems.json`, shopItem)
            const payload = {
                ...shopItem,
                id: res.data.name
            }
            dispatch({
                type: ADD_ITEM,
                payload
            })
        }catch (e){
            throw new Error(e.message)
        }
    }

    const removeShopItem = async id => {
        await axios.delete(`${url}/shopItems/${id}.json`)
        dispatch({
            type: REMOVE_ITEM,
            payload: id
        })
    }

    return(
        <FireBaseContext.Provider value={{
            showLoader, addShopItem, removeShopItem, fetchShopItems,
            loading: state.loading,
            shopItems: state.shopItems
        }}>{children}</FireBaseContext.Provider>
    )
}
