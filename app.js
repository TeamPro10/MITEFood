// Imports
const express = require('express')
const app = express()
const port = 8000
const path = require('path');

// Static Files
app.use(express.static('public'));
// Specific folder example
app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/Images', express.static(__dirname + '/Images'))

// Set View's
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

// app.get('/index', (req, res) => {
//     console.log('Root route accessed'); // Add this line for debugging
//     console.log(__dirname);
//     res.render('index', { text: 'Hey' });
// });

app.get('/index', (req, res) => {
    console.log(`Current directory is: ${__dirname}`);
    res.render('index', { text: 'Hey' });
});




app.get('/AdminDashboard', (req, res) => {
//    res.sendFile(__dirname + '/views/about.html')
    res.render(__dirname + '/view/AdminDashboard')
})

app.get('/FoodItemEdit', (req, res) => {
    //    res.sendFile(__dirname + '/views/about.html')
        res.render(__dirname + '/view/FoodItemEdit')
    })
app.get('/abc', (req, res) => {
  //    res.sendFile(__dirname + '/views/about.html')
         res.render(__dirname + '/view/abc')
    })

app.get('/Details', (req, res) => {
        //    res.sendFile(__dirname + '/views/about.html')
            res.render(__dirname + '/view/Detail')
    })

app.get('/forgotpass', (req, res) => {
        //    res.sendFile(__dirname + '/views/about.html')
            res.render(__dirname + '/view/forgotpass')
    })

    app.get('/otp', (req, res) => {
        //    res.sendFile(__dirname + '/views/about.html')
            res.render(__dirname + '/view/otp')
    })

app.get('/login', (req, res) => {
        //    res.sendFile(__dirname + '/views/about.html')
            res.render(__dirname + '/view/login')
    })
    app.get('/loginmob', (req, res) => {
        //    res.sendFile(__dirname + '/views/about.html')
            res.render(__dirname + '/view/loginmob')
    })
    app.get('/index1', (req, res) => {
        res.render(__dirname + '/view/index1');
    });
    
    app.get('/signupmob', (req, res) => {
        res.render(__dirname + '/view/signupmob')
    })
    app.get('/Menu', (req, res) => {
        //    res.sendFile(__dirname + '/views/about.html')
            res.render(__dirname + '/view/Menu')
    })

    app.get('/Order', (req, res) => {
        //    res.sendFile(__dirname + '/views/about.html')
            res.render(__dirname + '/view/Order')

    })

    app.get('/Order1', (req, res) => {
        //    res.sendFile(__dirname + '/views/about.html')
            res.render(__dirname + '/view/Order1')

    })

    
    app.get('/OrdersTobePrepared', (req, res) => {
        //    res.sendFile(__dirname + '/views/about.html')
            res.render(__dirname + '/view/OrdersTobePrepared')
    })
    app.get('/profile', (req, res) => {
        //    res.sendFile(__dirname + '/views/about.html')
            res.render(__dirname + '/view/profile')
    })
    app.get('/profile1', (req, res) => {
        //    res.sendFile(__dirname + '/views/about.html')
            res.render(__dirname + '/view/profile1')
    })
    app.get('/sample', (req, res) => {
        //    res.sendFile(__dirname + '/views/about.html')
            res.render(__dirname + '/view/profile')
    })

    app.get('/', (req, res) => {
        //    res.sendFile(__dirname + '/views/about.html')
            res.render(__dirname + '/view/start')
    })

app.listen(port, () => console.info(`App listening on port ${port}`))


