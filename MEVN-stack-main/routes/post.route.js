const express = require('express');
const postRoute = express.Router();

let PostModel = require('../models/Post');

//index
postRoute.route('/').get( async (req, res) => {
    const posts = await PostModel.find()
    res.json(posts)
})

//create post
postRoute.route('/create-post').post( async (req, res, next) => {
    const post = await new PostModel(req.body)
    const saved = await post.save()
    res.json(saved)
    

})

//update post
postRoute.put('/update-post/:id', async(req, res) => {
    // const post = await new PostModel(req.body)
    const edit = await PostModel.findByIdAndUpdate(req.params.id, req.body)
    res.json(edit)
        });
    // delete post

postRoute.route('/delete-post/:id').delete(async(req, res, next) => {
    

    const posts = await PostModel.deleteOne({_id:req.params.id});

    res.json("deleted")
})
module.exports = postRoute;