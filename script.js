// Set the countdown date
   function updateTime() {
       const now = new Date();
       const hours = String(now.getHours()).padStart(2, '0');
       const minutes = String(now.getMinutes()).padStart(2, '0');
       const seconds = String(now.getSeconds()).padStart(2, '0');

       document.getElementById('hours').textContent = hours;
       document.getElementById('minutes').textContent = minutes;
       document.getElementById('seconds').textContent = seconds;
   }

   setInterval(updateTime, 1000);
   updateTime(); // Call function once to set initial time
   