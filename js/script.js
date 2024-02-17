/***********************************************************************************/
/*                        Js of Page-BootStrap.html                                */
/*                        Author: Rafael Moncayo                                   */
/*                        version: 1.0                                             */
/*                        Comments: Project for Leng.Marcas-1ºDam                  */
/***********************************************************************************/

function openPopup() {
    var popupDiv = document.createElement("div");
    popupDiv.classList.add("popup");
    popupDiv.style.backgroundColor = "white"; // Fondo blanco para el disclaimer
    popupDiv.style.color = "black"; // Texto negro para el disclaimer
    popupDiv.style.position = "fixed";
    popupDiv.style.top = "50%";
    popupDiv.style.left = "50%";
    popupDiv.style.transform = "translate(-50%, -50%)";
    popupDiv.style.padding = "20px";
    popupDiv.style.border = "1px solid #ccc";
    popupDiv.style.borderRadius = "5px";
    popupDiv.style.zIndex = "9999";

    popupDiv.innerHTML = "<p><b>Nota:</b> Las imágenes y otros contenidos relacionados con mi página WEB han sido sacados de Koenigsegg y BootStrap.com siendo utilizadas solo con fines educativos y demostrativos. Todos los derechos de propiedad intelectual pertenecen a sus respectivos propietarios.</p>";

    var closePopupButton = document.createElement("button");
    closePopupButton.innerHTML = "Cerrar Ventana";
    closePopupButton.classList.add("btn", "btn-dark"); 
    closePopupButton.style.marginTop = "10px"; 

    closePopupButton.addEventListener("click", function () {
        document.body.removeChild(popupDiv);
    });

    popupDiv.appendChild(closePopupButton);

    document.body.appendChild(popupDiv);
}

var openPopupButton = document.getElementById("openPopupButton");
openPopupButton.addEventListener("click", openPopup);



const detailsButtons = document.querySelectorAll('.details-btn');

    // Agrega un event listener a cada botón
    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Encuentra el elemento padre de la tarjeta
            const card = button.closest('.card');
            // Encuentra el elemento adicional dentro de la tarjeta
            const additionalInfo = card.querySelector('.additional-info');
            // Selecciona todas las tarjetas
            const allCards = document.querySelectorAll('.card');

            // Oculta todas las tarjetas adicionales
            allCards.forEach(card => {
                const info = card.querySelector('.additional-info');
                if (info !== additionalInfo) {
                    info.classList.add('d-none');
                }
            });

            // Cambia la clase para mostrar u ocultar el contenido adicional
            additionalInfo.classList.toggle('d-none');
        });
    });