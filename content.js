Array.prototype.forEach.call(document.getElementsByClassName("mail-status"), function(el) {
  el.className = el.className.replace(/\bunread\b/, "");
});

Array.prototype.forEach.call(document.getElementsByClassName("news"), function(el) {
  el.style.visibility = "hidden";
});

var notificationCenter = document.getElementById("notification-center");
if(notificationCenter) {
  notificationCenter.style.visibility = "hidden";
}
