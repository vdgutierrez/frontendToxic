export interface ResponseDataCorrect{
    id: string,
    score: {
        toxicity: number,
        severe_toxic: number,
        obscene: number,
        threat: number,
        insult: number,
        identity_hate: number,
        
    }
}