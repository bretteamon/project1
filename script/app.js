let form = document.getElementById('contact_form');

let formData = {
    firstName : null,
    lastName : null,
    email : null,
    tel : null,
    DOB : null,
    plane_Drop : null,
    comments : null,
    Male_Female : null,
    };

let getFormData = () => { 
    Objkey = Object.keys(formData);
    for (Objkey in formData) {
        formData[Objkey] = form.elements[Objkey].value;
    };
    console.log(Object.values(formData));
}

let progressBar = () => {
    let filledIn = parseFloat(Object.values(formData).length);
    let filtered = parseFloat(Object.values(formData).filter(Boolean).length);
    percentage = (filtered/filledIn)*100;
    document.getElementById('form_progress').value = percentage;
    return percentage;
}
form.addEventListener("change", getFormData);
form.addEventListener("change", progressBar);

