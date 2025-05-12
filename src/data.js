const techStack = [
  {
    id: 1,
    title: 'Html',
    image: 'https://images.seeklogo.com/logo-png/18/1/html5-without-wordmark-color-logo-png_seeklogo-184157.png',
    category: 'frontend'
  },
  {
    id: 2,
    title: 'Css',
    image: 'https://images.seeklogo.com/logo-png/42/1/css-3-logo-png_seeklogo-426083.png',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'React JS',
    image: 'https://images.seeklogo.com/logo-png/27/1/react-logo-png_seeklogo-273845.png',
    category: 'frontend'
  },
  {
    id: 4,
    title: 'Stimulus JS',
    image: 'https://images.seeklogo.com/logo-png/44/1/stimulus-logo-png_seeklogo-444856.png',
    category: 'frontend'
  },
  {
    id: 5,
    title: 'Tailwind Css',
    image: 'https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png',
    category: 'frontend'
  },
  {
    id: 6,
    title: 'Bootstrap Css',
    image: 'https://images.seeklogo.com/logo-png/25/1/bootstrap-framework-logo-png_seeklogo-255386.png',
    category: 'frontend'
  },

  {
    id: 7,
    title: 'Scss',
    image: 'https://images.seeklogo.com/logo-png/27/1/sass-logo-png_seeklogo-273879.png',
    category: 'frontend'
  },
  {
    id: 8,
    title: 'Figma',
    image: 'https://images.seeklogo.com/logo-png/33/1/figma-logo-png_seeklogo-332042.png',
    category: 'frontend'
  },
  {
    id: 9,
    title: 'Javascript',
    image: 'https://images.seeklogo.com/logo-png/27/1/javascript-js-logo-png_seeklogo-273557.png',
    category: 'programing languages'
  },
  {
    id: 10,
    title: 'Ruby on Rails',
    image: 'https://www.ruby-lang.org/images/header-ruby-logo.png',
    category: 'programing languages'
  },
  {
    id: 11,
    title: 'Python',
    image: 'https://images.seeklogo.com/logo-png/27/1/python-logo-png_seeklogo-273830.png',
    category: 'programing languages'
  },
  {
    id: 12,
    title: 'SQL',
    image: 'https://images.seeklogo.com/logo-png/43/1/azure-sql-logo-png_seeklogo-434048.png',
    category: 'database'
  },
  {
    id: 13,
    title: 'PostgreSQL',
    image: 'https://images.seeklogo.com/logo-png/31/1/postgresql-logo-png_seeklogo-313278.png',
    category: 'database'
  },
  {
    id: 14,
    title: 'Sqlite3',
    image: 'https://images.seeklogo.com/logo-png/27/1/sqlite-logo-png_seeklogo-273915.png',
    category: 'database'
  },
  {
    id: 15,
    title: 'Git',
    image: 'https://images.seeklogo.com/logo-png/27/1/git-logo-png_seeklogo-273180.png',
    category: 'tools'
  },
  {
    id: 16,
    title: 'GitHub',
    image: 'https://images.seeklogo.com/logo-png/50/1/github-icon-logo-png_seeklogo-503247.png',
    category: 'tools'
  },
  {
    id: 17,
    title: 'Heroku',
    image: 'https://images.seeklogo.com/logo-png/27/1/heroku-logo-png_seeklogo-273520.png',
    category: 'tools'
  },
  {
    id: 18,
    title: 'VS Code',
    image: 'https://images.seeklogo.com/logo-png/32/1/visual-studio-code-logo-png_seeklogo-323431.png',
    category: 'tools'
  },
  {
    id: 19,
    title: 'Terminal',
    image: 'https://images.seeklogo.com/logo-png/32/1/hyper-logo-png_seeklogo-323874.png',
    category: 'tools'
  },
  {
    id: 20,
    title: 'MapBox API',
    image: 'https://images.seeklogo.com/logo-png/31/1/mapbox-logo-png_seeklogo-314273.png',
    category: 'tools'
  },
  {
    id: 21,
    title: 'OpenAi API',
    image: 'https://images.seeklogo.com/logo-png/50/1/chatgpt-logo-png_seeklogo-500383.png?v=1962766134387249536',
    category: 'tools'
  },
]

export const projects = [
  {
    id: 1,
    title: 'Food to go',
    description: 'Designed and built a responsive food delivery SPA using React. Users can browse a menu, add meals to their cart, and simulate placing an order. Focused on reusable components, state management, and user-friendly design.',
    image: '../public/projects/foodToGo.png',
    link: 'https://github.com/mihaisacalianu/foodDeliveryApp'
  },
  {
    id: 2,
    title: 'Cooking Recipes',
    description: "Responsive web app built with React that lets users search, view, and explore a wide variety of meal ideas using the MealDB API. It features dynamic search, recipe detail pages, and a clean, user-friendly interface designed to make finding your next meal easy and enjoyable.",
    image: '../public/projects/recipeApp.png',
    link: 'https://github.com/mihaisacalianu/recipe-app'
  },
  {
    id: 3,
    title: 'Hexplore',
    description: "Team-based full-stack project using Ruby on Rails. Focused on backend,logic: implemented user authentication, database design, and routing.Also contributed to frontend layout and interactive map features using Turf.js and Mapbox API.",
    image: '../public/projects/hexplore.png',
    link: 'https://www.hexplore.io/'
  },
  {
    id: 4,
    title: 'Smoke and Go',
    description: "Developed and contributed in a team of four during a week-long sprint.Built a full-stack application featuring user authentication, a dynamic listing system, and a map interface for BBQ locations. Users can upload photos and manage listings. Built with Ruby on Rails, JavaScript, andMapbox API.",
    image: '../public/projects/smoke.png',
    link: 'https://smoke-n-go-mihaisacalianu-3c53f5136ac3.herokuapp.com/'
  },
  {
    id: 5,
    title: 'Watch List',
    description: "Full-stack web application built with Ruby on Rails and JavaScript, integrated with the IMDb API. It allows users to search for movies, view details, and create a personalized watchlist. Designed with a clean UI and seamless user experience, it’s a practical tool for movie lovers to track films they want to see.",
    image: '../public/projects/watchList.png',
    link: 'https://github.com/mihaisacalianu/rails-watch-list'
  },
]

export default techStack;
