const API = "https://perfume-world.onrender.com/api/perfumes";
const list = document.getElementById("perfumeList");

fetch(API)
  .then(res => res.json())
  .then(data => {
    if (data.length === 0) {
      list.innerHTML = "<p>لا توجد عطور مضافة</p>";
      return;
    }

    data.forEach(p => {
      list.innerHTML += `
        <div class="card">
          <img src="${p.image}">
          <h3>${p.name}</h3>
          <p>السعر: ${p.price} ريال</p>
          <a href="details.html?id=${p._id}" class="btn">عرض التفاصيل</a>
        </div>
      `;
    });
  });



