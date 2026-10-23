export default async function handler(req, res) {
  return res.status(200).json({ 
    ok: true, 
    message: "Roadborn Bot is Working!",
    time: new Date().toISOString() 
  });
}
