const app = require('express')();
require('../server/services/passport');
require('../server/routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Express Server is live.');
});
