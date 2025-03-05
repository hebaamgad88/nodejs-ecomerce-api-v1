# API التجارة الإلكترونية

## المتطلبات

- Node.js
- MongoDB
- npm أو yarn

## التثبيت

1. قم بتثبيت المكتبات المطلوبة:

```bash
npm install
```

2. قم بتشغيل الخادم:

```bash
npm run dev
```

## نقاط النهاية المتاحة

### الفئات (Categories)

1. إنشاء فئة جديدة

   - POST http://localhost:8000/api/v1/categories

   ```json
   {
     "name": "إلكترونيات",
     "description": "منتجات إلكترونية متنوعة"
   }
   ```

2. الحصول على جميع الفئات

   - GET http://localhost:8000/api/v1/categories

3. الحصول على فئة محددة

   - GET http://localhost:8000/api/v1/categories/:id

4. تحديث فئة

   - PATCH http://localhost:8000/api/v1/categories/:id

   ```json
   {
     "name": "إلكترونيات محدثة",
     "description": "وصف محدث"
   }
   ```

5. حذف فئة
   - DELETE http://localhost:8000/api/v1/categories/:id

## اختبار API

يمكنك استخدام Postman لاختبار نقاط النهاية. قم باستيراد المجموعة التالية:

```json
{
  "info": {
    "name": "E-commerce API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Categories",
      "item": [
        {
          "name": "Create Category",
          "request": {
            "method": "POST",
            "url": "http://localhost:8000/api/v1/categories",
            "body": {
              "mode": "raw",
              "raw": "{\n    \"name\": \"إلكترونيات\",\n    \"description\": \"منتجات إلكترونية متنوعة\"\n}"
            }
          }
        },
        {
          "name": "Get All Categories",
          "request": {
            "method": "GET",
            "url": "http://localhost:8000/api/v1/categories"
          }
        },
        {
          "name": "Get Category by ID",
          "request": {
            "method": "GET",
            "url": "http://localhost:8000/api/v1/categories/:id"
          }
        },
        {
          "name": "Update Category",
          "request": {
            "method": "PATCH",
            "url": "http://localhost:8000/api/v1/categories/:id",
            "body": {
              "mode": "raw",
              "raw": "{\n    \"name\": \"إلكترونيات محدثة\",\n    \"description\": \"وصف محدث\"\n}"
            }
          }
        },
        {
          "name": "Delete Category",
          "request": {
            "method": "DELETE",
            "url": "http://localhost:8000/api/v1/categories/:id"
          }
        }
      ]
    }
  ]
}
```
