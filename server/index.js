import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { User } from "./models/UserModel.js";


const app = express();

app.use(express.json());

app.get('/', (req, res) => { // Correct the order here
    console.log(req);
    return res.status(234).send('idi nahui'); // Now this should work as expected
});

app.post('/createUser',async (request,response) => {
    try {
        if (!request.body.Username ||
             !request.body.password
             ){
            return response.status(400).send({
                message: 'Send all required fields'
            });

        }

        const newUser = {
            Username: request.body.Username,
            password: request.body.password,
        };

        

        const user = await User.create(newUser);
        return response.status(201).send(User)
    

    } catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('App connected to database')
    app.listen(PORT, () => {
        console.log('Server running on port:',PORT);
    
    });
})
.catch((error) => {
    console.log(error);

})