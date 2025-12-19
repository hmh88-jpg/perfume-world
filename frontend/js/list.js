fetch("http://localhost:3000/api/perfumes")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("list");
    list.innerHTML = ""; // مهم

    data.forEach(p => {
      list.innerHTML += `
        <div class="card">
          <h3>${p.name}</h3>
          <p>السعر: ${p.price} ريال</p>
          <a href="details.html?id=${p._id}">عرض التفاصيل</a>
        </div>
      `;
    });
  });
