function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/`;
}
  
function getCookie(name) {
const cookieName = name + "=";
const cookiesArray = document.cookie.split(';');

for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim();

    if (cookie.indexOf(cookieName) === 0) {
    return cookie.substring(cookieName.length, cookie.length);
    }
}

return null;
}
