import {combineReducers} from 'redux';
// import cart from './cart';
import YCMH_PHONGBAN from './yeucaumuahang_phongban'
import YCMH_DOANHNGHIEP from './yeucaumuahang_doanhnghiep'
import DONMUAHANG from './donmuahang'

const appReducers = combineReducers({
    
    YCMH_PHONGBAN,
    YCMH_DOANHNGHIEP,
    DONMUAHANG,
    
})

export default appReducers;