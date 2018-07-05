export class Event {
    id: number
    name: string
    date: Date
    time: string
    price: number
    imageUrl: string
    location?: {
        address: string
        city: string
        country: string
    }
    onlineUrl?: string
    sessions: Session[]
}

export class Session {

    constructor(
        public id: number,
        public name: string,
        public presenter: string,
        public duration: number,
        public level: string,
        public abstract: string,
        public voters: string[]
    ) { }
}