import express from 'express';
import {v4 as uuidv4} from 'uuid'



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

router.post('/',(req,res) => {
    console.log(`Post Route reached`);

    console.log(req.body);

    const user=req.body;

    // const userId=uuidv4()

    // const userWithId={...user , id:userId}


    users.push({...user,id:uuidv4()})

    res.send(`user with name ${user.firstName} added to the database`)
})

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





export default router;


// for unique id we will use npm package uuid which will always create a new id so that noneof our user willl hava same id

//34:30