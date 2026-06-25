export default async function handler(req, res) {
  const SCRIPT_URL = 'https://script.google.com/a/macros/federvela.it/s/AKfycbyzk8wXDIeUbktqQVExBoXU8pYR5cmhyCqGLhCtMVHFWqsX1L9N2cWS5PD3cJXo7eE1vQ/exec';
  
  try {
    const response = await fetch(SCRIPT_URL);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
}
