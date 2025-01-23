function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour12: false });
    document.getElementById('liveTime').textContent = timeString;
  }
  setInterval(updateTime, 1000);

  updateTime();

  function getNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block'; 
  }
  
  
  setTimeout(getNotification, 3000);
  
  
