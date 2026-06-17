// Build a Playlist Remix Engine

const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];
function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }
  const result = [];
  for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];
    if (!Array.isArray(playlist)) continue;
    for (let j = 0; j < playlist.length; j++) {
      const tracks = playlist[j];
      if (tracks && typeof tracks === "object") {
        result.push({ ...tracks, source: [i, j] });
      }
    }
  }
  return result;
}
console.log(flattenPlaylists(playlists));

function scoreTracks(tracks) {
  if (!Array.isArray(tracks)) return [];
  return tracks.map((track) => {
    if (!track || typeof track != "object") return track;
    return { ...track, score: track.votes * 10 - Math.abs(track.bpm - 120) };
  });
}

function dedupeTracks(tracks) {
  if (!Array.isArray(tracks)) {
    return [];
  }
  let seen = new Set();

  return tracks.filter((track) => {
    if (!track || typeof track !== "object") {
      return false;
    }
    if (seen.has(track.trackId)) {
      return false;
    }
    seen.add(track.trackId);
    return true;
  });
}

function enforceArtistQuota(tracks, num) {
  if (!Array.isArray(tracks)) return [];
  const artistCount = {};
  return tracks.filter((track) => {
    const artist = track.artist;
    if (!artistCount[artist]) {
      artistCount[artist] = 0;
    }
    if (artistCount[artist] >= num) {
      return false;
    }
    artistCount[artist]++;
    return true;
  });
}
function buildSchedule(tracks) {
  if (!Array.isArray(tracks)) return [];
  return tracks.map((track, index) => {
    return {
      slot: index + 1,
      trackId: track.trackId,
    };
  });
}

function remixPlaylist(playlists, num) {
  if (!Array.isArray(playlists)) return [];
  const flattenPlaylist = flattenPlaylists(playlists);
  const scoreTrack = scoreTracks(flattenPlaylist);
  const dedupeTrack = dedupeTracks(scoreTrack);
  const quota = enforceArtistQuota(dedupeTrack, num);
  const buildSch = buildSchedule(quota);
  return buildSch;
}
