class Pendaftar {
    constructor(nama, umur, uangSangu) {
        this.nama = nama
        this.umur = umur
        this.uangSangu = uangSangu
    }
}

const pendaftarList = []

document.getElementById("registrationForm").addEventListener("submit", async function (e) {
    e.preventDefault()

    const nama = document.getElementById("nama").value
    const umur = parseInt(document.getElementById("umur").value)
    const uangSangu = parseInt(document.getElementById("uangSangu").value)

    if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
        alert("Data tidak valid. Pastikan nama minimal 10 karakter, umur minimal 25 tahun, dan uang sangu antara 100 ribu hingga 1 juta.");
        return
    }

    const pendaftar = new Pendaftar(nama, umur, uangSangu)
    pendaftarList.push(pendaftar)

    document.getElementById("registrationForm").reset()

    updateListPendaftarTable()
});

function updateListPendaftarTable() {
    const tableBody = document.getElementById("listPendaftarTableBody")
    tableBody.innerHTML = ""

    const totalUmur = pendaftarList.reduce((total, pendaftar) => total + pendaftar.umur, 0)
    const totalUangSangu = pendaftarList.reduce((total, pendaftar) => total + pendaftar.uangSangu, 0)
    const rataRataUmur = totalUmur / pendaftarList.length
    const rataRataUangSangu = totalUangSangu / pendaftarList.length

    document.getElementById("averageUmur").textContent = rataRataUmur
    document.getElementById("averageUangSangu").textContent = rataRataUangSangu.toFixed(2)

    pendaftarList.forEach((pendaftar, index) => {
        const row = tableBody.insertRow()
        row.innerHTML = `
            <td>${pendaftar.nama}</td>
            <td>${pendaftar.umur}</td>
            <td>${pendaftar.uangSangu}</td>
        `
    });
}
