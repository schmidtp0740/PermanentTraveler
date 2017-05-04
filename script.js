function onHover(element){
    if(element.id === "paris"){
        element.setAttribute('src', "./images/france-hover.png");
    }
    else if(element.id === "italy"){
        element.setAttribute('src', "./images/italy-hover.png");
    }
    else if(element.id === "croatia"){
        element.setAttribute('src', "./images/croatia-hover.png");
    }
    else if(element.id === "london"){
        element.setAttribute('src', "./images/london-hover.png");
    }
    else if(element.id === "shareExperiance"){
        element.setAttribute('src', "./images/shareexperience-hover.png");
    }
    else if(element.id === "facebook"){
        element.setAttribute('src', "./images/facebook-hover.png");
    }
    else if(element.id === "instagram"){
        element.setAttribute('src', "./images/instagram-hover.png");
    }
    else if(element.id === "nav2"){
        element.setAttribute('src', "./images/dropdownbutton-hover.png");
    }
    else if(element.id === "submitbtn"){
        element.setAttribute('src', "./images/SubmitButton-Hover.png");
    }
}

function offHover(element){
    if(element.id === "paris"){
        element.setAttribute('src', "./images/paris.png");
    }
    else if(element.id === "italy"){
        element.setAttribute('src', "./images/italy.png");
    }
    else if(element.id === "croatia"){
        element.setAttribute('src', "./images/Croatia.png");
    }
    else if(element.id === "london"){
        element.setAttribute('src', "./images/London.png");
    }
    else if(element.id === "shareExperiance"){
        element.setAttribute('src', "./images/shareexperiencebutton.png");
    }
    else if(element.id === "facebook"){
        element.setAttribute('src', "./images/facebook.png");
    }
    else if(element.id === "instagram"){
        element.setAttribute('src', "./images/instagram.png");
    }
    else if(element.id === "nav2"){
        element.setAttribute('src', "./images/dropdownbutton.png");
    }
    else if(element.id === "submitbtn"){
        element.setAttribute('src', "./images/SubmitButton.png");
    }
}

var mn = $("nav");
    ts = $("#travelSection");
    mns = "nav-scrolled";
    tsc ="travelSection-scrolled";
    hdr = $('#splashBackground').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
    ts.addClass(tsc);
  } else {
    mn.removeClass(mns);
    ts.removeClass(tsc);
  }
});

$("#nav2").click(function() {
    $('html, body').animate({
        scrollTop: $("#navbar").offset().top
    }, 2000);
});

// $("#travelA").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#travel").offset().top
//     }, 2000);
// });

// $("#tattoosA").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#blakeSection").offset().top
//     }, 2000);
// });

$("#homeA").click(function() {
     $('html, body').animate({
         scrollTop: $("#splashBackground").offset().top
     }, 2000 ,'easing');
 });

// $("#missionA").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#missionStatement").offset().top
//     }, 2000);
// });

// $("#contactA").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#contact").offset().top
//     }, 2000);
// });

// $("#submitbtn").click(function() {
//     $('.form-control').val('');
// });