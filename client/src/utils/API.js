
const errorCheck = async (res) => {
    if (!res.ok) {
        if ([400, 401, 404].includes(res.status)) {
            localStorage.removeItem('auth');
            location.assign('/login');
        }
        const error = await res.json();
        throw new Error(error.message);
        // make sure to await errorCheck because it's async
    }
}

const retrieveAuthToken = () => {
    return localStorage.getItem('auth');
}

export const authCheck = async () => {
    const response = await fetch("/api/auth", {
        method: "POST", 
        headers: {
          'Authorization' : retrieveAuthToken(),
        },
    });

    await errorCheck(response);

    const status = await response.json();

    return status;
}

// Use this if you want to test login
export const login = async({ userOrEmail, password }) => {
    const response = await fetch("/api/login", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            'username': userOrEmail, // accepts username or
            'email': userOrEmail, // email
            password
        }), 
    });

    await errorCheck(response);

    const { token } = await response.json();

    localStorage.setItem('auth', token);

    return true;
}

export const logout = async() => {
    const response = await fetch("/api/logout", {
        method: "POST", 
        headers: {
            'Authorization' : retrieveAuthToken(),
        }
    });

    await errorCheck(response);

    return response;
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

    await errorCheck(response);

    const { token } = await response.json();

    localStorage.setItem('auth', token);

    return true;
}

export const createNewItem = async (formData) => {
        const response = await fetch("/api/item", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              'Authorization' : retrieveAuthToken(),
            },
            body: JSON.stringify(formData),
        });
        
        await errorCheck(response);

        const { items } = await response.json(); // extract items array

        return items;
}


export const getAllItems = async () => {
    const response = await fetch("/api/items");

    await errorCheck(response);

    const items = await response.json();

    return items; // returns items array
}

export const getItem = async (itemId) => {
    const response = await fetch(`/api/item/${itemId}`); // calls api by item id
    
    await errorCheck(response);
    
    const item = await response.json();

    return item; // returns single item
}

export const updateItem = async (itemId, updatedItemBody) => {
    const response = await fetch(`/api/item/${itemId}`, {
        method: "PUT", 
        headers: {
            'Authorization' : retrieveAuthToken(),
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItemBody),
    });
    
    await errorCheck(response);
    
    const updatedItem = await response.json(); // returns updated item
    
    return updatedItem;
}

export const deleteItem = async (itemId) => {
    const response = await fetch(`/api/item/${itemId}`, { 
        method: "DELETE",
        headers: {
            'Authorization' : retrieveAuthToken(),
        }
    });
    
    await errorCheck(response);
    
    const { items } = await response.json();
    
    return items; // returns updated items list
}

export const getLoggedInUser = async () => {
    const response = await fetch("/api/user", {
        headers: {
            'Authorization' : retrieveAuthToken(),
        }
    }); // only works if already logged in, I can add a getUserById route if that is desired
    
    await errorCheck(response);
    
    const user = await response.json();

    return user;
}

export const getUserByUsername = async (username) => {
    if (!username) {
        return;
    }
    
    const response = await fetch(`/api/user/${username}`);

    await errorCheck(response);
    
    const user = await response.json();

    return user;
}

export const getCart = async () => {
    const response = await fetch("/api/user/cart", {
        headers: {
            'Authorization' : retrieveAuthToken(),
        }
    });
    
    await errorCheck(response);
    
    const cart = await response.json();

    return cart;
}

export const addToCart = async (itemId) => {
    const response = await fetch(`/api/user/cart/${itemId}`, {
        method:"POST",
        headers: {
            'Authorization' : retrieveAuthToken(),
        }
    }); 
    
    await errorCheck(response);
    
    const cart = await response.json();

    return cart;
}

export const purchase = async () => {
    const response = await fetch(`/api/user/cart`, {
        method:"POST",
        headers: {
            'Authorization' : retrieveAuthToken(),
        }
    }); 
    
    await errorCheck(response);
    
    const empty = await response.json();

    return empty;
}