const projects = [
  {
    title: "Portfolio Site",
    desc: "This site — handcrafted with HTML, CSS, and vanilla JavaScript. Features a dark theme, custom SVG graphics, and a tag-based project filter on the work page.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/jacksonclarke/wdd131/tree/main/portfolio",
    linkText: "View source",
  },
  {
    title: "Ensign Partners Ticket System",
    desc: "Internal ticketing system with a Node.js backend and a vanilla JavaScript frontend. Features include user authentication, role-based access control, and email notifications.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/jacksonclarke/EPTicketSystem",
    linkText: "View source",
  },
  {
    title: "Howitzer Simulator",
    desc: "A C++ program that simulates the trajectory of a howitzer shell, accounting for factors like gravity, air resistance, and wind. Users can input parameters such as initial velocity and angle to see the resulting path.",
    tags: ["C++"],
    link: "https://github.com/jacksonclarke/Howitzer",
    linkText: "View source",
  },
  {
    title: "WordWeave",
    desc: "Word Weave is a connection game where players find and link four related words in a grid. Its designed to challenge logical thinking and word association skills.",
    tags: ["JavaScript", "Full Stack"],
    link: "https://github.com/WordWeaveInc/WordWeave",
    linkText: "View source",
  },
  {
    title: "CulinaryKin",
    desc: "CulinaryKin is a recipe management app designed to help prevent the loss of family recipes, as well as to provide a safe place to store and share recipes.",
    tags: ["Web", "Python", "HTML"],
    link: "https://github.com/jacksonclarke/CulinaryKin",
    linkText: "View source",
  },
];

const projectContainer = document.getElementById("project-container");
const filterBar = document.getElementById("filter-bar");

filterBar.addEventListener("click", handleFilter);

function tagTemplate(tags) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function projectTemplate(project) {
  return `<div class="project">
    <h2>${project.title}</h2>
    <p class="description">${project.desc}</p>
    <div class="project-tags">${tagTemplate(project.tags)}</div>
    <a class="project-link" href="${project.link}" target="_blank" rel="noopener">${project.linkText}</a>
  </div>`;
}

function renderProjects(list) {
  projectContainer.innerHTML = "";
  list.forEach((project) => {
    projectContainer.innerHTML += projectTemplate(project);
  });
}

function handleFilter(e) {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  const filter = btn.dataset.filter;
  if (filter === "all") {
    renderProjects(projects);
  } else {
    const filtered = projects.filter((project) => project.tags.includes(filter));
    renderProjects(filtered);
  }
}

function renderFilters() {
  const allTags = [...new Set(projects.flatMap((project) => project.tags))];

  let html = `<button class="filter-btn active" data-filter="all">All</button>`;
  allTags.forEach((tag) => {
    html += `<button class="filter-btn" data-filter="${tag}">${tag}</button>`;
  });
  filterBar.innerHTML = html;
}

function init() {
  renderFilters();
  renderProjects(projects);
}

init();
