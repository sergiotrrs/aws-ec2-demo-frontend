
export const getUsers = async() => {
    const url = "http://18.206.181.152/api/v1/users";
    
    try {
        const response = await fetch(url);
        const users = await response.json();        
        return users;
        
    } catch (error) {
        console.error( error );
    }

}