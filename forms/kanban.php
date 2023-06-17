<?php
include_once '../php/querys_log.php';

$data = array();
$cartas = "";
//$tareas = "";
$n= 0;
$sql = 
    "SELECT 
        id,
        estado,
        nombre
    FROM estados
    ";
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    foreach($rs as $estado){

      $sql = 
      "SELECT 
          id,
          nombre,
          estado,
          descripcion
      FROM tarea
      WHERE estado = $estado[0]
      ";
      $es = cargar_sql($sql);
      if(isset($es[0][0])){
        $tareas = "";
        foreach($es as $tarea){
          $tareas .= '{
            "id"    : "'.$tarea[0].'",        
            "title" : "'.$tarea[1].'" ,
            "content" : "'.$tarea[3].'",           
            "class" : ["tareas"]     
          },';
        }
      $cartas .= '{
        "id"   : "'.$estado[0].'",
        "title": "'.$estado[2].'",
        "class" : "tarjeta",
        "item"  : [   
              '.$tareas.'
        ]
      },';
    }

      
      
      /*$data[$n]["id"] = $cai[0];
      $data[$n]["estado"] = $cai[1];
      $data[$n]["nombre"] = $cai[2];
      $n++;*/
    }
    $data["cantidad"] = $n;
    $data["respuesta"] = 1;
}

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Kanban de Prueba</title>
    <link rel="stylesheet" href="../jkanban/dist/jkanban.min.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Lato"
      rel="stylesheet"
    />

    <style>
      body {
        font-family: "Lato";
        margin: 0;
        padding: 0;
      }

      #myKanban {
        overflow-x: auto;
        padding: 20px 0;
      }

      .success {
        background: #00b961;
      }

      .info {
        background: #2a92bf;
      }

      .warning {
        background: #f4ce46;
      }

      .error {
        background: #fb7d44;
      }

      .custom-button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 7px 15px;
        margin: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      }
      
      .tarjeta{
        background-color: #B5B5B3;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;

      }

      .kanban-board{
        border-radius: 15px;
      }
      
      .tareas {
        background-color: #8CABD9;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <div id="myKanban"></div>
    <!--<button id="addDefault">Add "Default" board</button>
    <br />
    <button id="addToDo">Add element in "To Do" Board</button>
    <br />
    <button id="addToDoAtPosition">Add element in "To Do" Board at position 2</button>
    <br />
    <button id="removeBoard">Remove "Done" Board</button>
    <br />
    <button id="removeElement">Remove "My Task Test"</button>-->

    
    <script type="text/javascript" src="../js/jquery-3.6.0.js"></script>
    <script type="text/javascript" src="../sweetalert2/dist/sweetalert2.all.min.js"></script>
    <script type="text/javascript" src="../JS/utilidades/fecha.js"></script>
    <script type="text/javascript" src="../bootstrap/bootstrap/bootstrap.min.js"></script>
    <script type="text/javascript" src="../select2/dist/js/select2.min.js"></script>
    <script type="text/javascript" src="../jqueryUI/jquery-ui.min.js"></script>
    <script type="text/javascript" src="../jQueryMask/dist/jquery.mask.min.js"></script>
    <script type="text/javascript" src="../JS/punto_ventas/autocomplete.js"></script>
    <script type="text/javascript" src="../JS/punto_ventas/productos.js"></script>
    <script src="../jkanban/dist/jkanban.js"></script>
    <script src="../JS/cargar_estados.js"></script>
    <script>
      var cartas = "";
      //var carta = 
      var KanbanTest = new jKanban({
        element: "#myKanban",
        gutter: "10px",
        widthBoard: "350px",
        itemHandleOptions:{
          enabled: true,
        },
        click: function(el) {
          console.log("Trigger on all items click!");
        },
        context: function(el, e) {
          console.log("Trigger on all items right-click!");
        },
        dropEl: function(el, target, source, sibling){
          console.log(target.parentElement.getAttribute('data-id'));
          console.log(el, target, source, sibling)
        },
        buttonClick: function(el, boardId) {
          console.log(el);
          console.log(boardId);
          // create a form to enter element
          var formItem = document.createElement("form");
          formItem.setAttribute("class", "itemform");
          formItem.innerHTML =
            '<div class="form-group"><textarea class="form-control" rows="2" autofocus></textarea></div><div class="form-group"><button type="submit" class="btn btn-primary btn-xs pull-right">Submit</button><button type="button" id="CancelBtn" class="btn btn-default btn-xs pull-right">Cancel</button></div>';

          KanbanTest.addForm(boardId, formItem);
          formItem.addEventListener("submit", function(e) {
            e.preventDefault();
            var text = e.target[0].value;
            KanbanTest.addElement(boardId, {
              title: text
            });
            formItem.parentNode.removeChild(formItem);
          });
          document.getElementById("CancelBtn").onclick = function() {
            formItem.parentNode.removeChild(formItem);
          };
        },
        
        itemAddOptions: {
          enabled: true,
          content: '+ Add New Card',
          class: 'custom-button',
          footer: true
        },
        
        boards: [
          <?php echo  $cartas; ?>,
          /*{
              "id"    : "board-id-1",               // id of the board
              "title" : "Board Title",              // title of the board
              "class" : "class1,class2,...",        // css classes to add at the title
              "dragTo": ['another-board-id'],   // array of ids of boards where items can be dropped (default: [])
              "item"  : [                           // item of this board
                  {
                      "id"    : "item-id-1",        // id of the item
                      "title" : "Item 1" ,           // title of the item
                      "class" : ["myClass"]     // array of additional classes
                  },
                  {
                      "id"    : "item-id-2",
                      "title" : "Item 2"
                  }
              ]
          },
          {
              "id"    : "board-id-2",
              "title" : "Board Title 2"
          }*/
      ]
      });

      /*var toDoButton = document.getElementById("addToDo");
      toDoButton.addEventListener("click", function() {
        KanbanTest.addElement("_todo", {
          title: "Test Add"
        });
      });

      var toDoButtonAtPosition = document.getElementById("addToDoAtPosition");
      toDoButtonAtPosition.addEventListener("click", function() {
        KanbanTest.addElement("_todo", {
          title: "Test Add at Pos"
        }, 1);
      });

      var addBoardDefault = document.getElementById("addDefault");
      addBoardDefault.addEventListener("click", function() {
        KanbanTest.addBoards([
          {
            id: "_default",
            title: "Kanban Default",
            item: [
              {
                title: "Default Item"
              },
              {
                title: "Default Item 2"
              },
              {
                title: "Default Item 3"
              }
            ]
          }
        ]);
      });

      var removeBoard = document.getElementById("removeBoard");
      removeBoard.addEventListener("click", function() {
        KanbanTest.removeBoard("_done");
      });

      var removeElement = document.getElementById("removeElement");
      removeElement.addEventListener("click", function() {
        KanbanTest.removeElement("_test_delete");
      });

      var allEle = KanbanTest.getBoardElements("_todo");
      allEle.forEach(function(item, index) {
        //console.log(item);
      });*/
    </script>
  </body>
</html>