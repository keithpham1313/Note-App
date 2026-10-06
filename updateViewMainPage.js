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

    // EDIT MODE (Må legges før alt annet for å hente gruppene)

    let groups = ``;

    for (let i = 0; i < model.groups.length; i++) {
        groups += /*HTML*/ `
            <option value="${model.groups[i].category}">
                ${model.groups[i].category}
            </option>
        `;
    }

    for (let i = 0; i < model.data.length; i++) {

        if(model.viewState.editNotes.editMode &&
            model.viewState.editNotes.noteId === model.data[i].id){
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
                    
                    <td><select>${groups}</select></td>

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
                    <td><button onclick="cancelEdit()">Avbryt</button></td>
                </tr>
            `;
        }
    else{
        html += /*HTML*/ `

                <tr>
                    <td>${model.data[i].date}</td>
                    <td>${model.data[i].text}</td>
                    <td>${model.data[i].category}</td>
                    <td>${model.data[i].lastUpdated}</td>
                    <td>${model.data[i].deadLine}</td>
                    <td>${model.data[i].finished}</td>
                    <td><button onclick="editNote(${model.data[i].id})">Rediger</button></td>
                    <td><button onclick="deleteNote(${model.data[i].id})">Slett</button></td>
                </tr>

        `;
        }
    };

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
    `;
        if(model.viewState.editNotes.addMode){
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
                    
                    <td><select>${groups}</select></td>

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
                    <td><button onclick="cancelEdit()">Avbryt</button></td>
                </tr>
                `;
        }    
        html += /*HTML*/`
            </table>

        `;
    document.getElementById('app').innerHTML = html;
}

updateView();
