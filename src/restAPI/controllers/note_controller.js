const Note=require ('../models/note_model');
// create Note
exports.create =(req,res)=>{
    const NewNote=new Note({
        Name:req.body.Name,
        Phone:req.body.Phone,
        Email:req.body.Email,
    
    });
    NewNote.save().then((data,err)=>{ if (err) console.log(err)
    else res.send(data)})

}

exports.FindID =(req, res)=>{
    Note.findById(req.params.id)
    .then(result=>{
        if(result) res.status(200).json({
            _id : result._id ,
            Name : result.Name , 
            Email : result.Email , 
            Phone :result.Phone 
        })
    }).catch (err=>{
        console.log(err)
        res.status(500).json({
            message : "Error Occured"
        })

    })
}

exports.Update =(req, res)=>{
    const id = req.params.id
    Note.findOneAndUpdate({_id:id},{Name:req.body.Name, Phone: req.body.Phone, Email:req.body.Email})
    .then( note=> {res.send(note)}).catch(err=>{
        console.log(err)
        res.status(500).json({
            message: "erroooor !! "
        })
    })
}
exports.delete=(req, res)=>{
    const contId = req.params.id
    Note.findOneAndDelete({_id:contId}).then(note=>{res.send(note)})
    .catch(err=>{
        console.log(err)
        res.status(500).json({message: "ERROOOR!!!!"})
    })
}

exports.FindAll = (req, res)=>{
     Note.find()
    .then(result=> 
                res.status(200).json((result)))
    .catch (err=>{
        console.log(err)
        res.status(500).json({
            message : "Error Occured"
        })

    })
}