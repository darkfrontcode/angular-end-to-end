export default class homeController {
    constructor() {

        this.friends = [{
            "id": 1,
            "first_name": "Doris",
            "last_name": "Ramirez"
        }, {
            "id": 2,
            "first_name": "Edward",
            "last_name": "Peters"
        }, {
            "id": 3,
            "first_name": "Raymond",
            "last_name": "Lewis"
        }, {
            "id": 4,
            "first_name": "Antonio",
            "last_name": "Dunn"
        }, {
            "id": 5,
            "first_name": "Douglas",
            "last_name": "Price"
        }, {
            "id": 6,
            "first_name": "Juan",
            "last_name": "Wagner"
        }]
        
    }

    addFriend() {
        this.friends.push({
            "id": 7,
            "first_name": "Ueslei",
            "last_name": "Souza"
        })
    }
}
