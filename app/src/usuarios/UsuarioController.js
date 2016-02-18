/**
 * Creado por arivas | 18/02/2016.
 */
(function () {
    angular
        .module("usuarios")
        .controller("UsuarioController", ['usuarioService', '$log', '$q', UsuarioController]);

    /**
     * Controlador de Usuario
     * @param $log
     * @constructor
     * @param usuarioService
     */
    function UsuarioController($log, usuarioService) {
        var self = this;
        self.usuarios = [];
        self.seleccionado = null;

        usuarioService.cargarUsuarios().then(function (usuarios) {
            self.usuarios = [].concat(usuarios);
            self.seleccionado = usuarios[0];
        });
    }
})();
