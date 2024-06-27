function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-lists") {
      x.className += " responsive";
    } else {
      x.className = "navbar-lists";
    }
  }