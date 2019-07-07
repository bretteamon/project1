// let form = document.getElementById('contact_form');

// form.addEventListener('submit', event => { 
//     let firstName = form.elements['firstName'];
//     let lastName = form.elements['lastName'];
//     let email = form.elements['email'];
//     let tel = form.elements['tel'];
//     let DOB = form.elements['DOB'];
//     let Planeswalker = form.elements['Planeswalker'];
//     let plane_Drop = form.elements['plane_Drop'];
//     let comments = form.elements['comments']; 
//     let Male_Female = form.elements['Male_Female'];

//     console.log(firstName.value, lastName.value, email.value, tel.value, DOB.value, Planeswalker.value, plane_Drop.value, comments.value, Male_Female.value);
//         console.log(form);
//     event.preventDefault();
// });
// () => {form.elements['firstName']; return firstName.value;};


//document.getElementById("contact_form").addEventListener("change",formGetData);
//document.getElementById("contact_form").addEventListener("change",getGender);
// var progressPercent = document.getElementById("form_progress").value;

/*#region-----Create Form Object-------------------*/   
//     var formData = {
//         firstName: document.getElementById('firstName').value,
//         lastName: document.getElementById('lastName').value,
//         email: document.getElementById('email').value,
//         tel:document.getElementById('tel').value,
//         DOB:document.getElementById('DOB').value,
//         Planeswalker:document.getElementById('Planeswalker').value,
//         plane_Drop:document.getElementById('plane_Drop').value,
//         comments:document.getElementById('comments').value, 
//         Male_Female: function getGender(form,name){var val;
//                 var radios = form.elements[name];
                
//                 for (var i=0, len=radios.length; i<len; i++) {
//                     if ( radios[i].checked ) { 
//                         val = radios[i].value; 
//                         break;
//                     }
//                 }
//                 return val, 
//                 console.log(val)}
//         };
//    var formDataLength = Object.keys(formData).length;
//    console.log(formData);
/*#endregion-----------------------------*/
/*#region-----Populate Form Object-------*/
    // var formDataLength = Object.keys(formData).length;
    // function formGetData(){
    //             var inputs = Object.keys(formData); 
    //                 console.log(inputs);
    //             for (var i=0, len = inputs.length-1; i<len; i++){
    //                 //console.log(document.getElementById(inputs[i]).value),
    //                 set formData(inputs[i]) { document.getElementById(inputs[i].value)
    //                 }
    //             }
    //         };
            
    //  function getGender(form, name) {
    //     var val;
    //     var radios = form.elements[name];
        
    //     for (var i=0, len=radios.length; i<len; i++) {
    //         if ( radios[i].checked ) { 
    //             val = radios[i].value; 
    //             break;
    //         }
    //     }
    //     return val, 
    //     console.log(val);
    //};
    //    function getGender(){
    //     var radios = document.getElementsByName('Male_Female');
    //     var val;
    //         for (var i = 0, length = radios.length; i < length; i++){
    //             if (radios[i].checked){
    //         // do whatever you want with the checked radio
    //         val = radios[i].value;
    //         alert(radios[i].value);

            // only one radio can be logically checked, don't check the rest
        //     break;
        //     }
        //     }
        // };
// /*#endregion---------------------------*/
// /*#region------Check Form Values-------*/
//   //  function checkValidity () => 






// /*#endregion----------------------------*/
//         // formData.firstName = document.getElementById("firstName").value;
//         // console.log(formData.firstName);
//         // formData.lastName = document.getElementById("lastName").value;
//         // console.log(formData.lastName);
//         // formData.email = document.getElementById("email").value;
//         // console.log(formData.email);
//         // formData.tel = document.getElementById("tel").value;
//         // console.log(formData.tel);
//         // formData.DOB = document.getElementById("DOB").value;
//         // console.log(formData.DOB);
//         // formData.Male_Female = getGender( document.getElementById('contact_form'), 'Male_Female' );
//         // console.log(formData.Male_Female);
//         // formData.Planewalker = document.getElementById("Planeswalker").checked;
//         // console.log(formData.Planewalker);
//         // formData.Plane = document.getElementById("plane_Drop").value;
//         // console.log(formData.Plane);
//         // console.log(Object.keys(formData).length);
//         // console.log(Object.keys(formData)[0]);
//     //  };

//     // function formProgress(){
//     //     isValidName = document.getElementById("firstName").checkValidity();
//     //         if (isValidName) {
//     //             nameBool = 1;
//     //             // console.log("Valid");
//     //             // console.log(nameBool);
//     //         }else {
//     //             nameBool = 0;
//     //             // console.log("Not valid");
//     //             // console.log(nameBool);
//     //         }
//     //     isValidLastName = document.getElementById("lastName").checkValidity();
//     //         if (isValidLastName) {
//     //             lastNameBool = 1;
//     //             // console.log("Valid");   
//     //             // console.log(lastNameBool);
//     //         }else {
//     //             lastNameBool = 0;
//     //             // console.log("Not valid");
//     //             // console.log(lastNameBool);
//     //         }
//     //     isValidEmail = document.getElementById("email").checkValidity();
//     //         if (isValidEmail) {
//     //             emailBool = 1;
//     //             // console.log("Valid");
//     //             // console.log(emailBool);
//     //         }else {
//     //             emailBool = 0;
//     //             // console.log("Not valid");
//     //             // console.log(emailBool);
//     //         }    
//     //     isValidTel = document.getElementById("tel").checkValidity();
//     //         if (isValidTel) {
//     //             telBool = 1;
//     //             // console.log("Valid");
//     //             // console.log(telBool);
//     //         }else {
//     //             telBool = 0;
//     //             // console.log("Not valid");
//     //             // console.log(telBool);
//     //         }   
        
//     //     isValidMCheck = document.getElementById("Male_Female").checkValidity();
//     //         if (isValidTel) {
//     //         telBool = 1;
//     //         // console.log("Valid");
//     //         // console.log(telBool);
//     //          }else {
//     //         telBool = 0;
//     //         // console.log("Not valid");
//     //         // console.log(telBool);
//     //     }   
//     //     }
