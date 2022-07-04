import axios from "axios";

const container = document.getElementById("container");
const texto = document.getElementById("texto");
let listausuario = [];

async function obtenerUsuarios() {
  let { data } = await axios("https://jsonplaceholder.typicode.com/users");
  listausuario = data;
  data.forEach((user) => {
    container.innerHTML += `
    <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="https://i.pravatar.cc/150?u=${user.name}">
      <div class="header">
        ${user.name}
      </div>
      <div class="meta">
        ${user.email}
      </div>
      <div class="description">
      ${user.company.name} - ${user.website} - ${user.phone}
      </div>
    </div>
  </div>
    
    `;
  });
}

function filtar() {
  console.log(texto.value.toLowerCase());
  const listafiltrada = listausuario.filter((f) =>
    `${f.name}`.toLowerCase().includes(texto.value.toLowerCase())
  );
  container.innerHTML = "";

  listafiltrada.forEach((user) => {
    container.innerHTML += `
    <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="https://i.pravatar.cc/150?u=${user.name}">
      <div class="header">
        ${user.name}
      </div>
      <div class="meta">
        ${user.email}
      </div>
      <div class="description">
      ${user.company.name} - ${user.website} - ${user.phone}
      </div>
    </div>
  </div>`;
  });
}

obtenerUsuarios();
texto.addEventListener("keyup", filtar);
