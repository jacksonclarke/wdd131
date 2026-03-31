const featuredProjects = [
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
];

const projectContainer = document.getElementById("project-container");

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

function renderProjects() {
  featuredProjects.forEach((project) => {
    projectContainer.innerHTML += projectTemplate(project);
  });
}

renderProjects();
