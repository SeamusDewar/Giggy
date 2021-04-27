
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
admin.initializeApp();

//post comments
exports.postcomments= functions.https.onRequest((request,response) => {
   
    cors(request, response, () => {

    
return admin.firestore().collection('comments').add(request.body).then(()=>{
    response.send("Saved in the database");
});
  
  //get comments
  exports.getcomments = functions.https.onRequest((request, response) => {
const cors = require('cors')({origin: true});
let myData = []
admin.firestore().collection('comments').get().then((snapshot) => {
                    if (snapshot.empty) {
                    console.log('No matching documents.');
                    response.send('No data in database');
                    return;
            }
            snapshot.forEach(doc => {
            let docObj = {};
           docObj.id = doc.id;
           myData.push(Object.assign(docObj, doc.data()));
            });
            // 2. Send data back to client
            response.send(myData);
            })
     
     //delete comments
     
     exports.deletecomment = functions.https.onRequest((request, response) => {
cors(request, response, () => {
// your function body here - use the provided req and res from cors
admin.firestore().collection("comments").doc(request.query.id).delete().then(function()
{
response.send("Document successfully deleted!");
})
});
        
        //update comments
             exports.updatecomment = functions.https.onRequest((request, response) => {
cors(request, response, () => {
// your function body here - use the provided req and res from cors
admin.firestore().collection("comments").doc(request.query.id).update().then(function()
{
response.send("Document successfully updated!");
})
});


  
});
