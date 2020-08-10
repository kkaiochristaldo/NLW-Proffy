import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();
const port = 5000;

    app.use(cors());    
    app.use(express.json());
    app.use(routes);
    
    

    app.listen(port, ()=>{
        console.log("server listing in port", port);
    });


