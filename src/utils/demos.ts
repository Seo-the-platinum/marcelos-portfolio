
const audios = {
    '1': new Audio('sounds/demoSound_1.mp3'),
    '2': new Audio('sounds/demoSound_2.mp3'),
}

let currentlyPlaying : string | null;

const play = (id: string) => {
    if (currentlyPlaying) {
        audios[currentlyPlaying as keyof typeof audios].pause()
    }
    audios[id as keyof typeof audios].play()
    currentlyPlaying = id
}

const pause = (id: string)=> {
    currentlyPlaying = null
    audios[id as keyof typeof audios].pause()
}
export const demoData = [
    {
        id: '1',
        pause: pause,
        play: play,
        playing: false,
        source: 'sounds/demoSound_1.mp3',
        title: 'Animation Demo'
    },
    {
        id: '2',
        pause,
        play,
        playing: false,
        source: 'sounds/demoSound_2.mp3',
        title: 'Commercial Demo'
    }
]