const API = "https://perfume-world.onrender.com/api/perfumes";
const id = new URLSearchParams(window.location.search).get("id");

fetch(`${API}/${id}`)
  .then(res => res.json())
  .then(p => {
    image.src = p.image;
    name.innerText = p.name;
    price.innerText = "السعر: " + p.price + " ريال";
    rating.innerText = "التقييم: " + p.rating;
    description.innerText = p.description;
  });



