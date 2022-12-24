<?php 
include_once '../php/querys_log.php';
require '../vendor/autoload.php';
require_once '../libs/dompdf/autoload.inc.php';
use Luecano\NumeroALetras\NumeroALetras;

$sql = "
    SELECT 
        logo,
        marca
    FROM 
        logo
    WHERE 
        id = 1
";
$rs = cargar_sql($sql);
if(isset($rs)){
    $logo = base64_encode($rs[0][0]);
    $marca = base64_encode($rs[0][1]);
}
//$logo = str_replace("archivos/factura_pdf.php", "img/principal/logo.png", $logo);
$logo = "data:image/png;base64," . $logo;
//$marca = $rs[0][1];
//$marca = str_replace("archivos/factura_pdf.php", "img/principal/logo.png", $marca);
$marca = "data:image/png;base64," . $marca;

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
    $total_factura2 = $rs[0][10];
    echo $total_factura2;
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
        $cant_prod = 0;
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
                    <td  style='border-right: 1px solid #8C8C8C; height: 17px;'>
                        &nbsp;".$prod[7]."
                    </td>
                    <td style='border-right: 1px solid #8C8C8C; height: 17px;'>
                        &nbsp;".$prd[0][0]."
                    </td'>
                    <td class='final' style='border-right: 1px solid #8C8C8C; height: 17px;'>
                        L. <span class='Money'>".number_format($prod[5],2,".",",")."&nbsp;</span>
                    </td>
                    <td class='final'>
                        L. <span class='Money'>".number_format($prod[6],2,".",",")."&nbsp;</span>
                    </td>
                </tr>
            ";
            $cant_prod ++;
        }
        $subtotal = number_format($subtotal, 2, '.', ',');
        $isv_15 = number_format($isv_15, 2, '.', ',');
        $isv_18 = number_format($isv_18, 2, '.', ',');
        $gravado_15 = number_format($gravado_15, 2, '.', ',');
        $gravado_18 = number_format($gravado_18, 2, '.', ',');
        $total_factura = number_format($total_factura,2,".",",");
        $total_letras = new NumeroALetras();
        $total_letras = $total_letras->toWords($total_factura2, 2, 'LEMPIRAS', 'CENTAVOS');
        $sql = "SELECT tipo_pago, total_pago, suelto FROM tipo_pago WHERE id_factura =".$id_factura;
        $tp = cargar_sql($sql);
        if(isset($tp[0][0])){
            foreach($tp as $tipos){
                if($tipos[0] == 1){
                    if($tipos[1] == 0){
                        $pago_efectivo = "";
                    }else{
                        $pago_efectivo = "
                            <tr class='final'>
                                <td width='50%' colspan='3' >Efectivo Recibido&nbsp;</td>
                                <td width='50%'>L. ".number_format($tipos[1],2,".",",")."&nbsp;</td>
                            </tr>
                            <tr class='final'>
                                <td width='50%' colspan='3' class='final'>Cambio Efectivo&nbsp;</td>
                                <td width='50%'>L. ".number_format($tipos[2],2,".",",")."&nbsp;</td>
                            </tr>
                        ";
                    }
                }else if($tipos[0]==2){
                    if($tipos[1] == 0){
                        $pago_tarjeta =" 
                        ";
                    }else{
                        $pago_tarjeta ="    
                            <tr class='final'>
                                <td width='50%' colspan='3'>Pago en tarjeta&nbsp;</td>
                                <td width='50%'> L.".number_format($tipos[1],2,".",",")."&nbsp;</td>
                            </tr>
                        ";
                    } 
                }
            }
            $datos_pago = '
                <tr class="final">
                    <td width="50%" colspan="3">Subotal:&nbsp;</td>
                    <td width="50%" >L. '.$subtotal.'&nbsp;</td>
                </tr>
                <tr class="final">
                    <td width="50%" colspan="3">Gravado ISV 15%:&nbsp;</td>
                    <td width="50%">L. '.$gravado_15.'&nbsp;</td>
                </tr>
                <tr class="final">
                    <td width="50%" colspan="3">Gravado ISV 18%:&nbsp;</td>
                    <td width="50%" >L. '.$gravado_18.'&nbsp;</td>
                </tr>
                <tr class="final">
                    <td width="50%" colspan="3">ISV 15%:&nbsp;</td>
                    <td width="50%" >L. '.$isv_15.'&nbsp;</td>
                </tr>
                <tr class="final">
                    <td width="50%" colspan="3">ISV 18%:&nbsp;</td>
                    <td width="50%" >L. '.$isv_18.'&nbsp;</td>
                </tr>
                <tr class="final">
                    <td width="50%" colspan="3">Total:&nbsp;</td>
                    <td width="50%" ><span>L. '.$total_factura.'&nbsp;</span></td>
                </tr>
                <tr><td>&nbsp;</td></tr>
                '.$pago_tarjeta.'
                '.$pago_efectivo;
        }
    }
}

for($i = 0; $i < 25-$cant_prod; $i++){
    $productos .= "
        <tr>
            <td  style='border-right: 1px solid #8C8C8C;'>&nbsp;</td>
            <td  style='border-right: 1px solid #8C8C8C;'>&nbsp;</td>
            <td class='final' style='border-right: 1px solid #8C8C8C;'>&nbsp;</td>
            <td class='final'>&nbsp;</td>
        </tr>
    ";
}

//echo 14 -$cant_prod;
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
            font-family: "Roboto", sans-serif;
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
            margin: 20px;
        }
        #productos {
            /*background-color: #6CB7DA;*/
            color: #070707;
        }
        #tbProductos {
            font-size: 14px;
        }
        

        /** 
        * Defina el ancho, alto, márgenes y posición de la marca de agua.
        **/
        #watermark {
            position: fixed;

            bottom:   450px;
            left:     280px;
            /** El ancho y la altura pueden cambiar
                según las dimensiones de su membrete
            **/
            width:    25%;
            height:   20%;

            /** Tu marca de agua debe estar detrás de cada contenido **/
            z-index:  -1000;
            
            opacity: 0.2;
        }
    </style>
</head>
<body>
    <div id="watermark" width="100%">
        <img src="'.$marca.'" height="100%" width="100%" />
    </div>
    <div width="100%">
        <div style="border: 1px solid #8C8C8C; margin 10px; border-radius: 15px; ">
            <table>
                <tr>
                    <td width="20%" class="cabecera">
                        <img src="'.$logo.'" alt="logo.png" width="120px"><br>
                    </td>
                    <td width="60%">
                        <div style="margin: 10px; text-align: left;" >
                            <span><strong>'.$nombre.'</strong></span><br>
                            <span><strong>Direccion:</strong> '.$direccion.'</span><br>
                            <span><strong>RTN:</strong> '.$rtn.'</span><br>
                            <span><strong>Teléfono:</strong> '.$telefono.'</span><br>
                            <span><strong>Correo:</strong> '.$correo.'</span><br>
                            <span><strong>CAI #</strong></span><br>
                            <span>'.$cai.'</span><br>
                            <span><strong>Rango Autorizado:</strong> <br>'.$rango.'</span>
                        </div>
                    </td>
                    <td width="20%" style="font-size: 14px;">
                        <div class="cabecera" valign="top">
                            FACTURA No:<br>
                            '.$izquierda.'-<span style="color: #c00">'.$derecha.'</span>
                        </div>
                        <div>
                            &nbsp;
                        </div>
                        <div class="cabecera" valing="bottom">
                            Fecha: <br>'.$fecha.' '.$hora.'
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        

        

        <div width="100%">
            <div>
                &nbsp;
            </div>
            <div style="border-collapse: collapse; border-radius: 5px !important; border: 1px solid #8C8C8C">
                <table width="100%" style="border-collapse: collapse; border: 0px solid #8C8C8C">
                    <tr>
                        <td width="10%" style="background-color: #8C8C8C; color: #fff;margin: 10px; border-radius: 4px 0px 0px 4px">&nbsp;Cliente:</td>
                        <td width="40%">&nbsp;'.$nombre_cliente.'</td>
                        <td width="10%" style="background-color: #8C8C8C; color: #fff;">&nbsp;RTN/DNI:</td>
                        <td width="40%">&nbsp;'.$rtn_cliente.'</td>
                    </tr>
                </table>
            </div>
            <div>&nbsp;</div>
            <div style="border-collapse: collapse; border-radius: 10px !important; border: 1px solid #8C8C8C">
                <table id="tbProductos" style="border-collapse: collapse; border-radius: 10px !important; border: 0px solid #8C8C8C">
                    <thead>
                        <tr class="cabecera" style="background-color: #272725; color: #fff;">
                            <th width="10%" style="border-top: none; border-right: 1px solid #8C8C8C; border-radius: 10px 0px 0px 0px !important;">Cant.</th>
                            <th width="45%" style="border-top: none; border-right: 1px solid #8C8C8C;">Descripción</th>
                            <th width="22.5%" style="border-top: none; border-right: 1px solid #8C8C8C;">Precio Unitario</th>
                            <th width="22.5%" style="border-top: none;border-radius: 0px 10px 0px 0px !important;">Valor</th>
                        </tr>
                    </thead>
                    <tbody id="productos">
                        '.$productos.'
                    </tbody>
                    
                </table>
            </div>
            <table>
                <tbody >
                    <tr>
                        <td width="55%" valign="top" >
                        <div>&nbsp;</div>
                            <div style="width: 100%; background-color: #8C8C8C; border: 1px solid #000; border-radius: 30%; color: #fff;">
                                &nbsp;&nbsp;&nbsp;Valor en letras: <br>
                                &nbsp;&nbsp;&nbsp;'.$total_letras.' LEMPIRAS
                            </div>
                            <br>
                            <strong>LA FACTURA ES BENEFICIO DE TODOS "EXIJALA"</strong>
                        </td>
                        <td width="45%">
                            <table  style="border-collapse: collapse; border-radius: 5px !important; font-siz3: 13px;">
                                '.$datos_pago.'
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table style="border-collapse: collapse;">
                <tbody>
                    <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                    <tr>
                        <td width="30%">
                            ORIGINAL: CLIENTE 
                        </td>
                        <td>COPIA: EMISOR</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>';


/*
echo $html;
/**/
use Dompdf\Dompdf;

// instantiate and use the dompdf class
$dompdf = new Dompdf();

// (Optional) Setup the paper size and orientation
$dompdf->setPaper('carta', 'portrait');

$dompdf->loadHtml($html);


// Render the HTML as PDF
$dompdf->render();
$dompdf->stream("Factura $n_fac.pdf", ['Attachment' => false]);
// Output the generated PDF to Browser 
//$dompdf->stream();
/**/