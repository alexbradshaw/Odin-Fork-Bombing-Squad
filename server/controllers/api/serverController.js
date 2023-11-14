const serverRoutes = {
  async health(req, res) {
    res.status(500).json("Server OK");
  },
}

module.exports = serverRoutes;