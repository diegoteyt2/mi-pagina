import { db } from "./firebase-config.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const catalogo = document.getElementById("catalogo-dinamico");

async function cargarPerfumes() {

  catalogo.innerHTML = "<p>Cargando perfumes...</p>";

  try {

    const querySnapshot = await getDocs(collection(db, "perfumes"));

    catalogo.innerHTML = "";

    querySnapshot.forEach((doc) => {

      const perfume = doc.data();

      catalogo.innerHTML += `
        <div class="card">

          <img src="${perfume.imagen}" alt="${perfume.nombre}">

          <div class="card-content">

            <h3>${perfume.nombre}</h3>

            <p>${perfume.descripcion}</p>

            <div class="price">
              $${Number(perfume.precio).toLocaleString("es-AR")}
            </div>

            <p>
              Stock: ${perfume.stock}
            </p>

            <a
              class="whatsapp-btn"
              href="https://wa.me/549XXXXXXXXXX?text=Hola,%20me%20interesa%20${encodeURIComponent(perfume.nombre)}"
              target="_blank">

              Consultar

            </a>

          </div>

        </div>
      `;
    });

  } catch (error) {

    catalogo.innerHTML =
      "<p>Error cargando productos.</p>";

    console.error(error);
  }
}

cargarPerfumes();