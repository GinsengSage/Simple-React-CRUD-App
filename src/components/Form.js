import React, {useState, useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {FireBaseContext} from "../context/firebase/fireBaseContext";

export const Form = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const alert = useContext(AlertContext)
    const fireBase = useContext(FireBaseContext)

    const submitHandler = event => {
        event.preventDefault()
        if(name.trim() && price.trim() && image.trim()){
            fireBase.addShopItem(name.trim(), price.trim(), image.trim()).then(() => {
                alert.show(' Item was added', 'success')
            }).catch(() => {
                alert.show(' Error', 'danger')
            })
        }else{
            alert.show(' Fill all inputs')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input onChange={e => setName(e.target.value)} type="text" placeholder="Name" className="form-control mt-4"/>
                <input onChange={e => setPrice(e.target.value)} type="text" placeholder="Price" className="form-control mt-2"/>
                <input onChange={e => setImage(e.target.value)} type="text" placeholder="Image URL" className="form-control mt-2"/>
                <input type="submit" value="Add" placeholder="Price" className="form-control btn btn-primary mt-2"/>
            </div>
        </form>
    )
}
