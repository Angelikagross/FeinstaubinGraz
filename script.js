var Werte2016 = [24,39,25,29,34];//array
var Werte2017= [31,54,30,35,43];//array

function Graz2017(){
for (var i = 0; i < Werte2017.length; i = i + 1) {
  $('#Werte').append("<li>" + Werte2017[i] + "</li>");
}
$('#grazost').attr('y', 60-Werte2017[0]);
$('#donbosco').attr('y', 60-Werte2017[1]);
$('#grazwest').attr('y', 60-Werte2017[2]);
$('#grazmitte').attr('y', 60-Werte2017[3]);
$('#grazsüd').attr('y', 60-Werte2017[4]);
$('#grazost').attr('height', Werte2017[0]-20);
$('#donbosco').attr('height', Werte2017[1]-20);
$('#grazwest').attr('height', Werte2017[2]-20);
$('#grazmitte').attr('height', Werte2017[3]-20);
$('#grazsüd').attr('height', Werte2017[4]-20);
                   
document.getElementById('headline').innerHTML = "&Uuml;berschreitungen Feinstaub 2017";
                   };
function Graz2016(){
    
    for (var i = 0; i < Werte2016.length; i = i + 1) {
  $('#Werte').append("<li>" + Werte2016[i] + "</li>");
}
$('#grazost').attr('y', 60-Werte2016[0]);
$('#donbosco').attr('y', 60-Werte2016[1]);
$('#grazwest').attr('y', 60-Werte2016[2]);
$('#grazmitte').attr('y', 60-Werte2016[3]);
$('#grazsüd').attr('y', 60-Werte2016[4]);
$('#grazost').attr('height', Werte2016[0]-20);
$('#donbosco').attr('height', Werte2016[1]-20);
$('#grazwest').attr('height', Werte2016[2]-20);
$('#grazmitte').attr('height', Werte2016[3]-20);
$('#grazsüd').attr('height', Werte2016[4]-20);
                   
document.getElementById('headline').innerHTML = "&Uuml;berschreitungen Feinstaub 2016";
    
};
