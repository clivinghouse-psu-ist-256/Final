
export interface coffee{
    name: string;
    quantity: number;
    price:number
    upc: number;
    sku:number;
    properties: properties
}

export interface properties{
    aroma:string;
    flavor:string;
    intensity:number;
    acidic:string;
    body:string
} 


    //  name": "Flavored Roast"
    //     "quantity": "1 Bag"
    //     "price": 5.99
    //     "upc": "567302917462"
    //     "sku": "00000007"
    //     "properties": {
    //         "aroma": "Fruity and sweet",
    //         "flavor": "Light and smooth",
    //         "intensity": 5,
    //         "acidic": "Low",
    //         "body": "Light-bodied"
    //     }
