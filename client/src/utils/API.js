
const errorCheck = async (res) => {
    if (!res.ok) {
        if (res.status == 400 || res.status == 401 || res.status == 404) {
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

    await errorCheck(response);

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

    const { user, token } = await response.json();

    localStorage.setItem('auth', token);

    return user;
}

export const createNewItem = async (formData) => {
    try {
        console.log("formData", formData);
        const response = await fetch("/api/item", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              'Authorization' : retrieveAuthToken(),
            //   you need to be logged in to create a new Item
            },
            body: JSON.stringify(formData),
        });
    
        console.log("response", response);
        
        await errorCheck(response);
        // error check is async so we need an await or else there is no promise

        const { items } = await response.json(); // extract items array
        console.log("items", items);
        return items;
        // return items;
    }
    catch (error) {
        console.log("error creating new item", error);
        const emptyData = {
            name: "",
            description: "", 
            category: "", 
            pricing: 0.00, 
            address: "", 
            quantity: 0, 
            image: ""

        }
        return [emptyData];
    }

}

// the issue: errorCheck consuming await res.json() which consumes body of json but we didn't await it.
// The body was already used and couldn't be used again in errorCheck.

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
        },
        headers: {
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