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

    sails.sockets.broadcast('postSocket', 'post', { msg: 'FIND' }, req);

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
    sails.sockets.broadcast('postSocket', 'post', { msg: 'CREATE'});

    const newPost = await Post.create(queryObject).fetch();

    res.send(201).send(newPost);
  },

  destroy: async (req, res) =>
  {
    const id = req.param('id');

    const queryObject = {
      id: id,
    };

    sails.sockets.join(req, 'postSocket');
    sails.sockets.broadcast('postSocket', 'post', { msg: 'DESTROY' });

    const postObject = await Post.destroy(queryObject).fetch();

    res.status(204).send(postObject);
  }
};

