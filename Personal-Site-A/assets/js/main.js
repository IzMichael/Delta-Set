function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pulseSocial() {
    var socialMenu = document.getElementById("socialMenuI")
    socialMenu.classList.add("pulse")
    await sleep(10000);
    socialMenu.classList.remove("pulse")
}

$(document).ready(function () {
    $('#bioInsert').load("/config/bio.txt");
});

$(document).ready(function () {
    $('#descInsert').load("/config/description.txt");
});

$(document).ready(function () {
    $('#worksDisplay').load("/config/works.html");
});

function showAttr() {
    var sidebar = document.getElementById("sidebarParent");
    sidebar.classList.add("-translate-y-full");
}

function hideAttr() {
    var sidebar = document.getElementById("sidebarParent");
    sidebar.classList.remove("-translate-y-full");
}