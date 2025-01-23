# React GDP Bar Chart

This project visualizes the United States GDP data using a bar chart. It was rewritten from a vanilla JavaScript implementation to a modern React application with Vite for a better development experience and modularity.

## Features

- Visualizes GDP data using D3.js.
- Responsive and interactive bar chart with tooltips and hover effects.
- Modern React architecture for better maintainability and scalability.

## Project Structure

├── public/           # Static assets
├── src/
│   ├── components/
│   │   └── BarChart.jsx  # Bar chart implementation using React and D3
│   ├── styles/
│   │   └── BarChart.css  # Styles for the bar chart
│   └── App.jsx          # Main application component
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation

## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Steps

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

## Technologies Used

- **React**: For building the user interface.
- **D3.js**: For creating the bar chart and handling data visualization.
- **Vite**: For fast and efficient bundling.
