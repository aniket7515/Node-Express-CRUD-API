import express from 'express';
import {v4 as uuidv4} from 'uuid'
import {createUser} from '../controllers/users.js'


const router=express.Router();

let users=[
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



router.post('/',createUser)


//  /users/2   here 2 is id we can get that id by --> req.params {id: 2}

router.get('/:id',(req, res) => {

    const { id } = req.params;

    const foundUser= users.find((user)=> user.id===id);

    console.log(req.params);
    res.send(foundUser)
})

// for deleting the user we will  require id  and we will remove it from users array by using filter function

router.delete('/:id',(req,res)=>{
    const { id }=req.params;

    // id to delete 123
    // josh 123
    // jane 321


    users=users.filter((user)=> user.id !==id)

    res.send(`user with the id ${id} deleted from the database`)
})


// updateing the user information we will use Patch method

router.patch('/:id',(req,res)=>{
    const { id } = req.params;
    // what  user can update
    const {firstName, lastName,age } = req.body;
    const user= users.find((user)=> user.id === id)

    if(firstName){
        user.firstName=firstName;
    }
    if(lastName){
        user.lastName=lastName;
    }
    if(age){
        user.age=age;
    }

    res.send(` user woth the id ${id} has been updated`)
})


export default router;


// for unique id we will use npm package uuid which will always create a new id so that noneof our user willl hava same id

//34:30