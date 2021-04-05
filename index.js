

function popup(){
    alert("Submitted successfully");
}


scrollbutton=document.getElementById('scrollbutton')
window.onscroll = function() {
    scrollfunction()
};
function scrollfunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollbutton.style.display = "block";
    } else {
      scrollbutton.style.display = "none";
    }
  }
  
  function gototop() {
    document.documentElement.scrollTop = 0; 
  }