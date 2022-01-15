var DEBUG = false;
function openTab(evt, tabName) {
    // Declare all variables
    let i, tabcontents, tablinks;
                
    // Get all elements with class="tabcontent" and hide them
    tabcontents = document.getElementsByClassName("tabcontents");
    for (i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
//Sets the initial tab
window.onload = function() 
{
    if(DEBUG)
    {
        document.getElementById("LipsumTab").click();
    } 
    else
    {
        document.getElementById("AboutTab").click();
    }
}