const router = require("express").Router();
const Book = require(".././models/book");

router.get('/books',function(req, res){
    Book.find().then(function(data){
        res.json(data)
    }).then(function(err){
        res.send(err)
    }).catch(err => console.log(err));
});

router.put("/books/:id",function(req,res){
    // console.log("REQ.BODY LINE 14");
    // console.log(req.body);
    // console.log("REQ.PARAMS LINE 15");
    // console.log(req.params);
    Book.findByIdAndRemove(req.params.id, (err, book) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Book successfully deleted",
            id: book._id
        };
        return res.status(200).send(response);
    });
})


router.post("/books",function(req,res){
    var book = {
        title:req.body.volumeInfo.title,
        authors: req.body.volumeInfo.authors,
        description: req.body.volumeInfo.description,
        image: req.body.volumeInfo.imageLinks.thumbnail,
        link:req.body.volumeInfo.infoLink
    }
    Book.create(book).then(function(data){
        // console.log("this is data inside of the book model call");
        // console.log(data);
        res.json(data);
    }).then(function(err){
        res.send(err)
    })
})

module.exports = router;

  