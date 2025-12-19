const API_URL = "https://perfume-world.onrender.com/api/perfumes";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("perfumeList");
    container.innerHTML = "";

    data.forEach(perfume => {
      container.innerHTML += `
        <div class="card">
          <img src="${perfume.image}">
          <h3>${perfume.name}</h3>
          <p>السعر: ${perfume.price} ريال</p>
          <a href="details.html?id=${perfume._id}">عرض التفاصيل</a>
        </div>
      `;
    });
  });

