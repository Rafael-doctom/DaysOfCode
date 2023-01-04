let goalsDays = [4, 5, 2];

function Goals() {
   let progress = 0;

   for (let init = 0; init < goalsDays.length; init++) {
      if (goalsDays[init] < goalsDays[init + 1]) {
         progress++
      };
   };

   console.log(progress);
};

Goals();