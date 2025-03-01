function showImage(imageName, imageDisplayElement) {
    const imageDisplay = document.getElementById(imageDisplayElement);
    imageDisplay.src = 'images/' + imageName; 
}

function selectStrawHat(evt, strawHatName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(strawHatName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Make JavaScript click on defaultOpen button (currently set as Luffy) on first load
document.getElementById("defaultOpen").click();
