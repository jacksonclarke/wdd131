const featuredProjects = [
  {
    title: "Portfolio Site",
    desc: "This site — handcrafted with HTML, CSS, and vanilla JavaScript. Features a dark theme, custom SVG graphics, and a tag-based project filter on the work page.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/jacksonclarke",
    linkText: "View source",
  },
  {
    title: "Network Scanner",
    desc: "A Python CLI tool for host discovery and open port enumeration on local networks. Built using raw sockets and threading for concurrent scanning.",
    tags: ["Python", "Cybersecurity", "Networking"],
    link: "https://github.com/jacksonclarke",
    linkText: "View source",
  },
  {
    title: "Weather Dashboard",
    desc: "A browser-based weather app that fetches live data from a public API and renders current conditions and a 5-day forecast with animated icons.",
    tags: ["JavaScript", "API", "Web"],
    link: "https://github.com/jacksonclarke",
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
