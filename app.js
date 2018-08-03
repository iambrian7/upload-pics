const express = require('express');
require('dotenv').config();
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
const loki = require('lokijs');
const fs = require("fs")
const uploadsdir = './public/uploads'
// fs.readdirSync(uploadsdir).forEach(file => {
//   //console.log(file);
// })
function getFiles (dir, files_){
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files){
      var name = dir + '/' + files[i];
      if (fs.statSync(name).isDirectory()){
        getFiles(name, files_);
      } else {
        name = name.replace('./public','')
          files_.push(name);
      }
  }
  return files_;
}
let loadedImages = getFiles(uploadsdir)
// //console.log("images online now:........")
// //console.log(loadedImages)

// var db = new loki('loki.json')

// var children;
// console.time("loadbase")
// console.time("load")
// db.loadDatabase({}, function () {
//   children = db.getCollection('children')
//   var child1 = children.get(1)
//   console.timeEnd("load")
//   //console.log(child1)
//   //console.log("loadedDatabase children......" + JSON.stringify(child1));
//   //console.log("loadedDatabase children......" + children.get(1));
// });

// console.timeEnd("loadbase")

// setTimeout(function(){

//   if (children){
//   // if (children.get(1)){
//     //console.log(`data is loaded`)
//     //console.log(children.get(1))
    
//   } else {
//     //console.log(`data is not loaded`)
//       children = db.addCollection('children')
//      children.insert({name:'Sleipnir', legs: 8})
//      children.insert({name:'Jormungandr', legs: 0})
//      children.insert({name:'Hel', legs: 2})
//      db.saveDatabase();
//    }
// },3000)






// Set The Storage Engine
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads/');
  },
  // destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,req.body.image_name + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 5000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
// }).single('');
}).single('myImage');

// Check File Type
function checkFileType(file, cb){
  //console.log(`checkFileType ${JSON.stringify(file, null, 3)}`)
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

// Init app
const app = express();

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

//app.get('/', (req, res) => res.render('index',{images: loadedImages}));
app.get('/', (req, res) => res.render('vue-upload',{images: loadedImages}));

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      //console.log("error.....................")
      res.render('vue-upload', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('vue-upload', {
          msg: 'Error: No File Selected!'
        });
      } else {

        // //console.log(`data is loaded`)
        // //console.log(children.get(1))

        loadedImages = getFiles(uploadsdir)
        res.redirect('/')
        // res.render('index', {
        //   msg: 'File Uploaded!',
        //   images: loadedImages,
        //   file: `uploads/${req.body.image_name + "." + req.file.filename.split('.')[1]}`
        // });
      }
    }
  });
});

const port = process.env.MYPORT;

app.listen(port, () => console.log(`Server started on port ${port}`));