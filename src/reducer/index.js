import {combineReducers} from 'redux';
// import cart from './cart';
import YCMH_PHONGBAN from './yeucaumuahang_phongban'
import YCMH_DOANHNGHIEP from './yeucaumuahang_doanhnghiep'

const appReducers = combineReducers({
    // cart
    YCMH_PHONGBAN,
    YCMH_DOANHNGHIEP,
})

export default appReducers;