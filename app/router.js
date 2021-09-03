import Router from "express";

const router = new Router();

// TODO: Add routes here (maybe 🤔 start with a GET test route)
router.get("/", async (_, res) => {
  try {
    const users = await usersController.index();
    res.json(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const validatedUser = userModel.createUser(req.body);
    const newUser = await usersController.add(validatedUser);
    res.status(201).json(newUser);
  } catch (error) {
    req.status(400);
  }
});



export default router;
