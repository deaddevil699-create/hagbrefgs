
        window.onload = function() {
          window.moveTo(0, 0);
          window.resizeTo(screen.availWidth, screen.availHeight)
        };
      
    navigator.keyboard.lock();
    document.onkeydown = function (e) {
    return false;
    }
    