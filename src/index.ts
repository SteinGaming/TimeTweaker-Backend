import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import Registration from "./routers/registration.js";

dotenv.config()

const PORT = process.env.PORT || 80

const app = express()

app.use(express.json())
app.use(cookieParser())


async function main()
{
    
    Registration(app)
    app.listen(PORT, () => {
        console.log(`TimeTweaker-Backend started on port: ${PORT} (http://127.0.0.1:${PORT}).`)
    })
    
}

main()