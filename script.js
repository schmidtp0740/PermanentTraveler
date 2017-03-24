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
}

var mn = $("nav");
    ts = $("#travelSection");
    mns = "nav-scrolled";
    tsc ="travelSection-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
    ts.addClass(tsc);
  } else {
    mn.removeClass(mns);
    ts.removeClass(tsc);
  }
});
