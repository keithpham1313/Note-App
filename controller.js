function addNotes() {

    model.viewState.editNotes.addMode = true;
    updateView();
}

function saveEdit(){

}

function cancelEdit(){
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
    //Date-time funksjon
}
