let ubah = document.getElementById('nsh1');

document.getElementById('btn').addEventListener("mousedown", function(event) {
    ubah.innerHTML = ("Belajar yang bener!!!")
})

document.getElementById('key').addEventListener("keypress", function(event) {
    ubah.innerHTML = ("Kalo capek istirahat")
})

document.getElementById('radio1').addEventListener("change", function(event) {
    ubah.innerHTML = document.getElementById('radio1').value
})

document.getElementById('radio2').addEventListener("change", function(event) {
    ubah.innerHTML = document.getElementById('radio2').value
})

document.getElementById('radio3').addEventListener("change", function(event) {
    ubah.innerHTML = document.getElementById('radio3').value
})
