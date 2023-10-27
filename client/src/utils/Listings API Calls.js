
const errorThrow = async (res) => {
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
    }
}

// Use this if you want to test an API route that requires auth
export const loginTest = async() => {
    const response = await fetch("/api/login", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: "alex", 
            email: "alex@gmail.com", 
            password: "abradshaw"
        }), 
    });

    errorThrow(response);

    const userData = await response.json();
    return userData;
}

// Use this if you want to test login
export const login = async({ username, email, password }) => {
    const response = await fetch("/api/login", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username, // accepts username or
            email, // email
            password
        }), 
    });

    errorThrow(response);

    const userData = await response.json();
    return userData;
}

export const signup = async({ username, email, password }) => {
    const response = await fetch("/api/signup", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username, // accepts username or
            email, // email
            password
        }), 
    });

    errorThrow(response);

    const userData = await response.json();
    return userData;
}

export const createNewItem = async (formData) => {
    const response = await fetch("/api/item", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    errorThrow(response);

    const { items } = await response.json(); // extract items array

    return items;
}

export const getAllItems = async () => {
    const response = await fetch("/api/items");

    errorThrow(response);

    const items = await response.json();

    return items; // returns items array
}

export const getItem = async (itemId) => {
    const response = await fetch(`/api/item/${itemId}`); // calls api by item id
    
    errorThrow(response);
    
    const item = await response.json();

    return item; // returns single item
}

export const updateItem = async (itemId, updatedItemBody) => {
    const response = await fetch(`/api/item/${itemId}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItemBody),
    });
    
    errorThrow(response);
    
    const updatedItem = await response.json(); // returns updated item
    
    return updatedItem;
}

export const deleteItem = async (itemId) => {
    const response = await fetch(`/api/item/${itemId}`, { method: "DELETE" });
    
    errorThrow(response);
    
    const updatedUser = await response.json();
    
    return updatedUser; // returns full user with updated items list
}

export const getLoggedInUser = async () => {
    const response = await fetch("/api/user"); // only works if already logged in, I can add a getUserById route if that is desired
    
    errorThrow(response);
    
    const user = await response.json();

    return user;
}