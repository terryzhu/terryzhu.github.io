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
 
s=document.getElementById("SY0").value;
if (s.length!=8){
document.getElementById("result2").innerHTML= "格式不对,请输入20120304";
return
}
y2 =parseInt( s.substr(0,4))
m2 = parseInt(s.substr(4,2))

 
y3=parseInt(document.getElementById("SY3").value);
m3=parseInt(document.getElementById("SM3").value);
d3=parseInt(document.getElementById("SD3").value);

x = y3*12+m3 - (y2*12+m2)
 
 
document.getElementById("result2").innerHTML= Math.trunc(x/12) +"年"+Math.abs(x%12)+"月";
 
 
}