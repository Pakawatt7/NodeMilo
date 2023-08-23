const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8081

require("./routes")(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.get('/status', function (req, res){
 res.send('BMI Milo')
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))