window.onload = function() {

  Vue.filter('addBraces', function(val) {
    return "[" + val + "]";
  });

  Vue.filter('enlarge', function(val) {
    return val.split('').join(' ');
  });

  var vm = new Vue({
    el: '#VueEL',
    data: {
      text: ""
    }
  });
}
