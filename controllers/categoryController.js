const Category = require('../models/categoryModel');

// إنشاء فئة جديدة
exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json({
            status: 'نجاح',
            data: category
        });
    } catch (error) {
        res.status(400).json({
            status: 'فشل',
            message: error.message
        });
    }
};

// الحصول على جميع الفئات
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({
            status: 'نجاح',
            results: categories.length,
            data: categories
        });
    } catch (error) {
        res.status(400).json({
            status: 'فشل',
            message: error.message
        });
    }
};

// الحصول على فئة محددة
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({
                status: 'فشل',
                message: 'لم يتم العثور على الفئة'
            });
        }
        res.status(200).json({
            status: 'نجاح',
            data: category
        });
    } catch (error) {
        res.status(400).json({
            status: 'فشل',
            message: error.message
        });
    }
};

// تحديث فئة
exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!category) {
            return res.status(404).json({
                status: 'فشل',
                message: 'لم يتم العثور على الفئة'
            });
        }
        res.status(200).json({
            status: 'نجاح',
            data: category
        });
    } catch (error) {
        res.status(400).json({
            status: 'فشل',
            message: error.message
        });
    }
};

// حذف فئة
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({
                status: 'فشل',
                message: 'لم يتم العثور على الفئة'
            });
        }
        res.status(204).json({
            status: 'نجاح',
            data: null
        });
    } catch (error) {
        res.status(400).json({
            status: 'فشل',
            message: error.message
        });
    }
}; 