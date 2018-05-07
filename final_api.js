
let teams = [];
let player_stuff = [];
//teams.push([1,2]);

$(document).ready(function(){
    $.get("https://api.opendota.com/api/teams").then(function(data){
        data.map(function(x){
            if(x.wins >= 50){
                teams.push(x);
            }
        });
    });
    $.get("https://api.opendota.com/api/proPlayers").then(function(player){
        player.map(function(players){
            player_stuff.push(players);
        });
    });
    $("#team_button").click(function(){
        let input_val = $('#team_name').val();
        for(let i = 0; i < teams.length; i++){
            let highest_play = '';
            let highest_win = '';
            let play = 0;
            let win = 0;
            let hero_list = [];
            if(teams[i].name.toLowerCase() == input_val.toLowerCase()){
                $.get("https://api.opendota.com/api/teams/" + teams[i].team_id + "/heroes").then(function(hero){
                    hero.map(function(hero_data){
                        hero_list.push(hero_data);
                    });
                    for(let k = 0; k< hero_list.length;k++){
                        if(hero_list[k].games_played >= play){
                            play = hero_list[k].games_played;
                            highest_play = hero_list[k].localized_name;
                        }
                        if(hero_list[k].wins >= win){
                            win = hero_list[k].wins;
                            highest_win = hero_list[k].localized_name;
                        }
                    }
                    $("#team_stats").append(
                        '<p>Highest Win Hero: ' + highest_win + '</p>' +
                        '<p>Most Played Hero: ' + highest_play + '</p>'
                    );
                });
                $("#team_div").empty();
                $("#team_div").append(
                    '<div id="team_stats">' +
                    '<p>Wins: ' + teams[i].wins + '</p>' +
                    '<p>Losses: ' + teams[i].losses + '</p>' +
                    '<p>Win rate: ' + (teams[i].wins / teams[i].losses).toFixed(2) + '</p>' + 
                    '</div>'
                );
                $.get("https://api.opendota.com/api/teams/" + teams[i].team_id + "/players").then(function(data){
                    data.map(function(y){
                        for(let j = 0; j < player_stuff.length; j++){
                            if(y.is_current_team_member){
                                if(player_stuff[j].account_id == y.account_id){
                                    $("#team_div").append(
                                        '<div id="player_profile">' + 
                                        '<img src="' + player_stuff[j].avatarfull + '">' +
                                        '<br>' +
                                        player_stuff[j].name +
                                        '</div>'
                                    );
                                }
                            }
                        }
                    });
                });
            }
        }
    });
});



