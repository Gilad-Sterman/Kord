import { httpService } from "./http.service"

export const userMsgs = [
  { _id: 1, type: 'welcome', user: 'Kord', title: 'Welcome to Kord!', content: 'Hey user! thank you for joining our platform! We hope you enjoy, find content you love and create amazing audio clips using our simple interface.', timestamp: 1716384707929, isRead: true },
  { _id: 2, type: 'like', user: 'User1', title: 'New like', content: 'Liked your post', timestamp: 1716388907929, isRead: false },
  { _id: 3, type: 'comment', user: 'User2', title: 'New comment', content: 'Commented: "Great post!"', timestamp: 1716388707929, isRead: false },
]

export const topTracks = [
  {
    _id: '1',
    user: {
      _id: '101',
      username: 'musiclover',
      profilePicUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1706607841/mac_miller1_adrtoy.png'
    },
    title: 'Summer Vibes',
    likes: 120,
    comments: [
      { userId: '201', comment: 'Love this track!', timestamp: '2024-05-01T12:00:00Z' },
      { userId: '202', comment: 'Great beats!', timestamp: '2024-05-02T14:30:00Z' }
    ],
    shares: 45,
    duration: 225, // 3 minutes 45 seconds
    createdAt: '2024-05-01T10:00:00Z',
    tags: ['summer', 'vibes', 'chill'],
    audioUrl: 'https://res.cloudinary.com/dollaguij/video/upload/v1706129342/loopcloudnovoc_r8zntp.mp3',
    thumbnailUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1715841971/svg/an-exquisite-modern-logo-design-featuring-the-inte-jRDUR9FgQu6oriC-52JpHw-ISVz9i9OSoqVjM6OWhjmug_bfw1er.jpg',
    visualUrl: 'https://giphy.com/embed/3oz8xUkRiDOOe6QRQk'
  },
  {
    _id: '2',
    user: {
      _id: '102',
      username: 'podcastguru',
      profilePicUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1706607452/bob-dylan_xridpm.jpg'
    },
    title: 'Morning Motivation',
    likes: 85,
    comments: [
      { userId: '203', comment: 'Very inspiring!', timestamp: '2024-05-02T08:00:00Z' },
      { userId: '204', comment: 'Perfect for my morning routine!', timestamp: '2024-05-03T07:45:00Z' }
    ],
    shares: 30,
    duration: 320, // 5 minutes 20 seconds
    createdAt: '2024-05-02T07:00:00Z',
    tags: ['motivation', 'morning', 'podcast'],
    audioUrl: 'https://res.cloudinary.com/dollaguij/video/upload/v1706129139/ara_m8rxmz.mp3',
    thumbnailUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1706462535/IMG_0899_ekjlpb.jpg',
    visualUrl: ''
  },
  {
    _id: '3',
    user: {
      _id: '103',
      username: 'funnygal',
      profilePicUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1703417248/txz4hehl85ys6vgi3dad_33f009.jpg'
    },
    title: 'Daily Laughs',
    likes: 200,
    comments: [
      { userId: '205', comment: 'Hilarious!', timestamp: '2024-05-03T09:00:00Z' },
      { userId: '206', comment: 'Made my day!', timestamp: '2024-05-03T10:15:00Z' }
    ],
    shares: 60,
    duration: 135, // 2 minutes 15 seconds
    createdAt: '2024-05-03T08:00:00Z',
    tags: ['comedy', 'daily', 'funny'],
    audioUrl: 'https://res.cloudinary.com/dollaguij/video/upload/v1706126262/beat164voc2_hkdhov.mp3',
    thumbnailUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1706462535/IMG_0898_kv0fb5.jpg',
    visualUrl: 'https://giphy.com/embed/C9xQEM4pz2V8OKwj4J'
  },
  {
    _id: '4',
    user: {
      _id: '104',
      username: 'kinGilad',
      profilePicUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1699289291/prof_pp9uf5.jpg'
    },
    title: 'Calm Evening',
    likes: 95,
    comments: [
      { userId: '207', comment: 'So relaxing!', timestamp: '2024-05-04T19:00:00Z' },
      { userId: '208', comment: 'Perfect end to my day!', timestamp: '2024-05-04T20:30:00Z' }
    ],
    shares: 35,
    duration: 245, // 4 minutes 5 seconds
    createdAt: '2024-05-04T18:00:00Z',
    tags: ['calm', 'evening', 'melody'],
    audioUrl: 'https://res.cloudinary.com/dollaguij/video/upload/v1706127130/Together_AloneG1_lwkq4d.mp3',
    thumbnailUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1706125106/IMG_0892_x8ohhb.jpg',
    visualUrl: ''
  },
  {
    _id: '5',
    user: {
      _id: '105',
      username: 'storyteller',
      profilePicUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1706126553/kanye_dmy7ra.png'
    },
    title: 'Bedtime Stories',
    likes: 70,
    comments: [
      { userId: '209', comment: 'Kids loved it!', timestamp: '2024-05-05T21:00:00Z' },
      { userId: '210', comment: 'Great storytelling!', timestamp: '2024-05-05T21:45:00Z' }
    ],
    shares: 25,
    duration: 390, // 6 minutes 30 seconds
    createdAt: '2024-05-05T20:00:00Z',
    tags: ['stories', 'bedtime', 'kids'],
    audioUrl: 'https://res.cloudinary.com/dollaguij/video/upload/v1706129081/wemac_huvxam.mp3',
    thumbnailUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1706125107/IMG_0894_qblmml.jpg',
    visualUrl: ''
  }
];

export const loggedUser = {
  _id: "user12345",
  username: "kinGilad",
  fullName: "Gilad Sterman",
  email: "gilad@gmail.com",
  passwordHash: "hashedpassword123",
  profilePicUrl: "https://res.cloudinary.com/dollaguij/image/upload/v1699289291/prof_pp9uf5.jpg",
  bio: "Music enthusiast. Podcaster. Sharing my thoughts and tunes.",
  location: "New York, USA",
  website: "https://gilad-sterman.github.io/g-soft/",
  followers: 1200,
  following: 300,
  createdTracks: [
    {
      _id: '4',
      user: {
        _id: '104',
        username: 'kinGilad',
        profilePicUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1699289291/prof_pp9uf5.jpg'
      },
      title: 'Calm Evening',
      likes: 95,
      comments: [
        { userId: '207', comment: 'So relaxing!', timestamp: '2024-05-04T19:00:00Z' },
        { userId: '208', comment: 'Perfect end to my day!', timestamp: '2024-05-04T20:30:00Z' }
      ],
      shares: 35,
      duration: 245, // 4 minutes 5 seconds
      createdAt: '2024-05-04T18:00:00Z',
      tags: ['calm', 'evening', 'melody'],
      audioUrl: 'https://res.cloudinary.com/dollaguij/video/upload/v1706127130/Together_AloneG1_lwkq4d.mp3',
      thumbnailUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1706125106/IMG_0892_x8ohhb.jpg',
      visualUrl: ''
    }
  ],
  likedTracks: [
    "track3",
    "track4",
    "track5"
  ],
  settings: {
    privateAccount: false,
    notifications: {
      newFollower: true,
      newComment: false,
      newLike: true,
      newShare: true
    },
    isDark: true
  },
  joinedAt: "2023-01-15T08:30:00.000Z",
  lastActive: "2024-05-14T12:00:00.000Z"
}



const STORAGE_KEY = 'track'
