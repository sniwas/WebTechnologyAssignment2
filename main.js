const dobInput = document.getElementById('dateOfBirth');
const ageInput = document.getElementById('Age');
//const phoneno = document.getElementById('contact');
window.onload = function() {
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", handleChange);
    const fileInput = document.getElementById("file-input");
    fileInput.addEventListener("change", handleFileSelect);
};

function handleChange() {
    const checkbox = document.getElementById("checkbox");
    if (checkbox.checked) {
        alert("Thank you for your donation");
    } else {
        alert("Try to help people in need");
    }
}
//phoneno.addEventListener('blur', ()  =>{
//phoneno.value ='+91'+ phoneno.value;
//});
dobInput.addEventListener('change', () => {
  const dob = new Date(dobInput.value);
  const age = calculateAge(dob);
  ageInput.value = `${age.years} years, ${age.months} months, and ${age.days} days`;
});

function calculateAge(dob) {
    const now = new Date();
  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();

  if (months < 0 || (months === 0 && days<0) ){
    years--;
    months += 12;
    if ( days<0) {       
      months--;
        days  = new Date(now.getFullYear(), now.getMonth(), 0).getDate();     
    }
  }
  return {
    years: years,
    months: months,
    days: days
  };
}
function handleFileSelect(event) {
    const file = event.target.files[0];
    const fileType = file.type;
    if (fileType === 'image/tiff') {
        alert('File type is TIFF!');
        // do something with the TIFF file here
    } else {
        alert('Invalid file type!');
    }
}