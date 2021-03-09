function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min;
      var t = setTimeout(function(){ currentTime() }, 1000);
}
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

  function Icon()
  {
      var date = new Date();
      var hour = date.getHours();
      var min = date.getMinutes();
  
      var img = document.createElement("img");
  
      if ((hour >= 6 && hour < 18) || (hour = 18 && min == 0))
          {
             img.src= "assets/sun.png";
             img.height = 50;
             img.width = 50;
          }
      else
          {
            img.src= "assets/new-moon.png";
            img.height = 50;
            img.width = 50;
          }
  
      var src = document.getElementById("Icon");
      src.appendChild(img);
  }

  function Greeting() {
    var date = new Date();
    var hour = date.getHours();
    var time = date.toLocaleTimeString();
    let timeOfDay;

    if (hour < 12) {
        timeOfDay = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
        timeOfDay = "Good Afternoon";
    } else {
        timeOfDay = "Good Evening";
    }
    document.getElementById("greeting").innerText = timeOfDay;
  }
  
  Greeting();
  Icon();
  currentTime();