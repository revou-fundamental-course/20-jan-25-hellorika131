const display = document.getElementById("display");

// Fungsi untuk menambahkan angka atau operator ke display
function appendToDisplay(input) {
    if (input === '+/-') {
        // Mengubah tanda angka terakhir jika ada
        if (display.value && !isNaN(display.value[display.value.length - 1])) {
            display.value = display.value[0] === '-' ? display.value.slice(1) : '-' + display.value;
        }
    } else {
        display.value += input;  // Menambahkan input ke display
    }
}

// Fungsi untuk menghapus semua angka pada display
function clearDisplay() {
    display.value = "";
}

// Fungsi untuk menghapus karakter terakhir pada display
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

// Fungsi untuk menghitung hasil dari ekspresi pada display
function calculateDisplay() {
    try {
        // Menangani % sebagai persentase dari angka terakhir
        let expression = display.value;
        if (expression.includes('%')) {
            // Misalnya 20% akan dihitung sebagai 20/100
            expression = expression.replace(/(\d+)%/g, (match, p1) => p1 / 100);
        }

        // Menilai ekspresi matematika menggunakan eval()
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";  // Menampilkan "Error" jika ada masalah dengan ekspresi
    }
}
