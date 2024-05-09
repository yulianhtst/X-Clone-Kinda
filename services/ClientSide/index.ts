import { loginCS, logoutCS } from "./authServiceCS";
import { setLikeCS, setDislikeCS } from "./likesCS";
import { createPostCS, getAllPostsCS } from "./postCS";
import { checkEmailAvailabilityCS, createUserCS, sendEmailCS, verifySessionTokenCS } from "./registerCS";

export  {
  loginCS,
  logoutCS,
  setLikeCS,
  setDislikeCS,
  createPostCS,
  getAllPostsCS,
  createUserCS,
  verifySessionTokenCS,
  sendEmailCS,
  checkEmailAvailabilityCS,
};
