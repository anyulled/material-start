/**
 * Creado por arivas | 18/02/2016.
 */
(function () {
    "use strict";
    angular
        .module("usuarios")                                    //Instanciar Modulo
        .service("usuarioService", ['$q', UsuarioService]);    //Declarar Servicio y dependencias

    /**
     * Servicio de Usuarios
     * Usuarios embebidos, modelo de datos hard-coded; actúa de forma asincrona para simular llamadas remotas al servicio.
     * @param $q
     * @returns {{cargarUsuarios: Function}}
     * @constructor
     */
    function UsuarioService($q) {
        var usuarios = [
            {
                "nombre": "Anyul Rivas",
                "avatar": "svg-1",
                "contenido": "I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire."
            },
            {
                "nombre": "Maria Carolina Fonseca",
                "avatar": "svg-2",
                "contenido": "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit??, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris."
            },
            {
                "nombre": "Gabriel Vegas",
                "avatar": "svg-3",
                "contenido": "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
            },
            {
                "nombre": "Liliana Bernal",
                "avatar": "svg-4",
                "contenido": "Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms."
            },
            {
                "nombre": "Sandra Mendoza",
                "avatar": "svg-5",
                "contenido": "Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy."
            },
            {
                "nombre": "Carlos Guerra",
                "avatar": "svg-6",
                "contenido": "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
            }
        ];
        //API basada en promise
        return {
            cargarUsuarios: function () {
                //Simular llamada asincrona
                return $q.when(usuarios);
            }
        }
    }
})();