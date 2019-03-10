/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  find:  async (req, res) =>
  {
    let posts = await Post.find();

    res.status(200).send(posts);
  },

  create: async (req, res) =>
  {
    const title = req.body.title;
    const body = req.body.body;

    const queryObject = {
      title: title,
      body: body,
    };

    const newPost = await Post.create(queryObject).fetch();

    res.status(200).send(newPost);
  },

  destroy: async (req, res) =>
  {
    const id = req.param('id');

    const queryObject = {
      id: id,
    };

    const postObject = await Post.destroy(queryObject).fetch();

    res.status(204).send(postObject);
  }
};

