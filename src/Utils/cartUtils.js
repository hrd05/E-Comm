function sanitizeEmail(email) {
    return email.replace(/[@.]/g, '');
}


export const addToCart = async (email, item) => {
    try {
        const sanitizedEmail = sanitizeEmail(email);
        const url = `https://crudcrud.com/api/c85ad640fd2e4fae870b3b5617227d27/cart${sanitizedEmail}`
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error('Failed to add item to cart');
        }
    }
    catch (err) {
        console.log(err);
        alert('Failed to add Item to cart');
    }
}

export const getCart = async (email) => {
    try {
        const sanitizedEmail = sanitizeEmail(email);
        const url = `https://crudcrud.com/api/c85ad640fd2e4fae870b3b5617227d27/cart${sanitizedEmail}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch Cart');
        }

        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (err) {
        console.log(err);
        alert('Fetch to fetch cart');
        return [];
    }
}