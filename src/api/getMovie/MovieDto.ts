export interface MovieDto {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string,
}

export interface ApiPagedResponse<T> {
    Response: string
    Search: Array<T>
    totalResults: string
}
