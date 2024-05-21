// Tambahkan JavaScript untuk mendeteksi event scroll -->

  window.addEventListener('scroll', () => {
    const heroSection = document.getElementById('hero');
    const distanceToTop = heroSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(distanceToTop < windowHeight / 1.3) {
      // Tambahkan kelas animasi ketika elemen muncul di viewport
      heroSection.classList.add('animate__animated', 'animate__fadeIn');
    }
  });
