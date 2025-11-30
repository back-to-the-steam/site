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

// ------------------------
//  FEATURE CARDS (JSON)
// ------------------------
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".feature-cards");
  if (!container) return;

  fetch("../data/featureCards.json")
    .then(response => response.json())
    .then(features => {
      features.forEach(feature => {
        const card = document.createElement("div");
        card.className = "feature-card";

        const icon = document.createElement("div");
        icon.className = "feature-icon";
        icon.textContent = feature.icon;
        card.appendChild(icon);

        const title = document.createElement("h3");
        title.className = "feature-title";
        title.textContent = feature.title;
        card.appendChild(title);

        const desc = document.createElement("p");
        desc.className = "feature-description";
        desc.textContent = feature.description;
        card.appendChild(desc);

        container.appendChild(card);
      });
    })
    .catch(err => console.error("Erreur JSON featureCards :", err));
});

// ------------------------
//  TIMELINE PROGRESS (JSON)
// ------------------------
document.addEventListener("DOMContentLoaded", async () => {
  const timelineContainer = document.getElementById("timeline");

  // Stats
  const statAverage = document.getElementById("stat-average");
  const statCompleted = document.getElementById("stat-completed");
  const statInProgress = document.getElementById("stat-in-progress");
  const statTotal = document.getElementById("stat-total");

  try {
    const response = await fetch("../data/progressdata.json");
    const data = await response.json();
    const timelineItems = data.timelineItems;

    // ------------------------
    // Stats
    // ------------------------
    const total = timelineItems.length;
    const completed = timelineItems.filter(i => i.pourcentage === 100).length;
    const inProgress = timelineItems.filter(i => i.pourcentage > 0 && i.pourcentage < 100).length;
    const avg = Math.round(timelineItems.reduce((sum, i) => sum + i.pourcentage, 0) / total);

    if (statAverage) statAverage.textContent = avg + "%";
    if (statCompleted) statCompleted.textContent = completed;
    if (statInProgress) statInProgress.textContent = inProgress;
    if (statTotal) statTotal.textContent = total;

    // ------------------------
    // Timeline Cards
    // ------------------------
    timelineItems.forEach(item => {
      let statusClass;
      if (item.pourcentage === 100) statusClass = "completed";
      else if (item.pourcentage > 0) statusClass = "in-progress";
      else statusClass = "upcoming";

      const icon = item.pourcentage === 100 ? "✔"
                  : item.pourcentage > 0 ? "⏳"
                  : "○";

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
              ${statusClass === "completed" ? "Complété" :
                statusClass === "in-progress" ? "En cours" : "À venir"}
            </span>
          </div>
        </div>
      `;

      timelineContainer.appendChild(card);
    });

  } catch (err) {
    console.error("Erreur JSON:", err);
  }
});
