module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  try {
    //if the user is not a user in the database, or the email does not match admin, 
    //tell the user they cannot be granted access to the page
    if(!req.user || req.user.email !== 'admin')
      throw new Error ('You do not have access to view this page');
    
    next();
  } catch (err) {
    err.status = 403;
    next(err);
  }
};
