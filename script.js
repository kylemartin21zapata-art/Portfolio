const viewWorkBtn = document.getElementById("viewWorkBtn");

viewWorkBtn.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
  });
});

const goContact = document.getElementById("goContact");

goContact.addEventListener("click", () => {
  document.getElementById("contacts").scrollIntoView({
    behavior: "smooth",
  });
});
