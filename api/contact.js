const admin = require("firebase-admin");

module.exports = (req, res) => {

  const email = req.body.email
  const language = req.body.language

  try {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: "gameletics-eaa39",
      private_key: "",
      client_email: "firebase-adminsdk-9hmeh@gameletics-eaa39.iam.gserviceaccount.com"
    }),
  });
}
catch (error){
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
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
