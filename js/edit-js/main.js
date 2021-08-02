//  DOM và gắn event
document.getElementById("btnThemNV").addEventListener("click", themNV);
document.getElementById("btnCapNhat").addEventListener("click", capNhapNV);
document.getElementById('btnTimNV').addEventListener('click', timKiemNV);
document.getElementById("tableDanhSach").addEventListener("click", delegationTable)
let dsnv = JSON.parse(localStorage.getItem("dsnv")) || [];

function khoiTao() {
    if (dsnv.length === 0) {
        return;
    }
    dsnv = dsnv.map(function(nv) {
        return new NhanVien(nv.id, nv.tknv, nv.tenNV, nv.email, nv.matKhau, nv.datePicker, nv.luongCB, nv.chucVu, nv.gioLam)
    });
}
khoiTao();

function themNV() {
    let tknv = document.getElementById('tknv').value;
    let tenNV = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let matKhau = document.getElementById('password').value;
    let datePicker = document.getElementById('datepicker').value;
    let luongCB = document.getElementById('luongCB').value;
    let chucVu = document.getElementById('chucvu').value;
    let gioLam = document.getElementById('gioLam').value;
    let nv = new NhanVien(tknv, tenNV, email, matKhau, datePicker, luongCB, chucVu, gioLam, );
    nv.tknv = tknv;
    nv.tenNV = tenNV;
    nv.email = email;
    nv.matKhau = matKhau;
    nv.datePicker = datePicker;
    nv.luongCB = luongCB;
    nv.chucVu = chucVu;
    nv.gioLam = gioLam;
    if (valAccount(tknv) && valAccountName(tenNV) && valEmail(email) && valPass(matKhau) && valDate(datePicker) && valSalary(luongCB) && valRegency(chucVu) && valHour(gioLam)) {
        dsnv.push(nv);
        hienThi(dsnv);
        $("#btnDong").click();
        $(".sp-thongbao").text("");
        resetList()
    } else {
        if (!valAccount(tknv)) {
            $("#tbTKNV").text("Tài khoản từ 4 đến 6 kí tự");
        }
        if (!valAccountName(tenNV)) {
            $("#tbTen").text("Tên phải là chữ");
        }
        if (!valEmail(email)) {
            $("#tbEmail").text("Vui lòng nhập email đúng đinh dạng");
        }
        if (!valPass(matKhau)) {
            $("#tbMatKhau").text("Mật khẩu phải có từ 6-10 kí tự 1 chữ in hoa, 1 số và 1 kí tự đặc biệt");
        }
        if (!valDate(datePicker)) {
            $("#tbNgay").text("Vui lòng chọn ngày đúng định dạng mm/dd/yyyy");
        }
        if (!valSalary(luongCB)) {
            $("#tbLuongCB").text("Lương cơ bản từ 1.000.000 - 20.000.000");
        }
        if (!valRegency(chucVu)) {
            $("#tbChucVu").text("Vui lòng chọn lại chức vụ phù hợp");
        }
        if (!valHour(gioLam)) {
            $("#tbGiolam").text("Giờ làm từ 80 - 200 giờ");
        }
    }
    localStorage.setItem("dsnv", JSON.stringify(dsnv));
}


function hienThi(dsnv) {
    let divTableDSNV = document.getElementById("tableDanhSach")
    divTableDSNV.innerHTML = null;
    for (let i = 0; i < dsnv.length; i++) {
        let newNV = dsnv[i];
        divTableDSNV.innerHTML += `
            <tr>
            <th>${newNV.tknv}</th>
            <th>${newNV.tenNV}</th>
            <th>${newNV.email}</th>
            <th>${newNV.datePicker}</th>
            <th>${newNV.chucVu}</th>
            <th>${newNV.tinhTongLuong().toLocaleString('de-DE')} VNĐ</th>
            <th>${newNV.xepLoai()}</th>
            <th><button type="button" class="btn btn-danger" data-action="delete" data-tknv="${newNV.tknv}"><i class="fa fa-trash"></i></button>
            <button type="button" class="btn btn-primary" data-action="select" data-tknv="${newNV.tknv}" data-toggle="modal"
            data-target="#myModal"><i class="fa fa-upload"></i></button></th>
            </tr>`;
    }
}

function delegationTable(event) {
    let tknv = event.target.getAttribute("data-tknv");
    let action = event.target.getAttribute("data-action");
    if (action === "delete") {
        btnXoa(tknv);
    }
    if (action === "select") {
        btnChon(tknv)
    }
}
//function xóa
function btnXoa(tknv) {
    dsnv = dsnv.filter(function(nv) {
        return nv.tknv !== tknv;
    });
    localStorage.setItem("dsnv", JSON.stringify(dsnv));
    hienThi(dsnv)
}
//function update
function btnChon(tknv) {
    let nv = dsnv.find(function(nv) {
        return nv.tknv === tknv;
    })
    document.getElementById("tknv").disabled = true
    document.getElementById("tknv").value = nv.tknv;
    document.getElementById('name').value = nv.tenNV;
    document.getElementById('email').value = nv.email;
    document.getElementById('password').value = nv.matKhau;
    document.getElementById('datepicker').value = nv.datePicker;
    document.getElementById('luongCB').value = nv.luongCB;
    document.getElementById('chucvu').value = nv.chucVu;
    document.getElementById('gioLam').value = nv.gioLam;
}

function timKiemNV() {
    let search = document.getElementById('searchName').value;
    let searchDsnv = dsnv.filter(function(nv) {
        return nv.xepLoai().toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
    hienThi(searchDsnv)
}
//reset dsnv
function resetList() {
    document.getElementById("tknv").value = "";
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('datepicker').value = "";
    document.getElementById('luongCB').value = "";
    document.getElementById('chucvu').value = "";
    document.getElementById('gioLam').value = "";
}
// funtion cập nhập
function capNhapNV() {
    let tknv = document.getElementById('tknv').value;
    let tenNV = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let matKhau = document.getElementById('password').value;
    let datePicker = document.getElementById('datepicker').value;
    let luongCB = document.getElementById('luongCB').value;
    let chucVu = document.getElementById('chucvu').value;
    let gioLam = document.getElementById('gioLam').value;
    let nhanVien = new NhanVien(tknv, tenNV, email, matKhau, datePicker, luongCB, chucVu, gioLam);
    nhanVien.tknv = tknv;
    nhanVien.tenNV = tenNV;
    nhanVien.email = email;
    nhanVien.matKhau = matKhau;
    nhanVien.datePicker = datePicker;
    nhanVien.luongCB = luongCB;
    nhanVien.chucVu = chucVu;
    nhanVien.gioLam = gioLam;
    dsnv = dsnv.map(function(nv) {
        if (nv.tknv === tknv) {
            return nhanVien;
        }
        return nv;
    });
    if (valAccount(tknv) && valAccountName(tenNV) && valEmail(email) && valPass(matKhau) && valDate(datePicker) && valSalary(luongCB) && valRegency(chucVu) && valHour(gioLam)) {
        hienThi(dsnv);
        $("#btnDong").click();
        $(".sp-thongbao").text("");
        resetList()
            // localStorage.setItem("dsnv", JSON.stringify(dsnv))
    } else {
        if (!valAccount(tknv)) {
            $("#tbTKNV").text("Tài khoản từ 4 đến 6 kí tự");
        }
        if (!valAccountName(tenNV)) {
            $("#tbTen").text("Tên phải là chữ");
        }
        if (!valEmail(email)) {
            $("#tbEmail").text("Vui lòng nhập email đúng đinh dạng");
        }
        if (!valPass(matKhau)) {
            $("#tbMatKhau").text("Mật khẩu phải có từ 6-10 kí tự 1 chữ in hoa, 1 số và 1 kí tự đặc biệt");
        }
        if (!valDate(datePicker)) {
            $("#tbNgay").text("Vui lòng chọn ngày đúng định dạng mm/dd/yyyy");
        }
        if (!valSalary(luongCB)) {
            $("#tbLuongCB").text("Lương cơ bản từ 1.000.000 - 20.000.000");
        }
        if (!valRegency(chucVu)) {
            $("#tbChucVu").text("Vui lòng chọn lại chức vụ phù hợp");
        }
        if (!valHour(gioLam)) {
            $("#tbGiolam").text("Giờ làm từ 80 - 200 giờ");
        }
    }
    localStorage.setItem("dsnv", JSON.stringify(dsnv));
    document.getElementById("tknv").disabled = false;
}