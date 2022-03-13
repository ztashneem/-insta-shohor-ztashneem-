let posts = [];

const likedPostsId = [];
const reportedPostsId = [];

const getLikedPosts = () => {
  return posts.filter((post) => likedPostsId.includes(post.id));
};

const getReportedPosts = () => {
  return posts.filter((post) => reportedPostsId.includes(post.id));
};

const isLiked = (id) => {
  return likedPostsId?.length && !!likedPostsId.includes(id);
};

const addToLiked = (id) => {
  likedPostsId.push(id);
  showPosts(posts);
};

const reportPost = (id) => {
  reportedPostsId.push(id);
  const remainingPosts = posts.filter((post) => !reportedPostsId.includes(post.id));
  showPosts(remainingPosts);
};

const displayContent = (text) => {
  console.log(text);
  return text.length < 30 ? text : text.slice(0, 30) + ` <a target="_blank" href="${text}"><span class='fw-bold'> ... read more</span></a>`;
};

