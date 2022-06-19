let now = new Date;
let period = now.getHours();
if (period<=6){
document.getElementById("showDate").innerHTML = "Good Night"
}
else if (period<12){
  document.getElementById("showDate").innerHTML = "Good Morning"
}
else if (period=12){
  document.getElementById("showDate").innerHTML = "Good Noon"
}
else if (period<17){
  document.getElementById("showDate").innerHTML = "Good Afternoon"
}
else if (period<20){
  document.getElementById("showDate").innerHTML = "Good Evening"
}
else
{ document.getElementById("showDate").innerHTML = "Good Night" };

let line=[]
line[0]='"Smile to change the world, don’t let the world change your smile.” – Sandeep Maheshwari'
line[1]=' “If you can learn anything, you can do anything.” – Sandeep Maheshwari'
line[2]='“What you think about yourself matters more than what others think about you.” – Sandeep Maheshwari'
line[3]='“If you are searching for the person who will change your life. Take a look in the mirror.” – Sandeep Maheshwari'
line[4]='“No matter how hard it gets, never give up.” – Sandeep Maheshwari'
line[5]='“Never be afraid to laugh at yourself.” – Sandeep Maheshwari'
line[6]='“Keep moving forward, you are the future.” – Sandeep Maheshwari'
line[7]='“Attachment lead to suffering, love will set you free.” – Sandeep Maheshwari'
line[8]='“Don’t be too serious about what you think. it’s just a point of view.” – Sandeep Maheshwari'
line[9]='“Your desire to change must be greater than your desire to be the same.” – Sandeep Maheshwari'
let todaysWord =line[Math.floor(Math.random()*9)]
document.getElementById("quotesOfTheDay").innerHTML=todaysWord;
