
export const postUser = async ( newUser ) => {
    const url = "http://18.206.181.152/api/v1/users";
    
    const options = {
        method: "POST", // POST, PUT, DELETE, GET
        headers: { "Content-Type":"application/json"},
        // headers: { "Content-Type":"application/json", Authorization: `Bearer ${token}` },
        body:  JSON.stringify( newUser )
    }

    const response = await fetch( url, options  );
    console.log( response )
    if (response.status === 201){
        const userCreated = await response.json();
        console.log( userCreated)
        alert("Usuario creado con éxito el " + userCreated.createdAt);
        localStorage.setItem("userData", JSON.stringify( newUser ) ); 

    }
} 






