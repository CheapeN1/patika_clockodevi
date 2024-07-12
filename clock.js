// Kullanıcıdan isim almak ve ekranda göstermek
let userName = prompt("Lütfen isminizi giriniz:");
document.getElementById("myName").innerText = userName;

// Saati ve tarihi göstermek için fonksiyon
function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.toLocaleDateString("tr-TR", { weekday: 'long' });
  let dayNumber = date.getDate();
  let month = date.toLocaleDateString("tr-TR", { month: 'long' });
  let year = date.getFullYear();

  // Saat ve dakikaları iki basamaklı yapmak için
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  let timeString = `${hours}:${minutes}:${seconds}`;
  let dateString = `${day}, ${dayNumber} ${month} ${year}`;

  document.getElementById('myClock').innerHTML = `${timeString} <br> ${dateString}`;

  setTimeout(showTime, 1000);
}

showTime();
