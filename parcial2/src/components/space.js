import React, { useEffect, useState } from "react";


const Space = () => {

    const [spaces, setSpace] = useState([]);

    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
        fetch(URL).then(res => res.json()).then(res => {
            console.log(res)
            setSpace(res);
        })
    }, []);

    return (
        <div>
            <div className="card-group">
                {spaces.map((space) => (
                    <div class="card" /*onClick={onRowClick.bind(null, movie)}*/ id={"Spc" + space.id}>
                        <img class="card-img-top" src="..." alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">{space.name}</h5>
                            <p class="card-text">{space.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Space;