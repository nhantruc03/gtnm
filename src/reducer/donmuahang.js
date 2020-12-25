import * as types from '../constants/ActionType';


// var data = JSON.parse(localStorage.getItem('CART'));
var data = [
    {
        ID: 1,
        chitiet: "1000 cái",
        dongia: 10000,
        donvitinh: "cái",
        emailncc: "example@gmail.com",
        key: 1,
        ngaynhanhang: "12/2/2020",
        ngaythanhtoan: "12/24/2020",
        nguoidaidien: "Nguyễn Văn A",
        nguoiphutrach: "Phạm Quang Nhân",
        sdtncc: 123445,
        soluong: 1000,
        tags: ["Đã phê duyệt"],
        tennhacungcap: "123",
        tensanpham: "Bút bi Thiên Long",
        tieude: "Văn phòng phẩm",
        tinhtrang: 2,
        tongtien: 10000000,
    },
    {
        ID: 2,
        chitiet: "900 cái",
        dongia: 9000,
        donvitinh: "cái",
        emailncc: "example@gmail.com",
        key: 2,
        ngaynhanhang: "12/3/2020",
        ngaythanhtoan: "12/25/2020",
        nguoidaidien: "Nguyễn Văn A",
        nguoiphutrach: "Phạm Quang Nhân",
        sdtncc: 123445,
        soluong: 900,
        tags: ["Đã phê duyệt"],
        tennhacungcap: "123",
        tensanpham: "Bút bi Thiên Long",
        tieude: "Văn phòng phẩm",
        tinhtrang: 3,
        tongtien: 8100000,
    },

];

var inittialState = data ? data : [];
const DONMUAHANG = (state = inittialState, action) => {
    var { DMH } = action;
    switch (action.type) {
        case types.ADD_DONMUAHANG:
            var newId = findMaxId(state);
            DMH = { ...DMH, key: newId, ID: newId, tags: ['Đang đợi phê duyệt'] }
            state.push(
                DMH
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
export default DONMUAHANG;