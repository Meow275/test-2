const car = {
  make: "Citroen",
  model: "Berlingo",
  price: 40000
};
const template = document.querySelector("#carTemplate").content;
const clone = template.cloneNode(true);
clone.querySelector("h1").textContent = `${car.make} - ${car.model}`;
clone.querySelector(".price span").textContent = car.price;
document.querySelector("#cars").appendChild(clone);
