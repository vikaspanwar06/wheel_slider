$(document).ready(function(){
    flag=1;
    $('img').click(next);
    $('img').click(prev);

    setInterval(next,7000);  

    $('#main').on("swipeleft",next);
    $('#main').on("swiperight",prev);

    $(document).on('pageinit', function(event){
    $("#main").swiperight(prev);
    $("#main").swipeleftt(next);
        e.preventDefault();
    });

  

    document.onkeydown = function(e){
        if(e.keyCode == '37'){
            prev();
            console.log('left');
        }else if(e.keyCode == '39'){
            next();
            console.log('right');

        }
    }

    $('#main div').click(function(){
        var index = $(this).index();
        console.log(index);
    });

    $('#main').one('mouseenter',function(){
        alert('Swipe to see Top Picks');
    })
    function next(){
        if(flag==0){
            $("#side1").removeClass().addClass('center');
            $("#side2").removeClass().addClass('center-left');
            $("#side3").removeClass().addClass('center-right');
            $("#side4").removeClass().addClass('center-left2');
            $("#side5").removeClass().addClass('center-right2');
            flag=1;
        }
        else if(flag==1){
            $("#side3").removeClass().addClass('center');
            $("#side1").removeClass().addClass('center-left');
            $("#side5").removeClass().addClass('center-right');
            $("#side2").removeClass().addClass('center-left2');
            $("#side4").removeClass().addClass('center-right2');
            flag=2;
        }
        else if(flag==2){
            $("#side5").removeClass().addClass('center');
            $("#side3").removeClass().addClass('center-left');
            $("#side4").removeClass().addClass('center-right');
            $("#side1").removeClass().addClass('center-left2');
            $("#side2").removeClass().addClass('center-right2');
            flag=3;
        }
        else if(flag==3){
            $("#side4").removeClass().addClass('center');
            $("#side5").removeClass().addClass('center-left');
            $("#side2").removeClass().addClass('center-right');
            $("#side3").removeClass().addClass('center-left2');
            $("#side1").removeClass().addClass('center-right2');
            flag=4;
        }
        else if(flag==4){
            $("#side2").removeClass().addClass('center');
            $("#side4").removeClass().addClass('center-left');
            $("#side1").removeClass().addClass('center-right');
            $("#side5").removeClass().addClass('center-left2');
            $("#side3").removeClass().addClass('center-right2');
            flag=0;
        }
    }


    function prev(){
        if(flag==0){
            $("#side4").removeClass().addClass('center');
            $("#side5").removeClass().addClass('center-left');
            $("#side2").removeClass().addClass('center-right');
            $("#side3").removeClass().addClass('center-left2');
            $("#side1").removeClass().addClass('center-right2');
            flag=4;
        }
        else if(flag==1){
            $("#side2").removeClass().addClass('center');
            $("#side4").removeClass().addClass('center-left');
            $("#side1").removeClass().addClass('center-right');
            $("#side5").removeClass().addClass('center-left2');
            $("#side3").removeClass().addClass('center-right2');
            flag=0;
        }
        else if(flag==4){
            $("#side5").removeClass().addClass('center');
            $("#side3").removeClass().addClass('center-left');
            $("#side4").removeClass().addClass('center-right');
            $("#side1").removeClass().addClass('center-left2');
            $("#side2").removeClass().addClass('center-right2');
            flag=3;
        }
        else if(flag==3){
            $("#side3").removeClass().addClass('center');
            $("#side1").removeClass().addClass('center-left');
            $("#side5").removeClass().addClass('center-right');
            $("#side2").removeClass().addClass('center-left2');
            $("#side4").removeClass().addClass('center-right2');
            flag=2;
        }
        else if(flag==2){
            $("#side1").removeClass().addClass('center');
            $("#side2").removeClass().addClass('center-left');
            $("#side3").removeClass().addClass('center-right');
            $("#side4").removeClass().addClass('center-left2');
            $("#side5").removeClass().addClass('center-right2');
            flag=1;
        }
    }

});

 