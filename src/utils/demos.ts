
const audios = {
    'audio1': new Audio('sounds/demoSound_1.mp3'),
    'audio2': new Audio('sounds/demoSound_2.mp3'),
}

let currentlyPlaying : HTMLAreaElement;

const play = (name: string) => {
    if (currentlyPlaying) {
        audios[currentlyPlaying].pause()
    }
    audios[name as keyof typeof audios].play()
    currentlyPlaying = audios[name]
}

export const demoData = [
    {
        id: '1',
        playing: false,
        source: 'sounds/demoSound_1.mp3',
        title: 'Animation Demo'
    },
    {
        id: '2',
        playing: false,
        source: 'sounds/demoSound_2.mp3',
        title: 'Commercial Demo'
    }
]