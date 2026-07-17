# 🎬 CineFine

**Find the movies you'll enjoy, without the hassle.**

CineFine is a sleek, fast movie discovery app built with React. Search through thousands of movies, get instant debounced results, and see what's trending based on real user search activity — all wrapped in a clean, modern dark UI.



---

## ✨ Features

- 🔍 **Instant Movie Search** — Search through thousands of movies powered by TMDB (The Movie Database) API
- ⚡ **Debounced Search Input** — Smooth, optimized search that avoids excessive API calls while you type
- 🔥 **Trending Movies** — Automatically surfaces the most-searched movies based on real usage data
- 🎨 **Modern UI** — Dark-themed, responsive design with smooth animations
- ☁️ **Cloud Backend** — Powered by Appwrite for tracking and storing search analytics
- 📱 **Fully Responsive** — Works seamlessly across desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend | React (Vite) |
| Styling | Tailwind CSS |
| Backend / Database | Appwrite (TablesDB) |
| Movie Data | TMDB API |
| Deployment | Netlify |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn
- A [TMDB API key](https://www.themoviedb.org/settings/api)
- An [Appwrite](https://appwrite.io/) project set up with a database and tables for movies/metrics

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vardanjawa-hub/cinefine.git
   cd cinefine
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_TABLE_ID=your_appwrite_table_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser 🎉

---

## 📁 Project Structure

```
cinefine/
├── public/
├── src/
│   ├── components/
│   │   ├── Search.jsx
│   │   ├── MovieCard.jsx
│   │   └── Spinner.jsx
│   ├── hooks/
│   │   └── useDebounce.js
│   ├── appwrite.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

---

## 🧠 How It Works

1. Users type a movie title into the search bar.
2. The input is **debounced** (500ms) to avoid firing an API request on every keystroke.
3. The debounced term triggers a fetch call to the **TMDB API** for matching movies.
4. Every successful search updates a **search count** in Appwrite's database — incrementing an existing entry or creating a new one.
5. The homepage's **Trending** section queries Appwrite for the top search counts, sorted in descending order, and displays the most popular searches.

---



## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/<your-username>/cinefine/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---



---

## 🙏 Acknowledgements

- [TMDB](https://www.themoviedb.org/) for the movie data API
- [Appwrite](https://appwrite.io/) for backend infrastructure
- [React](https://react.dev/) & [Vite](https://vitejs.dev/)

---

<p align="center">Built with ❤️ by <a href="https://github.com/vardanjawa-hub">Vardan Jawanda</a></p>
