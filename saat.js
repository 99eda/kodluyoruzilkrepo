// JavaScript source code
// DOM elementlerinin seçilmesi ve deðiþkenlere atanmasý
const myName = document.getElementById("myName")
const myClock = document.getElementById("myClock")

// Sayfa yüklenirken Kullanýcýdan adýný isteyip DOM'a yazan fonksiyon
function askName(){
    const getName = prompt("Adinizi Giriniz")
    myName.innerText= getName
}

function showTime(){
    //function ile zaman bilgilerini yazdýrdýk

    let date = new Date() //tarih bilgisi
    let h = date.getHours() //saat bilgisi
    let m = date.getMinutes()//dakika bilgisi
    let s = date.getSeconds()//saniye bilgisi
    let day = date.getDay()//gün bilgisi

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

//Gün bilgisine göre hangi gün olduðunu belirler

switch (day){
    case 1:
        day= "Pazartesi"
        break    
    case 2:
        day= "Salý"
        break
    case 3:
        day= "Çarþamba"
        break
    case 4:
        day= "Perþembe"
        break
    case 5:
        day= "Cuma"
        break
    case 6:
        day= "Cumartesi"
        break
    case 0:
        day= "Pazar"
        break
}

writeTime(day,h,m,s,)//gün saat ve saniye bilgilerini yazdýrma sýrasý

}

//DOM'a Saati ve Günü Yazar
function writeTime(h,m,s,day){
    let time = `${h}:${m}:${s} ${day}`
    myClock.innerText = time;
}

askName()
showTime()