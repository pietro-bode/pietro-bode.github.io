var posts=["2025/05/17/Hello-World/","2025/05/18/eNSP/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };