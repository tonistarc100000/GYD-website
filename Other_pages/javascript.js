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
