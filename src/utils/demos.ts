
const audios = {
    '1': new Audio('sounds/mf-animation-2025.mp3'),
    '2': new Audio('sounds/mf-interactive-2025.mp3'),
    '3': new Audio('sounds/demoSound_2.mp3'),
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
        duration: audios['1'].duration,
        id: '1',
        pause,
        play,
        playing: false,
        source: audios[1],
        title: 'Animation Demo',
    },
    {
        duration: audios['2'].duration,
        id: '2',
        pause,
        play,
        playing: false,
        source: audios[2],
        title: 'Interactive Demo'
    },
    {
        duration: audios['3'].duration,
        id: '3',
        pause,
        play,
        playing: false,
        source: audios[3],
        title: 'Commercial Demo'
    }
]