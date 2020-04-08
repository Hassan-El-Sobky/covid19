
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
                           console.log(wData);
                               
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
                      console.log(cData);
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