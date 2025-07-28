const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json())

const users = [
    {id: 1, name:'nikhil', age:25},
    {id: 2, name: 'deu', age:20}
]

app.get('/api/users', (req, res) => {
    res.status(200).json(users);
})

app.post('/api/users', (req, res) => {
    const {name} = req.body;
    const newUser = {
        id : users.length + 1,
        name
    }
    users.push(newUser);
    res.status(200).json(`${newUser.name} have been added`)

})

app.put('/api/users/:id', (req, res) => {
    const {name} = req.body;
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    user.name = name;
    res.status(200).json(`Name changed`)
})

app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);
    const deluser = users.splice(index,1)[0];
    res.status(200).json(`${deluser.name} deleted`)
})



app.listen(PORT, () => {
    console.log(`Server runnig on port : ${PORT}`)
});
