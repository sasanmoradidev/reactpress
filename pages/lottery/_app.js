let data = {
    user: [
        { id: 22, name: "Ali", point: 18 },
        { id: 23, name: "Reza", point: 121 },
        { id: 24, name: "Hasan", point: 16 },
        { id: 25, name: "Sasan", point: 13 },
        { id: 26, name: "Amir", point: 18 },
        { id: 27, name: "Sahar", point: 19 },
        { id: 28, name: "Taghi", point: 34 },
        { id: 29, name: "Shadi", point: 15 },
        { id: 30, name: "Freydoun", point: 23 },
        { id: 31, name: "Parsa", point: 56 }
    ],
    room: {
        id: "wDfew3",
        name: "Gold",
        userPoint: 0,
        winnerId: null,
        participatedUsers: [],
        config: { maxUser: 100, minUser: 2, activeStatus: false, enabled: true },
    }
}
let room = data.room;
let user = data.user;

function xx(){
    console.log("test");
}
const Room = {

    room_participatedUsers: [],
    //room activated on specific time and then deactivated

    register: (user_id, points) => {
        if (room.config.activeStatus && room.userPoint <= 100) {

            //put input user id in the user array.
            // decreament input point from user total points
            // user[user_id].point -= points;
            // and then disable submit btn
            room.userPoint += points; //+ input point
            room_participatedUsers.push(user_id)
            room.participatedUsers = room_participatedUsers;

            // return room.participatedUsers;
        }
    },
    game: (userslist) => {
        //select random user from participated users and rerunt it
        if (userslist.length === 0) {
            null;
        } else if (userslist.length === 1) {
            userslist[0];
        } else {
            let winner = 0;
            winner = Math.floor(Math.random() * userslist.length);

            console.log(user[winner].name);
        }
    },

    startTimer: () => {
        room.config.activeStatus = true;
        //get the time for activated room
        // setTimeout(deactivateRoom, 2 * 60 * 60 * 1000)
        console.log("test");
        setTimeout(deactivateRoom, 2000)

    },

    par_list : [0,5,9,8,10],
    deactivateRoom : (par_list) => {
        room.config.activeStatus = false;
        Room.game(par_list);
    }

}

export default xx