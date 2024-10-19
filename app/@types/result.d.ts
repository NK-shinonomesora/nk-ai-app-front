interface SentimentanalysisResult {
    text: string
    label: string
    score: number,
}

interface ResultTable {
    title: string
    results: SentimentanalysisResult[]
}