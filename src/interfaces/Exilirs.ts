
export interface ElixirResponseData{
    id: string;
    name: string;
    effect: string;
    sideEffects: string;
    characteristics: string | null;
    time: string | null;
    difficulty: string;
    ingredients: { id: string; name: string }[];
    inventors: {
        id: string;
        firstName: string;
        lastName: string;
      }[];
    manufacturer: string | null;

}

