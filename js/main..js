document.getElementById("scrollToWorkshop").addEventListener("click", () => {
  const workshopElement = document.getElementById("workshop");
  if (workshopElement) {
    const navHeight = 80; // Ajuste selon ta nav
    const targetPosition = workshopElement.offsetTop - navHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  }
});
