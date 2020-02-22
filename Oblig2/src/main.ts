import {Bil, Bilkategori} from './Bil';
import {Bilutleiesystem} from './Bilutleiesystem';
import express from 'express';
import bodyParser from 'body-parser';

let bs = new Bilutleiesystem();
let epp = express();
epp.use(bodyParser.json());

epp.get('/', (req, res) => {
    res.send("Hallaien!");
});

epp.post('/leggTilBil', (req, res) => {
    let bil = req.body;
    console.log('Legger til ny bil:');
    console.dir(bil);
    bs.registrerNyBil(bil.regnr, bil.merke, bil.modell, bil.farge, bil.utleiegruppe);
    res.sendStatus(200);
})







epp.listen(9000);





//bs.registrerNyBil('AB123456', 'Toyota', 'Corolla', 'svart', Bilkategori.B);
//bs.registrerKontor('Fyllingsdalen', 'Helgeplasset 25', 5148, 'Fyllingsdalen', 91643839);

//bs.slettBil('AB123456');


