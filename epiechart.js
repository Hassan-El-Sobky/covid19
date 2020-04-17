
let EData=[]
let ERequest=new XMLHttpRequest();
ERequest.open("GET",'https://corona.lmao.ninja/v2/countries/egypt')
ERequest.send()

ERequest.onreadystatechange=function(){
              
               if(ERequest.status ==200 && ERequest.readyState == 4)
               {
               
                      EData=JSON.parse(ERequest.response);
                   
                      
                     
               }};
            
               google.charts.load("current", {packages:["corechart"]});
               google.charts.setOnLoadCallback(drawChart);
               function drawChart() {
                 var data = google.visualization.arrayToDataTable([
                   ['Corona', 'Person'],
                   ['Recoverd', EData.recovered],
                   ['Death', EData.deaths],
                   ['Cases', EData.Cases],
                   ['TodayCases', EData.todayCases],
                   ['TodayDeaths', EData.todayDeaths]
                   ]);
         
                 var options = {
                   title: 'Egypt',
                   pieHole: 0.4,
                 };
         
                 var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
                 chart.draw(data, options);
               }


               