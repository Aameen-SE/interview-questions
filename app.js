// ============================
// Merge all topic arrays into one
// ============================
const questions = [
  ...oopQuestions
];

// ============================
// Get DOM elements
// ============================
const container = document.getElementById("questionsContainer");
const searchInput = document.getElementById("searchInput");
const topicFilter = document.getElementById("topicFilter");

// ============================
// Render questions based on search & topic
// ============================
function renderQuestions() {
  container.innerHTML = ""; // Clear previous

  const searchText = searchInput.value.toLowerCase();
  const selectedTopic = topicFilter.value;

  // Filter questions by search text and topic
  questions
    .filter(q =>
      q.question.toLowerCase().includes(searchText) &&
      (selectedTopic === "All" || q.topic === selectedTopic)
    )
    .forEach(q => {
      // Create card element
      const card = document.createElement("div");
      card.className = "card";

      // Set inner HTML
      card.innerHTML = `
        <span class="tag">${q.topic}</span>
        <h3>${q.question}</h3>
        <p class="answer" style="display:none;">${q.answer}</p>
      `;

      // Toggle answer on question click
      card.querySelector("h3").onclick = () => {
        const ans = card.querySelector(".answer");
        ans.style.display = ans.style.display === "none" ? "block" : "none";
      };

      // Add card to container
      container.appendChild(card);
    });
}

// ============================
// Event listeners for search & topic filter
// ============================
searchInput.addEventListener("input", renderQuestions);
topicFilter.addEventListener("change", renderQuestions);

// ============================
// Initial render
// ============================
renderQuestions();
