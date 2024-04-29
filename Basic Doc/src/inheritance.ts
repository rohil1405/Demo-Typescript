interface TakePhoto {
    mode: string
    filter: string
    burst: number
}

interface Story {
    createstory(): void
}

class Intragram implements TakePhoto {
    constructor(
        public mode: string,
        public filter: string,
        public burst: number
    ) {}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public mode: string,
        public filter: string,
        public burst: number
    ) {}

    createstory(): void {
        console.log('Story as a created')
    }
}

export {}