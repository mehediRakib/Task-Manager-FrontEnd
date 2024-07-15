
export function setToken(token){
    localStorage.setItem('token',token)
}

export function setUserDetails(userDetails){
    localStorage.setItem("userDetails",JSON.stringify(userDetails));
}

export function getUserDetails(){
    return JSON.parse(localStorage.getItem("userDetails"))
}

export function setUserEmail(email){
    localStorage.setItem('email',JSON.stringify(email))
}

export function getUserEmail(){
    return JSON.parse(localStorage.getItem("email"));
}