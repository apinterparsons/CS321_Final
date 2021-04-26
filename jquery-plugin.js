//jquery plugin
(function ( $ ) {

    $.fn.hello = function( options ) {
      var userName = window.prompt("Enter your name: ", "game player");

        // Default options
      var settings = $.extend({
        name: userName,
        color: 'purple'
      }, options );

      // Apply options
      var greeting = 'Hello, ' + settings.name + '!';
      var instruction = "<br><br><br>INSTRUCTIONS: select the button that you think corresponds to the RGB value listed";
      return this.append(greeting + instruction).css({color: settings.color});

    };

}( jQuery ));
