
/**Clock**/
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour12: false });
    document.getElementById('liveTime').textContent = timeString;
  }
  setInterval(updateTime, 1000);

  updateTime();

  /**Notification**/
  function getNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block'; 
  }
  
  
  setTimeout(getNotification, 3000);
  
  /**Removes the notification after 7 seconds**/
  setTimeout(() => {
    document.querySelector('.noti').style.display = 'none';
}, 7000);  
  
