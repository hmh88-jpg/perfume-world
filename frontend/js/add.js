const API = "https://perfume-world.onrender.com/api/perfumes";

document.getElementById("addForm").addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    name: name.value,
    price: price.value,
    image: image.value,
    rating: rating.value,
    description: description.value
  };

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(() => {
    alert("تمت إضافة العطر بنجاح");
    window.location.href = "list.html";
  });
});


