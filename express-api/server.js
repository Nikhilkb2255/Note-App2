const express = require('express'); // Importing express framework
const app = express(); // Initializing express application
const PORT = 5000; // Setting port 5000 for the server to listen

// Middleware that tells the express to parse incoming request with json bodies
app.use(express.json());

const users = [
    {id:1, name:'nikhil'},
    {id:2, name:'jku'},
    {id:3, name:'deu'}
]

app.get('/api/users', (req, res) => {
    res.json(users);
})

app.post('/api/users', (req, res) => {
    const {name} = req.body; // Extracting name from request body
    const newUser = {
        id:users.length + 1,
        name
    }
    users.push(newUser);
    res.status(201).json(`${newUser.name} inserted`);
})

app.put('/api/users/:id', (req, res) => {
    const {name} = req.body;
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    
    user.name = name;
    res.status(201).json(`User has been updated`);
})

app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);
    const deluser = users.splice(index, 1)[0];

    res.status(201).json(`${deluser.name} deleted`);
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/api/users`)
});
