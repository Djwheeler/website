window.onload = function() {
  function getTime() {
    setInterval(function() {
      var t = new Date();
      return {
        h: t.getHours(),
        m: t.getMinutes(),
        s: t.getSeconds()
      }
    }, 1000)
  }
  getTime()
}