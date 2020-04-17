

let usData=[];
let usRequest=new XMLHttpRequest();
usRequest.open("GET",'https://corona.lmao.ninja/v2/countries/us')
usRequest.send()
usRequest.onreadystatechange=function(){
              
               if(usRequest.status ==200 && usRequest.readyState == 4)
               {
               
                      usData=JSON.parse(usRequest.response);
                    
                      
                     
               }




google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Recoverd', usData.recovered],
    ['Death', usData.deaths],
    ['Cases', usData.Cases],
    ['TodayCases', usData.todayCases],
    ['TodayDeaths', usData.todayDeaths]
  ]);

  // Set chart options
  var options = {'title':'United-Sates',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
}