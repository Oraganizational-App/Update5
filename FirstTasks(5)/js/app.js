// For the PWA Application, register the Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'Service Worker registration failed')
  );
}


// Where can we go?
const routes = {
  '/login': loginPage,
  '/signup': signupPage,
  '/main': mainPage,   // change this to /home to prevent refresh
  '/home': homePage,
  '/alltasks': allPage,
  '/calendar': calendarPage,
  '/important': importantPage,
  '/notifications': notifPage,
  '/work': workPage


  // REGISTER NEW URL:VIEWS HERE
};






// DATA UPDATER:
// Fires every time a page changes
document.getElementById('page').addEventListener('page', function (e) {



}, false);

// function dropdown_function() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
//
// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
//
// function updateCurrentDate() {
//   var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
//   var today = new Date();
//   var dd = today.getDate();
//   var mm = months[today.getMonth()];
//   var yyyy = today.getFullYear();
//
//   document.getElementById('current-date').innerHTML = `${mm} ${dd}, ${yyyy}`;
// }
// updateCurrentDate();
//
//  function myFunction() {
//    document.getElementByClassName("container two btn").style.color = "blue";
//  }
