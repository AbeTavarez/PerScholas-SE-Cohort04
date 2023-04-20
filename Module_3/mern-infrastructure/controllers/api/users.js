//* Request handler Logic

function create(req, res) {
    // console.log('[From POST handler]', req.body)
    const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDciLCJuYW1lIjoiQWJyYWhhbSBUIiwiaWF0IjoxNTE2MjM5MDIyfQ.3lrBY2bnGd59sAelZX6DmJkNPKMaa3Cp1Defzl1FXCE';

    const payload = jwt.split('.')[1]

    console.log(atob(payload))

    
    res.json({
        user: {
            name: req.body.name,
            email: req.body.email
        }
    })
}








module.exports = {
    create,
}