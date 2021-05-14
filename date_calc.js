var hzWeek= new Array("日","一","二","三","四","五","六","日");
 
//获取星期
function cweekday(wday)
{return hzWeek[wday];}
 
 
function cala()
{
y=document.getElementById("SY").value;
m=document.getElementById("SM").value;
d=document.getElementById("SD").value;
ddd=document.getElementById("decday").value;
 
ttt=new Date(y,m-1,d).getTime()+ddd*24000*3600;
 
theday=new Date();
theday.setTime(ttt);
 
document.getElementById("result1").innerHTML=theday.getFullYear()+"年"+(1+theday.getMonth())+"月"+theday.getDate()+"日"+"星期"+cweekday(theday.getDay());
 
 
}
 
 
function calb()
{
 
y2=parseInt(document.getElementById("SY2").value);
m2=parseInt(document.getElementById("SM2").value);
d2=parseInt(document.getElementById("SD2").value);
 
 
y3=parseInt(document.getElementById("SY3").value);
m3=parseInt(document.getElementById("SM3").value);
d3=parseInt(document.getElementById("SD3").value);

x = y3*12+m3 - (y2*12+m2)
 
 
day2=new Date(y2,m2-1,d2);
day3=new Date(y3,m3-1,d3);
 
document.getElementById("result2").innerHTML= Math.round(x/12) +"年"+Math.abs(x%12)+"月";
 
 
}