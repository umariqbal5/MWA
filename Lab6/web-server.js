const Grade = require('./grades');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Logger = require('./Logger');
const app = express();
// express.Router() //
//allow cors api calls
app.use(cors());

//body parser to accept Post bodies
app.use(bodyParser.json()); // support json encoded bodies

const gradesList = [];
//initialize morgan middleware
app.use(Logger.morgan)


app.get('/api/grades',function getAll(request, response) {
    response.json({'data':gradesList})
});
app.get('/api/grades/:id',function (req,res) {
    const gradeIndex = gradesList.find(x => x.id == req.params.id)
    // const grade = gradesList[gradeIndex]
    res.json({'data':gradeIndex})
});

//Custom middle ware to test JSON input
app.post('/api/grades',function (req,res,next) {
    //Middleware
    console.log(typeof req.body)
    console.log(req.body)
    if(typeof req.body == "object"){
        return next();
    }else{
        console.log(e.message);
        res.status(500).json({"msg":"Not valid JSON data"})
    }
    },function (request , response) {
        const grade = new Grade(request.body.id,request.body.name,request.body.course,request.body.grade);
        gradesList.push(grade);
        response.status(200).send(request.body)
    });

//PUT request
app.put('/api/grades',function (req,res,next) {
    //Middleware
        if(typeof req.body == "object"){
            return next();
        }else{
            console.log(e.message);
            res.status(500).json({"msg":"Not valid JSON data"})
        }
    },function (req,res) {
        const idx =gradesList.findIndex(x => x.id == req.body.id);
        if(idx != -1){
            gradesList.splice(idx,1,req.body);
            res.status(200).send({"msg":"updated","data":req.body})
        }
        else{
            res.status(200).send({"msg":"Record not found"})
        }
    });

//DELETE request
app.delete('/api/grades/:id',function (req,res) {
    const idx =gradesList.findIndex(x => x.id == req.params.id);
    if(idx != -1){
        gradesList.splice(idx,1);
        res.status(200).send({"msg":"deleted","data":req.params.id})
    }
    else{
        res.status(200).send({"msg":"Record not found"})
    }

});

app.listen(80,()=> console.log('listing at http://127.0.0.1'))