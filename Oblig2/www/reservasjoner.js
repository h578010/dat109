$(document).ready(function () {
    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    var options = {
        format: 'dd.mm.yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    };
    date_input.datepicker(options);
});

$('#saveReservation').on('click', (e) => {
    let fraDato = dateParser($('#fraDato')[0].value);
    let tilDato = dateParser($('#tilDato')[0].value);

   axios.post('leggTilReservasjon', {
       "kategori": $('#kategori')[0].value,
       "fraDato": fraDato.getTime(),
       "tilDato": tilDato.getTime()
   }).then((res) => {
        $('#reservasjoner').bootstrapTable('refresh')
   });
});

function dateParser(str) {
    let fromParts = str.split('.');
    return new Date(Date.UTC(fromParts[2], fromParts[1]-1, fromParts[0]));
}