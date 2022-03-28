// Gọi tất cả các hàm được sử dụng để xác nhận.
function formValidation() {
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex; if (userid_validation(uid, 5, 12)) {
        if (passid_validation(passid, 7, 12)) {
            if (allLetter(uname)) {
                if (alphanumeric(uadd)) {
                    if (countryselect(ucountry)) {
                        if (allnumeric(uzip)) {
                            if (ValidateEmail(uemail)) {
                                if (validsex(umsex, ufsex)) {
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
// Hàm JavaScript để xác thực userid
function userid_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("Id người dùng không được để trống và độ dài từ  " + mx + " đến " + my);
        uid.focus();
        return false;
    }
    return true;
}
// Hàm JavaScript để xác thực password
function passid_validation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Mật khẩu không được để trống và độ dài ở giữa " + mx + " đến " + my);
        passid.focus();
        return false;
    }
    return true;
}
// Hàm JavaScript để xác thực name
function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Tên người dùng chỉ được có các ký tự trong bảng chữ cái');
        uname.focus();
        return false;
    }
}
// Hàm JavaScript để xác thực address
function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    }
    else {
        alert('Địa chỉ người dùng chỉ được có các ký tự chữ và số');
        uadd.focus();
        return false;
    }
}
// Hàm JavaScript để xác thực country
function countryselect(ucountry) {
    if (ucountry.value == "Default") {
        alert('Chọn quốc gia của bạn từ danh sách');
        ucountry.focus();
        return false;
    }
    else {
        return true;
    }
} 
// Hàm JavaScript để xác thực ZIP code
function allnumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers)) {
        return true;
    }
    else {
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}
// Hàm JavaScript để xác thực định dạng email
function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
// // Hàm JavaScript để xác thực giới tính
function validsex(umsex, ufsex) {
    x = 0;

    if (umsex.checked) {
        x++;
    } if (ufsex.checked) {
        x++;
    }
    if (x == 0) {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else {
        alert('Form Successfully Submitted');
        window.location.reload()
        return true;
    }
}