const router = require('express').Router();

const {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../controllers/user-controller');

//set up GET all and POST at /users

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

//set up GET one, PUT, and DELETE at /users/:id

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)

    .delete(deleteUser)
router.route('/:userId').post(addFriend)

router.route('/:userId/:friendId').delete(deleteFriend)

module.exports = router;