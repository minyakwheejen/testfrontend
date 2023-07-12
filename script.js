const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// navbar burger //
burger.addEventListener('click', function(){
  navLinks.classList.toggle('show');
  burger.classList.toggle('toggle');
});

// slider

let slideIndex = 0; //inisialisasi nilai 0 
showSlide(slideIndex); //menampilkan slide awal

function changeSlide(n) { 
  showSlide(slideIndex += n); //menampilkan slide sesuai nilai baru
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide"); //mendapatkan elemen berdasarkan kelas slide
  if (n >= slides.length) { //jika n bernilai melebihi atau sama dengan jumlah slide, maka sudah ada di slide terakhir
    slideIndex = 0; //dan kembali menampilkan slide pertama 
  } else if (n < 0) { //bergeser ke slide sebelumnya pada saat berada di slide pertama
    slideIndex = slides.length - 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.transform = "translateX(100%)"; //mengubah display menjadi none
  }
  
  slides[slideIndex].style.display = "block";
  slides[slideIndex].style.transform = "translateX(0)"; //mengubah display menjadi block
}
