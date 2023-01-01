<?php
if (isset($_GET["idp"])) {
    $id_producto = $_GET["idp"];
} else {
    $id_producto = 0;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    <link rel="icon" type="image/png" sizes="16x16" href="../../img/iconos/logo.ico">
    <link href="../../libs/fontawesome/css/all.min.css" rel="stylesheet">
    <link href="../../libs/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js"></script>
    <style>
        .col-md-6 {
            margin: 5px 0px;
        }

        .mg-button {
            margin: -4px;
        }

        .centro {
            text-align: center;
        }

        .final {
            text-align: end;
        }

        #bgCabecera {
            background-color: #E0DCDD;
        }

        
        #filtroInicio {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>

<body>
    <div class="container-fluid">
        <div id="filtroInicio">
            <div class="container my-3" style="font-weight: bold;">
                <div class="row my-3 rounded-pill" id="bgCabecera">
                    <div class="col-8 my-3">
                        <h4 class="mr-4">Producto</h4>
                    </div>
                    <div class="col-4 my-3">
                        <h4 id="fecha" class="mr-3 font-weight-bold text-end"></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" id="divBotones">
        <div class="row">
            <div class="col-md-12">
            </div>
        </div>
    </div>
    <div class="container-fluid" id="divProducto">
        <div class="row">
            <div class="container" id="divProductBotones">
                <div class="col-md-12 my-2">
                    <span class="modal-title" id="productoTitulo"></span>
                </div>
                <div class="col-md-12 text-center">
                    <button type="button" class="btn btn-danger btn-sm" id="btnCancel"><i class="fa-solid fa-ban"></i>&nbsp;Cancelar</button>
                    <button type="button" class="btn btn-danger btn-sm" id="btnBorrarProducto"><i class="fa-solid fa-trash-can"></i>&nbsp;Borrar</button>
                    <button type="button" class="btn btn-success btn-sm" id="btnSaveProducto"><i class="fa-solid fa-floppy-disk"></i>&nbsp;Guardar</button>
                    <button type="button" class="btn btn-success btn-sm" id="btnAgregarProducto" name="btnAgregarProducto"><i class="fa-solid fa-plus"></i>&nbsp;Agregar</button>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="form-group" id="divInformacion">
                        <div class="container-fluid my-2">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row text-center">
                                        <div class="col-md-12" id="imgProduct"></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <form action="" id="formProductos" enctype="multipart/form-data">
                                        <div class="row form-group">
                                            <div class="col-md-6">
                                                <div class="row">
                                                    <div class="col-lg-2">
                                                        <label for="txtNombreProducto">Nombre</label>
                                                    </div>
                                                    <div class="col-lg-10">
                                                        <input type="text" class="col-lg-12 col-xs-12" maxlength="50" id="txtNombreProducto" name="nombre">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="row">
                                                    <div class="col-lg-2">
                                                        <label for="txtDescripcionProducto">Descripción</label>
                                                    </div>
                                                    <div class="col-lg-10">
                                                        <input type="text" class="col-sm-12 col-xs-12" maxlength="150" id="txtDescripcionProducto" name="descripcion">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="row">
                                                    <div class="col-lg-2">
                                                        <label for="txtPrecioProducto">Precio</label>
                                                    </div>
                                                    <div class="col-lg-10">
                                                        <input type="number" maxlength="12" class="form-control money" style="text-align: right;" value="0" id="txtPrecioProducto" name="precio">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <div class="row">
                                                            <div class="col-lg-4">
                                                                <label for="chkEstado">Activo</label>
                                                            </div>
                                                            <div class="col-lg-8 text-center">
                                                                <input type="checkbox" id="chkEstado" name="chkEstado">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-9">
                                                        <div class="row">
                                                            <div class="col-lg-4">
                                                                <label for="slcImpuesto">Impuesto</label>
                                                            </div>
                                                            <div class="col-lg-8">
                                                                <select id="slcImpuesto" name="impuesto" class="col-lg-12 col-xs-12"></select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="row">
                                                    <div class="col-lg-2">
                                                        <label for="txtCantidad">Stock</label>
                                                    </div>
                                                    <div class="col-lg-10">
                                                        <input type="number" maxlength="12" class="form-control" style="text-align: right;" value="0" id="txtCantidad" name="cantidad">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="row">
                                                    <div class="col-lg-2">
                                                        <label for="fileImg">Imagen</label>
                                                    </div>
                                                    <div class="col-lg-10">
                                                        <input type="file" id="fileImg" name="fileImg" class="form-control" accept="image/gif,image/jpeg,image/jpg,image/png">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div class="col-md-3"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-6"></div>
            </div>
        </div>
    </div>

</body>
<script type="text/javascript" src="../../JS/jquery-3.6.0.js"></script>
<script type="text/javascript" src="../../libs/sweetalert2/dist/sweetalert2.all.min.js"></script>
<script type="text/javascript" src="../../libs/bootstrap/bootstrap/bootstrap.min.js"></script>
<script type="text/javascript" src="../../libs/select2/dist/js/select2.min.js"></script>
<script type="text/javascript" src="../../libs/jQueryMask/dist/jquery.mask.min.js"></script>
<script type="text/javascript" src="../../JS/utilidades/fecha.js"></script>
<script type="text/javascript" src="../../JS/productos/productos.js"></script>
<script>
    idp = <?php echo $id_producto; ?>;
    if (idp != 0) {
        cargar_producto(idp);
    } else {
        if (idp === 0) {
            //$("#mdlProducto").modal("show");
            $("#btnBorrarProducto").hide();
            $("#btnSaveProducto").hide();
            $("#btnAgregarProducto").show();
            $("#imgCargada").html("");
            $("#fileImg").val("");
            $("#productName").text("Nuevo Producto");
            cargar_impuestos();
        };
    }
    cargar_impuestos();
    $("#fileImg").change(function() {
        filePreview(this);
    });

    function filePreview(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function(e) {
                $('#imgProduct + img').remove();
                $('#imgProduct').html('<img src="' + e.target.result + '" width="150px" height="auto"/>');
            }
        }
    }

    $(document).ready(function() {
        $("#btnAgregarProducto").click(function() {
            console.log("Hola mundo");
            var datos = new FormData($("#formProductos")[0]);
            console.log(datos);
            $.ajax({
                url: '../../php/productos/crear_producto.php',
                type: 'POST',
                data: datos,
                contentType: false,
                processData: false,
                success: function(json) {
                    if (json === 1) {
                        history.back();
                    } else {
                        console.log("nada")
                    }
                },
                error: function(json) {
                    Swal.fire(
                        'Error',
                        'Error en la conexión con el servidor',
                        'error'
                    );
                },

                // código a ejecutar sin importar si la petición falló o no
                complete: function(xhr, status) {
                    /*Swal.fire(
                        'Bien!',
                        'Conexión éxitosa',
                        'success'
                    )
                    //alert('Petición realizada');*/
                }
            });
        });
    })
</script>

</html>