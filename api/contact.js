const functions = require("firebase-functions");
const admin = require("firebase-admin");
import serviceAccount from './gameletics-eaa39-firebase-adminsdk-9hmeh-5c4f72356d.json';

module.exports = (req, res) => {

  const email = req.body.email
  const language = req.body.language

  functions.logger.info(req.body, {structuredData: true});

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });  
  
  const db = admin.firestore();
  const docRef = db.collection("gameletics").doc(email);
  docRef.set({
    email: email,
    language: language,
  });

  res.status(200).send(`Hello ${email}!`)
}