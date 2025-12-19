const API = "/api/perfumes";

async function loadPerfumes() {
  const container = document.getElementById("perfumes");

  const res = await fetch(API);
  const perfumes = await res.json();

  if (perfumes.length === 0) {
    container.innerHTML = "<p style='text-align:center'>لا توجد عطور مضافة</p>";
    return;
  }

  container.innerHTML = perfumes.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div class="price">${p.price} ريال</div>
      <div class="rating">⭐ ${p.rating}</div>
      <a href="details.html?id=${p._id}">عرض التفاصيل</a>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", loadPerfumes);


