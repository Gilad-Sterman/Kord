import { httpService } from './http.service.js'

export const trackService = {
    getTracks,
    getDeTrackToAdd,
    addNewTrack,
}

const STORAGE_KEY = 'track'

const tracks = [
    {
        _id: 123,
        title: 'Atlantic City',
        duration: 212,
        img_url: 'https://res.cloudinary.com/dollaguij/image/upload/v1699276832/sclnqvatjnuhowptzjpe.jpg',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1705240986/atlantic_cityfast_cvicbc.mp3',
        isSelcted: false,
        tags: ['cover', 'vocal'],
        isfeatured: true,
        tempo: 120

    },
    {
        _id: 124,
        title: 'track2',
        duration: 109,
        img_url: 'https://res.cloudinary.com/dollaguij/image/upload/v1699390322/mcacu1k5icmgcp9eecyz.jpg',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706016293/beat142-23_xpeqcd.mp3',
        isSelcted: false,
        tags: ['beat'],
        tempo: 108
    },
    {
        _id: 125,
        title: 'track3',
        duration: 104,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706016290/beat132_f2ali5.mp3',
        isSelcted: false,
        tempo: 152,
        tags: ['beat']
    },
    {
        _id: 126,
        title: 'track4',
        duration: 122,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706016285/beat126_o8xrc2.mp3',
        isSelcted: false,
        tempo: 134,
        tags: ['beat']
    },
    {
        _id: 127,
        title: 'track5',
        duration: 196,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706016268/beat110_f06g5p.mp3',
        isSelcted: false,
        tempo: 98,
        tags: ['beat']
    },
    {
        _id: 128,
        title: 'track6',
        duration: 195,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706016264/beat114_dxemxv.mp3',
        isSelcted: false,
        tempo: 138,
        tags: ['beat'],
        isfeatured: true
    },
    {
        _id: 129,
        title: 'Slaves',
        duration: 178,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706016260/beat164.1novoc_p9y0w3.mp3',
        isSelcted: false,
        tempo: 106,
        tags: ['beat'],
        isfeatured: true
    },
    {
        _id: 130,
        title: 'In Time',
        duration: 197,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706016259/beat154.1_87Gm_voc_tmcvpy.mp3',
        isSelcted: false,
        tempo: 87,
        tags: ['vocal'],
        isfeatured: true
    },
    {
        _id: 131,
        title: 'Track 31',
        duration: 164,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706016236/beat153_92A_m_edbro7.mp3',
        isSelcted: false,
        tempo: 92,
        tags: ['beat'],
        isfeatured: true
    },
    {
        _id: 132,
        title: 'Track 32',
        duration: 197,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706016263/beat158_buvqao.mp3',
        isSelcted: false,
        tempo: 144,
        tags: ['beat'],
    },
    {
        _id: 133,
        title: 'Track 33',
        duration: 200,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706024494/beat186.n_r6ldd0.mp3',
        isSelcted: false,
        tempo: 88,
        tags: ['beat'],
        isfeatured: true
    },
    {
        _id: 134,
        title: 'Ladders',
        duration: 210,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706024489/beat175_lpxsv9.mp3',
        isSelcted: false,
        tempo: 92,
        tags: ['vocal', 'remix'],
    },
    {
        _id: 135,
        title: 'Track 33 V',
        duration: 200,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706024484/beat186.f_eorfza.mp3',
        isSelcted: false,
        tempo: 92,
        tags: ['vocal'],
    },
    {
        _id: 136,
        title: 'Track 36',
        duration: 125,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706024471/beat183-3_f6ee43.mp3',
        isSelcted: false,
        tempo: 126,
        tags: ['beat'],
    },
    {
        _id: 137,
        title: 'Track 37',
        duration: 152,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706024430/beat166_qa8ukr.mp3',
        isSelcted: false,
        tempo: 142,
        tags: ['beat'],
    },
    {
        _id: 138,
        title: 'Track 38',
        duration: 152,
        img_url: '',
        audio_url: 'https://res.cloudinary.com/dollaguij/video/upload/v1706024418/beat200_120G_m_s1ih51.mp3',
        isSelcted: false,
        tempo: 120,
        tags: ['beat'],
    },
]
// console.log(JSON.stringify(tracks));

async function getTracks(filterBy) {
    try {
        const res = await httpService.get(STORAGE_KEY, filterBy)
        return res
    } catch (err) {
        console.log(err)
    }
}

function getDeTrackToAdd() {
    return {
        title: '',
        duration: 0,
        tempo: 0,
        isfeatured: 0,
        tags: [],
    }
}

async function addNewTrack(trackMap) {
    // return
    try {
        const res = await httpService.post(`${STORAGE_KEY}/new`, trackMap)
        return res
    } catch (err) {
        console.log(err)
        throw err
    }
}