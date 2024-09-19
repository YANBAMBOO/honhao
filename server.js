const express = require('express');
const path = require('path');
const app = express();

// 提供靜態文件
app.use(express.static(path.join(__dirname, 'public')));

// 處理所有路由
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
