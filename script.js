
//make the navbar sticky //
const header = document.querySelector("nav");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})



function toggleMenu() {
    let navMenu = document.querySelector('.navmenu');
    navMenu.classList.toggle('active'); // Toggle the 'active' class
}


//used dom to get the sidebar used onclick so when it is pushed the sidebar displays flex//

function showSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
}




