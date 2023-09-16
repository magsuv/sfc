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


// Example post data
// const posts = [
//     {
//         title: "Title of Post 1",
//         date: "2023-01-01",
//         tags: ["tag1", "tag2"]
//     },
//     {
//         title: "Title of Post 2",
//         date: "2023-01-15",
//         tags: ["tag2", "tag3"]
//     }
//     // ... add other posts similarly
// ];

// // Populate date filters (just an example, you'd ideally want to dynamically generate this based on post dates)
// const dateFilterSection = document.getElementById('dateFilter');
// posts.forEach(post => {
//     const postDate = new Date(post.date);
//     dateFilterSection.innerHTML += `<a href="#">${postDate.getFullYear()} ${postDate.getMonth()+1}</a><br>`;
// });

// // Populate tag filters (again, just an example)
// const tagFilterSection = document.getElementById('tagFilter');
// let tags = [];
// posts.forEach(post => {
//     post.tags.forEach(tag => {
//         if (!tags.includes(tag)) {
//             tags.push(tag);
//         }
//     });
// });
// tags.forEach(tag => {
//     tagFilterSection.innerHTML += `<a href="#">${tag}</a><br>`;
// });