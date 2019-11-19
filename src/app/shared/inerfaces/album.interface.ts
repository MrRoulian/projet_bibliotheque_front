export interface Album {
    id: string;
    titre: string;
    photo?: string;
    description?: string;
    auteur?: string;
    photo0?: Photo;
    photo1?: Photo;
    photo2?: Photo;
    photo3?: Photo;
    photo4?: Photo;
    photo5?: Photo;
    photo6?: Photo;
    photo7?: Photo;
    photo8?: Photo;
    photo9?: Photo;
}

export interface Photo {
    path: string;
    titre: string;
    description?: string;
    auteur?: string;
}
