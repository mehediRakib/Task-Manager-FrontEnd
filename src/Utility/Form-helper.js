let EmailRegx= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let MobileRegx=/^(?:\+?88)?01[3-9]\d{8}$/;

export function isEmail(value){
    return !EmailRegx.test(value);
}
export function isEmpty(value){
    return value.length===0;
}

export function isMobile(value){
    return !MobileRegx.test(value)
}

export function isPassword(value){
    return value.length<6
}