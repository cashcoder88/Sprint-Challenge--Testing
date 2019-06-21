
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {
          title: 'Pacman', 
          genre: 'Arcade', 
          releaseYear: 1980 
        },
        {
          title: 'Assassins Creed', 
          genre: 'Console', 
          releaseYear: 2008 
        },
        {
          title: 'World of Warcraft', 
          genre: 'MMORPG', 
          releaseYear: 2004 
        },
      ]);
    });
};
