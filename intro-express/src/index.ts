import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())


//ex2//
// - id
// - name
// - phone
// - email
// - website
app.get("/ex2", (request, response) => {          
    response.send("Ex2 funcionando")
    const user = request.header
    console.log()
})




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

