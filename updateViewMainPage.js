function updateViewMainPage() {

    let html = /*HTML*/`
    <h2>Min Notat-App</h2>
    <br>
    <p>
        <input 
            type="text"
            placeholder="Søk etter notat..."
            value="${model.viewState.mainPage.searchText}"
            onchange="searchInput(this.value)">

        <button onclick="searchButton()">🔎Search</button>
    </p>
    <table>
        <tr>
            <th onclick="sortNotes('date')">Dato</th>
            <th>Tekst</th>
            <th onclick="sortNotes('category')">Kategori</th>
            <th onclick="sortNotes('lastUpdated')">Sist Oppdatert</th>
            <th onclick="sortNotes('deadLine')">Frist</th>
            <th onclick="sortNotes('finished')">Ferdig</th>
            <th></th>
            <th></th>
        </tr>
    `;

    // EDIT MODE (Må legges før alt annet for å hente gruppene)

    let groups = ``;

    for (let i = 0; i < model.groups.length; i++) {
        groups += /*HTML*/ `
            <option value="${model.groups[i].category}">
                ${model.groups[i].category}
            </option>
        `;
    }

    //Finn ut hva brukeren har skrevet
    let searchText = model.viewState.mainPage.searchText.toLowerCase();

    //Finn bare notater som passer søket
    let filteredNotes = model.data.filter(
        note => note.text.toLowerCase().includes(searchText)
    );

    //Filtereing i første rad per kolonne
    filteredNotes.sort((a, b) => {
        if (model.viewState.mainPage.sortAscending) {
            return a.date.localeCompare(b.date);
        }
        else {
            return b.date.localeCompare(a.date);
        }
    });

    //Endret model.data.length til filteredNotes.length
    for (let i = 0; i < filteredNotes.length; i++) {

        if (model.viewState.editNotes.editMode &&
            model.viewState.editNotes.noteId === filteredNotes[i].id) {
            html += /*HTML*/`
                <tr>
                    <td><input 
                        type="date" 
                        value="${model.viewState.editNotes.date}"
                        onchange="model.viewState.editNotes.date = this.value">
                    </td>
                    
                    <td><input 
                        onchange="model.viewState.editNotes.text = this.value" 
                        value="${model.viewState.editNotes.text}"
                        placeholder="Skriv notater...">
                    </td>
                    
                    <td>
                        <select onchange="model.viewState.editNotes.selectedGroupId = this.value">
                            ${groups}
                        </select>
                    </td>

                    <td>${autoLoadDate()}</td>

                    <td><input 
                        type="date" 
                        value="${model.viewState.editNotes.deadline}"
                        onchange="model.viewState.editNotes.deadline = this.value">
                    </td>
                    
                    <td><input 
                        type="checkbox" 
                        value="${model.viewState.editNotes.finished ? 'checked' : ''}"
                        onchange="model.viewState.editNotes.finished = this.checked">
                    </td>

                    <td><button onclick="saveEdit()">Lagre</button></td>
                    <td><button onclick="resetEditState()">Avbryt</button></td>
                </tr>
            `;
        }
        else {
            html += /*HTML*/ `

                <tr>
                    <td>${new Date(filteredNotes[i].date).toLocaleDateString('no-NO')}</td>
                    <td>${filteredNotes[i].text}</td>
                    <td>${filteredNotes[i].category}</td>
                    <td>${new Date(filteredNotes[i].lastUpdated).toLocaleDateString('no-NO')}</td>
                    <td>${new Date(filteredNotes[i].deadLine).toLocaleDateString('no-NO')}</td>
                    <td>${filteredNotes[i].finished}</td>
                    <td><button onclick="editNote(${filteredNotes[i].id})">✏️Rediger</button></td>
                    <td><button onclick="deleteNote(${filteredNotes[i].id})">🗑️Slett</button></td>
                </tr>

        `;
        }
    };

    //Dette blir satt opp kun for at Input-feltene dukker opp på nederste rad
    if (model.viewState.editNotes.addMode) {
        html += /*HTML*/`
                <tr>
                    <td><input 
                        type="date" 
                        onchange="model.viewState.editNotes.date = this.value">
                    </td>
                    
                    <td><input 
                        onchange="model.viewState.editNotes.text = this.value" 
                        placeholder="Skriv notater...">
                    </td>
                    
                    <td><select onchange="model.viewState.editNotes.selectedGroupId = this.value">
                        ${groups}
                    </select></td>

                    <td>${autoLoadDate()}</td>

                    <td><input 
                        type="date" 
                        onchange="model.viewState.editNotes.deadline = this.value">
                    </td>
                    
                    <td><input 
                        type="checkbox" 
                        onchange="model.viewState.editNotes.finished = this.checked">
                    </td>

                    <td><button onclick="saveEdit()">Lagre</button></td>
                    <td><button onclick="resetEditState()">Avbryt</button></td>
                </tr>
                `;
    }
    else {
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

/* 
Vi skifter fra:
    
    <td>${model.data[i].date}</td>

Til:

    <td>${new Date(model.data[i].date).toLocaleDateString('no-NO')}</td>

Hvorfor? 
    For å at datoen formateres til det norske formatet når det vises.
    Det er i dette formatet 2026-10-07, og konvertert og viser 07.10.2026
*/

