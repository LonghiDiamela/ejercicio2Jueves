import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;


var comprasSupermercado = [
  "cafe",
  "arroz",
  "pure de tomate",
  "sal",
  "ravioles",
  "morron",
  "cebolla",
  "fideos",
  "queso rayado",
  "aceite"
]

for (var i = 0; i < comprasSupermercado.length; i++) {
  console.log("paso:" + [i+1], comprasSupermercado[i])
}