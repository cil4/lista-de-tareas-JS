
import { addTask } from "./componentes/agregarTarea.js";
import { displayTareas } from "./componentes/readTareas.js";
const btn = document.querySelector("[data-form-btn]");





btn.addEventListener("click", addTask);

displayTareas();




