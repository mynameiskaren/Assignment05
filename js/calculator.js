/*eslint-env browser*/


/***********************************************
*****  		 	Calculator v2.0 	    ********
***********************************************/
window.addEventListener('load', function (){

    'use strict';

    var $ = function (id){
        return document.getElementById(id);
    };

    function enter(val){
        $('result').value += val;
    }

    function calculate(){       
        $('result').value = eval($('result').value);
    }

    function clear(){
        $('result').value = '';
    }

    function init(){
        var val;

        $('buttons').addEventListener('click', function (e){
            enter(e.target.value);
        });
        $('equal').addEventListener('click', function(){
           calculate(); 
        });
        $('clear').addEventListener('click', function (){
            clear();
        });
    }

    init();
});
