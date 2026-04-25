const portfolioProjects = [
  {
    id: "todo",
    title: "To-Do List Application",
    description: "A task management application with add, delete, and complete actions to practice DOM manipulation and event handling.",
    category: "javascript",
    level: "beginner",
    year: 2024,
    image: "assets/images/project-todo.svg",
    technologies: ["HTML", "CSS", "JavaScript", "DOM"],
    challenge: "Keeping the interface synchronized with the task data after each user action."
  },
  {
    id: "calculator",
    title: "Calculator Web App",
    description: "A calculator that performs arithmetic operations and demonstrates JavaScript logic and interactive UI behavior.",
    category: "web",
    level: "beginner",
    year: 2024,
    image: "assets/images/project-calculator.svg",
    technologies: ["JavaScript", "Functions", "Events"],
    challenge: "Handling different operator states and avoiding invalid calculations."
  },
  {
    id: "landing",
    title: "Responsive Landing Page",
    description: "A responsive interface project focused on layout, accessibility, and clean UI structure using CSS Grid and Flexbox.",
    category: "ui",
    level: "beginner",
    year: 2023,
    image: "assets/images/project-landing.svg",
    technologies: ["HTML", "CSS Grid", "Flexbox", "Responsive Design"],
    challenge: "Making the layout look balanced on desktop, tablet, and mobile screens."
  },
  {
    id: "dashboard",
    title: "Portfolio Dashboard",
    description: "An advanced portfolio concept with dynamic cards, filters, reusable rendering functions, API loading states, and state management.",
    category: "web",
    level: "advanced",
    year: 2025,
    image: "assets/images/project-dashboard.svg",
    technologies: ["JavaScript", "State", "API", "Reusable Rendering"],
    challenge: "Combining filtering, sorting, persisted preferences, and API data without duplicating code."
  },
  {
    id: "final",
    title: "Final Personal Web Application",
    description: "A polished final portfolio with command palette navigation, project modals, accessibility improvements, and complete documentation.",
    category: "web",
    level: "advanced",
    year: 2025,
    image: "assets/images/project-final.svg",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub API", "Accessibility"],
    challenge: "Turning separate assignment features into one professional, finished application."
  }
];

const skills = [
  { name: "HTML Structure", value: 90, detail: "Semantic sections, accessible navigation, forms, dialogs, and clear document structure." },
  { name: "CSS Design", value: 88, detail: "Responsive layout, custom properties, hover states, reduced-motion support, and polished visual styling." },
  { name: "JavaScript Logic", value: 84, detail: "Filtering, sorting, validation, rendering reusable cards, and event-driven interactivity." },
  { name: "API Integration", value: 80, detail: "Fetches GitHub repositories and shows loading, success, and error messages." },
  { name: "State Management", value: 86, detail: "Stores theme and visitor name in localStorage so the app feels consistent after refresh." },
  { name: "Documentation", value: 92, detail: "Includes README, AI usage report, technical documentation, presentation slides, and a demo script." }
];

const state = {
  theme: localStorage.getItem("theme") || "dark",
  visitorName: localStorage.getItem("visitorName") || "",
  category: "all",
  sortBy: "newest",
  level: "all",
  visitSeconds: 0,
  commandFilter: ""
};

const sections = [
  { label: "About", target: "#about", description: "Read about the project goal." },
  { label: "Projects", target: "#projects", description: "Explore filtered portfolio projects." },
  { label: "Skills", target: "#skills", description: "View the interactive skills tracker." },
  { label: "GitHub", target: "#github", description: "Load live repositories from GitHub." },
  { label: "Innovation", target: "#innovation", description: "See creative features." },
  { label: "Contact", target: "#contact", description: "Try the validated form." }
];

// Smooth scrolling for valid anchor links only
for (const link of document.querySelectorAll('a[href^="#"]')) {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  document.querySelector(".nav-links")?.classList.remove("open");
  document.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "false");
}

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Greeting message by time of day
const greetingEl = document.getElementById("greeting");
const hour = new Date().getHours();
let greeting = "Welcome";

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

if (greetingEl) {
  greetingEl.textContent = `${greeting} - final portfolio app`;
}

// Theme toggle with localStorage
const themeBtn = document.getElementById("themeBtn");
const modeLabel = document.getElementById("modeLabel");

function setTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light", isLight);
  state.theme = theme;
  localStorage.setItem("theme", theme);

  if (themeBtn) {
    themeBtn.textContent = isLight ? "☀️" : "🌙";
  }

  if (modeLabel) {
    modeLabel.textContent = isLight ? "Light" : "Dark";
  }
}

setTheme(state.theme);

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light") ? "dark" : "light";
    setTheme(nextTheme);
  });
}

// Visitor name state
const visitorMessage = document.getElementById("visitorMessage");
const saveNameBtn = document.getElementById("saveNameBtn");

function renderVisitorMessage() {
  if (!visitorMessage) {
    return;
  }

  visitorMessage.textContent = state.visitorName
    ? `Welcome back, ${state.visitorName}. Your preferences are saved on this device.`
    : "Welcome to my portfolio. Personalize your visit to store your name locally.";
}

renderVisitorMessage();

if (saveNameBtn) {
  saveNameBtn.addEventListener("click", () => {
    const name = window.prompt("Enter your name so the website can remember you:");

    if (!name || !name.trim()) {
      return;
    }

    state.visitorName = name.trim().slice(0, 30);
    localStorage.setItem("visitorName", state.visitorName);
    renderVisitorMessage();
  });
}

// Visit timer
const visitTimer = document.getElementById("visitTimer");

function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function startVisitTimer() {
  if (!visitTimer) {
    return;
  }

  visitTimer.textContent = formatTime(state.visitSeconds);

  window.setInterval(() => {
    state.visitSeconds += 1;
    visitTimer.textContent = formatTime(state.visitSeconds);
  }, 1000);
}

startVisitTimer();

// Project rendering with filtering and sorting
const projectsGrid = document.getElementById("projectsGrid");
const projectCount = document.getElementById("projectCount");
const projectHighlights = document.getElementById("projectHighlights");
const categoryFilter = document.getElementById("categoryFilter");
const sortProjects = document.getElementById("sortProjects");
const levelFilter = document.getElementById("levelFilter");
const selectedLevelLabel = document.getElementById("selectedLevelLabel");

function getFilteredProjects() {
  let filteredProjects = [...portfolioProjects];

  if (state.category !== "all") {
    filteredProjects = filteredProjects.filter((project) => project.category === state.category);
  }

  if (state.level !== "all") {
    filteredProjects = filteredProjects.filter((project) => project.level === state.level);
  }

  if (state.sortBy === "newest") {
    filteredProjects.sort((a, b) => b.year - a.year);
  } else if (state.sortBy === "oldest") {
    filteredProjects.sort((a, b) => a.year - b.year);
  } else if (state.sortBy === "title") {
    filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
  }

  return filteredProjects;
}

function renderProjectHighlights(projects) {
  if (!projectHighlights || !selectedLevelLabel) {
    return;
  }

  const levelText = state.level === "all"
    ? "All"
    : state.level === "beginner"
      ? "Beginner"
      : "Advanced";

  selectedLevelLabel.textContent = levelText;

  if (state.level === "beginner") {
    projectHighlights.innerHTML = "<strong>Beginner View:</strong> Showing starter projects that focus on fundamentals such as layouts, DOM manipulation, and basic interactivity.";
  } else if (state.level === "advanced") {
    projectHighlights.innerHTML = "<strong>Advanced View:</strong> Showing complex projects with reusable logic, state management, API integration, and professional UX features.";
  } else {
    projectHighlights.innerHTML = `<strong>Portfolio Overview:</strong> Currently showing ${projects.length} project(s) across all visitor levels.`;
  }
}

function createProjectCard(project) {
  return `
    <article class="card">
      <img src="${project.image}" alt="${project.title} preview" width="600" height="360" loading="lazy" decoding="async" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="meta-row">
        <span class="pill">${project.category}</span>
        <span class="pill">${project.level}</span>
        <span class="pill">${project.year}</span>
      </div>
      <button class="card-link" type="button" data-project-id="${project.id}">View Details</button>
    </article>
  `;
}

function renderProjects() {
  if (!projectsGrid || !projectCount) {
    return;
  }

  const projects = getFilteredProjects();
  renderProjectHighlights(projects);

  projectsGrid.innerHTML = projects.length
    ? projects.map(createProjectCard).join("")
    : "<p class='section-note'>No projects match the selected filters.</p>";

  projectCount.textContent = `Showing ${projects.length} project(s).`;
}

if (categoryFilter && sortProjects && levelFilter) {
  categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    renderProjects();
  });

  sortProjects.addEventListener("change", (event) => {
    state.sortBy = event.target.value;
    renderProjects();
  });

  levelFilter.addEventListener("change", (event) => {
    state.level = event.target.value;
    renderProjects();
  });
}

renderProjects();

// Project details dialog
const projectDialog = document.getElementById("projectDialog");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const dialogTitle = document.getElementById("dialogTitle");
const dialogImage = document.getElementById("dialogImage");
const dialogDescription = document.getElementById("dialogDescription");
const dialogDetails = document.getElementById("dialogDetails");

function openProjectDialog(projectId) {
  const project = portfolioProjects.find((item) => item.id === projectId);

  if (!project || !projectDialog) {
    return;
  }

  dialogTitle.textContent = project.title;
  dialogImage.src = project.image;
  dialogImage.alt = `${project.title} preview`;
  dialogDescription.textContent = project.description;
  dialogDetails.innerHTML = `
    <li><strong>Category:</strong> ${project.category}</li>
    <li><strong>Level:</strong> ${project.level}</li>
    <li><strong>Year:</strong> ${project.year}</li>
    <li><strong>Technologies:</strong> ${project.technologies.join(", ")}</li>
    <li><strong>Challenge:</strong> ${project.challenge}</li>
  `;

  projectDialog.showModal();
}

if (projectsGrid) {
  projectsGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-id]");

    if (button) {
      openProjectDialog(button.dataset.projectId);
    }
  });
}

if (closeDialogBtn && projectDialog) {
  closeDialogBtn.addEventListener("click", () => projectDialog.close());
}

// Skills tracker
const skillsGrid = document.getElementById("skillsGrid");
const skillDetails = document.getElementById("skillDetails");

function renderSkills() {
  if (!skillsGrid) {
    return;
  }

  skillsGrid.innerHTML = skills.map((skill, index) => `
    <button class="card skill-button" type="button" data-skill-index="${index}">
      <h3>${skill.name}</h3>
      <progress value="${skill.value}" max="100">${skill.value}%</progress>
      <p>${skill.value}% confidence</p>
    </button>
  `).join("");
}

if (skillsGrid && skillDetails) {
  skillsGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-skill-index]");

    if (!button) {
      return;
    }

    const skill = skills[Number(button.dataset.skillIndex)];
    skillDetails.innerHTML = `<strong>${skill.name}:</strong> ${skill.detail}`;
  });
}

renderSkills();

// GitHub API integration
const repoGrid = document.getElementById("repoGrid");
const repoStatus = document.getElementById("repoStatus");
const reloadReposBtn = document.getElementById("reloadReposBtn");
const githubUsername = "OMARALYAMANI";

function setRepoStatus(message, type = "") {
  if (!repoStatus) {
    return;
  }

  repoStatus.textContent = message;
  repoStatus.className = `form-status ${type}`.trim();
}

function renderRepositories(repositories) {
  if (!repoGrid) {
    return;
  }

  repoGrid.innerHTML = repositories.map((repo) => `
    <article class="card">
      <img src="assets/images/project-github.svg" alt="GitHub repository placeholder" width="600" height="360" loading="lazy" decoding="async" />
      <h3>${repo.name}</h3>
      <p>${repo.description || "No description available for this repository."}</p>
      <div class="meta-row">
        <span class="pill">${repo.language || "Language not listed"}</span>
        <span class="pill">Updated ${new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
      <a class="card-link" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">Open Repository</a>
    </article>
  `).join("");
}

async function fetchRepositories() {
  try {
    setRepoStatus("Loading repositories...");

    if (repoGrid) {
      repoGrid.innerHTML = "";
    }

    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=4`);

    if (!response.ok) {
      throw new Error("Unable to load repositories from GitHub.");
    }

    const repositories = await response.json();

    if (!Array.isArray(repositories) || repositories.length === 0) {
      setRepoStatus("No repositories were found for this GitHub account.", "error");
      return;
    }

    renderRepositories(repositories);
    setRepoStatus("Repositories loaded successfully.", "success");
  } catch (error) {
    setRepoStatus("Sorry, the GitHub API could not be loaded right now. Please try again later.", "error");
  }
}

if (reloadReposBtn) {
  reloadReposBtn.addEventListener("click", fetchRepositories);
}

fetchRepositories();

// Contact form validation and feedback
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

function validateContactForm({ name, email, subject, message }) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !subject || !message) {
    return "Please fill in all fields before submitting.";
  }

  if (name.length < 2) {
    return "Name must be at least 2 characters long.";
  }

  if (!emailPattern.test(email)) {
    return "Please enter a valid email address.";
  }

  if (subject.length < 3) {
    return "Subject must be at least 3 characters long.";
  }

  if (message.length < 10) {
    return "Message must be at least 10 characters long.";
  }

  return "";
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim()
    };

    const validationMessage = validateContactForm(formData);

    if (validationMessage) {
      formStatus.textContent = validationMessage;
      formStatus.className = "form-status error";
      return;
    }

    formStatus.textContent = `✅ Thanks, ${formData.name}. Your message passed all validation checks and is ready to be sent.`;
    formStatus.className = "form-status success";
    contactForm.reset();
  });
}

// Command palette innovation feature
const commandBtn = document.getElementById("commandBtn");
const commandDialog = document.getElementById("commandDialog");
const closeCommandBtn = document.getElementById("closeCommandBtn");
const commandSearch = document.getElementById("commandSearch");
const commandList = document.getElementById("commandList");

function renderCommandList() {
  if (!commandList) {
    return;
  }

  const query = state.commandFilter.toLowerCase();
  const matches = sections.filter((section) => section.label.toLowerCase().includes(query));

  commandList.innerHTML = matches.map((section) => `
    <button type="button" data-target="${section.target}">
      <strong>${section.label}</strong><br />
      <span>${section.description}</span>
    </button>
  `).join("");
}

function openCommandPalette() {
  if (!commandDialog) {
    return;
  }

  state.commandFilter = "";
  renderCommandList();
  commandDialog.showModal();
  commandSearch?.focus();
}

function closeCommandPalette() {
  commandDialog?.close();
}

if (commandBtn) {
  commandBtn.addEventListener("click", openCommandPalette);
}

if (closeCommandBtn) {
  closeCommandBtn.addEventListener("click", closeCommandPalette);
}

if (commandSearch) {
  commandSearch.addEventListener("input", (event) => {
    state.commandFilter = event.target.value;
    renderCommandList();
  });
}

if (commandList) {
  commandList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-target]");

    if (!button) {
      return;
    }

    closeCommandPalette();
    document.querySelector(button.dataset.target)?.scrollIntoView({ behavior: "smooth" });
    closeMobileMenu();
  });
}

window.addEventListener("keydown", (event) => {
  const isShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

  if (isShortcut) {
    event.preventDefault();
    openCommandPalette();
  }
});

// Back-to-top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (!backToTop) {
    return;
  }

  backToTop.classList.toggle("hidden", window.scrollY < 500);
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

