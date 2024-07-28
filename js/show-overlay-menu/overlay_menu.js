document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("trigger_overlay");
  const closeButton = document.getElementById("close_overlay");
  const popupMenu = document.getElementById("overlay_menu");

  toggleButton.addEventListener("click", function () {
    if (popupMenu.classList.contains("show")) {
      popupMenu.classList.remove("show");
      setTimeout(() => {
        popupMenu.style.display = "none";
      }, 300);
    } else {
      popupMenu.style.display = "block";
      setTimeout(() => {
        popupMenu.classList.add("show");
      }, 10);
    }
  });

  closeButton.addEventListener("click", function () {
    popupMenu.classList.remove("show");
    setTimeout(() => {
      popupMenu.style.display = "none";
    }, 300);
  });

  document.addEventListener("click", function (event) {
    if (
      !toggleButton.contains(event.target) &&
      !popupMenu.contains(event.target) &&
      !closeButton.contains(event.target)
    ) {
      popupMenu.classList.remove("show");
      setTimeout(() => {
        popupMenu.style.display = "none";
      }, 300);
    }
  });
});
