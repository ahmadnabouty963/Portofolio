const cvBtn = document.getElementById("cv-btn");
const mainWindow = document.querySelector(".window");
const titleBar = document.querySelector(".title-bar");
const closeBtn = document.querySelector(".close-btn");
const taskAbout = document.getElementById("task-about");
const minimizeBtn = document.querySelector(".minimize-btn");

closeBtn.addEventListener("click", () => {
  mainWindow.style.display = "none";
});

minimizeBtn.addEventListener("click", () => {
  mainWindow.style.display = "none";
});

if (taskAbout) {
  taskAbout.addEventListener("click", () => {
    if (mainWindow.style.display === "none") {
      mainWindow.style.display = "flex";
      taskAbout.style.border = "2px inset var(--win-white)";
    } else {
      mainWindow.style.display = "none";
      taskAbout.style.border = "2px solid var(--win-white)";
    }
  });
}

let isDragging = false;
let offset = { x: 0, y: 0 };
if (window.innerWidth > 768) {
  titleBar.addEventListener("mousedown", (e) => {
    isDragging = true;

    offset.x = e.clientX - mainWindow.offsetLeft;
    offset.y = e.clientY - mainWindow.offsetTop;

    titleBar.style.cursor = "grabbing";
  });
}

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let newX = e.clientX - offset.x;
  let newY = e.clientY - offset.y;

  mainWindow.style.left = newX + "px";
  mainWindow.style.top = newY + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  titleBar.style.cursor = "grab";
});

function updateClock() {
  const tray = document.querySelector(".system-tray");
  if (tray) {
    const now = new Date();
    const time =
      now.getHours().toString().padStart(2, "0") +
      ":" +
      now.getMinutes().toString().padStart(2, "0");
    tray.textContent = time;
  }
}
setInterval(updateClock, 1000);
updateClock();
const papierkorb = document.getElementById("papierkorb");

papierkorb.addEventListener("click", () => {
  alert(
    "Der Papierkorb ist leer. (Oder hast du etwa deine Bugs hier reingeworfen?) 🗑️",
  );
});
