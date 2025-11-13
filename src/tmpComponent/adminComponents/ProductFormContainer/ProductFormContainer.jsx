import { useState } from "react";
import { uploadToImgbb } from "../../../services/uploadImage";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { createProduct } from "../../../services/products";
import { validateProduct } from "../../../utils/validateProduct";

import "./ProductFormContainer.css";

export const ProductFormContainer = () => {
    const [loading, setLoading] = useState();
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        const newErrors = validateProduct({...product, file});
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            const image = await uploadToImgbb (file);
            const productData = {
                ...product, price: Number(product.price), image
            }

            await createProduct(productData);
            alert("Producto creado con éxito");
            setProduct({
                name: "",
                price: "",
                category: "",
                description: "",
            });
            setFile(null);
        } catch (error) {
            setErrors({ general: error?.message });
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (file) => {
    setFile(file);
};

    return (
        <ProductFormUI
            product={product}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
        />
    );
};
