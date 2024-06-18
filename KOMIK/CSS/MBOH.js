document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');

    // Memuat komentar yang sudah ada saat halaman dimuat
    loadComments();

    // Menangani pengiriman formulir komentar
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Menghentikan perilaku default formulir

        // Mendapatkan data dari formulir
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        // Simpan komentar ke localStorage
        saveComment(name, comment);

        // Tampilkan komentar yang baru ditambahkan
        displayComment(name, comment);

        // Kosongkan formulir setelah komentar dikirim
        commentForm.reset();
    });
    
    // Fungsi untuk menyimpan komentar ke localStorage
    function saveComment(name, comment) {
        // Mendapatkan komentar yang sudah ada (jika ada)
        const existingComments = localStorage.getItem('comments');

        // Memeriksa apakah ada komentar sebelumnya
        const comments = existingComments ? JSON.parse(existingComments) : [];

        // Menambahkan komentar baru ke daftar
        comments.push({ name, comment });

        // Menyimpan daftar komentar kembali ke localStorage
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    // Fungsi untuk memuat komentar yang sudah ada saat halaman dimuat
    function loadComments() {
        const existingComments = localStorage.getItem('comments');
        if (existingComments) {
            const comments = JSON.parse(existingComments);
            comments.forEach(comment => {
                displayComment(comment.name, comment.comment);
            });
        }
    }

    // Fungsi untuk menampilkan komentar di halaman
    function displayComment(name, comment) {
        const commentItem = document.createElement('div');
        commentItem.innerHTML = `<strong>${name}:</strong> ${comment}`;
        commentList.appendChild(commentItem);
    }
});

// Fungsi untuk menggulir ke bagian atas halaman
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll ke bagian atas
}

// Event listener untuk menampilkan/menyembunyikan tombol saat menggulir halaman
window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = 'block'; // Tampilkan tombol saat pengguna telah menggulir lebih dari 100px
    } else {
        scrollToTopBtn.style.display = 'none'; // Sembunyikan tombol jika tidak
    }
});


            // Navigation Buttons
            // const prevChapter = document.getElementById('prevChapter');
            // const nextChapter = document.getElementById('nextChapter');
            // const chapterSelect = document.getElementById('chapterSelect');

            // prevChapter.addEventListener('click', function() {
            //     // Logic untuk pindah ke chapter sebelumnya
            //     window.location.href = "KOMIK/KOMIK0.html"; // Ubah dengan link chapter sebelumnya
            // });

            // nextChapter.addEventListener('click', function() {
            //     // Logic untuk pindah ke chapter selanjutnya
            //     window.location.href = "KOMIK/KOMIK2.html"; // Ubah dengan link chapter selanjutnya
            // });

            // chapterSelect.addEventListener('change', function() {
            //     // Logic untuk pindah ke chapter yang dipilih
            //     const selectedChapter = chapterSelect.value;
            //     window.location.href = `KOMIK/${selectedChapter}.html`; // Ubah dengan pola link chapter Anda
            // });

            
        // });

        