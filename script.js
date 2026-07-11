const cursor = document.querySelector(".cursor");

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

/* Track mouse position */
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.opacity = "1"; // show when mouse moves
});

/* Hide cursor when mouse leaves website */
document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
});

/* Show cursor when mouse enters website */
document.addEventListener("mouseenter", () => {
  cursor.style.opacity = "1";
});

/* Smooth follow animation */
function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();


// MAGNET EFFECT
const magnets = document.querySelectorAll(".magnet");

magnets.forEach((magnet) => {
  magnet.addEventListener("mousemove", (e) => {
    const rect = magnet.getBoundingClientRect();

    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    magnet.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });

  magnet.addEventListener("mouseleave", () => {
    magnet.style.transform = "translate(0, 0)";
  });
});
