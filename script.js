//!Task 1

const posts = {
  name: "posts",
  isLoading: true,

  byId: {
    post1: {
      id: "post1",
      author: "user1",
      body: "....",
      comments: ["comment1", "comment2"],
    },
    post2: {
      id: "post2",
      author: "user2",
      body: "....",
      comments: ["comment3", "comment4", "comment5"],
    },
  },
  allIds: ["post1", "post2"],
};

// const copyOfPosts = {...posts}
// console.log(copyOfPosts);

// const copyOfPosts1=Object.assign(posts);
// console.log(copyOfPosts1);

// const copyOfPosts2 = JSON.parse(JSON.stringify(posts))
// console.log(copyOfPosts2);

//!Task 2

// const post ={
//   name:"posts",
//   isLoading: true,
//   id:"post1",
//   author: "user1",
//   body:"......",
//   comments:["comment1", "comment2"],
// };

// const color = post.color
// console.log(color);
// const hello = post.hello
// console.log(hello);
// const rest1 = {...rest}

//!Task 3

const comments = ["comment3", "comment4", "comment5", "comment1"];
const undefined1 =[comments[4]]
console.log(undefined1);
const comment1 = [comments[3]]
console.log(comment1);
const rest= [...comments]
console.log(rest);
