// JavaScript source code
// DOM elementlerinin se�ilmesi ve de�i�kenlere atanmas�
const myName = document.getElementById("myName")
const myClock = document.getElementById("myClock")

// Sayfa y�klenirken Kullan�c�dan ad�n� isteyip DOM'a yazan fonksiyon
function askName(){
    const getName = prompt("Adinizi Giriniz")
    myName.innerText= getName
}

function showTime(){
    //function ile zaman bilgilerini yazd�rd�k

    let date = new Date() //tarih bilgisi
    let h = date.getHours() //saat bilgisi
    let m = date.getMinutes()//dakika bilgisi
    let s = date.getSeconds()//saniye bilgisi
    let day = date.getDay()//g�n bilgisi

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

//G�n bilgisine g�re hangi g�n oldu�unu belirler

switch (day){
    case 1:
        day= "Pazartesi"
        break    
    case 2:
        day= "Sal�"
        break
    case 3:
        day= "�ar�amba"
        break
    case 4:
        day= "Per�embe"
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

writeTime(day,h,m,s,)//g�n saat ve saniye bilgilerini yazd�rma s�ras�

}

//DOM'a Saati ve G�n� Yazar
function writeTime(h,m,s,day){
    let time = `${h}:${m}:${s} ${day}`
    myClock.innerText = time;
}

askName()
showTime()