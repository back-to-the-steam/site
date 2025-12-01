// ------------------------
//  MAIN JS - GLOBAL
// ------------------------

async function initPage() {
  // ------------------------
  // 1️⃣ INJECTION DE LA NAV
  // ------------------------
  const navContainer = document.getElementById('navigation');
  if (navContainer) {
    try {
      const navHtml = await fetch('../html/nav.html').then(r => r.text());
      navContainer.innerHTML = navHtml;

      // Burger menu
      const burger = navContainer.querySelector(".burger");
      const mobileMenu = navContainer.querySelector(".mobile-menu");
      if (burger && mobileMenu) {
        burger.addEventListener("click", () => {
          mobileMenu.classList.toggle("active");
          burger.classList.toggle("active");
        });
      }
    } catch (err) {
      console.error("Erreur en chargeant la nav :", err);
    }
  }

  // ------------------------
  // 2️⃣ BOUTON SCROLL
  // ------------------------
  const scrollBtn = document.getElementById("scrollToWorkshop");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      const workshopElement = document.getElementById("workshop");
      if (workshopElement) {
        window.scrollTo({ top: workshopElement.offsetTop - 80, behavior: "smooth" });
      }
    });
  }

  // ------------------------
  // 3️⃣ FEATURE CARDS
  // ------------------------
  const featureContainer = document.querySelector(".feature-cards");
  if (featureContainer) {
    try {
      const features = await fetch("../data/featureCards.json").then(r => r.json());
      features.forEach(feature => {
        const card = document.createElement("div");
        card.className = "feature-card";
        card.innerHTML = `
          <div class="feature-icon">${feature.icon}</div>
          <h3 class="feature-title">${feature.title}</h3>
          <p class="feature-description">${feature.description}</p>
        `;
        featureContainer.appendChild(card);
      });
    } catch (err) {
      console.error("Erreur JSON featureCards :", err);
    }
  }

  // ------------------------
  // 4️⃣ TIMELINE / PROGRESS
  // ------------------------
  const timelineContainer = document.getElementById("timeline");
  if (timelineContainer) {
    try {
      const data = await fetch("../data/progressdata.json").then(r => r.json());
      const timelineItems = data.timelineItems;

      // Stats
      const statAverage = document.getElementById("stat-average");
      const statCompleted = document.getElementById("stat-completed");
      const statInProgress = document.getElementById("stat-in-progress");
      const statTotal = document.getElementById("stat-total");

      const total = timelineItems.length;
      const completed = timelineItems.filter(i => i.pourcentage === 100).length;
      const inProgress = timelineItems.filter(i => i.pourcentage > 0 && i.pourcentage < 100).length;
      const avg = Math.round(timelineItems.reduce((sum, i) => sum + i.pourcentage, 0) / total);

      if (statAverage) statAverage.textContent = avg + "%";
      if (statCompleted) statCompleted.textContent = completed;
      if (statInProgress) statInProgress.textContent = inProgress;
      if (statTotal) statTotal.textContent = total;

      // Timeline Cards
      timelineItems.forEach(item => {
        const statusClass = item.pourcentage === 100 ? "completed"
                          : item.pourcentage > 0 ? "in-progress" : "upcoming";
        const icon = item.pourcentage === 100 ? "✔" : item.pourcentage > 0 ? "⏳" : "○";

        const card = document.createElement("div");
        card.className = `timeline-item ${statusClass}`;
        card.innerHTML = `
          <div class="timeline-icon">${icon}</div>
          <div class="timeline-content">
            <div class="timeline-left">
              <h3>${item.titre}</h3>
              <span class="timeline-date">${item.date}</span>
              <p class="timeline-description">${item.description}</p>
              <div class="progress-bar">
                <div class="progress-fill ${statusClass}" style="width:${item.pourcentage}%;"></div>
              </div>
            </div>
            <div class="timeline-right">
              <div class="timeline-percentage">${item.pourcentage}%</div>
              <span class="timeline-status ${statusClass}">
                ${statusClass === "completed" ? "Complété" : statusClass === "in-progress" ? "En cours" : "À venir"}
              </span>
            </div>
          </div>
        `;
        timelineContainer.appendChild(card);
      });

    } catch (err) {
      console.error("Erreur JSON timeline :", err);
    }
  }
}

// ⚡ INIT
document.addEventListener("DOMContentLoaded", initPage);
