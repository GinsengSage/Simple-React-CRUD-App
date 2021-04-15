import React, {Fragment, useContext, useEffect} from "react";
import {Form} from "../components/Form";
import {ShopItems} from "../components/ShopItems";
import {Alert} from "../components/Alert";
import {FireBaseContext} from "../context/firebase/fireBaseContext";
import {Loader} from "../components/Loader";

export const Home = () => {
    const {loading, shopItems, fetchShopItems} = useContext(FireBaseContext)

    useEffect(() => {
        fetchShopItems()
        //eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <h1>Home page</h1>
            <Alert />
            <Form/>
            <hr/>
            {loading
                ? <Loader/>
                : <ShopItems shopItems={shopItems}/>
            }
        </Fragment>
    )
}
