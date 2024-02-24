var cors = require('cors')
const express=require('express');
require('dotenv').config()
const { MongoClient, ServerApiVersion ,ObjectId} = require('mongodb');
const app=express();
const port =process.env.PORT || 4000;

app.use(cors({origin:"*",credential:true,methods:['GET', 'POST','PUT','DELETE','OPTIONS','PATCH']}));
app.use(express.json())




// islamsaznila
// Opx7SiZ5w5YHH6yy


MONGODB_URI=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7oueg7i.mongodb.net/?retryWrites=true&w=majority`
console.log(MONGODB_URI)
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // const usersExample = client.db("crudDb");
    // const userCollection = usersExample.collection("userCollection");
    const ServicesExample = client.db("Services");
    const servicesCollection=ServicesExample.collection("Types")
    
    // app.get('/users',async(req,res)=>{
    //   console.log("get appeared")
    //   const cursor= userCollection.find()
    //   const result=await cursor.toArray()
    //   res.send(result)
    // })
    app.get('/services',async(req,res)=>{
      console.log("get appeared")
      const cursor= servicesCollection.find()
      const result=await cursor.toArray()
      res.send(result)
    })
    // app.get('/users/:id',async(req,res)=>{
    //   const id=req.params.id
    //   const query={_id:new ObjectId(id)}
    //   const user=await userCollection.findOne(query)
    //   res.send(user)

    // })
    // app.put('/users/:id',async(req,res)=>{
    //   const id=req.params.id
    //   const user=req.body 
    //   console.log(id,user)
    //   const filter={_id:new ObjectId(id)}
    //   const option={upsert:true}
    //   const updateduser={
    //     $set:{
    //       name:user.name,
    //       email:user.email

    //     }
    //   }
    //   const result=await userCollection.updateOne(filter,updateduser,option)
    //   res.send(result)
        
      
    // })
  //   app.post('/users',async(req,res)=>{
  //     console.log("post api hitting")
  //     console.log(req.body)
  //     const newUser=req.body 
  //     const result = await userCollection.insertOne(newUser);
  //     res.send(result)
  //     console.log(`A document was inserted with the _id: ${result.insertedId}`);
      
  // })

  // app.delete('/users/:id',async(req,res)=>{

  //   const id=req.params.id
  //   const query={_id:new ObjectId(id)}
  //   const result = await userCollection.deleteOne(query)
  //   res.send(result)
  //   console.log("please delete",id)

  // })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
})
