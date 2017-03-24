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
}
