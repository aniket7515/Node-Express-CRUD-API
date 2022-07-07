import express from 'express';
import {v4 as uuidv4} from 'uuid'



const router=express.Router();

const users=[
    // {
    //     "firstName":"Aniket",
    //     "lastName":"Dhokane",
    //     "age":20
    // },
    // {
    //     "firstName":"Anup",
    //     "lastName":"Pal",
    //     "age":20
    // }
]
// postman usage as in browser we can only get GET request 


router.get('/',(req,res) => {
    console.log(users);
    res.send(users)
})

router.post('/',(req,res) => {
    console.log(`Post Route reached`);

    console.log(req.body);

    const user=req.body;

    // const userId=uuidv4()

    // const userWithId={...user , id:userId}


    users.push({...user,id:uuidv4()})

    res.send(`user with name ${user.firstName} added to the database`)
})


export default router;


// for unique id we will use npm package uuid which will always create a new id so that noneof our user willl hava same id