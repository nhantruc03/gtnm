import * as types from '../constants/ActionType';
// var data = JSON.parse(localStorage.getItem('CART'));

var data = [];

// var data = [
//     {
//         key: 1,
//         ID: "1",
//         tieude: 'John Brown',
//         tendoanhnghiep: 32,
//         tensanpham: 'New York No. 1 Lake Park',
//         ngaynhanhang: '12/03/2020',
//         tags: ['Đang đợi phê duyệt'],
//         tennguoidaidien: 'Nguyen Van A',
//         email: 'example@gmail.com',
//         chitiet: '1000 tấn',
//         ngaytao: '12/03/2020',
//         dondathang:['asdfasdfasdf','asdfasdfasdf'],
//     },
//     {
//         key: 2,
//         ID: 2,
//         tieude: 'John Brown',
//         tendoanhnghiep: 32,
//         tensanpham: 'New York No. 1 Lake Park',
//         ngaynhanhang: '12/03/2020',
//         tags: ['Đã phê duyệt'],
//         tennguoidaidien: 'Nguyen Van A',
//         email: 'example@gmail.com',
//         chitiet: '1000 tấn',
//         ngaytao: '12/03/2020',
//         dondathang:['asdfasdfasdf','asdfasdfasdf'],
//     },
//     {
//         key: 3,
//         ID: 3,
//         tieude: 'John Brown',
//         tendoanhnghiep: 32,
//         tensanpham: 'New York No. 1 Lake Park',
//         ngaynhanhang: '12/03/2020',
//         tags: ['Đã từ chối'],
//         tennguoidaidien: 'Nguyen Van A',
//         email: 'example@gmail.com',
//         chitiet: '1000 tấn',
//         ngaytao: '12/03/2020',
//         dondathang:['asdfasdfasdf','asdfasdfasdf'],
//     },
// ];

var inittialState = data ? data : [];
const YCMH_PHONGBAN = (state = inittialState, action) => {
    var { YCMH } = action;
    switch (action.type) {
        case types.ADD_YCMH_PHONGBAN:
            var newId = findMaxId(state);
            YCMH = { ...YCMH, key: newId, ID: newId, tags: ['Đang đợi phê duyệt'] }
            state.push(
                YCMH
            )
            return [...state];
        default: return [...state];
    }
}

var findMaxId = (cart) => {
    if (cart.length > 0) {
        return cart.length + 1;
    }
    else {
        return 0;
    }
}
export default YCMH_PHONGBAN;