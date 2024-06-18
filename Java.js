document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        speed: 800,
        loop: true,
        effect: 'slide',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 4000, // Waktu antara perpindahan slide (dalam milidetik)
            disableOnInteraction: false, // Lanjutkan autoplay setelah interaksi pengguna
        },
    });


// function scrollToSection(sectionId) {
//   const section = document.getElementById(sectionId);
//   section.scrollIntoView({ behavior: 'smooth' });
// }
  // Menginisialisasi Swiper
// var swiper = new Swiper('.swiper-container', {
//     // Konfigurasi lainnya...
//     loop: true, // Aktifkan loop untuk membuat slider berputar
//     on: {
//         slideChange: function () {
//             // Fungsi yang akan dipanggil setiap kali slide berubah
//             updateBackgroundImage();
//         },
//     },
// });

// // Fungsi untuk memperbarui gambar latar belakang sesuai dengan slide saat ini
// function updateBackgroundImage() {
//     // Dapatkan indeks slide saat ini
//     var currentSlideIndex = swiper.realIndex;
    
//     // Daftar gambar latar belakang yang sesuai dengan setiap slide
//     var backgroundImages = [
//         'url("/Gambar/YGNK.png")', // Ganti dengan gambar latar belakang untuk slide 1
//         'url("/Gambar/YGNK.png")', // Ganti dengan gambar latar belakang untuk slide 2
//         'url("/Gambar/ATEO4N.png")', // Ganti dengan gambar latar belakang untuk slide 3
//     ];

//     // Perbarui gambar latar belakang sesuai dengan slide saat ini
//     document.querySelector('.swiper-slide-active').style.backgroundImage = backgroundImages[currentSlideIndex];
// }


});
