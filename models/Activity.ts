// import mongoose, { Schema, Types } from "mongoose";
// import PostLikes from "./Likes/PostLikes";
// import CommentLikes from "./Likes/CommentLikes";
// import Post from "./Post";
// import Comment from "./Comment";
// const { ObjectId } = Types;

// export const ActivitySchema = new Schema({
//   // title: { type: String },//For testing
//   // user: { type: ObjectId, ref: "User" },

//   posts: [{ type: [ObjectId], ref: "Post" }],
//   comments: [{ type: [ObjectId], ref: "Comment" }],
//   comments_likes: [{ type: [ObjectId], ref: "Comment" }],
//   // posts_likes: { type: [ObjectId], ref: "Comment" },
//   posts_likes: [{ type: [ObjectId], ref: "PostLikes" }],
// });

// export default mongoose.models.Activity ||
//   mongoose.model("Activity", ActivitySchema);
