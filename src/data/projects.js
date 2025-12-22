export const projects = [
    {
        slug: "sales-forecasting-retail",
        title: "Sales Forecasting for Retail Planning",
        overview:
            "This project simulates how a retail planning team would forecast demand across product categories, seasons, and customer segments to support inventory, assortment, and financial planning decisions.",

        businessQuestions: [
            "How does demand behave across product categories, seasons, and customer segments?",
            "Which segments introduce the most volatility and planning risk?",
            "How do different forecasting approaches perform across retail use cases?",
            "Where do forecast bias and error consistently appear?"
        ],

        approach: [
            "Aggregated transactional data to a monthly planning grain",
            "Segmented demand by product category, transaction season, and customer type",
            "Applied Holt-Winters models with additive seasonality",
            "Used linear regression as a baseline trend model",
            "Evaluated forecast accuracy using MAPE and RMSE"
        ],

        models: [
            {
                name: "Holt-Winters (Additive Seasonality)",
                description:
                    "Captures trend and recurring seasonal patterns commonly observed in retail demand"
            },
            {
                name: "Linear Regression",
                description:
                    "Provides a simple, interpretable baseline for trend-driven forecasting"
            }
        ],

        impact: [
            "Improved visibility into demand drivers and forecast risk",
            "Earlier identification of high-uncertainty segments",
            "Created a scalable foundation for repeatable planning cycles"
        ],

        tools: ["Python", "Pandas", "NumPy"],

        github: "https://github.com/alau9/revenue-forecasting-time-series"
    }
];
