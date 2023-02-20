const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(3000);


app.get('/', (req, res) =>{
    const blogs = [
        {title: 'Tifa finds Cloud', snippet: "You gotta be better than this.... if you're gonna play the hero"},
        {title: 'Cloud meets Arieth', snippet: "This guy are sick"},
        {title: 'Sephiroth stalks Cloud', snippet: ' Do you dream of me?'}
    ];

    //res.send('<p>Home Page</p>');
    res.render('index', {title: 'Home', blogs });

}); 
app.get('/about', (req, res) =>{
   // res.send('<p>About Page</p>');
   res.render('about', {title: 'About'})
}); 

app.get('/blogs/create', (req, res) =>{
    res.render('create', {title: 'Create a new Blog'});
})

app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
})

