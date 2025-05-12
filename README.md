# 📱 CryptoTrackerApp

A mobile application built with [**React Native**](https://reactnative.dev) that fetches cryptocurrency data, allows navigation between screens, and is structured with scalability and modularity in mind. The app is fully typed using TypeScript.

---

## 🚀 Getting Started

> **Prerequisites**: Make sure to follow the official [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) before continuing.

### 📦 Install dependencies

```bash
yarn install
# or
npm install
```

---

## 🧠 Key Features

- ✅ Real-time cryptocurrency listing using an external API.
- 🔍 Filter and search by name or symbol.
- 📈 Detail view with price and volume change data.
- 🧩 Reusable, typed components.
- 💡 Auto-fallback for missing cryptocurrency icons.

---

## 📂 Project Structure

```plaintext
src/
├── components/           # Reusable UI components
├── config/               # API routes and global constants
├── models/               # Data models and TypeScript types
├── navigation/           # Navigation logic and route types
├── screens/              # Main app screens
│   ├── homeScreen/
│   └── detailScreen/
├── services/             # API integration logic
├── hooks/                # Shared custom hooks
├── assets/               # Static images and icons
```

> TypeScript types are organized in `types/` folders inside each module for maintainability and clarity.

---

## 📱 Running the App

### 1. Start Metro Bundler

```bash
yarn start
# or
npm start
```

### 2. Run on Android

```bash
yarn android
# or
npm run android
```

### 3. Run on iOS

```bash
yarn ios
# or
npm run ios
```

---

## 🔄 Development Workflow

You can start editing `App.tsx` or work directly inside any screen folder under `src/screens/`.

### 💡 Fast Refresh

The app supports [Fast Refresh](https://reactnative.dev/docs/fast-refresh), allowing you to see changes instantly as you save.

---

## 🧪 Running Tests

```bash
yarn test
# or
npm test
```

> Tests are located in the `__tests__/` folder.

---

## ✅ Best Practices Followed

- 🧱 Clean separation of concerns (`components/`, `screens/`, `services/`, etc.).
- 🧾 Strongly typed codebase using TypeScript.
- 🔁 Reusable components (`SearchInput`, `LoadingIndicator`, etc.).
- 🧭 Decoupled and centralized navigation (`NavigationProvider`).
- 🖼️ Robust image loading with automatic fallback for missing resources.

---

## 📚 Useful Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 👨‍💻 Author

This project was developed by **Rhonald Capera**.
