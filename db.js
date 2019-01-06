import mongoose from "mongoose";

mongoose.connect(
    "mongodb://localhost:27017/we-tube", 
    {
        useNewUrlParser: true, 
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB")
const handelError = (error) => console.log(`❌ Error on DB ConnectionL${error}`);

db.once("open", handleOpen);
db.on("error", handelError);