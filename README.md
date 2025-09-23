# 📱 Pokédex App

A small **JavaScript web application** that loads data from the [Pokémon API](https://pokeapi.co/) and allows users to view a list of Pokémon and see details about each one on demand. This project was built with **HTML, CSS, and JavaScript**, and demonstrates working with external APIs, DOM interaction, and responsive UI components.

---

## 📌 Features

- Fetches data from an external API (Pokémon API)
- Displays a list of Pokémon on page load
- Shows detailed information for a selected Pokémon in a modal
- Styled with custom CSS (with Bootstrap for layout and UI)
- Works across modern browsers (Chrome, Firefox, Safari, Edge, IE11)

---

## 🎯 User Stories

- As a user, I want to view a list of Pokémon so I can browse through them.
- As a user, I want to click on a Pokémon to see more details, such as type, height, and abilities.
- As a user, I want a simple, clean interface that works across devices.

---

## 🛠️ Technologies Used

- **HTML5** for structure  
- **CSS3** and **Bootstrap** for layout and styling  
- **JavaScript (ES6+)** for logic and API calls  
- **Pokémon API** for data  
- **ESLint / Prettier** for code formatting  

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- A modern web browser (Chrome, Firefox, Safari, Edge, IE11)
- A text editor (VSCode recommended)
- Git (for cloning the repo)

---

### 1️⃣ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pokedex-app.git
   cd pokedex-app

2. Open the project folder in VSCode.
  
3. Launch the app by opening index.html in your browser, or run a simple dev server:
  ```bash
    npx http-server
```


4. Then go to http://localhost:8080.


### 📂 Project Structure
```bash
pokedex-app/
│── index.html       # Main HTML file
│── css/
│   └── styles.css   # Custom styles
│── js/
│   └── scripts.js   # Main JavaScript logic
│── img/             # Any assets or icons
│── README.md        # Project documentation
```

### 🌐 Deployment

This app can be hosted easily with GitHub Pages: Current deployment can be accessed here: https://cinchronicity.github.io/Pokedex-App/

Push your code to a GitHub repository.

In your repo, go to Settings > Pages.

Under "Branch", select main (or master) and /root.

Save, then visit the provided GitHub Pages URL.

### 🧪 Development Notes

The app uses fetch() to retrieve data asynchronously.

Data is displayed dynamically in the DOM.

A modal UI pattern is used for Pokémon details.

ESLint rules were applied to maintain clean, error-free code.

