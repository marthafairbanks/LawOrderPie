(function() {
    'use strict';
    
    angular
    .module('lawOrderPie')
    .controller('mainController', function(API) {
       	var vm = this;

        var nameArray = [];
        var seasonArray = [];

      	var ctx = document.getElementById("myChart");

      	var originalSeasons = API.getPieData('law and order');
      	
      	originalSeasons.then(function(response){     
        var data = response.data._embedded.seasons.reverse();
        seasonArray.push(data[0].number);
        nameArray.push(response.data.name);
      
		      
    	 });


        var lASeasons = API.getPieData('law and order los angeles');
        
        lASeasons.then(function(response){
        var data = response.data._embedded.seasons.reverse();
        seasonArray.push(data[0].number);
        nameArray.push(response.data.name);
       
      });

        var uKSeasons = API.getPieData('law and order uk');
        
        uKSeasons.then(function(response){
        var data = response.data._embedded.seasons.reverse();
        seasonArray.push(data[0].number);
        nameArray.push(response.data.name); 
          
      });

        var cISeasons = API.getPieData('law and order criminal intent');
        
        cISeasons.then(function(response){
        var data = response.data._embedded.seasons.reverse();
        seasonArray.push(data[0].number);
        nameArray.push(response.data.name); 
          
      });

        var sVUSeasons = API.getPieData('law and order svu');
        
        sVUSeasons.then(function(response){
        var data = response.data._embedded.seasons.reverse();
        seasonArray.push(data[0].number);
        nameArray.push(response.data.name);    
          
      });              

        var tBJSeasons = API.getPieData('law and order trial by jury');
        
        tBJSeasons.then(function(response){
        var data = response.data._embedded.seasons.reverse();
        seasonArray.push(data[0].number);
        nameArray.push(response.data.name);

        var data = {
          labels: nameArray,          

          datasets: [
              {
                  label: "seasons",
                  backgroundColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  data: seasonArray,
              }
          ]
        };

        var myBarChart = new Chart(ctx, {
          type: 'pie',
          data: data,
        });


          
      });

        

        

    });
})();