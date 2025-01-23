# React GDP Bar Chart

This project visualizes the United States GDP data using a bar chart. It was rewritten from a vanilla JavaScript implementation to a modern React application with Vite for a better development experience and modularity.

## Features

- Visualizes GDP data using D3.js.
- Responsive and interactive bar chart with tooltips and hover effects.
- Modern React architecture for better maintainability and scalability.

## Project Structure

```text
├── public/           # Static assets
├── src/
│   ├── components/
│   │   └── BarChart.jsx  # Bar chart implementation using React and D3
│   ├── styles/
│   │   └── BarChart.css  # Styles for the bar chart
│   └── App.jsx          # Main application component
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

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

4. **Open the app**:
   Visit `http://localhost:5173` in your browser.

## Usage

The application fetches GDP data from the following API endpoint:
[https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json](https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json)

Once loaded, the bar chart will display:

- **Bars** representing GDP values.
- **Tooltip** showing GDP details on hover.

## Technologies Used

- **React**: For building the user interface.
- **D3.js**: For creating the bar chart and handling data visualization.
- **Vite**: For fast and efficient bundling.
- **CSS**: For styling the application.

## License

This project is open-source and available under the MIT License.

## Contributing

Contributions are welcome! If you'd like to add features or fix bugs, feel free to:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed explanation of your changes.

## Acknowledgments

- [D3.js Documentation](https://d3js.org/)
- [FreeCodeCamp GDP Data](https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json)

