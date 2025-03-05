const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const categoryRoutes = require('./routes/categoryRoutes');

// تحميل متغيرات البيئة
dotenv.config();

const app = express();

// الوسائط
app.use(cors());
app.use(express.json());

// المسارات
app.use('/api/v1/categories', categoryRoutes);

// الاتصال بقاعدة البيانات
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('تم الاتصال بقاعدة البيانات بنجاح'))
    .catch((err) => console.error('خطأ في الاتصال بقاعدة البيانات:', err));

// تشغيل الخادم
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`الخادم يعمل على المنفذ ${PORT}`);
});