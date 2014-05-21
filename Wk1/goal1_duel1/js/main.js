// Lindsay Lambert May 21, 2014 The Duel Part 2

(function(){
    console.log("FIIIIIIIGHT!!!");
    //names of fighters
    var fighter1=["Ugly Dude", 20, 100];
    var fighter2="Uglier Dude", 20, 100];
    //initiating the round
    var round=0;
    function fight(){
        alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]);
        for (var i=0;i<10;i++)
        {
            //this is the formula for telling the computer to pick out a random number -Math.floor(Math.random()*(max - min) + min);
            var minDamage1=fighter1[1]*.5;
            var minDamage2=fighter2[1] *.5;
            var f1=Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2=Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);
            //inflicting damage and pain! 
            fighter1[2]-=f1;
            fighter2[2]-=f2;
            console.log(fighter1[0]+": "+fighter1[2]+ " " +fighter2[0]+":"+fighter2[2]);
            //checks for a winner
            var result=winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                 alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[2]);

            } else{
                alert(result);
                break;
            };

          };
    };
    function winnerCheck(){
         var result="no winner";
        if (fighter1[1]<1 && fighter2[1]<1)
        {
            result="You Both Die";
        } else if(fighter1[1]<1){
            result=fighter2[0]+" WINS!!!"
            } else if(fighter2[1]<1)
        {
            result=fighter1[0]+" WINS!!!"
        };
       return result;
    };
/* The fight is initiated or called */
   fight();

})();