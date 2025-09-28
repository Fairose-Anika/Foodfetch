# Food Fetch 🍲

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap\&logoColor=white)](https://getbootstrap.com/)

A simple web app to **search and display meals by country/cuisine** using [TheMealDB API](https://www.themealdb.com/api.php).

---

## Live Demo

`https://Fairose-Anika.github.io/Foodfetch/`

---

## Features

* Search meals by country/cuisine
* Display meal images and names in cards
* Responsive layout with Flexbox and Grid
* Shows message when cuisine is not found

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Fairose-Anika/Foodfetch.git
```

2. Open `index.html` in your browser.

3. Ensure internet connection for:

   * Bootstrap CSS
   * Google Fonts
   * TheMealDB API

---

## Usage

1. Enter a country or cuisine in the search box.
2. Click **Search**.
3. View the meals displayed as cards.
4. Click a card to see recipe details (if implemented).

---

## File Structure

```
food-fetch/
│
├─ index.html      # Main HTML file
├─ index.css       # Styles (uses Delius font)
├─ index.js        # Fetch and display meal cards
└─ README.md       # Project documentation
```

---

## Important Notes

* **Heading font fix**:

```css
.headName {
    font-family: "Delius", cursive;
    font-size: 2.5rem;
    color: #222261;
    text-align: center;
    padding-top: 20px;
    font-weight: 600;
}
```

* **Clickable card cursor fix**:

```css
.singleItem {
    cursor: pointer;
}
```

* **Details function** for clickable cards:

```js
function details(mealId) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];
            alert(`${meal.strMeal}\n\n${meal.strInstructions.substring(0, 200)}...`);
        });
}
```

---

## Technologies Used

* HTML5
* CSS3 (Flexbox, Grid, Google Fonts)
* JavaScript (Fetch API)
* Bootstrap 5

---

## License

This project is **open-source** and free to use.
