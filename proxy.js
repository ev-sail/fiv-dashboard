export default async function handler(req, res) {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyJ47Cj0yDxO-jE-3sokMDOAbqFjMhW2WCHmk3S4-E5lCtrN0HQ-VnVBEkBuoPZMeezvA/exec';
  
  try {
    const response = await fetch(SCRIPT_URL, {
      redirect: 'follow',
      headers: { 'Accept': 'application/json' }
    });
    const text = await response.text();
    const data = JSON.parse(text);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch(err) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ error: err.message, details: err.toString() });
  }
}
