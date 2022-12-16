import { Comic } from "types/types";

const comic: Comic = {
  id: 291,
  title: "Ant-Man (2003) #1",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/6/e0/4bc6a2497684e",
    extension: "jpg",
  },
  oldPrice: 87,
  price: 72,
  stock: 2,
  characters: {
    available: 0,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/291/characters",
    items: [],
    returned: 0
  },
  description: "Size does matter.  And no one knows this more than Hank Pym - a.k.a. Ant-Man. Got a problem with Galactus? Call the FF. Got a problem with, say, mind-controlled cockroaches? Then Ant-Man's your man! And needless to say, it's done a number on our diminutive hero's self-esteem.  When Ant-Man is tapped to infiltrate an international spy ring that has been siphoning secrets out of Washington, he jumps at the chance - unaware that he's being used as a pawn in a larger game of espionage.\r\n32 PGS./PARENTAL ADVISORY...$2.99",

};

export default comic;
