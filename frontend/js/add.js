document.getElementById("perfumeForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const perfume = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    image: document.getElementById("image").value,
    rating: document.getElementById("rating").value,
    description: document.getElementById("description").value
  };

  await fetch("http://localhost:3000/api/perfumes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(perfume)
  });

  window.location.href = "list.html";
});
