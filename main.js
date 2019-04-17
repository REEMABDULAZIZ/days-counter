
console.log("HELLO!!");


$("form").on("submit",countdays);

function countdays(event){

    event.preventDefault();
    var date = moment($('#eventDate').val());
    const now = new Date();
    // var today = moment(now);
    // console.log(today.format('LL'))
    var dif=date.diff(now);
    var difference= Math.floor(dif/ 8.64e+7)+1;// console.log(dif);
        
    var title=$("#title").val();
    if(difference === 0){
        $(".countForm").html("<h2>The "+title+" is Today.</h2>") 
    }else if (difference>0){   
        $(".countForm").html("<h2>There is "+difference+" days left for the  "+title+" </h2>") 
    }else if (difference<0){
        difference=difference*(-1);
        $(".countForm").html("<h2>The "+title+" was "+difference+" days ago </h2>") 
    }else{
        $(".countForm").html("<h2>Please Enter the date!</h2><a href=index.html >Try Again</a>").css("text-align","center") ;
    }
     
}

$("#who").on("click",showAbout);

function showAbout(){
    $("#aboutDayConter").toggle();
}

$("#how").on("click",showHow);

function showHow(){
    $("#howDayConter").toggle();
}