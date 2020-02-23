import {Bilkategori, Bil} from './Bil';
import {Kontor} from './Kontor';
import * as sqlite from 'sqlite3';

export class Bilutleiesystem {
    db: sqlite.Database;

    constructor() {
        this.db = new sqlite.Database('databasen.db');
        this.databaseSetup();
    }

    databaseSetup() {
        console.log("Oppretter DB");
        this.db.run('CREATE TABLE IF NOT EXISTS kontorer (\
            id INTEGER PRIMARY KEY AUTOINCREMENT,\
            navn TEXT, \
            adresse TEXT, \
            postnummer INTEGER, \
            poststed TEXT, \
            telefon INTEGER);')

        this.db.run('CREATE TABLE IF NOT EXISTS biler (\
            registreringsnummer TEXT PRIMARY KEY,\
            merke TEXT, \
            modell TEXT, \
            farge TEXT, \
            kategori TEXT);')

        this.db.run('CREATE TABLE IF NOT EXISTS reservasjoner (\
            kategori TEXT PRIMARY KEY,\
            fraDato TEXT, \
            tilDato TEXT);')
    }

    registrerNyBil(regnr: string, merke: string, modell: string, farge: string, kategori: Bilkategori) {
        let sqlBil ='INSERT INTO biler (registreringsnummer, merke, modell, farge, kategori) \
        VALUES("'+regnr+'","'+merke+'","'+modell+'","'+farge+'","'+kategori+'")'
        this.db.run(sqlBil);
    }
    slettBil(regnr: string) {
        this.db.run('DELETE FROM biler WHERE registreringsnummer = "'+regnr+'"');
    }

    async listAlleBiler(): Promise<Bil[]> {
        return new Promise<Bil[]>((resolve, reject) => {
            this.db.all('SELECT * FROM biler', (error, rows) => {
                if (error) {
                    console.log("Something went wrong...");
                    reject();
                } else {
                    console.log("All is good.");
                    resolve(rows);
                }
            });
        })
    }

    registrerKontor(navn: string, adr: string, pnr: number, psted: string, telefon: number) {
        let kontor = null;
        let sqlKontor ='INSERT INTO kontorer (navn, adresse, postnummer, poststed, telefon) \
            VALUES("'+navn+'","'+adr+'","'+pnr+'","'+psted+'","'+telefon+'")'
        this.db.run(sqlKontor, (error) => {
            if (error) {
                console.log("Something went wrong...");
                return null;
            } else {
                //console.log("Ny id er:" + this.lastID)
                kontor = new Kontor(navn, adr, pnr, psted, telefon);
                return kontor;
            }
        });
    }
    async listAlleKontorer(): Promise<Kontor[]> {
        return new Promise<Kontor[]>((resolve, reject) => {
            this.db.all('SELECT * FROM kontorer', (error, rows) => {
                if (error) {
                    console.log("Something went wrong...");
                    reject();
                } else {
                    console.log("All is good.");
                    resolve(rows);
                }
            });
        })
    }

    reserverBil(kategori: Bilkategori, fraDato: Date, tilDato: Date) {
        let fraEpoch = fraDato.getTime;
        let tilEpoch = tilDato.getTime;
        let sqlReserver ='INSERT INTO reservasjoner (kategori, fraDato, tilDato) \
            VALUES("'+kategori+'","'+fraEpoch+'","'+tilEpoch+'")'
    }

    visLedigeBiler(kategori: Bilkategori, fraDato: Date, tilDato: Date) {
        let fraEpoch = fraDato.getTime;
        let tilEpoch = tilDato.getTime;

    }
}

