import express from 'express';

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

/**
 * Primary app routes.
 */
app.get('/', () => {
    console.log('Hello Node');
});

export default app;