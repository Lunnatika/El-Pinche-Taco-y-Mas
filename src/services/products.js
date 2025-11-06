const BASE_URL = "https://6900ea90ff8d792314bbffb4.mockapi.io/product";

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(product),
    });
    if (!res.ok) {
        throw new Error("Error al crear el producto");
    }

    const result = await res.json();
    return result;

}