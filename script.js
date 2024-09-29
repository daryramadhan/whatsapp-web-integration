document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    var name = document.getElementById('name').value;
    var service = document.querySelector('input[name="service"]:checked').value;
    var address = document.getElementById('address').value;

    // Nomor WhatsApp yang akan dikirimkan pesan (tanpa tanda +)
    var phoneNumber = "6285810054004"; // ganti dengan nomor WhatsApp Business kamu

    // Format pesan yang diinginkan
    var message = `Halo, saya *${name}*.\n\n` +
                `Saya ingin memesan layanan *${service}*.\n\n` +
                `Alamat saya: ${address}.`;

    // Buat URL WhatsApp dengan pesan terformat
    var whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Redirect ke WhatsApp
    window.open(whatsappURL, '_blank');
});