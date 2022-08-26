import  express, {Express, Request, Response} from "express";
import cors from "cors"
import { accounts } from "./accounts";

const app:Express = express ()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req:Request, res:Response)=>{
    try {
        
        const {name, CPF, dateOfBirthAsString } = req.body

        const [day, month, year] = dateOfBirthAsString.split('/')

        const dateOfBirth: Date = new Date (`${year}-${month}-${day}`)

        accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        })

        res.status(201).send("conta criada com sucesso")
    } catch (error) {
    res.status(400).send(error.message)        
    }
})

app.get("/users/all", (req:Request, res:Response)=>{
    try {
        res.status(200).send(accounts)
    } catch (error) {
        res.status(400).send(error.message);
     }
})


app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")
})