const sidebarContainer = document.getElementById('sidebar-container');

function adjustSidebarPosition() {
    if (window.innerWidth >= 768) {
        sidebarContainer.style.transform = "translateX(0)";
    } else {
        sidebarContainer.style.transform = "translateX(88%)";
    }
}

document.getElementById('toggle-sidebar').addEventListener('click', function() {
    if (sidebarContainer.style.transform === "translateX(88%)") {
        sidebarContainer.style.transform = "translateX(0)";
    } else {
        sidebarContainer.style.transform = "translateX(88%)";
    }
});

// To automatically handle sidebar during window resize
window.addEventListener('resize', adjustSidebarPosition);