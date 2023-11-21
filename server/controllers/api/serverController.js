const serverRoutes = {
  async health(req, res) {
    res.status(200).json("Server OK");
  },
}

module.exports = serverRoutes;