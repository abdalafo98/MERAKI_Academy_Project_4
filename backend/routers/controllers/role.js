const roleModel = require("./../../db/models/role");

const createNewRole = (req, res) => {
  const { role, permission } = req.body;
  const newRole = new roleModel({
    role,
    permission,
  });

  newRole
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
    createNewRole,
}
