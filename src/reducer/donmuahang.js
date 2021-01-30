import * as types from "../constants/ActionType";

// var data = JSON.parse(localStorage.getItem('CART'));
var data = [
  {
    ID: 1,
    chitiet: "1000 cái",
    dongia: "10.000 VNĐ",
    donvitinh: "cái",
    emailncc: "example@gmail.com",
    key: 1,
    ngaynhanhang: "03/12/2020",
    ngaythanhtoan: "03/12/2020",
    nguoidaidien: "Nguyễn Văn A",
    nguoiphutrach: "Phạm Quang Nhân",
    sdtncc: 123445,
    soluong: 1000,
    tags: ["Đã phê duyệt"],
    tennhacungcap: "Công ty Thiên Long",
    tensanpham: "Bút dạ lông Thiên Long",
    tieude: "Văn phòng phẩm",
    tinhtrang: 2,
    tongtien: "10.000.000 VNĐ",
  },
  {
    ID: 2,
    chitiet: "900 cái",
    dongia: "3.000 VNĐ",
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
    tennhacungcap: "Công ty Thiên Long",
    tensanpham: "Bút bi Thiên Long",
    tieude: "Văn phòng phẩm",
    tinhtrang: 3,
    tongtien: "8.100.000 VNĐ",
  },
  {
    ID: 3,
    chitiet: "4 cái",
    dongia: "4.000.000 VNĐ",
    donvitinh: "cái",
    emailncc: "example@gmail.com",
    key: 3,
    ngaynhanhang: "12/3/2020",
    ngaythanhtoan: "12/25/2020",
    nguoidaidien: "Nguyễn Văn A",
    nguoiphutrach: "Phạm Quang Nhân",
    sdtncc: 123445,
    soluong: 4,
    tags: ["Đã phê duyệt"],
    tennhacungcap: "GEAR VN",
    tensanpham: "Màn hình DELL h214",
    tieude: "Văn phòng phẩm",
    tinhtrang: 3,
    tongtien: "16.000.000 VNĐ",
  },
  {
    ID: 4,
    chitiet: "500 tạ",
    dongia: "4.000 VNĐ",
    donvitinh: "Tạ",
    emailncc: "example@gmail.com",
    key: 4,
    ngaynhanhang: "12/3/2020",
    ngaythanhtoan: "12/25/2020",
    nguoidaidien: "Nguyễn Văn A",
    nguoiphutrach: "Phạm Quang Nhân",
    sdtncc: 123445,
    soluong: 500,
    tags: ["Đã phê duyệt"],
    tennhacungcap: "HIDEN",
    tensanpham: "Vải cotton",
    tieude: "Văn phòng phẩm",
    tinhtrang: 3,
    tongtien: "30.000.000 VNĐ",
  },
  {
    ID: 5,
    chitiet: "500 tạ",
    dongia: "4.000 VNĐ",
    donvitinh: "Tạ",
    emailncc: "example@gmail.com",
    key: 5,
    ngaynhanhang: "12/3/2020",
    ngaythanhtoan: "12/25/2020",
    nguoidaidien: "Nguyễn Văn A",
    nguoiphutrach: "Phạm Quang Nhân",
    sdtncc: 123445,
    soluong: 500,
    tags: ["Đã phê duyệt"],
    tennhacungcap: "HIDEN",
    tensanpham: "Vải khaki",
    tieude: "Văn phòng phẩm",
    tinhtrang: 2,
    tongtien: "30.000.000 VNĐ",
  },
];

var inittialState = data ? data : [];
const DONMUAHANG = (state = inittialState, action) => {
  var { DMH } = action;
  switch (action.type) {
    case types.ADD_DONMUAHANG:
      var newId = findMaxId(state);
      DMH = { ...DMH, key: newId, ID: newId, tags: ["Đang đợi phê duyệt"] };
      state.push(DMH);
      return [...state];
    default:
      return [...state];
  }
};

var findMaxId = (cart) => {
  if (cart.length > 0) {
    return cart.length + 1;
  } else {
    return 0;
  }
};
export default DONMUAHANG;
