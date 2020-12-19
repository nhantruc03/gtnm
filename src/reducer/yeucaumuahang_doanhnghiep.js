import * as types from '../constants/ActionType';
// var data = JSON.parse(localStorage.getItem('CART'));
var data = [
    {
        key: 1,
        ID: 4,
        tieude: 'John Brown',
        tendoanhnghiep: 32,
        tensanpham: 'New York No. 1 Lake Park',
        ngaynhanhang: '12/03/2020',
        ngaytao: '12/03/2020',
        tags: ['Đang đợi phê duyệt'],
        tennguoidaidien: 'Nguyen Van A',
        email: 'example@gmail.com',
        chitiet: '1000 tấn',
    },
    {
        key: 2,
        ID: 5,
        tieude: 'John Brown',
        tendoanhnghiep: 32,
        tensanpham: 'New York No. 1 Lake Park',
        ngaynhanhang: '12/03/2020',
        ngaytao: '12/03/2020',
        tags: ['Đã phê duyệt'],
        tennguoidaidien: 'Nguyen Van A',
        email: 'example@gmail.com',
        chitiet: '1000 tấn',
    },
    {
        key: 3,
        ID: 6,
        tieude: 'John Brown',
        tendoanhnghiep: 32,
        tensanpham: 'New York No. 1 Lake Park',
        ngaynhanhang: '12/03/2020',
        ngaytao: '12/03/2020',
        tags: ['Đã từ chối'],
        tennguoidaidien: 'Nguyen Van A',
        email: 'example@gmail.com',
        chitiet: '1000 tấn',
    },
];

var inittialState = data ? data : [];
const YCMH_DOANHNGHIEP = (state = inittialState, action) => {
    var { YCMH } = action;
    switch (action.type) {
        case types.ADD_YCMH_DOANHNGHIEP:
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
export default YCMH_DOANHNGHIEP;