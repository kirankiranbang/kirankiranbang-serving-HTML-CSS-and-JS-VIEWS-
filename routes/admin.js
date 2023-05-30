



////http://localhost:4000/shop/add-product



const express=require('express')
// const { dirname } = require('path');
// const rootDir=require('../util/path')

const path = require('path');
const router=express.Router();





router.get('/admin/add-product', (req, res, next) => {

    console.log('pathjoin from Admin.js!');

    

    res.sendFile(path.join(__dirname,'../','views','add-product.html'))  

// res.sendFile(path.join(rootDir,'views','add-product.html'))  //http://localhost:4000/admin/add-product


  });




  router.get('/admin/shop', (req, res, next) => {      //http://localhost:4000/admin/shop

    console.log('pathjoin from Admin.js!');

    

    res.sendFile(path.join(__dirname,'../','views','shop.html'))  

});




router.get('/admin/vcontact', (req, res, next) => {      //http://localhost:4000/admin/vcontact

    console.log('pathjoin from Admin.js');

    res.sendFile(path.join(__dirname,'../','views','vcontact.html'))  


    // router.post('/another-url', (req, res, next) => {

    //     console.log(req.body);
    
    //    res.redirect('/another-url');
    
    //   });
    



});






router.post('/product', (req, res, next) => {

    console.log(req.body);

   res.redirect('/');

  });



  module.exports=router;