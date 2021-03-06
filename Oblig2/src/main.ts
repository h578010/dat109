import {Bil, Bilkategori} from './Bil';
import {Bilutleiesystem} from './Bilutleiesystem';
import express from 'express';
import bodyParser from 'body-parser';

let bs = new Bilutleiesystem();
let epp = express();
epp.use(bodyParser.json());
epp.use(express.static('www'));

epp.post('/leggTilBil', (req, res) => {
    let bil = req.body;
    console.log('Legger til ny bil:');
    console.dir(bil);
    bs.registrerNyBil(bil.registreringsnummer, bil.merke, bil.modell, bil.farge, bil.kategori);
    res.sendStatus(200);
});

epp.get('/listBiler', async (req, res) => {
    let biler = await bs.listAlleBiler();
    res.send(biler);
});

epp.post('/leggTilKontor', (req, res) => {
    let kontor = req.body;
    console.log('Legger til nytt kontor:');
    console.dir(kontor);
    bs.registrerKontor(kontor.navn, kontor.adresse, kontor.postnummer, kontor.poststed, kontor.telefon);
    res.sendStatus(200);
});

epp.get('/listKontorer', async (req, res) => {
    let kontorer = await bs.listAlleKontorer();
    res.send(kontorer);
});

epp.post('/leggTilReservasjon', (req, res) => {
    let reservasjon = req.body;
    console.dir(reservasjon);
    bs.reserverBil(reservasjon.kategori, reservasjon.fraDato, reservasjon.tilDato);
    res.sendStatus(200);
});

epp.get('/listReservasjoner', async (req, res) => {
    let reservasjoner = await bs.listReservasjoner();
    res.send(reservasjoner);
});

epp.get('/q', async (req, res) => {
    let fraDato = dateParser(req.query.fromDate);
    let tilDato = dateParser(req.query.toDate);
    let utleideBiler = await bs.antallUtleideBiler(fraDato, tilDato, req.query.category);
    let eksisterendeBiler = await bs.antallBiler(req.query.category);
    res.send({
        ledige:eksisterendeBiler-utleideBiler
    });
});

function dateParser(str: string): Date {
    let fromParts = str.split('.');
    return new Date(Date.UTC(parseInt(fromParts[2]), parseInt(fromParts[1])-1, parseInt(fromParts[0])));
}


epp.listen(9000);

//bs.registrerNyBil('AB123456', 'Toyota', 'Corolla', 'svart', Bilkategori.B);
//bs.registrerKontor('Fyllingsdalen', 'Helgeplasset 25', 5148, 'Fyllingsdalen', 91643839);
//bs.slettBil('AB123456');


