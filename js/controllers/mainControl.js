(function() {
    'use strict';
    
    angular
    .module('lawOrderPie')
    .controller('mainController', function(API) {
       	var vm = this;

      	var ctx = document.getElementById("myChart");

      	var originalSeasons = API.getPieData('562');
      	
      	originalSeasons.then(function(response){
        var data = response.data.reverse();

        return parseInt(data[0].number);      
		      
    	 });


        var lASeasons = API.getPieData('867');
        
        lASeasons.then(function(response){
        var data = response.data.reverse();

        return parseInt(data[0].number);      
          
      });

        var uKSeasons = API.getPieData('1262');
        
        uKSeasons.then(function(response){
        var data = response.data.reverse();

        return parseInt(data[0].number);   
          
      });

        var cISeasons = API.getPieData('786');
        
        cISeasons.then(function(response){
        var data = response.data.reverse();

        return parseInt(data[0].number);  
          
      });

        var sVUSeasons = API.getPieData('103');
        
        sVUSeasons.then(function(response){
        var data = response.data.reverse();

        return parseInt(data[0].number);       
          
      });              

        var tBJSeasons = API.getPieData('3283');
        
        tBJSeasons.then(function(response){
        var data = response.data.reverse();

        return parseInt(data[0].number);
          
      });

        var data = {
          labels: [
            "Law and Order - Original",
            "Law and Order: LA",
            "Law and Order: UK",
            "Law and Order: CI",
            "Law and Order: SVU",
            "Law and Order: Trial by Jury",
          ],          

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
                  // data: [originalSeasons, lASeasons, uKSeasons, cISeasons, sVUSeasons, tBJSeasons],
                  data: [20, 1, 8, 10, 18, 1],
              }
          ]
        };

        var myBarChart = new Chart(ctx, {
          type: 'doughnut',
          data: data,
        });


    });
})();