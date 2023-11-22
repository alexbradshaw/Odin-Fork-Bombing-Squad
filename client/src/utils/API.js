
const errorCheck = async (res) => {
    if (!res.ok) {
        if (res.status == 401 || res.status == 404) {
            localStorage.removeItem('auth');
            location.assign('/login');
        }
        const error = await res.json();
        throw new Error(error.message);
    }
}

const retrieveAuthToken = () => {
    return localStorage.getItem('auth');
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

    errorCheck(response);

    const { token } = await response.json();

    localStorage.setItem('auth', token);
    
    return user;
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

    errorCheck(response);

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

    errorCheck(response);

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

    errorCheck(response);

    const { user, token } = await response.json();

    localStorage.setItem('auth', token);

    return user;
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

    errorCheck(response);

    const { items } = await response.json(); // extract items array

    return items;
}

export const getAllItems = async () => {
    const response = await fetch("/api/items");

    errorCheck(response);

    const items = await response.json();

    return items; // returns items array
}

export const getItem = async (itemId) => {
    const response = await fetch(`/api/item/${itemId}`); // calls api by item id
    
    errorCheck(response);
    
    const item = await response.json();

    return item; // returns single item
}

export const updateItem = async (itemId, updatedItemBody) => {
    const response = await fetch(`/api/item/${itemId}`, {
        method: "PUT", 
        headers: {
            'Authorization' : retrieveAuthToken(),
        },
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItemBody),
    });
    
    errorCheck(response);
    
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
    
    errorCheck(response);
    
    const { items } = await response.json();
    
    return items; // returns updated items list
}

export const getLoggedInUser = async () => {
    const response = await fetch("/api/user", {
        headers: {
            'Authorization' : retrieveAuthToken(),
        }
    }); // only works if already logged in, I can add a getUserById route if that is desired
    
    errorCheck(response);
    
    const user = await response.json();

    return user;
}