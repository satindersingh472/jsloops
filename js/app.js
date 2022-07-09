let number = 0;
while ( number < 50){
    console.log (number);
    number = number + 1; 
}
 number = 0;
while (number > -50){
    console.log(number);
    number = number - 1;
}
number = 0;
while (number < 100){
    console.log(number);
    number = number + 2 ;
}

let players = [`jas`,`man`,`teejey`];
let list_players = 0;
while ( list_players < players.length){
    console.log(players[list_players]);
    list_players = list_players + 1;
}
let points = [50,60,70];
let list_points = 0;
while(list_points < points.length){
    console.log(points[list_points]);
    list_points = list_points + 1;
}

let injured = [true, false, true];
let list_injured = 0;
while(list_injured < injured.length){
    if (injured[list_injured] === false){
        console.log(injured[list_injured]);
    }
        list_injured = list_injured + 1;
    
    }
    
    