window.onload = function() {
    alert("Selamat datang di Perpustakaan Filtri! Nikmati berbagai koleksi dan konten yang saya bagikan.");
};
 <div class="cookie-banner" id="cookie-banner">
    Situs ini menggunakan cookie untuk meningkatkan pengalaman pengguna. 
    <button onclick="acceptCookies()">Saya Setuju</button>
</div>

<script>
    function acceptCookies() {
        localStorage.setItem("cookieAccepted", "true");
        document.getElementById("cookie-banner").style.display = "none";
    }

    window.onload = function () {
        if (!localStorage.getItem("cookieAccepted")) {
            document.getElementById("cookie-banner").style.display = "block";
        }
    };
</script>
</body>
</html> 
