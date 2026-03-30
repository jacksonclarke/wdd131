const projects = [
  {
    title: "Portfolio Site",
    desc: "A handcrafted dark-theme portfolio with custom SVG graphics, deliberate typography, and a tag-based project filter built in vanilla JavaScript.",
    tags: ["Web", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/jacksonclarke",
    linkText: "View source",
  },
  {
    title: "Network Scanner",
    desc: "CLI tool for host discovery and open port enumeration. Uses raw sockets and threading to scan subnets concurrently with minimal dependencies.",
    tags: ["Python", "Cybersecurity", "Networking"],
    link: "https://github.com/jacksonclarke",
    linkText: "View source",
  },
  {
    title: "Weather Dashboard",
    desc: "Browser-based weather app pulling live data from a public API. Displays current conditions and a 5-day forecast with smooth animated icons.",
    tags: ["Web", "JavaScript", "API"],
    link: "https://github.com/jacksonclarke",
    linkText: "View source",
  },
  {
    title: "Password Manager CLI",
    desc: "A local, encrypted password vault for the terminal. Passwords are stored with AES-256 encryption and accessed via a master passphrase.",
    tags: ["Python", "Cybersecurity"],
    link: "https://github.com/jacksonclarke",
    linkText: "View source",
  },
  {
    title: "Task Manager App",
    desc: "A front-end task management app with drag-and-drop reordering, local storage persistence, and keyboard navigation support.",
    tags: ["Web", "JavaScript"],
    link: "https://github.com/jacksonclarke",
    linkText: "View source",
  },
  {
    title: "CTF Writeups",
    desc: "Documented solutions to Capture the Flag challenges covering web exploitation, reverse engineering, and cryptography. Written to teach technique, not just show answers.",
    tags: ["Cybersecurity", "Python"],
    link: "https://github.com/jacksonclarke",
    linkText: "View writeups",
  },
  {
    title: "GitHub Activity Feed",
    desc: "Fetches and renders a live activity timeline from the GitHub API. Displays commits, PRs, and issues with relative timestamps and repo links.",
    tags: ["Web", "API", "JavaScript"],
    link: "https://github.com/jacksonclarke",
    linkText: "View source",
  },
  {
    title: "Packet Sniffer",
    desc: "A lightweight Python packet capture tool using Scapy. Filters by protocol and logs summaries of HTTP, DNS, and ARP traffic to a local file.",
    tags: ["Python", "Cybersecurity", "Networking"],
    link: "https://github.com/jacksonclarke",
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
