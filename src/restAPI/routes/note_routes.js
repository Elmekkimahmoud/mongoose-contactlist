module.exports=(app)=>{
    const Note=require ('../controllers/note_controller');
    
    app.post("/add_note",Note.create);

    app.get("/find_note/:id", Note.FindID);

    app.get("/find_notes/", Note.FindAll);

    app.put('/update_note/:id', Note.Update)

    app.delete('/delete_note/:id', Note.delete)

  
}

