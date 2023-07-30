const fetch = require('node-fetch');

async function fetchGooglePage() {
  try {
    const url = 'https://www.google.com';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch Google page. Status: ${response.status} ${response.statusText}`);
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching Google page:', error.message);
    throw error;
  }
}

// Call the function and handle the result
fetchGooglePage()
  .then((data) => {
    console.log('Google page content:');
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
