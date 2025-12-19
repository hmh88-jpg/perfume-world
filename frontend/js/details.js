const id = new URLSearchParams(window.location.search).get("id");

fetch(`http://localhost:3000/api/perfumes/${id}`)
.then(res => res.json())
.then(p => {
  document.getElementById("details").innerHTML = `
    <h2>${p.name}</h2>
    <img src="${p.image}" width="200">
    <p>${p.description}</p>
    <p>⭐ ${p.rating}</p>
  `;
});
