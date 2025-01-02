type Profile = {
  name: string;
  url: string;
  pictureUrl?: string;
};

type TrackSimple = {
  title: string;
  url?: string;
  artists: ArtistBase[];
  pictureUrl?: string;
};

type ArtistBase = {
  name: string;
  url: string;
};

type ArtistSimple = {
  name: string;
  url: string;
  genres: string[];
  pictureUrl?: string;
};

type PlaylistSimple = {
  id: string;
  title?: string;
  url?: string;
  trackCount: number;
  pictureUrl?: string;
};

type ItemSimple = TrackSimple | ArtistSimple | PlaylistSimple;

type TimeRange = 'short-term' | 'medium-term' | 'long-term';

type Endpoint =
  | 'artist/top'
  | 'auth/login'
  | 'auth/refresh'
  | 'track/current'
  | 'track/history'
  | 'track/top'
  | 'playlist'
  | 'playlist/shuffle'
  | ''
  | 'user/profile'
  | 'user/signout';
