async function getResponse() {
    let response = await fetch("data.json");
    let content = await response.json();
    var info_daily = [];
    var whenButtons = [$(".first-owner-h3"), $(".second-owner-h3"), $(".third-owner-h3")];
    var hasClass = [0, 0, 0];
    function info (when) {
        for (var i = 0; i < 6; i++){
        info_daily.push(content[i]["timeframes"][when].current);
        info_daily.push(content[i]["timeframes"][when].previous);
        info_daily.push(content[i].title);
        $(".bottom-card-time")[i].innerHTML = info_daily[0] + "hrs";
        $(".bottom-card-previous")[i].innerHTML = "Previous - " + info_daily[1] +"hrs";
        $(".bottom-card-title")[i].innerHTML = info_daily[2];
        info_daily = [];
        }
    } 
    function addOrRemoveClass(time) {
        whenButtons[time - 1].addClass("active");
        for (var i = 0; i < hasClass.length; i++){
            if(hasClass[i] === 1 && time - 1 != i) {
                hasClass[i] = 0;
                whenButtons[i].removeClass("active");
            }  
        }
        hasClass[time - 1] = 1;
    }


    $("#first-owner-h3").click(function() { 
        addOrRemoveClass(1);
        info("daily");
    });
    
    $("#second-owner-h3").click(function() {
        addOrRemoveClass (2);
        info("weekly");

    });
    
    $("#third-owner-h3").click(function() {
        addOrRemoveClass (3); 
        info("monthly");
    }); 

} 

getResponse();