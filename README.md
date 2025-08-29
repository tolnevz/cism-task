# Dashboard Application

Vue 3 приложение с Composition API и TypeScript для управления документами.

## Описание

Приложение позволяет:

- Искать документы по ID
- Просматривать информацию о документах
- Скачивать документы в формате .txt
- Удалять документы (если у них есть изображение)

## Технологии

- Vue 3 (Composition API)
- TypeScript
- Pinia (управление состоянием)
- Vite (сборка)
- Docker (контейнеризация)

## Установка и запуск

### Локально

1. Установите зависимости:

```bash
npm install
```

2. Запустите приложение в режиме разработки:

```bash
npm run dev
```

3. Откройте в браузере: http://localhost:3000

### Запуск с помощью Docker

1. Соберите и запустите контейнер:

```bash
docker-compose up --build
```

2. Откройте в браузере: http://localhost:8080

### Сборка для продакшена

1. Создайте production сборку:

```bash
npm run build
```

2. Для локального просмотра сборки:

```bash
npm run preview
```

## Переменные окружения

Файл `.env` содержит:

```
VUE_APP_API_BASE_URL=https://test-app-csm.up.railway.app
```

## Команды

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Локальный просмотр продакшен сборки
npm run preview

# Запуск с Docker
docker-compose up --build

# Остановка Docker контейнера
docker-compose down
```
