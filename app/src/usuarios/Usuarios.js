/**
 * Creado por arivas | 18/02/2016.
 */
(function () {
    "use strict"; //Modo esctricto (Javascript 1.8.5)
    angular
        .module("usuarios", ['ngMaterial'])
        .run(function ($log) {
            $log.debug("Aplicacion de usuarios cargada");
        });
})();