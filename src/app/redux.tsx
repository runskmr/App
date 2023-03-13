import { createStore } from 'redux';
import { ImageInfo } from '../global-types';

export type GlobalState = {
    selectedItemId?: string,
    allItems: Array<ImageInfo>
}
type Action = {
    type: string,
    payload: any
}
const state: GlobalState = { allItems: [] }

const getUpdatedState = (list: Array<ImageInfo>, id: string) => list?.map((item: ImageInfo) => (item.id === id ? { ...item, favorited: !item.favorited } : { ...item }))

const removeItem = (list: Array<ImageInfo>, id: string) => list?.filter((item: ImageInfo) => item.id !==id)

const reducer = (state: any, action: Action) => {

    const { type, payload } = action

    switch (type) {
        case 'setFavourite':
            return { ...state, allItems: getUpdatedState(state?.allItems, payload) }
        case 'setdetails':
            return { ...state, selectedItemId: payload }
        case 'setAllItems':
            return { ...state, allItems: [...payload] }
        case 'deleteItem':
            return { ...state, allItems: removeItem(state?.allItems, payload) }
        default:
            return state
    }
}
const store = createStore(reducer, state)

export const { getState, dispatch } = store;

export default store