const cors =require('cors')
const express=require('express')
const app=express()

app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PATCH','DELETE'],
    allowedHeaders:['Content-Type'],    
}))
app.use('/api/v1/users',routes)


const start = async () => {
    try {
        await connectDb(MONGO_URI)
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } 
    catch (error) {
        console.log(error);
    }
}

start();