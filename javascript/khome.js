  function hitungBiaya() {
    var jenisDesain = document.getElementById('jenisDesain').value;
    var material = document.getElementById('material').value;
    var luasRumah = document.getElementById('luasRumah').value;
    var biaya = 0;

    // Logika perhitungan biaya
    switch(jenisDesain) {
      case 'standar':
        biaya = luasRumah * 5000000;
        break;
      case 'premium':
        biaya = luasRumah * 10000000;
        break;
      case 'luxury':
        biaya = luasRumah * 15000000;
        break;
    }

    switch(material) {
      case 'kayu':
        biaya *= 1.2;
        break;
      case 'batu':
        biaya *= 1.3;
        break;
      case 'beton':
        biaya *= 1.5;
        break;
    }

    // Tampilkan hasil
    document.getElementById('hasilBiaya').innerHTML = 'Perkiraan Biaya: Rp ' + biaya.toLocaleString();
  }