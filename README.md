# 🍽️ FoodStall - React + Redux Thunk Project

A simple **React** app demonstrating how to use **Redux** with **redux-thunk** middleware to handle asynchronous API calls, along with loading, success, and error states.  
Users can toggle Wi-Fi on/off to simulate failed API requests and see error handling in action.

---

## 🚀 Features

- ✅ **Redux** for state management  
- ✅ **redux-thunk** for async API calls  
- ✅ Loading, Success, and Error states in the reducer  
- ✅ Simulated API failure when Wi-Fi is toggled off  
- ✅ Styled with CSS for a clean UI  

---

## 📂 Project Structure

src/
│
├── App.js # Root component, wraps app in Redux Provider
├── App.css # Global styles
├── Recipes.js # Main UI component
├── redux/
│ ├── redux.js # Store, reducers, and action creators
│ ├── api.js # Async API function with redux-thunk
│
└── main.js # React entry point


---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/foodstall-redux.git
   cd foodstall-redux
    ```
2. **Install dependencies**
    ```bash
   npm install
    ```
3. **Run the app**
    ```bash
   npm run dev
    ```

## 📜 How It Works
  State Management
  
  Global state contains:
  
  data → Recipes data from API
  
  loading → Boolean for loading state
  
  error → Stores error message
  
  wifi → Boolean for Wi-Fi simulation
  
  Async Flow
  
  getDataInfo() (in api.js) fetches recipes from the API.
  
  If Wi-Fi is OFF, it calls an invalid URL to trigger an error.
  
  Dispatches loading, success, and error actions accordingly.
  
  UI
  
  Displays Loading... while fetching
  
  Shows recipes if successful
  
  Shows an error message if the request fails


---


## 🛠️ Tech Stack
    1.React
    
    2.Redux
    
    3.redux-thunk
    
    4.Axios

