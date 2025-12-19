const API = "/api/perfumes";

async function addPerfume() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;
  const rating = document.getElementById("rating").value;
  const description = document.getElementById("description").value;

  if (!name || !price || !image || !rating || !description) {
    alert("الرجاء تعبئة جميع الحقول");
    return;
  }

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      price,
      image,
      rating,
      description
    })
  });

  window.location.href = "list.html";
}

