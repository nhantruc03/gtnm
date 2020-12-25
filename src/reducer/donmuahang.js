// import * as types from '../constants/ActionType';
// var data = JSON.parse(localStorage.getItem('CART'));
var data = [
    {
        key: 2,
        ID: 2,
        tieude: 'Vải may áo',
        tendoanhnghiep: 32,
        tensanpham: 'Vải gấm',
        ngaynhanhang: '12/05/2020',
        tags: ['Đã phê duyệt'],
        tennguoidaidien: 'Nguyen Van A',
        email: 'example@gmail.com',
        chitiet: '1000 tấn',
        ngaytao: '12/05/2020',
        dondathang:['asdfasdfasdf','asdfasdfasdf'],
        tinhtrang:2,
        mota:'ABC',
        sdt: '01231203',
        soluong: '1000',
        donvitinh: 'cái',
    },
    {
        key: 5,
        ID: 5,
        tieude: 'Văn phòng phẩm',
        tendoanhnghiep: 32,
        tensanpham: 'Bút bi Thiên Long',
        ngaynhanhang: '12/03/2020',
        ngaytao: '12/03/2020',
        tags: ['Đã phê duyệt'],
        tennguoidaidien: 'Nguyen Van A',
        email: 'example@gmail.com',
        chitiet: '1000 tấn',
        tinhtrang: 3,
        mota:'ABC',
        sdt: '01231203',
        soluong: '1000',
        donvitinh: 'cái',
    }
];

var inittialState = data ? data : [];
const DONMUAHANG = (state = inittialState, action) => {
    // var { YCMH } = action;
    switch (action.type) {
        // case types.ADD_YCMH_DOANHNGHIEP:
        //     var newId = findMaxId(state);
        //     YCMH = { ...YCMH, key: newId, ID: newId, tags: ['Đang đợi phê duyệt'] }

        //     state.push(
        //         YCMH
        //     )
        //     return [...state];
        default: return [...state];
    }
}

// var findMaxId = (cart) => {
//     if (cart.length > 0) {
//         return cart.length + 1;
//     }
//     else {
//         return 0;
//     }
// }
export default DONMUAHANG;