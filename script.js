// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const searchBar = document.getElementById('searchBar');
    const cityList = document.getElementById('cityList');

    dropdownToggle.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    searchBar.addEventListener('input', () => {
        const filter = searchBar.value.toLowerCase();
        const cities = cityList.getElementsByTagName('li');
        Array.from(cities).forEach(city => {
            const text = city.textContent || city.innerText;
            city.style.display = text.toLowerCase().includes(filter) ? '' : 'none';
        });
    });

    cityList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedCity = event.target.textContent;
            dropdownToggle.textContent = selectedCity;
            dropdownMenu.style.display = 'none';
            searchBar.value = '';
            Array.from(cityList.getElementsByTagName('li')).forEach(city => {
                city.style.display = '';
            });
        }
    });

    document.addEventListener('click', (event) => {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});

document.getElementById('sign-in-btn').addEventListener('click', function() {
    document.getElementById('sign-in-modal').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('sign-in-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('sign-in-modal')) {
        document.getElementById('sign-in-modal').style.display = 'none';
    }
});
let currentVideoIndex = 0;
const videos = document.querySelectorAll('.background-video');
const videoCount = videos.length;

function showNextVideo() {
    videos[currentVideoIndex].style.opacity = 0; // Hide current video
    currentVideoIndex = (currentVideoIndex + 1) % videoCount; // Update index
    videos[currentVideoIndex].style.opacity = 1; // Show next video
}

// Initial setup: show the first video
videos[0].style.opacity = 1;

// Change video every 4 seconds
setInterval(showNextVideo, 7500);
$(document).ready(function() {
    // City Dropdown
    $("#city").on("input", function() {
      let cityValue = $(this).val();
      let cityDropdown = $("#cityDropdown");
      cityDropdown.empty(); // Clear previous options
  
      if (cityValue.length > 2) { // Start showing dropdown after 2 characters
        // Replace with your actual city data source
        let citySuggestions = ["Jaipur", "Delhi", "Mumbai", "Bangalore", "Chennai"]; 
  
        citySuggestions.forEach(city => {
          if (city.toLowerCase().startsWith(cityValue.toLowerCase())) {
            let option = $("<li>").text(city);
            option.click(function() {
              $("#city").val(city);
              cityDropdown.hide(); // Hide dropdown after selection
            });
            cityDropdown.append(option);
          }
        });
        cityDropdown.show();
      } else {
        cityDropdown.hide();
      }
    });
  
    // Date & Time Input
    $("#date").datepicker({
      dateFormat: "dd/mm/yy"
    });
  
    $("#time").timepicker({
      timeFormat: "HH:mm" // 24-hour format (replace with "hh:mm" for 12-hour)
    });
  });
  