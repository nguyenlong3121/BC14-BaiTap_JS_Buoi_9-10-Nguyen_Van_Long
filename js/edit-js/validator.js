function valAccount(acc) {
    let accountRegex = /^[0-9a-zA-Z]{4,6}$/;
    if (acc && accountRegex.test(acc)) {
        return true;
    }
    return false;
}

function valAccountName(n) {
    let nameRegex = /^[A-Za-z]+$/;
    if (n && nameRegex.test(n)) {
        return true;
    }
    return false;
}

function valEmail(e) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e && emailRegex.test(e)) {
        return true;
    }
    return false;
}

function valPass(p) {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}/;
    if (p && passwordRegex.test(p)) {
        return true;
    }
    return false;
}

function valDate(d) {
    let dateRegex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    if (d && dateRegex.test(d)) {
        return true;
    }
    return false;
}

function valSalary(s) {
    if (s && (parseInt(s) >= 1000000 && parseInt(s) <= 20000000)) {
        return true;
    }
    return false;
}

function valRegency(r) {
    if (r) {
        return true;
    }
    return false;
}

function valHour(h) {
    if (h && (parseInt(h) >= 80 && parseInt(h) <= 200)) {
        return true;
    }
    return false;
}