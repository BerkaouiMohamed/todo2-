const bcrypt=require('bcryptjs')

module.exports= async(password,hash) => {
    return bcrypt.compareSync(password, hash);
  }