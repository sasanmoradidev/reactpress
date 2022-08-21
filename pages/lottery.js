function hello() {
    const data = {
        user: [
            { id: 22, name: "Ali", point: 18 },
            { id: 23, name: "Reaz", point: 121 },
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
            userCount: null,
            winnerId: null,
            config:{maxUser:100, minUser:2}
        }
    }

    function room() {
        
    }
    function register() { 
        if(data.room.userCount <= 100){

            data.room.userCount+=1;//+ input poin
            let user = data.user;
            
            //put input user id in the user array.
            // minus input point
            user[0].point -=1;
            
            // and then disable submit btn
        }
     
    }
    function game() { }
    function time() { }
    return (
        <form onSubmit={register}>        
            <label for="userid">User Id:</label><br/>
            <input type="text" id="userid" name="userid"/><br/>
            <label for="point">Point invest:</label><br/>
            <input type="text" id="point" name="point"/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>

    )
}

export default hello