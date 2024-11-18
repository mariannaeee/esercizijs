let person = {
    firstName : 'Max',
    secondName : 'Eisenhardt',
    age : '124',
    sayhello : function (){
        console.log (`Ciao, mi chiamo ${this.firstName} ${this.secondName}, ho ${this.age}, creo campi magnetici attraverso i quali posso manipolare i metalli`)
    }
};

person.sayhello()

//eserciio 2
let rubrica = {
    'contacts': [
        {'nome': 'Xavier', 'telefono': '3331111111'},
        {'nome': 'Wolverine', 'telefono': '3332222222'},
        {'nome': 'Mystica', 'telefono': '3333333333'},
        {'nome': 'Tempesta', 'telefono': '3334444444'}
    ],
    //1
    showContacts: function () {
        console.log('Lista contatti');
        this.contacts.forEach(contact => {
            console.log(`Nome: ${contact.nome}, Telefono: ${contact.telefono}`);
        });
    },
    //2
    showContact: function (nome) {
        const contact = this.contacts.find(contact => contact.nome === nome)
        if (contact) {
            console.log(`Nome : ${contact.nome}, Telefono ${contact.telefono}`);
        }else {
            console.log(`Contatto con nome "${nome}" non trovato.`);
        }
    },
    //3
    deleteContact : function (nome) {
        const index = this.contacts.findIndex(contact => contact.nome === nome);
        if (index !== -1) {
            this.contacts.splice( index, 1);
            console.log(`Contatto "${nome}" eliminato`);
        } else {
            console.log(`Contatto con nomr "${nome}" non trovato.`)
        }
    },
    //4
    addContact: function(nome, telefono) {
        const contattoEsistente = this.contacts.find(contact => contact.nome === nome);
        if(contattoEsistente) {
            console.log(`Contatto con nome "${nome}" già esistente`);
        } else {
            this.contacts.push({ nome: nome, telefono: telefono});
            console.log(`Contatto "${nome}" aggiiunto.`);
        }
    },
    //5
    editContact: function (nome, nuovoNome, nuovoTelefono) {
        const contact = this.contacts.find(contact => contact.nome === nome);
        if (contact) {
            contact.nome = nuovoNome || contact.nome;
            contact.telefono = nuovoTelefono || contact.telefono;
            console.log(`Contatto "${nome}" modificato.`);
        }else {
            console.log(`Contatto con nome "${nome}" non trovato.`)
        }
    }
};

rubrica.showContacts();
rubrica.showContact('Tempesta');
rubrica.addContact('Rogue', 3335555555 );
rubrica.editContact('Xavier', 'ProfessorX', '3339999999');

//mostra contatti dopo le modifiche
rubrica.showContacts();

//elimina contatto
rubrica.deleteContact('Wolverine');

//mostra contatti dopo eliminazione
rubrica.showContacts();

// Funzione per ottenere un colore casuale RGB
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Bottone 1 - Cambia il colore del testo dei paragrafi
document.getElementById('cambiaColoreBtn').addEventListener('click', function() {
    const paragrafi = document.querySelectorAll('p');
    paragrafi.forEach(paragrafo => {
        paragrafo.style.color = getRandomColor(); // Imposta un colore casuale per ogni paragrafo
    });
});

// Bottone 2 - Metti il testo dei paragrafi in grassetto
document.getElementById('grassettoBtn').addEventListener('click', function() {
    const paragrafi = document.querySelectorAll('p');
    paragrafi.forEach(paragrafo => {
        paragrafo.style.fontWeight = 'bold'; // Rende il testo in grassetto
    });
});

// Bottone 3 - Scompari/Ricompari i paragrafi
document.getElementById('toggleParagrafiBtn').addEventListener('click', function() {
    const paragrafi = document.querySelectorAll('p');
    paragrafi.forEach(paragrafo => {
        // Se il paragrafo è visibile, lo nasconde, altrimenti lo rende visibile
        if (paragrafo.style.display === 'none') {
            paragrafo.style.display = 'block';
        } else {
            paragrafo.style.display = 'none';
        }
    });
});
 // Funzione per creare l'articolo
 document.getElementById('creaArticoloBtn').addEventListener('click', function() {
    // Ottieni i valori dagli input
    const titolo = document.getElementById('titolo').value;
    const paragrafo = document.getElementById('paragrafo').value;

    // Se non sono vuoti, crea l'articolo
    if (titolo.trim() !== '' && paragrafo.trim() !== '') {
        // Ottieni la data corrente
        let date = new Date();
        let formatDate = date.toLocaleDateString();

        // Crea l'HTML dell'articolo
        const articoloHTML = `
            <div class="articolo">
                <h2>${titolo}</h2>
                <p>${paragrafo}</p>
                <div class="data">Pubblicato il: ${formatDate}</div>
            </div>
        `;

        // Aggiungi l'articolo alla pagina
        document.getElementById('articoloContainer').innerHTML = articoloHTML;
    } else {
        alert('Per favore, inserisci un titolo e un contenuto per l\'articolo.');
    }
});



   