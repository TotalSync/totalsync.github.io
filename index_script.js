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

//Resizes the Nav Buttons based on the width of the text.
function ResizeText()
{
  let elements = document.getElementsByClassName("text_centering");
  let buttons = document.getElementsByClassName("tablinks");
  for(let i = 0; i < elements.length; i++)
  {
    let element = elements[i];
    let button = buttons[i];
    let width = getTextWidth(element.textContent, getCanvasFontSize());
    element.width = width;
    button.width = width + 50;
  }
}

//Helper function for ResizeText()
//Uses the canvas.measureText() to give an accurate measurement. 
function getTextWidth(text, font) {
  // re-use canvas object for better performance
  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

//Helper function for GetCanvasFontSize
function getCssStyle(element, prop) {
  return window.getComputedStyle(element, null).getPropertyValue(prop);
}

// Helper function for getTextWidth()
// Returns the font details about an element.
function getCanvasFontSize(el = document.body) {
  const fontWeight = getCssStyle(el, 'font-weight') || 'normal';
  const fontSize = getCssStyle(el, 'font-size') || '16px';
  const fontFamily = getCssStyle(el, 'font-family') || 'Times New Roman';

return `${fontWeight} ${fontSize} ${fontFamily}`;
}

// Initial Function run on website load.
window.onload = function() 
{
    if(DEBUG)
    {
      document.getElementById("LipsumTab").click();
    } 
    else
    {
      //Sets the initial Tab
      document.getElementById("AboutTab").click();
      ResizeText(); // Resizes the Nav Buttons.
    }
}