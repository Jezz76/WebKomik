document.addEventListener('DOMContentLoaded', function() {
    // Periksa status mode saat halaman dimuat
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        const modeIcon = document.getElementById('mode-toggle').querySelector('i');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }

    // Tambahkan event listener untuk tombol mode-toggle
    document.getElementById('mode-toggle').addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        const modeIcon = this.querySelector('i');
        if (document.body.classList.contains('light-mode')) {
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light'); // Simpan status mode terang di localStorage
        } else {
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark'); // Simpan status mode gelap di localStorage
        }
    });
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
