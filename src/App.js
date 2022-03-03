import { useState } from "react";
import { LoginForm } from "./login/login";
import { ClothingList, FilterInput } from "./clothinglist/clothinglist";
import { RoleWrapper } from "./rolewrapper/rolewrapper";


export const items = [
    {
     ID: 4001, 
     Name: "Leather Jacket", 
     Price: "$88CAD", 
     Description: "A nice jacket to keep you warm.",
     Stock: 8
    },
    {
     ID: 4002,
     Name: "Fabric Sweater",
     Price: "$44CAD",
     Description: "A sweater for comfort.",
     Stock: 7
    },
    {
     ID: 4003,
     Name: "Sunglasses",
     Price: "$85CAD",
     Description:  "Makes you look cool.",
     Stock: 0
    }
];

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [filter, setFilter] = useState("");
  return (
    <div className="App">
      <LoginForm username={username} password={password} 
       setUsername={setUsername} setPassword={setPassword} setRole={setRole}/>
      <RoleWrapper role={role}>
        <FilterInput filter={filter} setFilter={setFilter}/>
        <ClothingList filter={filter}/>
      </RoleWrapper>
    </div>
  );
}

export default App;
