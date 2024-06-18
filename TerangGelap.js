document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const modeIcon = this.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
});

document.getElementById("bookmark-toggle").addEventListener("click", function() {
    if (this.innerText === "Bookmark") {
        this.innerText = "Bookmarked";
        this.classList.add("bookmarked");
    } else {
        this.innerText = "Bookmark";
        this.classList.remove("bookmarked");
    }
});
