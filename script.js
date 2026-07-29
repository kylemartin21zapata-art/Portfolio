const viewWorkBtn = document.getElementById("viewWorkBtn");

viewWorkBtn.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
  });
});
