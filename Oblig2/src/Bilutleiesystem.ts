import {Bilkategori, Bil} from './Bil';
import {Kontor} from './Kontor';
import {Reservasjon} from './Reservasjon';
import * as sqlite from 'sqlite3';

export class Bilutleiesystem {
    db: sqlite.Database;

    constructor() {
        this.db = new sqlite.Database('databasen.db');
        this.databaseSetup();
    }

    databaseSetup() {
        console.log("Oppretter DB");
        this.db.run('CREATE TABLE IF NOT EXISTS selskap (\
            navn TEXT, \
            adresse TEXT, \
            postnummer INTEGER, \
            poststed TEXT, \
            telefon INTEGER);')
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
            id INTEGER PRIMARY KEY AUTOINCREMENT,\
            kategori TEXT, \
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

    reserverBil(kategori: Bilkategori, fraDato: number, tilDato: number) {
        let sqlReserver ='INSERT INTO reservasjoner (kategori, fraDato, tilDato) \
            VALUES("'+kategori+'","'+fraDato+'","'+tilDato+'")'
        this.db.run(sqlReserver);
    }

    async antallUtleideBiler(fraDato: Date, tilDato: Date, kategori: Bilkategori): Promise<number> {
        let sql = 'SELECT COUNT(*) AS carcount FROM reservasjoner WHERE tilDato >' +fraDato.getTime()+ ' AND fraDato < '+tilDato.getTime();
        return new Promise<number>((resolve, reject) => {
            this.db.all(sql, (error, rows) => {
                if (error) {
                    console.log("Something went wrong...");
                    console.dir(error);
                    console.log(sql);
                    reject();
                } else {
                    console.log("All is good.");
                    resolve(rows[0].carcount);
                }
            });
        })
    }
    async antallBiler(kategori: string): Promise<number> {
        let sql = 'SELECT COUNT(*) AS carcount FROM biler WHERE kategori = "'+kategori+'"';
        return new Promise<number>((resolve, reject) => {
            this.db.all(sql, (error, rows) => {
                if (error) {
                    console.log("Something went wrong...");
                    console.dir(error);
                    console.log(sql);
                    reject();
                } else {
                    console.log("All is good.");
                    resolve(rows[0].carcount);
                }
            });
        })
    }
    
    private fromUTCToDate(num:number) {
        let dato = new Date();
        dato.setTime(num);
        let result = "";
        result += dato.getDate()+".";
        result += (dato.getMonth()+1)+".";
        result += dato.getFullYear();
        return result;
    }

    async listReservasjoner(): Promise<Reservasjon[]> {
        return new Promise<Reservasjon[]>((resolve, reject) => {
            this.db.all('SELECT * FROM reservasjoner', (error, rows) => {
                if (error) {
                    console.log("Something went wrong...");
                    reject();
                } else {
                    console.log("All is good.");
                    let reservasjoner:Reservasjon[] = [];
                    rows.forEach((row) => {
                        let reservasjon = {
                            id:row.id,
                            kategori:row.kategori,
                            fraDato:this.fromUTCToDate(row.fraDato),
                            tilDato:this.fromUTCToDate(row.tilDato)
                        }
                        reservasjoner.push(reservasjon);
                    })
                    resolve(reservasjoner);
                }
            });
        })
    }
}

