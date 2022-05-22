function sayiUret(ustlimit = 59) {
    return Math.ceil(Math.random() * ustlimit)
}

var sayi1 = sayiUret(1000)
var sayi2 = sayiUret()
var sayi3 = sayiUret()
var sayi4 = sayiUret()
var sayi5 = sayiUret()
var sayi6 = sayiUret()

console.log("Kolon: " + "\n" + sayi1 + "\n" + sayi2 + "\n" + sayi3 + "\n" + sayi4 + "\n" + sayi5 + "\n" + sayi6)

