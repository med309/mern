const express=require("express")
const mongoose =require("mongoose")
const dotenv=require("dotenv")
const app=express()
dotenv.config()
app.use(express.json())
const categorieRouter =require("./routes/categorie.route")
app.use('/api/categories', categorieRouter);
//connection 
mongoose.connect(process.env.databasecloud)
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit(); });
app.get("/",(req,res)=>{
res.send("page d'acceuil");
})
app.get("/contact",(req,res)=>{
res.send("page de contact");
})
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });
module.exports = app;

