$( document ).ready(function() {
    var details = [{
        name: 'Appty',
        image: 'appty.jpg'
    },{
        name: 'WebShare',
        image: 'webkit.jpg'
    },{
        name: 'Travel Gear',
        image: 'travelgear.jpg'
    },{
        name: 'Fruit',
        image: 'fruit.jpg'
    }];

    for(var i=0;i<details.length;i++){
        $("#portfolioSkills").append("<div class='col-sm-6 workField'><img src='./images/"+details[i].image+"' /></div>")
    }

    $(".navBarIcon").click(function(){
        $(".navField").slideToggle()
    });
    
});