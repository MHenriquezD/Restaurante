<?php 
include_once '../php/querys_log.php';
require '../vendor/autoload.php';
//require_once '../dompdf/autoload.inc.php';
use Luecano\NumeroALetras\NumeroALetras;

//$numero = $_GET["n_fac"];
$n_fac = $_GET["n_fac"];
$numero = explode('-',$n_fac);
$izquierda = $numero[0]."-".$numero[1]."-".$numero[2];
$derecha = $numero[3];
$productos = "";
$subtotal = 0;
$isv_15 = 0;
$isv_18 = 0;
$gravado_15 = $gravado_18 = 0;
$tipos_pago = "";

$sql = "
    SELECT 
        id, 
        nombre_empresa, 
        direccion, 
        correo, 
        rtn_empresa,
        telefono
    FROM informacion_empresa
";
$em = cargar_sql($sql);
if(isset($em[0][0])){
    $nombre = $em[0][1];
    $correo = $em[0][3];
    $direccion = $em[0][2];
    $rtn = $em[0][4];
    $telefono = substr($em[0][5],0,4)."-".substr($em[0][5],-4);
}

$sql = "
    SELECT
        id,
        numero,
        fecha,
        usuario,
        estado,
        desde,
        hasta,
        id_cliente,
        nombre_cliente,
        rtn_cliente,
        total_factura,
        suelto_factura,
        cai
    FROM
        facturas
    WHERE 
        numero = ".comillas($n_fac);
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    $id_factura = $rs[0][0];
    $fecha = strtotime($rs[0][2]);
    $rango = "Desde ".$rs[0][5]." hasta ".$rs[0][6];
    $fecha = date("d/m/Y H:i:s",$fecha);
    $fechas = explode(" ", $fecha);
    $fecha = $fechas[0];
    $hora_factura = $fechas[1];
    $horas = explode(":",$hora_factura);
    $hc = $horas[0]-12;
    if($hc >= 0){
        if($hc == 0){
            $hc = 12;
        }
        $hora = $hc.":".$horas[1].":".$horas[2]." p.m.";
    }else{
        $hora = $hora_factura." a.m.";
    }

    $desde = $rs[0][5];
    $hasta = $rs[0][6];
    $nombre_cliente = $rs[0][8];
    $rtn_cliente = $rs[0][9];
    $total_factura = $rs[0][10];
    $cai = $rs[0][12];
    $id_cliente = $rs[0][7];
    $sql = "
        SELECT
            id,
            id_factura,
            id_producto,
            nombre_producto,
            precio_unitario,
            precio_producto,
            total,
            cantidad,
            isv
        FROM
            factura_detalle
        WHERE
            id_factura =".comillas($id_factura);
    $pr = cargar_sql($sql);
    if(isset($pr[0][0])){
        foreach($pr as $prod){
            $sql = "SELECT descripcion, isv FROM productos WHERE id =".$prod[2];
            $prd = cargar_sql($sql);
            $subtotal += $prod[4]*$prod[7];
            if($prd[0][1] == 1){
                $isv_15 += $prod[8]*$prod[7];
                $gravado_15 += $prod[4]*$prod[7];
            }elseif($prd[0][1] == 2){
                $isv_18 += $prod[8]*$prod[7];
                $gravado_18 += $prod[4]*$prod[7];
            }
            $productos .= "
                <tr>
                    <td>
                        ".$prod[7]."
                    </td>
                    <td >
                        ".$prd[0][0]."
                    </td >
                    <td class='final'>
                        L. <span class='Money'>".number_format($prod[5],2,".",",")."</span>
                    </td>
                    <td class='final'>
                        L. <span class='Money'>".number_format($prod[6],2,".",",")."</span>
                    </td>
                </tr>
            ";
        }
        $subtotal = number_format($subtotal, 2, '.', ',');
        $isv_15 = number_format($isv_15, 2, '.', ',');
        $isv_18 = number_format($isv_18, 2, '.', ',');
        $gravado_15 = number_format($gravado_15, 2, '.', ',');
        $gravado_18 = number_format($gravado_18, 2, '.', ',');
        $total_factura = number_format($total_factura,2,".",",");
        $total_letras = new NumeroALetras();
        $total_letras = $total_letras->toWords($total_factura);
        $sql = "SELECT tipo_pago, total_pago, suelto FROM tipo_pago WHERE id_factura =".$id_factura;
        $tp = cargar_sql($sql);
        if(isset($tp[0][0])){
            foreach($tp as $tipos){
                if($tipos[0] == 1){
                    $pago_efectivo = "
                        <tr class='final'>
                            <td colspan='3' >Efectivo Recibido</td>
                            <td>L. ".number_format($tipos[1],2,".",",")."</td>
                        </tr>
                        <tr class='final'>
                            <td colspan='3' class='final'>Cambio Efectivo</td>
                            <td>L. ".number_format($tipos[2],2,".",",")."</td>
                        </tr>
                    ";
                }else if($tipos[0]==2){
                    if($tipos[1] == 0){
                        $pago_tarjeta =" 
                        ";
                    }else{
                        $pago_tarjeta ="    
                            <tr class='final'>
                                <td colspan='3'>Pago en tarjeta</td>
                                <td> L.".number_format($tipos[1],2,".",",")."</td>
                            </tr>
                        ";
                    } 
                }
            }
        }
    }
}


$html = '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factura #'.$n_fac.'</title>
    <link rel="icon" type="image/png" sizes="16x16" href="../img/iconos/logo.ico">
    <link href="../CSS/forms_styles.css" rel="stylesheet">
    <link href="../fontawesome/css/all.min.css" rel="stylesheet">
    <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../select2/dist/css/select2.min.css" rel="stylesheet">
    <link href="../jqueryUI/jquery-ui.min.css" rel="stylesheet">
    <style>
        @font-face { font-family: Roboto; src: url("chrome-extension://mcgbeeipkmelnpldkobichboakdfaeon/css/Roboto-Regular.ttf"); }
        body {
            font-size: 14px !important;
            /*width: 25%;*/
        }
        .cabecera {
            text-align: center;
        }
        .bd {
            border-bottom: double gray;
        }
        .negrita {
            font-weight: bold;
        }
        table {
            width: 100%;
        }
        .final {
            text-align: right;
        }
        .cuerpo {
            border: 1px solid black;
        }
        .bordes {
            border-bottom: 1px solid gray;
            border-top: 1px solid gray;
        }
        @page {
            margin: 10px;
        }
    </style>
</head>
<body>
    <div width="100%">
        <div style="border: 1px solid #8C8C8C; margin 10px; border-radius: 15px;">
            <table>
                <tr>
                    <td>
                    </td>
                    <td>
                        <div style="margin: 10px;">
                            <span>'.$nombre.'</span><br>
                            <span>'.$direccion.'</span><br>
                            <span>RTN: '.$rtn.'</span><br>
                            <span>'.$telefono.'</span><br>
                            <span>'.$correo.'</span><br>
                            <span>Original Cliente / Copia Obligado Tributario</span><br><br>
                            <span>Factura</span><br>
                            <span>'.$n_fac.'</span><br>
                            <span>CAI #</span><br>
                            <span>'.$cai.'</span>
                        </div>
                    </td>
                    <td valign="top">
                        <div class="cabecera" valign="top">
                            FACTURA:<br>
                            No. '.$izquierda.'<span style="color: #c00">'.$derecha.'</span>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        

        

        <div  class="cliente m-3">
            <table>
                <tbody>
                    <tr>
                        <td class="negrita">ID#</td>
                        <td>'.$id_factura.'</td>
                    </tr>
                    <tr>
                        <td class="negrita">RTN</td>
                        <td>'.$rtn_cliente.'</td>
                    </tr>
                    <tr>
                        <td class="negrita">Nombre</td>
                        <td>'.$nombre_cliente.'</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <table>
                                <tr>
                                    <td class="negrita">Fecha</td>
                                    <td>'.$fecha.'</td>
                                    <td class="negrita">Hora</td>
                                    <td>'.$hora.'</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table style="border-top: 2px solid black;" id="tbProductos">
                <thead>
                    <tr class="cabecera bd">
                        <th class="bd" width="10%">Cant.</th>
                        <th width="45%">Descripción</th>
                        <th width="22.5%">P.U.</th>
                        <th width="22.5%">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    '.$productos.'
                    <tr>
                        <td colspan="3"></td>
                        <td class="bd"></td>
                    </tr>
                </tbody>
                <tfoot >
                    <tr class="final">
                        <td colspan="3">Subotal:</td>
                        <td colspan="3">L. '.$subtotal.'</td>
                    </tr>
                    <tr class="final">
                        <td colspan="3">Gravado ISV 15%:</td>
                        <td colspan="3" class="Money">L. '.$gravado_15.'</td>
                    </tr>
                    <tr class="final">
                        <td colspan="3">Gravado ISV 18%:</td>
                        <td colspan="3" class="Money">L. '.$gravado_18.'</td>
                    </tr>
                    <tr class="final">
                        <td colspan="3">ISV 15%:</td>
                        <td colspan="3" class="Money">L. '.$isv_15.'</td>
                    </tr>
                    <tr class="final">
                        <td colspan="3">ISV 18%:</td>
                        <td colspan="3" class="Money">L. '.$isv_18.'</td>
                    </tr>
                    <tr class="final">
                        <td colspan="3">Total:</td>
                        <td colspan="3" ><span class="Money">L. '.$total_factura.'</span></td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                    '.$pago_tarjeta.'
                    '.$pago_efectivo.'
                    
                </tfoot>
            </table>
            <table class="cabecera" >
                <tbody>
                    <tr><td>&nbsp;</td></tr>
                    <tr>
                        <td class="cabecera">
                            '.$total_letras.' LEMPIRAS
                        </td>
                    </tr>
                    <tr>
                        <td>Rango Autorizado: <br> '.$rango.'</td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                    <tr><td><strong>La factura es derecho de todos, exígala.</strong></td></tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>';



/*echo $html;
/**/
use Dompdf\Dompdf;

// instantiate and use the dompdf class
$dompdf = new Dompdf();

// (Optional) Setup the paper size and orientation
$dompdf->setPaper('A4', 'portrait');

$dompdf->loadHtml($html);


// Render the HTML as PDF
$dompdf->render();
$dompdf->stream("Factura $n_fac.pdf", ['Attachment' => false]);
// Output the generated PDF to Browser 
//$dompdf->stream();
/**/