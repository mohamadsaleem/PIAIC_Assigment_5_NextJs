export type contactInfoType = {
    contactInfo: {
        userName: string
        email: string
    }
}
export type contactDataType = {
    contactData: {
        name: string
        email: string
    }
}
export type contactType = {
    // name: string
    // email: string
    // message: string
    productName: string;
    quantity: number;
    price: number;
    customerName: string;
    customerEmail: string;
    paymentMethod: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
}


export type onChangeEventType = {
    target: { value: string, name: string }
}