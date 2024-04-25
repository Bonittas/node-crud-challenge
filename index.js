const express = require('express');
const bodyParser = require('body-parser');
const personRoutes = require('./src/routes/personRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/person', personRoutes);

// Error handling middleware for 404 errors (Not Found)
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not found' });
});

// Error handling middleware for internal server errors (500)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
