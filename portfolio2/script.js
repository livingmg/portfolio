let heading = document.getElementById("heading");
let changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", function() {
    heading.textContent = "Thank you for visiting my portfolio!";
}); 
let visitorName = document.getElementById("VisitorName");
let message = document.getElementById("message");

visitorName.addEventListener("input", function () {
    let name = visitorName.value.trim();
    message.textContent = name
        ? `Hello, ${name}! Welcome to my portfolio.`
        : "Your greeting will appear here!";
});
let themeButton = document.getElementById("themeButton");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
});

   // Projects
const projectForm = document.getElementById("projectForm");
const projectInput = document.getElementById("projectInput");
const projectList = document.getElementById("projectList");

// 1. Load saved projects (or start with an empty list)
let projects = JSON.parse(localStorage.getItem("projects")) || [];

// 2. Save the array to the browser
function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

// 3. Draw the whole list from the array
function renderProjects() {
    projectList.innerHTML = "";

    projects.forEach(function (name, index) {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = name;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function () {
            projects.splice(index, 1);
            saveProjects();
            renderProjects();
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        projectList.appendChild(li);
    });
}

// 4. Add a project
projectForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = projectInput.value.trim();
    if (!name) return;

    projects.push(name);
    saveProjects();
    renderProjects();
    projectInput.value = "";
});

// 5. Show saved projects when the page loads
renderProjects();