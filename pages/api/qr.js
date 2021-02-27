const QRCode = require('qrcode');

const generateQRCode = async (req, res) => {
  const { uri } = req.body;

  if (!uri) {
    return res.status(400).json({ error: 'uri is required' });
  }
  
  try {
    const qrCode = await QRCode.toDataURL(uri);

    return res.status(201).json({ message: 'success', qrCode });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

export { generateQRCode as default };
