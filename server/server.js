const express = require("express")
const cors = require("cors")


const app = express()

const port = 8001;

//app.use(cors())
app.use(cors(), express.json(), express.urlencoded({ extends: true }))

require("./Config/mongoose.config")
require("./routes/produit.routes")(app)

//require("./Routes/prod.Routes")(app)

// const AllBookControlles = require("./routes/book.routes")
// AllBookControlles(app)
app.listen(port, console.log(`You server is running smoothly at ${port}`))