var Pokemon = require("./models/pokemon");
var PokemonComponent = require("./components/pokemon");

var Router = function ($container) {
  this.$container = $container;
}

Router.prototype.renderPokemonComponent = function (id) {
  window.pokemon = new Pokemon(id);
  var pokemonComponent = new PokemonComponent(this.$container, pokemon);

  pokemon.fetch(function () {
    pokemonComponent.render();
  });
}

module.exports = Router;
