const musicModel = require("../models/music.models")
const jwt = require("jsonwebtoken")
const { uploadFile } = require("../service/storage.service")
async function createMusic(req, res) {
   const token = req.cookie.token

   if (!token) {
      return res.status(200).json({ message: "unathorizede" })
   }
   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      if (decoded.role !== 'artist') {
         return res.status(401).json({ message: "you are not allowed to you this feautre 🤡🤡" })
      }

      const { title } = req.body
      const file = req.file
   }
   catch (err) {
      return res.status(401).json({ Message: "usr not logined" })
   }


}