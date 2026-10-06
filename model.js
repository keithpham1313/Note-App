const model = {
    app: {
        currentPage: 'mainPage',
    },

    viewState: {
        mainPage: {
            searchText: '',
            selectedGroupId: null,
            editMode: false,
        },
        editNotes: {
            noteId: null,
            date: '',
            text: '',
            selectedGroupId: null,
            lastUpdated: '',
            deadline: '',
            finished: false,
        },
        groupPage: {
            newGroupName: '',
        },

    },

    data: [
        { id: 1, date: "2026-10-01", text: "Gjøre ferdig MVC-oppgaven", category: "Skole", lastUpdated: "2026-10-05", deadLine: "2026-10-08", finished: false },
        { id: 2, date: "2026-10-02", text: "Lese kapittel 5 i læreboka", category: "Skole", lastUpdated: "2026-10-02", deadLine: "2026-10-07", finished: false },
        { id: 3, date: "2026-10-03", text: "Forberede meg til prøve", category: "Skole", lastUpdated: "2026-10-04", deadLine: "2026-10-12", finished: false },
        { id: 4, date: "2026-09-28", text: "Levere JavaScript-oppgaven", category: "Skole", lastUpdated: "2026-10-01", deadLine: "2026-10-03", finished: true },

        { id: 5, date: "2026-10-01", text: "Svare på viktige e-poster", category: "Jobb", lastUpdated: "2026-10-05", deadLine: "2026-10-06", finished: false },
        { id: 6, date: "2026-10-02", text: "Forberede meg til møtet", category: "Jobb", lastUpdated: "2026-10-04", deadLine: "2026-10-09", finished: false },
        { id: 7, date: "2026-09-25", text: "Oppdatere CV-en", category: "Jobb", lastUpdated: "2026-09-30", deadLine: "2026-10-01", finished: true },

        { id: 8, date: "2026-10-04", text: "Kjøpe mat til middag", category: "Privat", lastUpdated: "2026-10-04", deadLine: "2026-10-06", finished: false },
        { id: 9, date: "2026-10-03", text: "Rydde rommet", category: "Privat", lastUpdated: "2026-10-05", deadLine: "2026-10-10", finished: false },
        { id: 10, date: "2026-09-29", text: "Bestille time hos frisøren", category: "Privat", lastUpdated: "2026-10-01", deadLine: "2026-10-15", finished: false },
        { id: 11, date: "2026-09-27", text: "Huske å betale regningen", category: "Privat", lastUpdated: "2026-10-01", deadLine: "2026-10-03", finished: true },

        { id: 12, date: "2026-10-01", text: "Spille ferdig det nye spillet", category: "Hobby", lastUpdated: "2026-10-02", deadLine: "2026-10-20", finished: false },
        { id: 13, date: "2026-10-02", text: "Trene på gitar", category: "Hobby", lastUpdated: "2026-10-05", deadLine: "2026-10-11", finished: false },
        { id: 14, date: "2026-09-30", text: "Se den nye filmen", category: "Hobby", lastUpdated: "2026-10-01", deadLine: "2026-10-05", finished: true },
        { id: 15, date: "2026-10-04", text: "Teste ut en ny oppskrift", category: "Hobby", lastUpdated: "2026-10-04", deadLine: "2026-10-09", finished: false },

        { id: 16, date: "2026-10-01", text: "Idé til en ny nettside", category: "Idéer", lastUpdated: "2026-10-03", deadLine: "", finished: false },
        { id: 17, date: "2026-09-28", text: "Lage en app for treningsplan", category: "Idéer", lastUpdated: "2026-10-02", deadLine: "", finished: false },
        { id: 18, date: "2026-10-05", text: "Idé til et lite JavaScript-spill", category: "Idéer", lastUpdated: "2026-10-05", deadLine: "", finished: false },
    ],

    groups: [
        { id: 1, category: "Skole" },
        { id: 2, category: "Jobb" },
        { id: 3, category: "Privat" },
        { id: 4, category: "Idéer" },
        { id: 5, category: "Hobby" },
    ],
}
