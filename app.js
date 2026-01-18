const container = document.getElementById("questionsContainer");
const searchInput = document.getElementById("searchInput");
const topicFilter = document.getElementById("topicFilter");

function renderQuestions() {
  container.innerHTML = "";

  const searchText = searchInput.value.toLowerCase();
  const selectedTopic = topicFilter.value;

  questions
    .filter(q =>
      q.question.toLowerCase().includes(searchText) &&
      (selectedTopic === "All" || q.topic === selectedTopic)
    )
    .forEach(q => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <span class="tag">${q.topic}</span>
        <h3>${q.question}</h3>
        <p class="answer">${q.answer}</p>
      `;

      card.querySelector("h3").onclick = () => {
        const ans = card.querySelector(".answer");
        ans.style.display = ans.style.display === "none" ? "block" : "none";
      };

      container.appendChild(card);
    });
}

searchInput.addEventListener("input", renderQuestions);
topicFilter.addEventListener("change", renderQuestions);

renderQuestions();
