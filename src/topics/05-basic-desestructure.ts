interface AudioPLayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPLayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "The Unforgiven",
  details: { author: "Metallica", year: 1991 },
};

const { song } = audioPlayer;
const { author } = audioPlayer.details;
// console.log("Song " + audioPlayer.song);
// console.log("Song " + audioPlayer.details.author);

// console.log(song);
// console.log(author);

const [, , p3 = "not found"]: string[] = ["goku", "vegeta"];

console.error(p3);
