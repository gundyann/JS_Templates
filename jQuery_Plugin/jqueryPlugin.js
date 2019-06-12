(function ( $ ) {
    var shade = "#33ad14";
    $.fn.greenify = function() {
        this.css( "color", shade );
        return this;
    };

}( jQuery ));

(function ( $ ) {
    var shade = "#ea0e15";
    $.fn.redify = function() {
        this.css( "color", shade );
        return this;
    };

}( jQuery ));


function useGreenifyPlugin(){
  $("p").greenify();
}

function useRedifyPlugin(){
  $("p").redify();
}
