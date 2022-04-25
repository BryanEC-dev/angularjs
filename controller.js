let app = angular.module("myApp",[]);

app.controller("myApp", function($scope, $http){
    $scope.nombre = "bryan";

    $scope.nuevoComentario ={}
    $scope.comentarios =[
        {
            comentario : "primer comentario",
            usuario : "bryan"
        }
    ];

    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {}
    }

    $scope.buscar = function() {
        $http.get("http://localhost:3001/api/v1/users/5fc8501c482bfca91673c315")
            .then(function (data) {
                console.log(data)
            }).catch(function (error) {
                console.log(error)
            })
    }

});

