export default function handler(req, res) {
  res.status(200).json({
    country: req.searchParams.get('country'),
    region: req.searchParams.get('region'),
    city: req.searchParams.get('city'),
  });
}