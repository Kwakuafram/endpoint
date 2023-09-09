const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use a port of your choice

// Define a route that takes two GET parameters and returns JSON
app.get('/get_info', (req, res) => {
  const slack_name = req.query.slack_name || 'Richmond Forkuo Afram'; // Default value if not provided
  const current_day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const utc_time = new Date().toISOString();
  const track = 'backend';
  const github_file_url = 'https://github.com/username/repo/blob/main/file_name.ext';
  const github_repo_url = 'https://github.com/Kwakuafram';
  const status_code = 200;

  const responseData = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code,
  };

  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
