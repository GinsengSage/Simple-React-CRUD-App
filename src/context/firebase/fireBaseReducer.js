import {ADD_ITEM, FETCH_ITEMS, REMOVE_ITEM, SHOW_LOADER} from "../types";

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_ITEM]: (state, {payload}) => ({
        ...state,
        shopItems: [...state.shopItems, payload]
    }),
    [FETCH_ITEMS]: (state, {payload}) => ({...state, shopItems: payload, loading: false}),
    [REMOVE_ITEM]: (state, {payload}) => ({
        ...state,
        shopItems: state.shopItems.filter(shopItem => shopItem.id !== payload)
    }),
    DEFAULT: state => state
}

export const fireBaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
