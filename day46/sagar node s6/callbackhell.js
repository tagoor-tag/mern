// function fnGetUsers(callback) {
//     //write the logic to get all the users 
//     //and select the user whose post information we want
//     console.log("Users data Fetched");
//     Callback(101);
// }

// function fnGetUserPosts(userId, callback) {
//     //send the request with user is , get all the post info 
//     console.log("post information is fetched");
//     //Select the post an get its all comment info
//     Callback(3451)

// }

// function fnGetUserCommentsBasedOnPost(postId, callback) {
//     //It will fetch all the comment information
//     console.log("Fetched Comments information");
//     Callback(CommentId)

// }

// function fnGetSpecificCommentInfo(CommentId) {
//     //fetch only one comment detailed info
//     console.log("fetched only one comment");

// }

// fnGetUsers(function (userId) {
//     fnGetUserPosts(userId, function (postId) {
//         fnGetUserCommentsBasedOnPost(postId, function (CommentId) {
//             fnGetSpecificCommentInfo(CommentId)
//         })
//     })
// });


function fnGetUsers(callback) {
    //1,2,3,4,5
    //write the logic to get all the users
    // and select the user whose post information we want
    console.log("Users Data Fetched");
    callback(101); //fnGetUserPosts(userId)
  }
  
  function fnGetUserPosts(userId, callback) {
    // 1,2,3
    //Send the request with user id,get all the post info
    console.log("Post Information is Fetched", userId);
    //Select the post and get its all comment info
    callback(3451); // fnGetUserCommentsBasedOnPost(postId, callback)
  }
  
  function fnGetUserCommentsBasedOnPost(postId, callback) {
    //It will fetch all the comments information
    //1,2,3,4,5
    console.log("Fetched Comments information", postId);
    callback(100); //fnGetSpecificCommentInfo(commentId)
  }
  
  function fnGetSpecificCommentInfo(commentId) {
    //Fetch only one comment detailed info
    console.log("Fetched only one Comment Info", commentId);
  }
  
  fnGetUsers(function (userId) {
    fnGetUserPosts(userId, function (postId) {
      fnGetUserCommentsBasedOnPost(postId, function (commentId) {
        fnGetSpecificCommentInfo(commentId);
      });
    });
  });