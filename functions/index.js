const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin');
admin.initializeApp();

//post comments
exports.postcomments= functions.https.onRequest((request,response) => {
return admin.firestore().collection('comments').add(request.body).then(()=>{
    response.send("Saved in the database");
});
  
  //get comments
  exports.getcomments = functions.https.onRequest((request, response) => {

let myData = []
admin.firestore().collection('comments').get().then((snapshot) => {
                    if (snapshot.empty) {
                    console.log('No matching documents.');
                    response.send('No data in database');
                    return;
            }
            snapshot.forEach(doc => {
            myData.push(doc.data());
            });
            // 2. Send data back to client
            response.send(myData);
            })

  
});
