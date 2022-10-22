// Sidebar Overlay
const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.sidebar');

function toggleSidebar() {
  sideBar.classList.toggle('open');
}

menuIcon.addEventListener('click', toggleSidebar);