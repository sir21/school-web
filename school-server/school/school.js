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

exports.list = function(req, res){
    res.render('schools', {title: 'Schools', schools})
}

exports.add = function(req, res){
    const school = req.school;
    schools = {
        ...schools,
        school
    };
    res.render('School added');
}