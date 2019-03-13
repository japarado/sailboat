/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  find:  async (req, res) =>
  {
    if(!req.isSocket)
    {
      return res.badRequest();
    }

    sails.sockets.join(req, 'postSocket');

    sails.sockets.broadcast('postSocket', 'find', { msg: "Model: Post \nAction: Find" }, req);

    const posts = await Post.find().sort('createdAt DESC');

    res.status(200).send(posts);
  },

  create: async (req, res) =>
  {
    const queryObject = {
      title: req.body.title,
      body: req.body.body,
    };

    sails.sockets.join(req, 'postSocket');
    sails.sockets.broadcast('postSocket', 'create', { msg: "Model: Post \nAction: Create" })

    const newPost = await Post.create(queryObject).fetch();

    return res.json({
      newPost
    })

  },

  destroy: async (req, res) =>
  {
    const id = req.param('id');

    const queryObject = {
      id: id,
    };

    sails.sockets.join(req, 'postSocket');
    sails.sockets.broadcast('postSocket', 'destroy', { msg: "Model: Post \nAction: Create" })

    const postObject = await Post.destroy(queryObject).fetch();

    res.status(200).send(postObject);
  }
};

