import { Router } from "express";
import * as user from "./requesthandler"
import multer from "multer";

const storage =multer.diskStorage({
    destination:"./uploads",
    filename:function(req,file,cb){
        const uniqueSuffix=Date.now()+ '_'+Math.round(Math.random()*1E9)
        cb(null,uniqueSuffix+"_"+file.originalname)
    }
})
const upload =multer({storage});
const router=Router();
router.route("/upload").post(upload.single('file'),user.adduser);
export default router;

