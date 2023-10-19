const dataContainer = document.getElementById("data-container");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");

      const category = document.createElement("p");
      category.textContent = `Category: ${item.category}`;

      const score = document.createElement("p");
      score.textContent = `Score: ${item.score}`;

      const icon = document.createElement("img");
      icon.src = item.icon;
      icon.alt = `${item.category} Icon`;

      itemDiv.appendChild(category);
      itemDiv.appendChild(score);
      itemDiv.appendChild(icon);

      dataContainer.appendChild(itemDiv);
    });
  });
