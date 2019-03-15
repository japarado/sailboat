/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /*find:  async (req, res) =>
  {
    if(!req.isSocket)
    {
      return res.badRequest('Only socket requests may access this route. Received an HTTP route.');

    }

    const posts = await Post.find().sort([ { createdAt: 'DESC' } ]);
    Post.subscribe(req, _.pluck(posts, 'id'));
    Post.publish(_.pluck(posts, 'id'), {
      verb: 'find',
      posts: posts,
    });

  },

  create: async (req, res) =>
  {
    const queryObject = {
      title: req.body.title,
      body: req.body.body,
    };

    const post = await Post.create(queryObject).fetch();

    Post.subscribe(req, [post.id]);
    Post.publish([post.id], {
      verb: 'create',
      post: post,
    });
  },

  destroy: async (req, res) =>
  {
    const id = req.param('id');
    const queryObject = {
      id: id,
    };

    const post = await Post.destroy(queryObject).fetch();

    Post.subscribe(req, _.pluck(post, 'id'));
    Post.publish(_.pluck(post, 'id'), {
      verb: 'destroy',
      post: post,
    }, req);
  }*/
};

