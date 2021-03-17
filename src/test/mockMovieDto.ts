import { MovieDto } from 'api/getMovie/MovieDto'

const getMockMovieDto = (): MovieDto => ({
  Title: 'Guardians of the Galaxy',
  Year: '2014',
  Rated: 'PG-13',
  Released: '01 Aug 2014',
  Runtime: '121 min',
  Genre: 'Action, Adventure, Comedy, Sci-Fi',
  Director: 'James Gunn',
  Writer:
    'James Gunn, Nicole Perlman, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Bill Mantlo (character created by: Rocket Raccoon), Keith Giffen (character created by: Rocket Raccoon), Jim Starlin (characters created by: Drax the Destroyer,  Gamora & Thanos), Steve Englehart (character created by: Star-Lord), Steve Gan (character created by: Star-Lord), Steve Gerber (character created by: Howard the Duck), Val Mayerik (character created by: Howard the Duck)',
  Actors: 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel',
  Plot:
    'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
  Language: 'English',
  Country: 'USA',
  Awards: 'Nominated for 2 Oscars. Another 52 wins & 100 nominations.',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '8.0/10' },
    { Source: 'Rotten Tomatoes', Value: '92%' },
    { Source: 'Metacritic', Value: '76/100' }
  ],
  Metascore: '76',
  imdbRating: '8.0',
  imdbVotes: '1,045,658',
  imdbID: 'tt2015381',
  Type: 'movie',
  DVD: '15 Nov 2015',
  BoxOffice: '$333,718,600',
  Production: 'Marvel Studios, Moving Picture Company, Marvel Enterprises',
  Website: 'N/A',
  Response: 'True'
})

export default getMockMovieDto
