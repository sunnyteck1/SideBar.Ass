const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("menu-icon2");
const sidebar = document.getElementById("Sidebar");
const signoutLink = document.getElementById("signout-link");
const signoutWindow = document.getElementById("signout-window");
const yesBtn = document.getElementById("yes");
const noBtn = document. getElementById("no");

menuIcon.addEventListener("click",() =>{
    sidebar.classList.toggle("active");
});

closeIcon.addEventListener("click",() =>{
    sidebar.classList.toggle("active");
});

signoutLink.addEventListener("click",(e) =>{
  e.preventDefault();
  signoutWindow.classList.toggle("active");
});

noBtn.addEventListener("click",() =>{
   signoutWindow.classList.toggle("active")
});

yesBtn.addEventListener("click",() =>{
   alert("You have signed out");
    signoutWindow.classList.toggle("active");
});
