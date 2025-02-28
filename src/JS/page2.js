window.addEventListener("load", (event) => {
    let btnValue = localStorage.getItem("btnValue");

    document.querySelector("span").textContent = btnValue;
});