
// this code is for expan search bar expand when on click 


document.addEventListener('click', function(event) {
    var searchbar = document.getElementById('searchbar');
    var isClickInsideSearchBar = searchbar.contains(event.target);
    
    if (!isClickInsideSearchBar) {
        searchbar.classList.remove('expanded');
    }
});

function toggleWidth() {
    var searchbar = document.getElementById('searchbar');
    searchbar.classList.toggle('expanded');
}


// three line response after click 
function out() {
  const threeline = document.querySelector('.three-lines');
  const TLOC = document.querySelector('.three-line-open-container');
  let clickCount = 0;

  function showTLOC() {
    TLOC.style.display = 'block';
  }

  function hideTLOC() {
    TLOC.style.display = 'none';
  }

  threeline.addEventListener('mouseenter', showTLOC);

  threeline.addEventListener('click', function() {
    clickCount++;
    if (clickCount % 2 === 0) {
      showTLOC();
    } else {
      hideTLOC();
    }
  });

  document.addEventListener('click', function(event) {
    const target = event.target;
    if (target !== threeline && !threeline.contains(target)) {
      hideTLOC();
      // Reset click count to 0 when clicking outside threeline
      clickCount = 0;
    }
  });

}

out()

  





