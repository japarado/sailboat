/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: (req, res) =>
  {
    Post.find({}).sort('updatedAt DESC').exec((err, posts) =>
    {
      if(err)
      {
        res.send(500, { error: 'Database Error' });
      }
      else
      {
        //res.view('post/index', { posts: posts });
        return res.send(200, { posts: posts });
      }
    });
  },

  store: async (req, res) =>
  {
    const newPost = {
      title: req.body.title,
      body: req.body.body,
    };
    const post = await Post.create(newPost).fetch();

    res.send(200, { post: post });
  },

  destroy: async (req,res) =>
  {
    const id = req.param('id');

    const deletedPost = await Post.destroy({ id: id }).fetch();

    res.send(202, { deletedPost: deletedPost });
  }
};

