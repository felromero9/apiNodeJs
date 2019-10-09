exports.createPostValidator = (req, res, next) => {
    // title
    req.check('title', "Write a title").notEmpty()
    req.check('title', "Title must be 4 to 50 characteres").isLength({
        min: 4,
        max: 150
    });

    //body
    req.check('body', "Write a title").notEmpty()
    req.check('body', "Body must be 4 to 2000 characteres").isLength({
        min: 4,
        max: 2000
    });

    // check for errors
    const error = req.validationErrors();
    
    if(error) { // if error show the first one as they happen
        const firstError = error.map((error) => error.msg) [0]
        return res.status(400).json({error: firstError})
    }

    // Process to the next middleware
    next();

}