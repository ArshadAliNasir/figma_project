$(document).ready(function(){
    // $(".Bars").click(function(){
    //     console.log("click")
    // $(".dropdown-content").show()
    // });
  
    // $(".time").click(function(){
    //     console.log("click")
    // $(".dropdown-content").hide()
    // });
  
       $(".Bars").click(function(){
        console.log("click")
    $(".drop-menu-content").addClass("drop-menu-content-show")
    $("body").css("overflow", "hidden");
    $(".overlay").fadeIn();
  
    });
  
      $(".time").click(function(){
        console.log("click")
    $(".drop-menu-content").removeClass("drop-menu-content-show");
    $("body").css("overflow", "auto");
    $(".overlay").fadeOut();
  
    });
  
    // $(".container").click(function(){
    //     console.log("click")
    // $(".dropdown-content").removeClass("dropdown-content-show")
    // });
    $(".Bars").click(function(){
      console.log("click")
         $(".dropdown-content").addClass("dropdown-content-show")
         $("body").css("overflow", "hidden");
         $("body").addClass("drawer-open");
     
         });
         $(".time").click(function(){
          console.log("click")
      $(".dropdown-content").removeClass("dropdown-content-show");
      $("body").css("overflow", "auto");
      $("body").removeClass("drawer-open");
  
      });   
      $(".plus").click(function(){
        // $(".plus-dropdown").slideDown("slow");
      });
    $(".plus").click(function(){
    //     console.log("click")
    // $(".minus").show()
    // $(".plus").hide()
    });
  
    $(".fa-solid").click(function(){
    //   var list =$(this).siblings(".plus");
    // list.slideToggle()
    // $(this).slideDown(".plus");
    $(this).parents(".items").next(".plus-dropdown").slideToggle();
    $(this).toggleClass("fa-angle-right") 
    $(this).toggleClass("fa-angle-up")  
  });
  
  
  
  
  
  
  //   $(".plus-dropdowm").click(function(){
  //     console.log("click")
  //     $(this).hide();
  
  // });
  
    // $(".time").click(function(){
    //     console.log("click")
    // $(".dropdown-content").hide()
    // });
  });