const express = require("express")

const app = express();
const PORT = 8800;
app.listen(PORT,()=>{
    console.log(`Server is started at PORT ${PORT}`)
})