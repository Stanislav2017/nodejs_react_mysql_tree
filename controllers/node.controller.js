const { Node } = require('../models/model');
const list = async (req, res, next) => {
    const nodes = await Node.findAll({
        order: [['parent', 'ASC']]
    }) || [];
    return res.status(200).json(nodes);
};

const create = async (req, res, next) => {
    const parent = req.body.parent || null;
    const { name } = req.body;
    if (!name) {
        return res.status(422).json({ message: 'Field "name" must be required' });
    }
    const result = await Node.create({ name, parent });
    if (result) {
        return res.status(200).json({ message: 'Node successfully created!' });
    } 
    return res.status(404).json({ message: 'Node not found!' });
};

const remove = async (req, res, next) => {
    const nodeId = req.params.id;
    if (!nodeId) {
        return res.status(404).json({ message: 'Node not found!' });
    }
    const result = await Node.destroy({ where: { id: nodeId }});
    if (result) {
        return res.status(200).json({ message: 'Node successfully deleted!' });
    }
    return res.status(404).json({ message: 'Node not found!' });
};

module.exports = {
    list,
    create,
    remove
};