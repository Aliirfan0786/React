import { useState } from "react";
const User =(props) => {
    const [count]= useState(100);
    const [count1]= useState(101);

return(
    <div className="user-card">
        <h1>Count:{count}</h1>
        <h1>Count:{count1}</h1>

        <h2> name:{props.name}</h2>
        <h3>Location : Allahabad</h3>
        <h4>Contact: ia.ali0532@gmail.com</h4>
    </div>
)
};

export default User;