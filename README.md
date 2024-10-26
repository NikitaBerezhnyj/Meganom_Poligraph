# Meganom Poligraph

#### Repository translates: [українська :ukraine:](#meganom-poligraph-ukraine), [english :uk:](#meganom-poligraph-uk)

## Meganom Poligraph :ukraine:

### Опис проекту

Цей репозиторій містить код для веб-сайту поліграфічної компанії "Меганом Поліграф", яка спеціалізується на виготовленні пакетів. Сайт розроблено з використанням MERN стеку (MongoDB, Express.js, React.js, Node.js) та включає як frontend, так і backend частини.

### Особливості

- Повнофункціональний веб-сайт для поліграфічної компанії
- Каталог продукції з можливістю фільтрації та пошуку
- Форма замовлення для клієнтів
- Інформаційні сторінки про компанію та послуги
- Кастомна адмін-панель для управління контентом та замовленнями

### Технології

- **_Frontend:_** React.js
- **_Backend:_** Node.js з Express.js
- **_База даних:_** MongoDB
- **_Додаткові бібліотеки:_**
  - react-router-dom
  - react-bootstrap
  - bootstrap
  - i18next
  - react-i18next
  - axios
  - react-icons
  - react-select
  - express
  - cors
  - helmet
  - joi
  - jsonwebtoken
  - bcrypt
  - nodemailer
  - multer
  - mongoose
  - validate-image-type
  - @vitalets/google-translate-api

### Встановлення

1. Клонуйте репозиторій:

   ```bash
   git clone https://github.com/NikitaBerezhnyj/Meganom_Poligraph.git
   ```

2. Встановіть залежності для backend:

   ```bash
   cd server
   npm install
   ```

3. Встановіть залежності для frontend:

   ```bash
   cd client
   npm install
   ```

4. Налаштуйте змінні середовища:

   Створіть файл `.env` в теці `server` та заповнити необхідні середовища вказані в example.env

### Запуск проекту

1. Запустіть backend сервер:

   ```bash
   cd server
   npm run dev
   ```

2. В іншому терміналі запустіть frontend:

   ```bash
   cd client
   npm run dev
   ```

3. Відкрийте браузер і перейдіть за адресою `http://localhost:5173`

### Збірка проєкту каталогу розгортання

1. Виконайте команду make в кореневій теці:

   ```bash
   make
   ```

Отримаєте теку deploy, яку можна завантажити на хостинг

### Адмін-панель

Для доступу до адмін-панелі використовуйте наступні кроки:

1. Перейдіть за адресою `http://localhost:5173/admin`
2. Введіть облікові дані адміністратора

## Meganom Poligraph :uk:

### Project description.

This repository contains the code for the website of Meganom Poligraph, a printing company that specializes in the production of packages. The site is developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) and includes both frontend and backend parts.

### Features

- Fully functional website for a printing company
- Product catalog with the ability to filter and search
- Order form for customers
- Information pages about the company and services
- Custom admin panel for content and order management

### Technologies.

- **_Frontend:_** React.js
- **_Backend:_** Node.js with Express.js
- **_Database:_** MongoDB
- **_Additional libraries:_**
  - react-router-dom
  - react-bootstrap
  - bootstrap
  - i18next
  - react-i18next
  - axios
  - react-icons
  - react-select
  - express
  - cors
  - helmet
  - joi
  - jsonwebtoken
  - bcrypt
  - nodemailer
  - multer
  - mongoose
  - validate-image-type
  - @vitalets/google-translate-api

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NikitaBerezhnyj/Meganom_Poligraph.git
   ```

2. Install dependencies for the backend:

   ```bash
   cd server
   npm install
   ```

3. Install the dependencies for the frontend:

   ```bash
   cd client
   npm install
   ```

4. Configure environment variables:

   Create an `.env' file in the `server' folder and fill in the required environments specified in example.env

### Starting the project.

1. Start the backend server:

   ```bash
   cd server
   npm run dev
   ```

2. In another terminal, run the frontend:

   ```bash
   cd client
   npm run dev
   ```

3. Open a browser and go to `http://localhost:5173`

### Building the deployment directory project

1. Run the make command in the root folder:

   ```bash
   make
   ```

Get the deploy folder, which can be uploaded to the hosting

### Admin panel

To access the admin panel, use the following steps:

1. Go to `http://localhost:5173/admin`
2. Enter your administrator credentials
