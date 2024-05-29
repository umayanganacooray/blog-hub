const { File, Category, Post } = require("../models");

const addPost = async (req, res, next) => {
  try {
    const { title, desc, file, category } = req.body;
    const { _id } = req.user;

    if (file) {
      const isFileExist = await File.findById(file);
      if (!isFileExist) {
        res.code = 404;
        throw new Error("File not found");
      }
    }

    const isCategoryExist = await Category.findById(category);
    if (!isCategoryExist) {
      res.code = 404;
      throw new Error("Category not found");
    }

    const newPost = new Post({
      title,
      desc,
      file,
      category,
      updatedBy: _id,
    });
    await newPost.save();

    res
      .status(201)
      .json({ code: 201, status: true, message: "Post added successfully" });
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) =>{
    try {
        const { title, desc, file, category } = req.body;
        const {id} = req.params;
        const { _id } = req.user;
    
        if (file) {
          const isFileExist = await File.findById(file);
          if (!isFileExist) {
            res.code = 404;
            throw new Error("File not found");
          }
        }
    
        const isCategoryExist = await Category.findById(category);
        if (!isCategoryExist) {
          res.code = 404;
          throw new Error("Category not found");
        }

        const post = await Post.findById(id);
        if(!post){
            res.code = 404;
            throw new Error("Post not found");
        }
        
        post.title = title ? title : post.title;
        post.desc = desc;
        post.file = file;
        post.category = category ? category : post.category;
        post.updatedBy = _id;

        await post.save();
    
        res
          .status(200)
          .json({ code: 200, status: true, message: "Post updated successfully", data: {post} });
      } catch (error) {
        next(error);
      }
};

module.exports = {
    addPost,
    updatePost,
};