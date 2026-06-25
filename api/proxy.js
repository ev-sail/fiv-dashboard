export default async function handler(req, res) {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxdlAH0V5K15C0KZge057yaXYj2SZ8ZrIBGuUZqNlnut6aLXuKriIHJ8d2o5PMYZRgPxw/exec';
  
  try {
    const response = await fetch(SCRIPT_URL);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
}
