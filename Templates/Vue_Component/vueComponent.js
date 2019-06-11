window.onload = function() {

  Vue.component('my-component', {
    props: ['text'],
    data: function() {
      return {
        upvotes: 0
      }
    },
    template: '#my-component-template'
  });


  var vm = new Vue({
    el: '#VueEL',
    data: {
      texts: [{
          id: 1,
          text: "My first Poem"
        },
        {
          id: 2,
          text: "My second Poem"
        },
        {
          id: 3,
          text: "My third Poem"
        },
      ]
    },

  });

}
