import * as types from './../constants/ActionType';

export const act_Add_YCMH_PHONGBAN = (YCMH) => {
    return {
        type: types.ADD_YCMH_PHONGBAN,
        YCMH
    }
}


export const act_Add_YCMH_DOANHNGHIEP = (YCMH) => {
    return {
        type: types.ADD_YCMH_DOANHNGHIEP,
        YCMH
    }
}


export const act_Add_DONMUAHANG = (DMH) => {
    return {
        type: types.ADD_DONMUAHANG,
        DMH
    }
}

export const act_EDIT_DATAODONMUAHANG = (YCMH) => {
    return {
        type: types.EDIT_DATAODONMUAHANG,
        YCMH
    }
}



// export const actDeleteFromCart = (product) => {
//     return {
//         type: types.DELETE_FROM_CART,
//         product
//     }
// }

// export const actUpdateFromCart = (product, quantity) => {
//     return {
//         type: types.UPDATE_FROM_CART,
//         product,
//         quantity
//     }
// }

// export const actClearCart = () => {
//     return {
//         type: types.CLEAR_CART
//     }
// }