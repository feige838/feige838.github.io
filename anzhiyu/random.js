var posts=["wenzhang/27/Sofi支票账户开户，倒赚/","wenzhang/08/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };