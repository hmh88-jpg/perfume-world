const API = "/api/perfumes";

async function loadDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    document.getElementById("details").innerHTML =
      "<p>لم يتم تحديد عطر</p>";
    return;
  }

  const res = await fetch(API + "/" + id);
  const p = await res.json();

  document.getElementById("details").innerHTML = `
    <div class="card">
      <img src="${p.image}" alt="${p.name}">
      <h2>${p.name}</h2>
      <div class="price">${p.price} ريال</div>
      <div class="rating">⭐ ${p.rating}</div>
      <p>${p.description}</p>
      <a class="back" href="list.html">⬅ الرجوع للقائمة</a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", loadDetails);

