const mongoose = require('mongoose');
const Product = require('./product');

mongoose.connect('mongodb://localhost:27017/capstone', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Mongo server is working")
})
.catch(err => {
    console.log('Oh no, error');
    console.log(err)
}) 

const seedProducts = [
    {
        name: 'Notorious PTG, Rosewood Estates',
        price: 33,
        category: 'red',
        grape: 'Pinot Noir, Gamay Noir, Blaüfrankisch',
        country: "Canada",
        region: 'Niagara',
        qty: 22,
        instock: true,
        year: 2020,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit. Arcu dictum varius duis at consectetur lorem. Nunc id cursus metus aliquam eleifend mi. In nisl nisi scelerisque eu. Vitae auctor eu augue ut. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Diam vulputate ut pharetra sit amet aliquam id. Purus sit amet volutpat consequat mauris nunc congue. Faucibus ornare suspendisse sed nisi.',
        image: 'https://unsplash.com/photos/pXyNqLpNqAU'
    },
    {
        name: 'Les Terres Basses, Chateau Laballe',
        price: 5,
        category: 'white',
        grape: 'colombard, ugni blanc, gros manseng',
        country: "France",
        region: 'Côtes de Gascogne,',
        qty: 12,
        instock: true,
        year: 2020,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit. Arcu dictum varius duis at consectetur lorem. Nunc id cursus metus aliquam eleifend mi. In nisl nisi scelerisque eu. Vitae auctor eu augue ut. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Diam vulputate ut pharetra sit amet aliquam id. Purus sit amet volutpat consequat mauris nunc congue. Faucibus ornare suspendisse sed nisi.',
        image: 'https://unsplash.com/photos/pXyNqLpNqAU'
    },
    {
        name: 'Pet Nat, Louis-Antoine Luyt',
        price: 12,
        category: 'rose',
        grape: 'colombard, ugni blanc, gros manseng',
        country: "Chile",
        region: 'Maule',
        qty: 2,
        instock: true,
        year: 2020,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit. Arcu dictum varius duis at consectetur lorem. Nunc id cursus metus aliquam eleifend mi. In nisl nisi scelerisque eu. Vitae auctor eu augue ut. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Diam vulputate ut pharetra sit amet aliquam id. Purus sit amet volutpat consequat mauris nunc congue. Faucibus ornare suspendisse sed nisi.',
        image: 'https://unsplash.com/photos/pXyNqLpNqAU'
    },
    {
        name: 'A glimpse of Josh',
        price: 12,
        category: 'red',
        grape: 'pinot noir',
        country: "Canada",
        region: 'Ontario',
        qty: 12,
        instock: true,
        year: 2020,
        description: 'Nyan Cat sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit. Arcu dictum varius duis at consectetur lorem. Nunc id cursus metus aliquam eleifend mi. In nisl nisi scelerisque eu. Vitae auctor eu augue ut. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Diam vulputate ut pharetra sit amet aliquam id. Purus sit amet volutpat consequat mauris nunc congue. Faucibus ornare suspendisse sed nisi.',
        image: 'https://unsplash.com/photos/pXyNqLpNqAU'
    },
    {
        name: 'Vietnamese Snak Wine',
        price: 2,
        category: 'white',
        grape: 'no one knows',
        country: "Canada",
        region: 'BC',
        qty: 12,
        instock: true,
        year: 2020,
        description: 'Henry consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit. Arcu dictum varius duis at consectetur lorem. Nunc id cursus metus aliquam eleifend mi. In nisl nisi scelerisque eu. Vitae auctor eu augue ut. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Diam vulputate ut pharetra sit amet aliquam id. Purus sit amet volutpat consequat mauris nunc congue. Faucibus ornare suspendisse sed nisi.',
        image: 'https://unsplash.com/photos/pXyNqLpNqAU'
    },
    {
        name: 'White girl Chardonnay',
        price: 12,
        category: 'white',
        grape: 'chardonnay',
        country: "Italy",
        region: 'Toscana',
        qty: 4,
        instock: true,
        year: 2020,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit. Arcu dictum varius duis at consectetur lorem. Nunc id cursus metus aliquam eleifend mi. In nisl nisi scelerisque eu. Vitae auctor eu augue ut. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Diam vulputate ut pharetra sit amet aliquam id. Purus sit amet volutpat consequat mauris nunc congue. Faucibus ornare suspendisse sed nisi.',
        image: 'https://unsplash.com/photos/pXyNqLpNqAU'
    },
    {
        name: 'Rose by Rose',
        price: 12,
        category: 'rose',
        grape: 'grenache',
        country: "USA",
        region: 'New York',
        qty: 1,
        instock: true,
        year: 2020,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit. Arcu dictum varius duis at consectetur lorem. Nunc id cursus metus aliquam eleifend mi. In nisl nisi scelerisque eu. Vitae auctor eu augue ut. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Diam vulputate ut pharetra sit amet aliquam id. Purus sit amet volutpat consequat mauris nunc congue. Faucibus ornare suspendisse sed nisi.',
        image: 'https://unsplash.com/photos/pXyNqLpNqAU'
    },
    {
        name: 'Blind for Love',
        price: 10,
        category: 'white',
        grape: 'riesling',
        country: "Canada",
        region: 'BC',
        qty: 5,
        instock: true,
        year: 2021,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit. Arcu dictum varius duis at consectetur lorem. Nunc id cursus metus aliquam eleifend mi. In nisl nisi scelerisque eu. Vitae auctor eu augue ut. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Diam vulputate ut pharetra sit amet aliquam id. Purus sit amet volutpat consequat mauris nunc congue. Faucibus ornare suspendisse sed nisi.',
        image: 'https://unsplash.com/photos/pXyNqLpNqAU'
    }
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e=> {
    console.log(e)
})
