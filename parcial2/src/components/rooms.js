import React, { useEffect, useState } from "react";


const Room = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
        fetch(URL).then(res => res.json()).then(res => {
            console.log(res)
            setRooms(res);
        })
    }, []);

    return (
        <div>
            <div className="card-group">
                {rooms.map((room) => (
                    <div class="card" id={"Spc" + room.id}>
                        <div class="card-body">
                            <h5 class="card-title">{room.name}</h5>
                            <p class="card-text">{room.address}</p>
                        </div>
                        {room.name === 'Living room' ? <img n class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMga32C2sB0T9BPaV-lKEz3_JGmJbAnw6zUw&usqp=CAU" alt="Card image cap"></img>: null}
                        {room.name === 'Kitchen' ? <img n class="card-img-top" src="https://thumbs.dreamstime.com/b/basic-rgb-145875075.jpg" alt="Card image cap"></img>: null}
                        {room.name === 'Dinner room' ? <img n class="card-img-top" src="https://previews.123rf.com/images/elvetica/elvetica1812/elvetica181200074/123899744-dining-table-in-kitchen-with-chairs-cups-and-teapot-flat-cartoon-style-vector-illustration-.jpg" alt="Card image cap"></img>: null}

                    </div>
                ))}
            </div>
        </div>
    );



    
}

export default Room;