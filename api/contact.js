const admin = require("firebase-admin");

module.exports = (req, res) => {

  const email = req.body.email
  const language = req.body.language

  try {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.PROJECT_ID,
      private_key: process.env.PRIVATE_KEY,
      client_email: process.env.CLIENT_EMAIL
    }),
  });
}
catch (error){
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

  const db = admin.firestore();
  const docRef = db.collection("gameletics").doc(email);
  docRef.set({
    email: email,
    language: language,
  }).then(() => {
    res.status(200).send(`Hello ${email}!`)
  })
  .catch((error) => {
    res.json({ error });
  });
}
