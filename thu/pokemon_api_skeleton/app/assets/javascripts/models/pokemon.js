var PokemonModel = function (id) {
  this.id = id
  this.url = "/api/pokemon/"
}

PokemonModel.prototype.fetch = function (callback) {
  var request = $.get(`${this.url}${this.id}`)

  request.done(function(pokemonInfo) {
    $.extend(this, pokemonInfo)

    callback()
  }.bind(this))
}

module.exports = PokemonModel

// { id: 1, url: '/api/pokemon/' }
// { id: 1, url: '/api/pokemon/', name: 'Bulbasaur', abilities: [],  }
