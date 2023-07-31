import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        cb(null, "upload");
    },
    filename: function (req: any, file: any, cb: any){
        const uniqueSuffix = Date.now()+ "_" + Math.round(Math.random() +10);
        cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg")
    },
});

const upload = multer({storage: storage}).single("image");
export default upload