var posts=["2025/05/18/eNSP/","2025/05/17/Hello-World/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };