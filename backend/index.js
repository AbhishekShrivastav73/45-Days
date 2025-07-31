const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const User = require('./models/user');
const Post = require('./models/product');

async function connectDB(){
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/45days')
    console.log("Connected to DB")
  } catch (error) {
    console.log(error)
  }
}

connectDB();


// async function connect(){
//   await mongoose.connect('mongodb://127.0.0.1:27017/newdata');
//   console.log('Connected to bx')
// }

// connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


// http - get,put,patch,post,delete 

// app.get(route,function)

const data = [
  {
    title: "Wireless Earbuds",
    description: "High-quality wireless earbuds with noise cancellation and 20-hour battery life.",
    price: 59.99,
    category: "Electronics"
  },
  {
    title: "Running Shoes",
    description: "Lightweight running shoes with breathable mesh and cushioned soles.",
    price: 89.99,
    category: "Footwear"
  },
  {
    title: "Stainless Steel Water Bottle",
    description: "Insulated water bottle keeps drinks cold for 24 hours, 500ml capacity.",
    price: 19.99,
    category: "Accessories"
  },
  {
    title: "Gaming Mouse",
    description: "Ergonomic gaming mouse with customizable RGB lighting and 6 programmable buttons.",
    price: 39.99,
    category: "Electronics"
  },
  {
    title: "Yoga Mat",
    description: "Non-slip yoga mat, eco-friendly material, 6mm thickness for comfort.",
    price: 24.99,
    category: "Fitness"
  },
  {
    title: "Smartwatch",
    description: "Fitness tracker with heart rate monitor, sleep tracking, and waterproof design.",
    price: 129.99,
    category: "Electronics"
  },
  {
    title: "Backpack",
    description: "Durable backpack with laptop compartment and water-resistant fabric.",
    price: 49.99,
    category: "Accessories"
  },
  {
    title: "Blender",
    description: "High-speed blender with 700W motor, perfect for smoothies and soups.",
    price: 69.99,
    category: "Kitchen Appliances"
  },
  {
    title: "Wireless Keyboard",
    description: "Sleek wireless keyboard with quiet keys and long battery life.",
    price: 34.99,
    category: "Electronics"
  },
  {
    title: "Camping Tent",
    description: "4-person tent, lightweight and waterproof, easy to set up.",
    price: 99.99,
    category: "Outdoor"
  },
  {
    title: "Coffee Maker",
    description: "Programmable coffee maker with 12-cup capacity and auto shut-off.",
    price: 59.99,
    category: "Kitchen Appliances"
  },
  {
    title: "Sunglasses",
    description: "Polarized sunglasses with UV protection and durable frame.",
    price: 29.99,
    category: "Accessories"
  },
  {
    title: "Dumbbell Set",
    description: "Adjustable dumbbell set, 5-25 lbs, perfect for home workouts.",
    price: 79.99,
    category: "Fitness"
  },
  {
    title: "Portable Charger",
    description: "10,000mAh power bank with fast charging and dual USB ports.",
    price: 24.99,
    category: "Electronics"
  },
  {
    title: "Hiking Boots",
    description: "Waterproof hiking boots with ankle support and durable tread.",
    price: 109.99,
    category: "Footwear"
  }
]

app.get('/',function(req,res){
    res.send(data)
});

app.post('/',async function(req,res){
    
    let user = await User.create({
      name : req.body.name,  
      age : req.body.age
    })
    res.json({
      message : 'User Created',
      user
    })
});

app.post('/post',async function(req,res){
  let createdPost = await Post.create({
    title : req.body.title,
    content : req.body.content,
    auth : req.body.auth,
  });

  res.json({
    message : 'Post Created',
    createdPost
  })
})

app.get('/post',async function (req,res) {
  let all = await Post.find().populate('auth','name')
  res.send(all)
})

app.get('/post/:id',async function (req,res) {
  let all = await Post.findById(req.params.id)
  res.send(all)
})

app.delete('/post/:id',async function (req,res) {
  let deletedPost = await Post.findByIdAndDelete(req.params.id)
  res.send(deletedPost)
})

app.delete('/:id',async function(req,res){
    
    const user = await User.findByIdAndDelete(req.params.id)
    res.json({
      msg : 'User deleted',
      user
    })
})


app.get('/products/:id',function(req,res){
  console.log(req.params.id)
  res.send(`product : ${req.params.id}`)
})


app.listen(3000)