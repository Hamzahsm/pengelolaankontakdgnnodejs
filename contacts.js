const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');
// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output: process.stdout,
// });

//membuat foler data jika belum ada
const dirPath = './data';

if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
};

//membuat file json jika belum  ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

//bungkus setiap pertanyaan dibungkus ke dalam promise

// const tulisPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject) => {
//         rl.question(pertanyaan, (nama)=> {
//             //tingal panggil / apa yang dilaukan jika promisnya selesai
//             resolve(nama);
//         });
//     });
// };

const simpanContact = (nama, noHP, email) => {
    //cara menyimpna contact 
    const contact = {
        nama: nama,
        noHP: noHP,
        email: email,
    };

    //baca isi file
    const file = fs.readFileSync('data/contacts.json', 'utf-8');

    const contacts = JSON.parse(file);

    //json perilakunya kayak array, bisa di push

    //cek duplicate apakah nama file di dalam json sama 
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if(duplikat) {
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain!'));

        return false;
    };

    //cek validasi email

    // if(email) {
    //     if(!validator.isEmail(email)){
    //         console.log(chalk.red.inverse.bold('Email tidak valid!'));

    //         return false;
    //     }
    // }

    // cek validasi nomor telepone

        if(!validator.isMobilePhone(noHP, 'id-ID')){
            console.log(chalk.red.inverse.bold('No HP Tidak valid!'));

            return false;
        }


    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log('Terimkasih Sudah Memasukan Data!');

    // rl.close();  

}; 

module.exports = { simpanContact};