import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';


const Welcome = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [fullname, setFullname] = useState("");

    useEffect(() => {
        const checkApi = async () => {
            const res = await axios.get("https://66ffcd724da5bd237552095c.mockapi.io/users");
            const users = res.data;
            const user = users.find(user => user.id == id);
            if (user) {
                setFullname(user.fullname);
            }
        };
        checkApi();
    }, [id]);

    return (
        <div>
            <h1 style={{ textAlign: "center", padding: "1rem" }}>Welcome, {fullname || fullname}</h1>
            <Link to="/login" >Go Back</Link> 
        </div>
    );
};

export default Welcome;





// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const Welcome = () => {
//     const { id } = useParams();
//     const [fullname, setFullname] = useState('');
//     const [username, setUsername] = useState('');

//     useEffect(() => {
//         const checkApi = async () => {
//             const res = await axios.get("https://66ffcd724da5bd237552095c.mockapi.io/users");
//             const users = res.data;
//             const user = users.find(user => user.id === id);

//             if (user) {
//                 setFullname(user.fullname);
//                 setUsername(user.username); 
//             }
//         };
//         checkApi();
//     }, [id]); 

//     return (
//         <div>
//             <h1 style={{ textAlign: "center", padding: "1rem" }}>Welcome, {username || fullname}</h1>
//         </div>
//     );
// };

// export default Welcome;

