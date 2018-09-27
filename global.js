function goToURL(link) {
    window.setTimeout(function(){ window.location=link;}, 500);
    document.getElementsByTagName("BODY")[0].style.overflow='hidden';
    document.getElementById("page_select").style.setProperty('opacity', '0', 'important');
    document.getElementsByClassName("page_heading")[0].style.setProperty ('color', 'black', 'important');
    document.getElementsByClassName("page_heading")[0].style.marginBottom = '100vh';
}
