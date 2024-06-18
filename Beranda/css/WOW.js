document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const chapters = document.querySelectorAll(".chapter");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        chapters.forEach(chapter => {
            const chapterText = chapter.textContent.toLowerCase();
            if (chapterText.includes(query)) {
                chapter.style.display = "flex";
            } else {
                chapter.style.display = "none";
            }
        });
    });
});
