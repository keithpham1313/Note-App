function addNotes() {

    model.viewState.editNotes.addMode = true;
    updateView();
}

function saveEdit(){
    let editNotes = model.viewState.editNotes;

    if(editNotes.addMode){
        
        model.data.push({
        
            id: model.data.length + 1,
            date: editNotes.date,
            text: editNotes.text,
            category: editNotes.selectedGroupId,
            lastUpdated: autoLoadDate(),
            deadLine: editNotes.deadline,
            finished: editNotes.finished,
        
        });
    }

    else if(editNotes.editMode){
        
        const selectedNote = findObjectById(model.data, editNotes.noteId);

        if(selectedNote === null){
            return;
        }

        selectedNote.date = editNotes.date;
        selectedNote.text = editNotes.text;
        selectedNote.category = editNotes.selectedGroupId;
        selectedNote.lastUpdated = autoLoadDate();
        selectedNote.deadLine = editNotes.deadline;
        selectedNote.finished = editNotes.finished;

    }

    resetEditState();
    updateView();
}

function resetEditState(){
    let editNotes = model.viewState.editNotes;

        editNotes.editMode = false;
        editNotes.addMode = false;

        editNotes.noteId = null;
        editNotes.date = '';
        editNotes.text = '';
        editNotes.selectedGroupId = null;
        editNotes.lastUpdated = '';
        editNotes.deadline = '';
        editNotes.finished = false;

    updateView();
    
}

//Hjelpefunksjon for å finne objekter i arrayene
function findObjectById(array, id){
    for(let object of array){
        if(object.id === id){
            return object;
        }
    }
    return null;
}

//Redigere notater
function editNote(noteId){
    model.viewState.editNotes.editMode = true;

    const selectedNote = findObjectById(model.data, noteId);

    if(selectedNote === null){
        return;
    }

    let editNotes = model.viewState.editNotes;

        editNotes.noteId = noteId;
        editNotes.date = selectedNote.date;
        editNotes.text = selectedNote.text;
        editNotes.selectedGroupId = selectedNote.category;
        editNotes.lastUpdated = selectedNote.lastUpdated;
        editNotes.deadline = selectedNote.deadLine;
        editNotes.finished = selectedNote.finished;

    updateView();
}

//Slette notater
function deleteNote(noteId){
    const selectedNote = findObjectById(model.data, noteId)

    //Sjekker om selectedNote ble funnet før den blir brukt i const index
    if(selectedNote === null){
        return;
    }

    const index = model.data.indexOf(selectedNote);

    model.data.splice(index, 1);

    updateView();
}

function autoLoadDate(){
    return new Date().toISOString().split('T')[0];
}
    /*
    let today = new Date();
        return today.toISOString().split('T')[0];
    
        // For å få formatet "2026-10-07" ellers holder det med bare today

    F.eks. 2026-10-07T08:30:15.123Z

        .toISOString() gjør det om til en tekst
        .split('T')[0] tar bare med delen før T

    Vi kan også bare ha dette hvis vi vil at formatet skal være på norsk med en gang:
        return new Date().toLocaleDateString('no-NO');

    */

