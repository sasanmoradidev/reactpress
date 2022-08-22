import xx from "./_app"

// admin panel
// function to create room in admin dashboard
function createRoom() {
    room = new room({
        id: "23$#re",
        config: {
            maxUser: null,
            minuser: null,
        }
    })
}

function queryRooms() {
    //query rooms list here even in client and admin views
}

// admin activates privously created room
let user_idarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pointsarr = [1, 2, 3, 4, 5];
export default function activateRoom() {
    // const user_id = user_idarr[Math.floor(Math.random() * user_idarr.length)];
    // const points = pointsarr[Math.floor(Math.random() * pointsarr.length)];
    // console.log(user[user_id].name + " " + points + "<br/>")
    // Room.register(user_id, points);
    // return(
    //     <>Sasan</>
    // )
    console.log(xx());
}


