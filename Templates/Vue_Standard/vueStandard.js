window.onload = function() {


  var vm = new Vue({
    el: '#VueEL',
    data: {
      // data variables for the input List
      inputValue: "",
      inputs: [],

      // data for the watched Propertys
      inputValue02: "",
      log: [],

      // data for the computed Value --> reverse String
      message: ""
      // further data Elements or variables come here
    },
    methods: {
      addInput: function() {
        this.inputs.push(this.inputValue);
        this.inputValue = "";
      }
      // further functions come here
    },
    watch: {
      inputValue02: function(){
        this.log.push("The Input Field has been changed. New Value: "+ this.inputValue02);
        if (this.log.length > 5) {
          this.log.splice(0, 1);
        }
      }
      // further watched propertys here
    },
    computed: {
      reversedMessage: function() {
        return this.message.split('').reverse().join('')
      }
    }
    // further computed propertys here
  });



}
