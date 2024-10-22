const express=require('express');
const app=express();
const multer=require('multer')
const mongoose=require('mongoose')
const storage =multer.diskStorage({
    destination:"./uploads",
    filename:function(req,file,cb){
        const uniqueSuffix=Date.now()+ '_'+Math.round(Math.random()*1E9)
        cb(null,uniqueSuffix+"_"+file.originalname)
    }
})
const upload =multer({storage})
const port=3000
app.use(express.static("../clientside"))
app.post('/api/upload',upload.single('file'),(req,res)=>{
    console.log(req.file);
    res.send('successfully uploadeed.....!')
});

app.listen(port,()=>{
    console.log(`http://localhost:3000/`);
    
});