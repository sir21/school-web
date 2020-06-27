const express = require('express')
const app = express()
const port = 3000

// School class
let schools = [
    {
        id: 0,
        name: 'School 1',
        address: {
            street: 'street 1',
            suburb: 'suburb 1',
            postCode: 24001,
            state: 'central'
        },
        numberOfStudents: 200
    },
    {
        id: 1,
        name: 'School 2',
        address: {
            street: 'street 145',
            suburb: 'suburb 2',
            postCode: 10054,
            state: 'western'
        },
        numberOfStudents: 1500
    },
    {
        id: 2,
        name: 'School 32',
        address: {
            street: 'street 31',
            suburb: 'suburb 32',
            postCode: 65200,
            state: 'south'
        },
        numberOfStudents: 788
    }
]

app.get('/', (req, res) => res.send('Hello World!'))

// School
app.get('/school/', (req, res) => res.json({title: 'Schools', schools}))
app.post('/school/', (req, res) => {
    const school = req.school;
    schools = {
        ...schools,
        school
    };
    res.send('School added')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))