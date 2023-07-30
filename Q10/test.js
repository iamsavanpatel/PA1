function testServer() {
  const expectedResponse = 'Hello, this is the server script!';
  const http = require('http');

  http.get('http://localhost:4000', (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      if (data === expectedResponse) {
        console.log('Server test passed!');
      } else {
        console.error('Server test failed. Unexpected response:', data);
      }
    });
  });
}

testServer();
