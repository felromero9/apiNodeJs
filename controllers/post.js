const Post = require('../models/post');


exports.getPosts =  (req, res) =>{
    const posts = Post
        .find()// bring me all post from db
        .select(" id title body ") // select only what i want to see 
        .then(posts => {
            res.json({ posts: posts });
    })
    .catch(err => console.log(err));
};

//Create post
exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save()
         .then(result => {
            res.json({
              post: result
       });
   });
};

