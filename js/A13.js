setCookie = (cName, cValue, expdays) => {
    let date = new date();
    date.setTime(date.getTime() + (expdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

document.querySelector("#cookies-btn").addEventListener("click", ()=>{
    document.querySelector("#cookies").style.display = "none";
    setCookie("cookie", true, 10);
})