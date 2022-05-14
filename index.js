import { tableRowTemplate } from "./templates/tableTemplate.js";

const data = [
    {
        name: "Ivan",
        surname: "Ivanov"
    },
    {
        name: "Alex",
        surname: "Alex"
    }
];

window.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML("beforeend", tableRowTemplate);
    insertDataToTable(data);
})

function insertDataToTable(data) {
    if("content" in document.createElement('template')) {

        const table = document.getElementById("employeetable");
        const rowTemplate = document.getElementById("productrow");

        const rowsFragment = new DocumentFragment()

        data.forEach((item => {
            if(rowTemplate) {

                const templateUnit = rowTemplate.content.cloneNode(true);
                const nameRow = templateUnit.querySelector("#name");
                const surnameRow = templateUnit.querySelector("#surname");
    
                const nameRowContent = document.createTextNode(item.name);
                nameRow.appendChild(nameRowContent);

                const surnameRowContent = document.createTextNode(item.name);
                surnameRow.appendChild(surnameRowContent);
                
                rowsFragment.appendChild(templateUnit);

            }
        }))

        table.appendChild(rowsFragment)

    } else {
        alert("Woops your browser does not support templates")
    }
}

