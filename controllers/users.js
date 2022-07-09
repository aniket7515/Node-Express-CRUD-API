export const createUser=(req,res) => {
    console.log(`Post Route reached`);

    console.log(req.body);

    const user=req.body;

    // const userId=uuidv4()

    // const userWithId={...user , id:userId}


    users.push({...user,id:uuidv4()})

    res.send(`user with name ${user.firstName} added to the database`)
}