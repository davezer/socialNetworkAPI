const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    updateThought,
    addReaction,
    deleteThought,
    deleteReaction
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts);
router.route('/:id').get(getThoughtsById).put(updateThought).delete(deleteThought);
router.get('/:userId').post(createThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;