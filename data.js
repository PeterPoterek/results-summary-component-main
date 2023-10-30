const dataContainer = document.querySelector("#data-container");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");

      const category = document.createElement("p");
      category.textContent = item.category;

      const score = document.createElement("p");
      score.textContent = `${item.score}/100`;

      const icon = document.createElement("img");
      icon.src = item.icon;
      icon.alt = `${item.category} Icon`;

      itemDiv.appendChild(icon);
      itemDiv.appendChild(category);
      itemDiv.appendChild(score);

      dataContainer.appendChild(itemDiv);
    });
  });
