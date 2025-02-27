import CategoryModel from '../models/category.model'

export const AddCategoryController = async (request, response) => {
    try {
        const { name, image } = request.body

        if (!name || !image) {
            return response.json({
                message: "Enter required field",
                error: true,
                success: false
            })
        }

        const addCategory = new CategoryModel({
            name, image
        })

        const saveCategory = await addCategory.save()

        if (!saveCategory) {
            return response.status(500).json({
                message: "Not Created",
                error: true,
                success: false
            })
        }
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}