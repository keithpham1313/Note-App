function updateView(){
    if(model.app.currentPage === 'mainPage'){
        updateViewMainPage();
    }
    else if(model.app.currentPage === 'groupPage'){
        updateViewGroupPage();
    }
    else if(model.app.currentPage === 'editNotesPage'){
        updateViewEditNotesPage();
    }
}

updateView();