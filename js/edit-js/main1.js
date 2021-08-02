id =1
//DOM gắn element
// $(document).ready(function(){
    //DOM gắn element
    document.getElementById("btnThemNV").addEventListener('click', themNV);
    document.getElementById('btnCapNhat').addEventListener('click', capNhapNV);
    document.getElementById('btnTimNV').addEventListener('click', timNV);
    let qlnv = new QuanLyNhanVien();
    qlnv.khoiTao();
    hienThi(qlnv);
    function themNV() {
        console.log("debug");
        let tknv = document.getElementById('tknv').value;
        let tenNV = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let matKhau = document.getElementById('password').value;
        let datePicker = document.getElementById('datepicker').value;
        let luongCB = document.getElementById('luongCB').value;
        let chucVu = document.getElementById('chucvu').value;
        let gioLam = document.getElementById('gioLam').value;
        let nhanVien = new NhanVien (ids,tknv,tenNV, email,matKhau,datePicker,luongCB,chucVu,gioLam);
        let isValid = xacThuc(nhanVien)
        if (!isValid) {
            return
        }
        qlnv.themNV(nhanVien);
        hienThi(qlnv.dsnv);
        
    }
    function hienThi() {
        let tbody = document.getElementById('tableDanhSach')
        let html = '';
        for (let i=0; i < dsnv.length; i++) {
            let nv = dsnv[i];
            id++
            html += ` <tr id=tknv-${newNV.id}>
            <th>${newNV.tknv}</th>
            <th>${newNV.tenNV}</th>
            <th>${newNV.email}</th>
            <th>${newNV.datePicker}</th>
            <th>${newNV.chucVu}</th>
            <th>${newNV.tinhTongLuong()} VNĐ</th>
            <th>${newNV.xepLoai()}</th>
            <th><button onclick=btnXoa(${newNV.id}) type="button" class="btn btn-danger"><i class="fa fa-trash"></i></button>
            <button onclick=btnUpdate(${newNV.id})  type="button" class="btn btn-primary" data-toggle="modal"
            data-target="#myModal"><i class="fa fa-upload"></i></button></th>
            </tr>`
        }
        tbody.innerHTML = html
    }
    function capNhapNV() {}
    function timNV() {}
// })