export const validateProduct = (product, fileRequired = true) => {
    const errors = {};

    if (!product.name.trim()) {
        errors.name = "El nombre del producto es obligatorio.";
    }
    if (!product.price || product.price <= 0) {
        errors.price = "El precio debe ser mayor a cero.";
    }

    if (!product.description.trim()) {
        errors.description = "La descripción del producto es obligatoria.";
    }
    if (!product.category.trim()) {
        errors.category = "La categoría del producto es obligatoria.";
    }

    if (fileRequired && !product.file) {
        errors.imageFile = "La imagen del producto es obligatoria.";
    }

    return errors;
};