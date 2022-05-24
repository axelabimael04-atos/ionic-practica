export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    img: string;
}

export interface ProductOnCart {
    product: Product;
    subtotal: number;
    count: number;
}
