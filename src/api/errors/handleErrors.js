module.exports = (_err, req, res, next) => {
  const { statusCode, message } = _err;
  res.status(statusCode || 500).json({ error: message || 'internal server error' });
};
