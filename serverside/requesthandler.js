import userSchema from './models/user.model.js';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join} from 'path';


export async function addUser(req, res) {
    try {
        const image = req.file;
        console.log(req.file);
        const { email, username, phone } = req.body;
        console.log(email, username, phone);

        await userSchema.create({ email, username, phone, image });
        res.status(201).send({ msg: "success" });
                // Create the user and send a response only after it's done

        
    } catch (error) {
        console.error(error); // Optional: Log the error for debugging
        res.status(403).send({ msg: "user not added", error: error.message });
    }
}
export async function getUsers(req,res){
    try {
        const users=await userSchema.find();
        res.status(200).send(users)
    } catch (error) {
        res.status(404).send({msg:error})

    }
}

export async function deleteUser(req,res) {
    const{_id}=req.params;
    console.log("----------------");
    
    const user=await userSchema.findOne({_id});
    if(!user)
        return res.status(500).send({msg:"user not available"});
    const __filename=fileURLToPath(import.meta.url);
    console.log(__filename);
    const __dirname=dirname(__filename)
    console.log(__dirname);
    const fulpath=join(__dirname,"/uploads/",user.image.filename);
    console.log(fulpath);
    await fs.unlink(fulpath)
    await userSchema.deleteOne({_id}).then(()=>{
        res.status(200).send({msg:"deleted"})
    }).catch((error)=>{
        res.status(500).send({error:error})
    })
    
    
    

    }

    
