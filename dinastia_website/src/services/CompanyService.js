const PRODUCTS = [
    {
        id: 100,
        name: 'AES Sul',
        price: 350,
        image: require('C:/Users/beatr/OneDrive/Documentos/HackaNavi/website/dinastia_website/src/assets/AES-Sul-RS.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'Energisa Nova Friburgo',
        price: 600,
        image: require('../assets/200px-Logo_Energisa.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'Distribuidora Catarinense de Energia Elétrica',
        price: 2,
        image: require('../assets/baixados.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];

export function getCompanys() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

