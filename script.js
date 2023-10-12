const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

// const toggleSolarSystem = () => {
//     document.getElementById("nav2").classList.toggle("hidden");
//     document.getElementById("nav1").classList.add("hidden");
//     document.getElementById("nav3").classList.add("hidden");
//     document.getElementById("nav4").classList.add("hidden");
// }

const toggleSun = () => {
    document.getElementById("nav2").classList.toggle("hidden");
    document.getElementById("nav1").classList.add("hidden");
    document.getElementById("nav3").classList.add("hidden");
    document.getElementById("nav4").classList.add("hidden");
}

const toggleMars = () => {
    document.getElementById("nav3").classList.toggle("hidden");
    document.getElementById("nav1").classList.add("hidden");
    document.getElementById("nav2").classList.add("hidden");
    document.getElementById("nav4").classList.add("hidden");
}

const toggleEarth = () => {
    document.getElementById("nav4").classList.toggle("hidden");
    document.getElementById("nav1").classList.add("hidden");
    document.getElementById("nav2").classList.add("hidden");
    document.getElementById("nav3").classList.add("hidden");
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
}