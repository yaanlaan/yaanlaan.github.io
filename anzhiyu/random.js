var posts=["2024/07/11/games踩坑/","2024/07/11/背包问题/","2024/07/11/排序/","2024/07/11/数论初步/","2024/07/11/stl-simple/","2024/07/11/cmake/","2024/07/10/lingo1/","2024/07/10/lingo0/","2024/07/10/games101-1/","2024/07/10/week15/","2024/07/10/week14/","2024/07/10/微分方程（二）/","2024/07/10/微分方程（一）/","2024/07/09/week5-5/","2024/05/29/week13/","2024/05/27/haffman-tree/","2024/04/04/建模week3/","2024/04/03/week6/","2024/03/27/week5/","2024/03/27/week4/","2024/03/27/week3/","2024/03/27/week2/","2024/03/27/week1/","2024/03/25/淑芬/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };