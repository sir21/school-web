const express = require('express')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser')
const fs = require('fs')
const swaggerUi = require('swagger-ui-express')
const port = 3000

const swaggerDocument = require('./swagger.json')

app.use(cors())
app.use(bodyParser.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// School API

/*
    Get schools API
    this will get all the schools from school.json file
*/
app.get('/api/school', (req, res) => {
    // Get schools from persistent data file
    const data = fs.readFileSync('./data/school.json');
    const schools = JSON.parse(data);
    res.json({title: 'Schools', schools});
})

/*
    Add new school
*/
app.post('/api/school', (req, res) => {
    // Get school from request body
    let school = req.body;

    //Get schools from persistent data file
    const data = fs.readFileSync('./data/school.json');
    let schools = JSON.parse(data);

    //Add id if id is not present
    if (school.id == null) {
        school.id = schools.length;
    }
    // Save school in persistent data file
    schools.push(school);
    fs.writeFileSync('./data/school.json', JSON.stringify(schools));
    res.send({school});
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))