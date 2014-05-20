// Lindsay Lambert May 20, 2014 The Duel Part I

(function(){
    console.log("FIIIIIIIGHT!!!");
    //names of fighters
    var fighter1Name="Ugly Dude";
    var fighter2Name="Uglier Dude";
    //damages to fighters
    var fighter1Damage=20;
    var fighter2Damage=20;
    //beginning health is 100 for fighters
    var fighter1Health=100;
    var fighter2Health=100;
    //initiating the round
    var round=0;
    function fight(){
        alert(fighter1Name+":"+fighter1Health+"  *START*  "+fighter2Name+":"+fighter2Health);
        for (var i=0;i<10;i++)
        {
            //this is the formula for telling the computer to pick out a random number -Math.floor(Math.random()*(max - min) + min);
            var minDamage1=fighter1Damage*.5;
            var minDamage2=fighter2Damage *.5;
            var f1=Math.floor(Math.random()*(fighter1Damage-minDamage1)+minDamage1);
            var f2=Math.floor(Math.random()*(fighter2Damage-minDamage2)+minDamage2);
            //inflicting damage and pain! 
            fighter1Health-=f1;
            fighter2Health-=f2;
            console.log(fighter1Name+": "+fighter1Health+ " " +fighter2Name+":"+fighter2Health);
            //checks for a winner
            var result=winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                 alert(fighter1Name+":"+fighter1Health+"  *ROUND "+round+" OVER"+"*  "+fighter2Name+":"+fighter2Health);

            } else{
                alert(result);
                break;
            };

          };
    };
    function winnerCheck(){
         var result="no winner";
        if (fighter1Health<1 && fighter2Health<1)
        {
            result="You Both Die";
        } else if(fighter1Health<1){
            result=fighter2Name+" WINS!!!"