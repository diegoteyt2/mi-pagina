import { db } from "./firebase-config.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

console.log("APP CARGADA");

const catalogo = document.getElementById("catalogo-dinamico");

async function cargarPerfumes() {

    console.log("Iniciando carga de perfumes...");

    try {

        const querySnapshot = await getDocs(
            collection(db, "perfumes")
        );

        console.log(
            "Cantidad de documentos:",
            querySnapshot.size
        );

        catalogo.innerHTML = "";

        querySnapshot.forEach((doc) => {

            const perfume = doc.data();

            console.log("Producto:", perfume);

            catalogo.innerHTML += `
                <div class="card">

                    <img
                        src="${perfume.imagen}"
                        alt="${perfume.nombre}"
                        style="width:100%; border-radius:10px;"
                    >

                    <div class="card-content">

                        <h3>${perfume.nombre}</h3>

                        <p>${perfume.descripcion}</p>

                        <div class="price">
                            $${Number(
                                perfume.precio
                            ).toLocaleString("es-AR")}
                        </div>

                        <p>
                            Stock: ${perfume.stock}
                        </p>

                        <a
                            href="https://wa.me/549XXXXXXXXXX?text=Hola,%20me%20interesa%20${encodeURIComponent(perfume.nombre)}"
                            target="_blank"
                            class="btn"
                        >
                            Consultar
                        </a>

                    </div>

                </div>
            `;
        });

        if (querySnapshot.size === 0) {

            catalogo.innerHTML = `
                <p>
                    No hay perfumes cargados en Firestore.
                </p>
            `;
        }

    } catch (error) {

        console.error(
            "ERROR FIRESTORE:",
            error
        );

        catalogo.innerHTML = `
            <p>
                Error cargando productos.
            </p>
        `;
    }
}

cargarPerfumes();
