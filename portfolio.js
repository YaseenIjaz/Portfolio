
document.getElementById('viewMoreBtn').addEventListener('click', function () {
const moreProjects = document.querySelector('.more-projects');
const btn = this;

if (moreProjects.classList.contains('hidden')) {
    moreProjects.classList.remove('hidden');
    
} else {
    moreProjects.classList.add('hidden');
    
}
});
const viewMoreBtn = document.getElementById("viewMoreBtn");
const projects = document.querySelectorAll(".project.hidden");
let isExpanded = false;

viewMoreBtn.addEventListener("click", () => {
  isExpanded = !isExpanded;

  // Toggle visibility of hidden projects
  projects.forEach((project) => {
    project.style.display = isExpanded ? "block" : "none";
  });

  // Toggle arrow direction
  viewMoreBtn.classList.toggle("up", isExpanded);
});

const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');
const socialContainer = document.querySelector('.social-logo-container');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  socialContainer.classList.toggle('active');
});


