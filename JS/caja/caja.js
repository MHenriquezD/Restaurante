function cargar_facturas() {
    $.ajax({
        url: '../../php/caja/cargar_facturas.php',
        data: {},
        type: 'POST',
        dataType: 'json',

        success: function (data) {
            data_facturas = "";
            total = 0;
            for(var i = 0; i < data.length; i++){
                num_cod = btoa(data[i]["numero"]);
                total += data[i]["total"];
                data_facturas +=
                    "<tr>"+
                        "<td><a href='#'>"+data[i]["numero"]+"<a></td>"+
                        "<td>"+data[i]["cai"]+"</td>"+
                        "<td class='text-center'>"+data[i]["fecha"]+"</td>"+
                        "<td>"+data[i]["nombre"]+"</td>"+
                        "<td class='text-end'>L. <span class='Mask'>"+data[i]["total"].toFixed(2)+"</span></td>"+
                        "<td class='text-center'>"+
                            "<a href='#' onclick='cargar_factura(\""+num_cod+"\")'>"+
                                "<i class='fa-solid fa-file-pdf fa-2x text-danger'></i>"+
                            "</a>&nbsp;&nbsp;&nbsp;"+
                            "<a href='#' onclick='cargar_ticket(\""+num_cod+"\")'>"+
                                "<i class='fa-solid fa-receipt fa-2x text-secondary'></i>"+
                            "</a>"+
                        "</td>"+
                    "</tr>";
            }
            total = total.toFixed(2);
            $("#tbFacturas").html(data_facturas);
            $("#totalFacturas").html(total);
        },
        error: function (json) {
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            /*Swal.fire(
                'Bien!',
                'Conexión exitosa',
                'success'
            )
            //alert('Petición realizada');*/
        }
    });
}
function cargar_factura(n_fac){
    window.open('../../archivos/factura_pdf?dato='+n_fac, '_blank');
}
function cargar_ticket(n_fac){
    window.open('../../archivos/ticket?dato='+n_fac, '_blank');
}