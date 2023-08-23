const ControllerBMI = require("./src/BmiController/ControllerBMI");


module.exports = (app) => {
    app.get("/BMIcal/:weight/:height",ControllerBMI.BMIcalget);
    app.post("/BMIcalpost",ControllerBMI.BMIcalpost)
}