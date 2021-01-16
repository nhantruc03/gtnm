import * as types from '../constants/ActionType';
// var data = JSON.parse(localStorage.getItem('CART'));

// var data = [];

var data = [
    {
        key: 1,
        ID: 1,
        tieude: 'John Brown',
        tendoanhnghiep: 32,
        tensanpham: 'New York No. 1 Lake Park',
        ngaynhanhang: '12/02/2020',
        tags: ['Đang đợi phê duyệt'],
        tennguoidaidien: 'Nguyen Van A',
        email: 'example@gmail.com',
        chitiet: '1000 tấn',
        ngaytao: '12/03/2020',
        dondathang: ['link_1', 'link_2'],
        mota: 'ABC',
        sdt: '01231203',
        soluong: '1000',
        donvitinh: 'cái',
        dataodonhang: false,
        ghichu:''
    },
    {
        key: 2,
        ID: 2,
        tieude: 'Văn phòng phẩm',
        tendoanhnghiep: 'Thiên Long',
        tensanpham: 'Bút bi Thiên Long',
        ngaynhanhang: '12/03/2020',
        tags: ['Đã phê duyệt'],
        tennguoidaidien: 'Nguyen Van A',
        email: 'example@gmail.com',
        chitiet: '1000 cái',
        ngaytao: '12/03/2020',
        dondathang: ['link_1', 'link_2'],
        tinhtrang: 0,
        mota: 'ABC',
        sdt: '01231203',
        soluong: 1000,
        donvitinh: 'cái',
        dataodonhang: false,
        ghichu:''
    },
    {
        key: 3,
        ID: 3,
        tieude: 'John Brown',
        tendoanhnghiep: 32,
        tensanpham: 'New York No. 1 Lake Park',
        ngaynhanhang: '12/04/2020',
        tags: ['Đã từ chối'],
        tennguoidaidien: 'Nguyen Van A',
        email: 'example@gmail.com',
        chitiet: '1000 tấn',
        ngaytao: '12/04/2020',
        dondathang: ['link_1', 'link_2'],
        mota: 'ABC',
        sdt: '01231203',
        soluong: '1000',
        donvitinh: 'cái',
        dataodonhang: false,
        ghichu:''
    },
];

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
        case types.EDIT_DATAODONMUAHANG:
            state.forEach(e => {
                console.log(YCMH)
                if (Number(e.ID) === Number(YCMH)) {
                    e.dataodonhang = true
                }
            })
            console.log(state)
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