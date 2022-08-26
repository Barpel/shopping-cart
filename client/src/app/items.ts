interface Category { id: string; name: string };

export interface Item {
    sku: number;
    type: string;
    price: number;
    upc: string;
    category: Array<Category>;
    name: string;
    shipping: number;
    description: string;
    manufacturer: string;
    url: string;
    image: string;
}
