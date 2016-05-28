export default class aboutController {
    constructor(friends) {
        this.listFriends = friends.list
    }
}

aboutController.$inject = ['friends'];
