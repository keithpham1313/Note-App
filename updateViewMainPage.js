function updateViewMainPage() {
    let html = /*HTML*/`
    <h2>Min Notat-App</h2>
    <br>
    <table>
        <tr>
            <th>Dato</th>
            <th>Tekst</th>
            <th>Kategori</th>
            <th>Sist Oppdatert</th>
            <th>Frist</th>
            <th>Ferdig</th>
            <th></th>
            <th></th>
        </tr>
    `;

    for (let i = 0; i < model.data.length; i++) {
        html += /*HTML*/`
            <tr>
                <td>${model.data[i].date}</td>
                <td>${model.data[i].text}</td>
                <td>${model.data[i].category}</td>
                <td>${model.data[i].lastUpdated}</td>
                <td>${model.data[i].deadline}</td>
                <td>${model.data[i].finished}</td>
                <td><button onclick="editNote(${[i]})">Rediger</button></td>
                <td><button onclick="deleteNote(${[i]})">Slett</button></td>
            </tr>
        `;
    };



    // EDIT MODE
    let groups = ``;

    for (let i = 0; i < model.groups.length; i++) {
        groups += /*HTML*/ `
            <option value="${model.groups[i].category}">
                ${model.groups[i].category}
            </option>
        `;
    }

    if(model.viewState.mainPage.editMode){
        html += /*HTML*/`
            <table>
                <tr>
                    <td><input type="date" onchange="model.data.editNotes.date = this.value"></td>
                    <td><input onchange="model.data.editNotes.text = this.value" placeholder="Skriv notater..."></td>
                    <td><select>${groups}</select></td>
                    <td>${autoLastDate()}</td>
                    <td><input type="date" onchange="model.data.editNotes.deadline = this.value"></td>
                    <td><input type="checkbox" onchange="model.data.editNotes.finished = this.checked></td>

                    <td><button onclick="saveEdit()">Lagre</button></td>
                    <td><button onclick="cancelEdit()">Avbryt</button></td>
                </tr>
            </table>
        `;
    }
    else{
        html += /*HTML*/ `
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button onclick="addNotes()">Legg til</button></td>
                </tr>
            </table>
        `;
    }

    document.getElementById('app').innerHTML = html;
}

updateView();
