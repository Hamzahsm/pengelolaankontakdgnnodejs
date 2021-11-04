const contacts = require('./contacts.js');
//varibel fungsi utama 

const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukkan nama anda : ');
    const noHP = await  contacts.tulisPertanyaan('Masukkan noHP anda :');
    const email = await contacts.tulisPertanyaan('Masukkan Email anda :');

    //ambil dari module
    contacts.simpanContact(nama,noHP,email);

    };
main(); 
