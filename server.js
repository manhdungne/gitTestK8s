// server.js

// Import module http có sẵn trong Node.js
const http = require('http');

// Thiết lập port cho server
const PORT = 3000;

// Tạo server
const server = http.createServer((req, res) => {
    // Thiết lập header cho response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Gửi phản hồi đến client
    res.end('Xin chào! Đây là server Node.js đơn giản\n');
});

// Khởi động server và lắng nghe trên port đã chọn
server.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}/`);
});
