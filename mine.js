
let cData=[];
let wData=[];

(function worldData(){
    let xRequest=new XMLHttpRequest();
    
    xRequest.open("GET",'https://coronavirus-19-api.herokuapp.com/all')
    xRequest.send()
    
    xRequest.onreadystatechange=function(){
                  
                   if(xRequest.status ==200 && xRequest.readyState == 4)
                   {
                   
                          wData=JSON.parse(xRequest.response);
                         
                               
                   }
    
    }
    })();



function wDisplay(){
 let temp=''
  temp +=`
    
      <div class="row text-center">

      <div class='col-lg-4'>
      <h1>Cases</h1>
      <p>${wData.cases}<p>
      </div>

      <div class='col-lg-4'>
      <h1>Deaths</h1>
      <p>${wData.deaths}<p>
      </div>

      <div class='col-lg-4'>
      <h1>Recovered</h1>
      <p>${wData.recovered}<p>
      </div>


      </div>  
  `
  document.getElementById('world').innerHTML=temp
}


(function countriesData(){
let xRequest=new XMLHttpRequest();

xRequest.open("GET",'https://corona.lmao.ninja/countries')
xRequest.send()

xRequest.onreadystatechange=function(){
              
               if(xRequest.status ==200 && xRequest.readyState == 4)
               {
               
                      cData=JSON.parse(xRequest.response);
                   
                     display();
               }

}
})();
function display()
{
    var temp = ''
for(var i=0 ; i <cData.length;i++){
    temp +=
    `   
    <tr>
    <td>${cData[i].country}</td>
    <td class="nfont">${cData[i].cases}</td>
    <td  class=" nfont bg-danger">${cData[i].deaths}</td>
    <td class="nfont">${cData[i].todayCases}</td>
    <td class=" nfont bg-danger">${cData[i].todayDeaths}</td>
    <td class="nfont">${cData[i].recovered}</td>
    <td class="nfont">${cData[i].critical}</td>
    <td class="nfont">${cData[i].active}</td>
    <td class="nfont">${cData[i].casesPerOneMillion}</td>
    <td class=" nfont bg-danger">${cData[i].deathsPerOneMillion}</td>
 </tr>
     
    `}
    document.getElementById('rowData').innerHTML=temp
}

function search(term){

    let temp=''

for(var i=0 ; i <cData.length;i++){
    if(cData[i].country.toLowerCase().includes(term.toLowerCase()))
    temp +=
    `   
     <tr>
        <td>${cData[i].country}</td>
        <td class="nfont">${cData[i].cases}</td>
        <td  class=" nfont bg-danger">${cData[i].deaths}</td>
        <td class="nfont">${cData[i].todayCases}</td>
        <td class=" nfont bg-danger">${cData[i].todayDeaths}</td>
        <td class="nfont">${cData[i].recovered}</td>
        <td class="nfont">${cData[i].critical}</td>
        <td class="nfont">${cData[i].active}</td>
        <td class="nfont">${cData[i].casesPerOneMillion}</td>
        <td class=" nfont bg-danger">${cData[i].deathsPerOneMillion}</td>
     </tr>
     
    `}
    document.getElementById('rowData').innerHTML=temp

}
$('.search-icon i').click(function(){


  let lWidth =$('.search-input').outerWidth(true);
  if($('.search-box').css('left') == '0px'){
 $('.search-box').animate({left:-`${lWidth}`},1000)
  }
  else
  {
    $('.search-box').animate({left:'0px'},1000)
  }
})


let eData=[]




let eRequest=new XMLHttpRequest();

eRequest.open("GET",'https://corona.lmao.ninja/countries/egypt')
eRequest.send()

eRequest.onreadystatechange=function(){
              
               if(eRequest.status ==200 && eRequest.readyState == 4)
               {
               
                      eData=JSON.parse(eRequest.response);
                 
                      
                     
               }







let usData=[];
let usRequest=new XMLHttpRequest();
usRequest.open("GET",'https://corona.lmao.ninja/countries/us')
usRequest.send()
usRequest.onreadystatechange=function(){
              
               if(usRequest.status ==200 && usRequest.readyState == 4)
               {
               
                      usData=JSON.parse(usRequest.response);
                
                      
                     
               }


let spData=[];
let spRequest=new XMLHttpRequest();
spRequest.open("GET",'https://corona.lmao.ninja/countries/spain')
spRequest.send()
spRequest.onreadystatechange=function(){
              
              if(spRequest.status ==200 && spRequest.readyState == 4)
              {
              
                      spData=JSON.parse(spRequest.response);
                    
                      
                    
              }

let iData=[];
let iRequest=new XMLHttpRequest();
iRequest.open("GET",'https://corona.lmao.ninja/countries/italy')
iRequest.send()
iRequest.onreadystatechange=function(){
              
              if(iRequest.status ==200 && iRequest.readyState == 4)
              {
              
                      iData=JSON.parse(iRequest.response);
                    
                      
                    
              }                            
/*---------- Charts---------- */

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Recoverd', 'Deaths', 'TodayCases'],
    ['Egypt', eData.recovered, eData.deaths,eData.todayCases],
    ['US',  usData.recovered, usData.deaths,usData.todayCases],
    ['Spain', spData.recovered, spData.deaths,spData.todayCases],
    ['Italy', iData.recovered, iData.deaths,iData.todayCases],
  ]);

  var options = {
    chart: {
      title: 'Covid',
      
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
}
}
}}
