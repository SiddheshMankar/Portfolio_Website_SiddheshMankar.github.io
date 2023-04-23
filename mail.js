const firebaseConfig = {
    apiKey: "AIzaSyB_gbA39XSQoG87qVk12mCXHh2bW2m44nk",
    authDomain: "htmlform-b2df5.firebaseapp.com",
    databaseURL: "https://htmlform-b2df5-default-rtdb.firebaseio.com",
    projectId: "htmlform-b2df5",
    storageBucket: "htmlform-b2df5.appspot.com",
    messagingSenderId: "396895790571",
    appId: "1:396895790571:web:88b5deedc70ecc14cea5ae",
    measurementId: "G-76ZQ6G0D90"
  };
  firebase.initializeApp(firebaseConfig);

  //reference 
 var contactformDb= firebase.database().ref("contactForm");
 document.getElementById('contactForm').addEventListener('submit',submitForm);

 function submitForm(e){
    e.preventDefault();

    var Name=getElementVal("name");
    var Email=getElementVal("email");
    var Subject=getElementVal("subject");
    var Message=getElementVal("message");

    saveMessage(Name,Email,Subject,Message);

    //alert

    document.querySelector(".alert").style.display="block";

    //remove alert
    setTimeout(()=>{
        document.querySelector(".alert").style.display="none"
    },3000);

    //reset
    document.getElementById('contactForm').reset()

    console.log(Name,Email,Subject,Message);
 }
 const saveMessage=(Name,Email,Subject,Message)=>{
    var newContactForm=contactformDb.push();
    newContactForm.set({
        Name:Name,
        Email:Email,
        Subject:Subject,
        Message:Message,

    });
 }
 const getElementVal=(id)=>{
    return document.getElementById(id).value;

 }
 