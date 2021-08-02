function NhanVien(id, tknv, tenNV, email, matKhau, datePicker, luongCB, chucVu, gioLam) {
    this.id = id
    this.tknv = tknv;
    this.tenNV = tenNV;
    this.email = email;
    this.matKhau = matKhau;
    this.datePicker = datePicker;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
}
NhanVien.prototype.tinhTongLuong = function() {
    switch (this.chucVu) {
        case "Nhân viên":
            return this.luongCB;
        case "Trưởng phòng":
            return this.luongCB * 2;
        case "Giám đốc":
            return this.luongCB * 3
        default:
    }
}
NhanVien.prototype.xepLoai = function() {
    switch (true) {
        case this.gioLam < 160:
            return "Nhân viên trung bình";
        case this.gioLam >= 160 && this.gioLam < 176:
            return "Nhân viên khá";
        case this.gioLam >= 176 && this.gioLam < 192:
            return "Nhân viên giỏi";
        case this.gioLam >= 192:
            return "Nhân viên xuất sắc";
        default:
    }
}