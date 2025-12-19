const API = "https://perfume-world.onrender.com/api/perfumes";

document.getElementById("addForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const perfume = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    image: document.getElementById("image").value,
    rating: document.getElementById("rating").value,
    description: document.getElementById("description").value
  };

  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(perfume)
  })
    .then(res => res.json())
    .then(() => {
      alert("تمت إضافة العطر بنجاح 🌸");
      window.location.href = "list.html";
    })
    .catch(err => console.log(err));
});




