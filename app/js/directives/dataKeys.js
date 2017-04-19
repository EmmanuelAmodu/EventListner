'use strict';
eventsApp.directive('datakeys', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller){
            element.on('keydown', function(event){
                if (isNumericKeyCode(event.keyCode) || isForwardSlashKeyCode(event.keyCode) || isNavigationKeyCode(event.keyCode)){
                    return true;
                } else {
                    return false;
                }
            })
        }
    }

    function isNumericKeyCode(keycode) {
        return (keycode >= 48 && keycode <=57) || (keycode >= 96 && keycode <= 105);
    }

    function isForwardSlashKeyCode(keycode) {
        return event.keyCode === 191;
    }

    function isNavigationKeyCode(keycode) {
        switch (keycode) {
            case 8: //backspace
            case 35: //end
            case 36: //home
            case 37: //left
            case 38: //up
            case 39: //right
            case 40: //down
            case 45: //ins
            case 46: //del
                return true;
            default:
                return false;
        }
    }
});
