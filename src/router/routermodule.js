import React, { Component } from 'react';
import page from '../component/page';
import page1 from '../component/page1/page1';
import YeuCauDoanhNghiep from '../component/YeuCauMuaHang/doanhnghiep/YeuCauDoanhNghiep';
import ThemMoiYeuCau from '../component/YeuCauMuaHang/phongban/ThemMoiYeuCau';
import ThemMoiYeuCauDoanhNghiep from '../component/YeuCauMuaHang/doanhnghiep/ThemMoiYeuCau';
import YeuCauPhongBan from '../component/YeuCauMuaHang/phongban/YeuCauPhongBan';
import { AppRoute } from './AppRoute';
import danhsach from '../component/DonMuaHang/danhsach';
import donmuahang from '../component/DonMuaHang/donmuahang';
import lich from '../component/DonMuaHang/lich';
import QuanLyMoiChaoGia from '../component/QuanLyMoiChaoGia/QuanLyMoiChaoGia';
import Chotao from '../component/DonMuaHang/chotao';
class router extends Component {
    render() {
        return (
            <div>
                <AppRoute exact path="/yeucauphongban" component={YeuCauPhongBan} layout={page} />
                <AppRoute exact path="/" component={page1} layout={page} />
                <AppRoute exact path="/themmoiyeucau" component={ThemMoiYeuCau} layout={page} />


                <AppRoute exact path="/yeucaudoanhnghiep" component={YeuCauDoanhNghiep} layout={page} />
                <AppRoute exact path="/themmoiyeucau-doanhnghiep" component={ThemMoiYeuCauDoanhNghiep} layout={page} />

                <AppRoute exact path="/chotao" component={Chotao} layout={page} />

                <AppRoute exact path="/danhsach-donmuahang" component={danhsach} layout={page} />
                <AppRoute exact path="/donmuahang/:id" component={donmuahang} layout={page} />
                <AppRoute exact path="/lich" component={lich} layout={page} />
                <AppRoute exact path="/quanlymoichaogia" component={QuanLyMoiChaoGia} layout={page} />
            </div>

        );
    }
}

export default router;