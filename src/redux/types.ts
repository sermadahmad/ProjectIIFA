export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

export type AddProduct = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

export type ProductsState = {
    items: Product[];
    fetchLoading: boolean;
    fetchError: string | null;
    addLoading: boolean;
    addError: string | null;
    deleteLoading: boolean;
    deleteError: string | null;
};