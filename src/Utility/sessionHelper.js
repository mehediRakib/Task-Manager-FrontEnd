
export function setToken(token){
    localStorage.setItem('token',token)
}

export function setUserDetails(userDetails){
    localStorage.setItem("userDetails",JSON.stringify(userDetails));
}