import * as types from "../constants/ActionType";
// var data = JSON.parse(localStorage.getItem('CART'));

// var data = [];

var data = [
  {
    key: 1,
    ID: 1,
    tieude: "Đặt màn hình",
    tendoanhnghiep: "LuonVuiTuoi",
    tensanpham: "5 màn hình DELL",
    ngaynhanhang: "12/02/2020",
    tags: ["Đang đợi phê duyệt"],
    tennguoidaidien: "Nguyen Van A",
    email: "example@gmail.com",
    chitiet: "1000 tấn",
    ngaytao: "12/03/2020",
    dondathang: ["Yeucau.pdf", "Chitiet.pdf"],
    mota: "ABC",
    sdt: "01231203",
    soluong: "1000",
    donvitinh: "cái",
    dataodonhang: false,
    ghichu: "Màn hình DELL h1234 ",
  },
  {
    key: 2,
    ID: 2,
    tieude: "Văn phòng phẩm",
    tendoanhnghiep: "Thiên Long",
    tensanpham: "200 bút bi Thiên Long",
    ngaynhanhang: "12/03/2020",
    tags: ["Đã phê duyệt"],
    tennguoidaidien: "Nguyen Van A",
    email: "example@gmail.com",
    chitiet: "1000 cái",
    ngaytao: "12/03/2020",
    dondathang: ["link_1", "link_2"],
    tinhtrang: 0,
    mota: "ABC",
    sdt: "01231203",
    soluong: 1000,
    donvitinh: "cái",
    dataodonhang: false,
    ghichu: "Đóng hợp gửi phòng nhân sự",
  },
  {
    key: 3,
    ID: 3,
    tieude: "Đặt áo cho khách",
    tendoanhnghiep: "Cá Sấu",
    tensanpham: "300 áo thun",
    ngaynhanhang: "12/04/2020",
    tags: ["Đã từ chối"],
    tennguoidaidien: "Nguyen Van A",
    email: "example@gmail.com",
    chitiet: "1000 tấn",
    ngaytao: "12/04/2020",
    dondathang: ["link_1", "link_2"],
    mota: "ABC",
    sdt: "01231203",
    soluong: "1000",
    donvitinh: "cái",
    dataodonhang: false,
    ghichu: "Chất liệu nỉ, không có đường chỉ hư",
  },
  {
    key: 4,
    ID: 4,
    tieude: "Đặt quần cho khách",
    tendoanhnghiep: "Hiden",
    tensanpham: "Vải Khaki mới",
    ngaynhanhang: "12/04/2020",
    tags: ["Đã từ chối"],
    tennguoidaidien: "Nguyen Van B",
    email: "example@gmail.com",
    chitiet: "100 tấn",
    ngaytao: "12/04/2020",
    dondathang: ["link_1", "link_2"],
    mota: "ABC",
    sdt: "01231203",
    soluong: "1000",
    donvitinh: "cái",
    dataodonhang: false,
    ghichu: "Quần khaki",
  },
  {
    key: 5,
    ID: 5,
    tieude: "Đặt nước cho công ty",
    tendoanhnghiep: "Hiden",
    tensanpham: "Nước bình Bidrico",
    ngaynhanhang: "12/04/2020",
    tags: ["Đã phê duyệt"],
    tennguoidaidien: "Nguyen Van B",
    email: "example@gmail.com",
    chitiet: "200 bình",
    ngaytao: "12/04/2020",
    dondathang: ["link_1", "link_2"],
    mota: "ABC",
    sdt: "01231203",
    soluong: "1000",
    donvitinh: "cái",
    dataodonhang: false,
    ghichu: "Nước chia 2 loại bình úp và bình xuôi",
  },
];

var inittialState = data ? data : [];
const YCMH_PHONGBAN = (state = inittialState, action) => {
  var { YCMH } = action;
  switch (action.type) {
    case types.ADD_YCMH_PHONGBAN:
      var newId = findMaxId(state);
      YCMH = { ...YCMH, key: newId, ID: newId, tags: ["Đang đợi phê duyệt"] };
      state.push(YCMH);
      return [...state];
    case types.EDIT_DATAODONMUAHANG:
      state.forEach((e) => {
        console.log(YCMH);
        if (Number(e.ID) === Number(YCMH)) {
          e.dataodonhang = true;
        }
      });
      console.log(state);
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
export default YCMH_PHONGBAN;
