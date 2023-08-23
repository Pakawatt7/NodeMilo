function BMI(weight,height){
   let BMIcal =  weight/(height*height)
    return BMIcal
}

module.exports={
    BMIcalget(req,res){
        res.send(JSON.stringify(BMI(req.params.weight,req.params.height)))
    },
    BMIcalpost(req,res){
        res.send(JSON.stringify(BMI(req.body[0].weight,req.body[0].height)))
    }
}