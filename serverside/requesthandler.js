import userSchema from './models/user.model.js';

export async function adduser(req,res) {
    try {
        const image=req.file;
        console.log(req.file);
        const {email,username,phone}=req.body;
        console.log(email,username,phone);
        res.status(201).send({msg:"success"})
        userSchema
        .create({email,username,phone,image})
        .then(()=>{
            return res.status(201).send({msg:"success"})
        })
        .catch((error)=>{
            return res.status(404).send({msg:"user not added"})

        })
        
        
    } catch (error) {
        res.status(404).send(error)
        
    }
    
}