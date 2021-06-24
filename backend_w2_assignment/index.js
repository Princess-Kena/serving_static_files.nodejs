const express = require('express');

const server = express;

//request handlers

const handlePostprofileRequset = (req ,res) =>{
    res.send('You have successfully updated your profile');
}
const handleGetLoginRequet = (req, res) => {
    res.send('Hey, Welcome to your home page')
}
const handlePutViewRequest =(req,  res) =>{
    res.send ('Recently viewed status update, Type a message here!')
}
const handleDeleteComment =(req, res) =>{
    res.send('Success!  your comment has been deleted')
}


server.post('/update', handlePostprofileRequset);
server.get('/login', handleGetLoginRequet)
server.put('/status', handlePutViewRequest)
server.delete('/comment', handleDeleteComment)

server.listen(3000, () => console.log('server is ready'))