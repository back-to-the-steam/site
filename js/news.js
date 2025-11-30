// ------------------------
//  NAV SCROLL BUTTON
// ------------------------
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollToWorkshop");

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      const workshopElement = document.getElementById("workshop");
      if (workshopElement) {
        const navHeight = 80;
        const targetPosition = workshopElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  }
});

// ------------------------
//  LOAD NAV
// ------------------------
document.addEventListener("DOMContentLoaded", () => {
  fetch('../html/nav.html')
    .then(response => response.text())
    .then(html => {
      const navContainer = document.getElementById('navigation');
      if (navContainer) navContainer.innerHTML = html;
    })
    .catch(err => console.error("Erreur en chargeant la nav :", err));
});
document.addEventListener("DOMContentLoaded", () => {
  const newsGrid = document.getElementById('news-grid');

  fetch('../data/newsData.json')
    .then(res => res.json())
    .then(newsCards => {
      newsCards.forEach(card => {
        const article = document.createElement('article');
        article.className = 'news-card';
        article.innerHTML = `
          <div class="relative">
            <img src="${card.image}" alt="${card.titre}" />
            <div class="tag"><i data-lucide="tag" class="w-3 h-3"></i>${card.tag}</div>
          </div>
          <div class="content">
            <div class="date"><i data-lucide="calendar" class="w-4 h-4"></i> <span>${card.date}</span></div>
            <h2>${card.titre}</h2>
            <p>${card.description}</p>
          </div>
        `;
        newsGrid.appendChild(article);
      });

      // Initialiser les icônes Lucide
      if (window.lucide) lucide.replace();
    })
    .catch(err => console.error("Erreur JSON news :", err));
});
