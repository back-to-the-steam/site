// loadFaq.js
import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// ----------------------
// --- CHARGEMENT FAQ ---
// ----------------------
async function loadFAQ() {
  const faqList = document.querySelector(".faq-list");
  const categoryContainer = document.querySelector(".faq-categories");
  const searchInput = document.getElementById("searchInput");

  if (!faqList || !categoryContainer || !searchInput) return;

  faqList.innerHTML = "Chargement...";
  categoryContainer.innerHTML = ""; // reset boutons

  const faqCollection = collection(db, "faq");
  const snapshot = await getDocs(faqCollection);

  const faqData = [];
  const categoriesSet = new Set();

  snapshot.forEach(doc => {
    const data = doc.data();

    // Unifie les champs (évite bugs)
    if (data.category) data.catégorie = data.category;
    if (data.answer) data.réponse = data.answer;

    faqData.push(data);

    if (data.catégorie) categoriesSet.add(data.catégorie);
  });

  faqList.innerHTML = "";

  // -----------------------
  // --- BOUTONS CATÉGOS ---
  // -----------------------
  const categories = ["Toutes", ...Array.from(categoriesSet)];

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.classList.add("faq-cat-btn");
    if (cat === "Toutes") btn.classList.add("active");

    btn.addEventListener("click", () => {
      document.querySelectorAll(".faq-cat-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderFAQ(faqData, searchInput.value, btn.textContent);
    });

    categoryContainer.appendChild(btn);
  });

  // -------------------------
  // --- AFFICHAGE DES FAQ ---
  // -------------------------
  function renderFAQ(dataArray, searchTerm = "", categoryFilter = "Toutes") {
    faqList.innerHTML = "";

    const term = searchTerm.toLowerCase().trim();

    dataArray.forEach(item => {
      const matchesCategory =
        categoryFilter === "Toutes" || item.catégorie === categoryFilter;

      const matchesSearch =
        item.question?.toLowerCase().includes(term) ||
        item.réponse?.toLowerCase().includes(term);

      if (!matchesCategory || !matchesSearch) return;

      const card = document.createElement("div");
      card.classList.add("faq-card");

      card.innerHTML = `
        <button class="faq-question">
          <span class="faq-cat-label">${item.catégorie || "?"}</span>
          <span class="faq-title">${item.question}</span>
        </button>
        <div class="faq-answer">${item.réponse || "En attente de réponse..."}</div>
      `;

      const questionBtn = card.querySelector(".faq-question");
      const answer = card.querySelector(".faq-answer");

      questionBtn.addEventListener("click", () => {
        const isOpen = answer.style.display === "block";

        document.querySelectorAll(".faq-card .faq-answer").forEach(a => a.style.display = "none");
        document.querySelectorAll(".faq-card").forEach(c => c.classList.remove("active"));

        if (!isOpen) {
          answer.style.display = "block";
          card.classList.add("active");
        }
      });

      faqList.appendChild(card);
    });

    if (faqList.children.length === 0) {
      faqList.innerHTML = `<p class="faq-empty">Aucune question trouvée</p>`;
    }
  }

  // Recherche live
  searchInput.addEventListener("input", () => {
    const activeCat = document.querySelector(".faq-cat-btn.active")?.textContent || "Toutes";
    renderFAQ(faqData, searchInput.value, activeCat);
  });

  // Affichage initial
  renderFAQ(faqData);
}

loadFAQ();


// ----------------------
// --- ENVOI QUESTION ---
// ----------------------
const sendBtn = document.getElementById("send-question");

sendBtn.addEventListener("click", async () => {
  const question = document.getElementById("ask-question").value.trim();
  const category = document.getElementById("ask-category").value;
  const statusMsg = document.getElementById("ask-status");

  if (question === "" || !category) {
    statusMsg.style.color = "red";
    statusMsg.textContent = "Remplis la question et choisis une catégorie.";
    return;
  }

  try {
    await addDoc(collection(db, "faq"), {
      question: question,
      catégorie: category,
      réponse: "En attente de réponse...",
      createdAt: serverTimestamp()
    });

    statusMsg.style.color = "lime";
    statusMsg.textContent = "Ta question a bien été envoyée !";

    // Reset inputs
    document.getElementById("ask-question").value = "";
    document.getElementById("ask-category").value = "";

    // 🔥 Refresh auto de la FAQ
    loadFAQ();

  } catch (err) {
    console.error(err);
    statusMsg.style.color = "red";
    statusMsg.textContent = "Erreur, réessaie.";
  }
});
