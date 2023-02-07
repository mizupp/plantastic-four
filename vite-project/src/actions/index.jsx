export const storeAvatar = (data) => {
    return {
        type: "STORE_AVATAR",
        payload: data
    }
}

export const storePlant = (data) => {
    return {
        type: 'STORE_PLANT',
        payload: data
    }
}
