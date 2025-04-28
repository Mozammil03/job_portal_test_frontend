const baseUrl = 'http://localhost:8080/users/';

const registerUser = async (user: any) => {
    return await fetch(baseUrl + 'register', {
        method: "POST",   
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),  
    })
    .then((res) => res.json())
    .catch((err) => { throw err });
}

const loginUser = async (user: any) => {
    return await fetch(baseUrl + 'login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
    .then(async (res) => {
        if (!res.ok) {
            const error = await res.json();
            throw error;
        }
        
        return res;
    })
    .catch((err) => { 
        throw err 
    });
}

export { registerUser, loginUser };

const UserService = () => {
  return (
    <div>UserService</div>
  )
}

export default UserService;