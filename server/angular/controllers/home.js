export default class homeController {
    constructor(friends) {
        this.friends = friends;
    }

    shuffle() {
        this.name = this.friends.random().first_name
    }
}

homeController.$inject = ['friends'];
