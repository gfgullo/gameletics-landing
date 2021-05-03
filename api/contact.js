const admin = require("firebase-admin");

module.exports = (req, res) => {

  const email = req.body.email
  const language = req.body.language

  try {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: "gameletics-eaa39",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDYr01pVdSwF2D9\nBVbcbXNej9+sLFuvjrrOpzf8bgljprWUryvQTPQIdpdJ1ASALWdVaLSlNMmIax5+\nQEi2Dsot+JikKpsic11Dc95MpQGUWSZOeYXkhGVtY5zVO+Z+eJbwHJ/h94HZ5qU7\nMQ+uY1t0U0GBLGTBfXeBVCrdlJtIAdgKGF3f8mhL2uWzVxqpUO4qMSx/cBp/gfEf\nIuiFd6T1IkWCxX/4ozwY/fw/hr5NFEAQAgJ0BJDNuw/ZiJQnltp05bMZ1kBsttTE\n9uXtXrWZeRAH6sUm6AGKRHuXFKf1T6PPkNqCpvecL93ylnElCeQrAGe1lsK2ru3C\nsZddKzb3AgMBAAECggEAE3OyFaWXyTkU3JH5CSLza1OrujD/O0reXt5CSrFCh+u3\noehGnO8tLYDr6VV7RybZGTpwx3xUjTneJZ2CvLYMlPgb4XAiHh0dWO7snJSbIcsN\nz8sQzhtk+ZJEMLZGy/RQyuLFWmU8Og7Lc+PEt+lOeypc/b1TZc7sIADDM/VHw7zQ\nTLJevUmTtVVXM1FiIISXCrr60qealIiDftzA/bAULQXbYH+8npAcJ0i8eTzgaE6U\ntqQxMhNFQkB7JZEcrapWpR+HWBjdhwyCVmUkx3SFtA15CKaQYcIbDqc0g8Ucp56f\nz5DOeftSZsNxM2ruN23Hc+GXe0cnUqISVsvuY/SBEQKBgQD3faX7eAzTQ0JlzPWK\nVfCyv57ePq7vqJoYlLkLRnSTgTQlZPgS/E5jvME90dwiTHbIlG+VUFLDps5Fuejs\noAiznHXf+TMbG4NLL8f0I7OTVFZNh0/Juf5lFSt/tXj8nIj87JtgPp6oW8aWH6tp\n0P8kJwlEqDsnrDXEr/arH5GecQKBgQDgIoHNx8XKsGJPuERJSUwsolCnwfcZpVg4\npP9xM5mPN+gsQipoaHozSidazne10/0aYZ7ekyrnvwgW88yVfo5Z+HWMUDWqfy4O\nLgGVU7n5PiTvnrZOj3ZgAbCRMnwJ5REwNskyaugzuvNdwrMNUUQcFP6TLYMtIukR\ngOkkk9av5wKBgQCaTUBbFHIKlXikN7Eu2n4DM+086x/uU9QfVzo3iWnNPVThq53v\nWFcXX+urO1hgGgRE8ibPlRDE4w7f8hUC0pQaR4ZGafwu/mxRSC0GTev8Ayz7kU1x\nnAC7zQMd0GrqND5EUtBcpS4OEYoytvQMOT2ZsKzanXikN34ebwb/keMcQQKBgQCq\n0iHTz9mzLNMApxOEN1TS/7Iw6OeGqDmgkkAM6qKyQI22jYb8pAPeazmrP4iFD9fq\n71PBlrAwh6uGsrDNjvK3J2GPWuJL2zoinHWgdXtbtj04UuHm5ff2G9OSFcPrVqXO\n9TJKNqhaJLWuU+Fa2QDr1iRfz2QWVnEDYhhORE5vKQKBgQDasQVR4gm5v7fOOtEJ\nMzF1kr5beuWYIUGVCgBjC9wHWO1EkGui5Jhd1n85NzpIsuu5BYqXY0rzH+rxTFeh\nHkWrvliQ9vG4tNJqSo6ex20aCCtyBRS5gZ9NlZtRn3Zg9VzLMY856BuR303fo1kj\nC8tFgyytovOuofNu34xP6eVLew==\n-----END PRIVATE KEY-----\n",
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