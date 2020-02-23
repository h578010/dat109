function test() {
    console.log('Tester...');
    axios.get('http://localhost:9000/listBiler')
        .then((response) => {
            console.dir(response.data);
            let listen = document.getElementById("listen");
            response.data.forEach(element => {
                let para = document.createElement("li");
                let node = document.createTextNode(element.registreringsnummer);
                para.appendChild(node);
                listen.appendChild(para);
            });
        })
}

$('#saveCar').on('click', (e) => {
    console.log("Lagrer" + $('#registreringsnummer')[0].value);
    
   axios.post('leggTilBil', {
       "registreringsnummer": $('#registreringsnummer')[0].value,
       "merke": $('#merke')[0].value,
       "modell": $('#modell')[0].value,
       "farge": $('#farge')[0].value,
       "kategori": $('#kategori')[0].value
   }).then((res) => {
        $('#biler').bootstrapTable('refresh')
   });
});

$('#saveOffice').on('click', (e) => {
    console.log("Lagrer" + $('#navn')[0].value);
    
   axios.post('leggTilKontor', {
       "navn": $('#navn')[0].value,
       "adresse": $('#adresse')[0].value,
       "postnummer": $('#postnummer')[0].value,
       "poststed": $('#poststed')[0].value,
       "telefon": $('#telefon')[0].value
   }).then((res) => {
        $('#kontorer').bootstrapTable('refresh')
   });
});