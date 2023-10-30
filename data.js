const dataList = document.querySelector("#data-list");

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

      const itemWrapper = document.createElement("div");

      itemWrapper.append(icon, category);
      itemWrapper.classList.add("item-wrapper");

      itemDiv.appendChild(itemWrapper);
      itemDiv.appendChild(score);

      dataList.appendChild(itemDiv);
    });
  });
