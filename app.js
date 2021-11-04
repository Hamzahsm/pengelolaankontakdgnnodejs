// mengambil argumen dari comman line 

const yargs = require('yargs');
const contacts = require('./contacts');


yargs.command({
    command : 'add',
    describe: 'menambahkan contact baru',
    builder : {
        nama : {
            describe: 'Nama Lengkap',
            demandOption : true,
            type: 'string',
        },
        email : {
            describe: 'Email',
            demandOption : false,
            type: 'string',
        },
        noHP : {
            describe: 'noHP',
            demandOption: true,
            type: 'string',
        },
    },

    handler: function (argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
        
    },
});


yargs.parse();

