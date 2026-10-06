function addNotes() {

    model.viewState.mainPage.editMode = true;
    updateView();
}

function editNote(){

}

function deleteNote(note){

    //Må loope baklengs?
    model.data.findLastIndex.splice(note, 1);
    
}

function autoLastDate(){
    //Date-time funksjon
}
