var catalog = [
    {
        "title": "Raspberry pi 3",
        "category": "SoC",
        "price":120,
        "image": "RPI3.jpg",
        "_id": "1"
    },
    {
        "title": "Raspberry pi 4",
        "category": "SoC",
        "price":150,
        "image": "RPI4.jpg",
        "_id": "2"
    },
    {
        "title": "ESP32 Devkit",
        "category": "Microcontroller",
        "price":5,
        "image": "ESP32.jpg",
        "_id": "3"
    },
    {
        "title": "ESP8266",
        "category": "Microcontroller",
        "price":3,
        "image": "ESP8266.png",
        "_id": "4"
    },
    {
        "title": "ESP32 Cam",
        "category": "Microcontroller",
        "price":7,
        "image": "ESP32CAM.jpg",
        "_id": "5"
    },
    {
        "title": "Raspberry Pi Pico",
        "category": "Microcontroller",
        "price":5,
        "image": "RPIPICO.jpg",
        "_id": "6"
    },
    {
        "title": "Libre Le Potato",
        "category": "SoC",
        "price":50,
        "image": "LEPOTATO.jpg",
        "_id": "7"
    },
    {
        "title": "Oled 0.96' bicolor",
        "category": "IoT Module",
        "price":2,
        "image": "OLED096.jpg",
        "_id": "8"
    },
];

class DataService {
    getProducts(){
        return catalog;
    }
}

export default DataService;