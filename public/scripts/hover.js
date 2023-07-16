function selectLink(link) {
  var links = document.querySelectorAll(".nav-list li a");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
  link.classList.add("active");
}

// Add the following code to set the active link based on the current page
var currentPath = window.location.pathname;
var pageName = currentPath.split("/").pop();

var nameId = pageName.slice(0, pageName.lastIndexOf(".html"));
var id = nameId + "-link";

var activeLink = document.getElementById(nameId + "-link");

if (activeLink) {
  activeLink.classList.add("active");
}
