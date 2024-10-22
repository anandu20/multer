import userSchema from './models/user.model.js';


export async function addUser(req, res) {
    try {
        const image = req.file;
        console.log(req.file);
        const { email, username, phone } = req.body;
        console.log(email, username, phone);

        await userSchema.create({ email, username, phone, image });
        res.status(201).send({ msg: "success" });
        
    } catch (error) {
        console.error(error); 
        res.status(403).send({ msg: "user not added", error: error.message });
    }
}