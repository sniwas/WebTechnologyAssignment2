# Web Technology Assignment 2
WEB TECHNOLOGY
Assignment – 2





Name : S.Niwas
Register No : 20ITR079
Class : 20IT06B
Problem Statement : Developing a Web page that includes getting name with first letter capital, Calculating age with date of birth, getting willingness whether he/she interested to donate blood, getting mobile number, getting photo and signature, all this in a organized form  
Course Code :  18ITC61



Github Link : https://github.com/sniwaserode/WebTechnologyAssignment2
HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Sign Up</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> 
  <link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
  <link rel="stylesheet" href ="style.css">
  <title>Registeration Form</title>
  <script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycbygV52Og19s7ATy861OAAqsHxmGUe3anX-tTqDg9mhrwbMUezq3_ru-GQHnGALcLJo/exec'
    const form = document.forms['Web-Technology']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
  </script>
  
</head>
<body>
  
  <div class="container ">
    <div class="header">
      <h2>Registration Form</h2>
      </div>
    <form name="Web-Technology" method='post' action="data.php">
      <div class="form-row">
        <div class="form-group col-md-6">
            <label for="first_name" >First Name</label>
            <input type="text" style="text-transform: capitalize;" class="form-control" id="first_name" name="first_name" placeholder="First Name">
        </div>
        <div class="form-group col-md-6">
            <label for="last_name">Last Name</label>
            <input type="text" style="text-transform: capitalize;" class="form-control" id="last_name" name="last_name" placeholder="Last Name">
        </div>
    </div>
  <div class="form-group ">
      <label for="dateOfBirth">Date of Birth</label>
      <input type="date" class="form-control" id="dateOfBirth" name="dateOfBirth">
  </div>
  <div class="form-group ">
    <label for="Age">Your age</label>
    <input type="text" class="form-control" id="Age" name="Age" >
</div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Email">
    </div>
    <div class="form-group">
      <label for="phone">Phone Number</label>
      <input type="tel" class="form-control" id="phone" value="+91" name="phone" placeholder="Phone Number" minlength="13" maxlength ="13">
  </div>
       
      
  <div class="form-group col-md-6">
    <label for="gender">Gender</label>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="gender" id="male" value="male">
        <label class="form-check-label" for="male">Male</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="gender" id="female" value="female">
        <label class="form-check-label" for="female">Female</label>
    </div>
</div>
<fieldset>
  <label for="Bloodgroup">Choose your Bloodgroup:</label>
<select>
  <option> - </option>
  <option>O +ve</option>
  <option>O -ve</option>
  <option>O Unknown</option>
  <option>A +ve</option>
  <option>A -ve</option>
  <option>A Unknown</option>
  <option>B +ve</option>
  <option>B -ve</option>
  <option>B Unknown</option>
  <option>AB +ve</option>
  <option>AB -ve</option>
  <option>AB Unknown</option>
  <option>Unknown</option>
 </select>
</fieldset>
<fieldset>
  <label>
    <input type="checkbox" id ="checkbox"name="donateBlood">I want to donate blood</label>
  
</fieldset>
<fieldset>
  <label for="file" >Upload Photo Format:.tiff MaxSize:2MB</label>
  <div id="file"><input type="file" id="file-input" maxlength="2097152"  accept="image/tiff" /></div>
</fieldset>
<fieldset>
  <label for="file" >Upload Signature Format:.tiff MaxSize:2MB</label>
  <div id="file"><input type="file" id="file-input" maxlength="2097152"   accept="image/tiff"/></div>
</fieldset>
<button type="submit">Submit</button>
</form>
  </div>
  <script src="main.js"></script>
</body>
</html>

style.css: 
/* Set the body background color */
body {
    background-color: #D1E7DD;
    margin: 0;
	width: 100vw;
	height: auto;
	background: #ecf0f3;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	place-items: center;
	overflow: hidden;
	font-family: poppins;
    overflow-y: scroll;
  }
  .header {
    color: #fff;
    text-align: center;
    background-color: rgb(84, 216, 117);
    padding: 20px 40px;
    border-bottom: 2px solid #494848;
  }
  /* Style the form container */
  .container {
    position: relative;
	width: 400px;
	height: auto;
	background-color: rgb(84, 216, 117);
  box-shadow: rgb(0,0,0) 0px 5px 15px;
  width: 400px;
	text-align: left;
  margin-top: 50px;
  }
  
  /* Style the form labels */
  label {
    display: block;
    font-weight: bold;
    display: block;
	width: 100%;
	margin-bottom: 4px;
	margin-top: 12px;
    margin-left: 12px;
  }
  #gender{
    text-align: center;
    
    border-radius: 50px;
	box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  }
  #file{
    text-align: center;
    padding: 20px;
    border-radius: 50px;
	box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  }
  
  input[id=male]{
    margin-right: 23px;
    
  }
 #female{
    margin-left: 12px;
    margin-bottom: -10px;
 }
 input[id=female]{
    margin-right: 20px;
  }
  #male{
    margin-top: 10px;
  }
  /* Style the form input fields */

  select {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 2px solid ;
    box-sizing: border-box;
    background-color: #F2F2F2;
    font-size: 16px;
    font-family: inherit;
  }
  input[type=text], input[type=date], input[type=tel], input[type=email], select{
    display: block;
	width: 100%;
	padding: 0;
	border: none;
	outline: none;
	box-sizing: border-box;
	background: #ecf0f3;
	padding: 10px;
	padding-left: 20px;
	height: 50px;
	font-size: 14px;
	border-radius: 50px;
	box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
	
  }
  

  /* Style the Sign Up button */
  button {
    display: block;
	width: 100%;
	
	border: none;
	outline: none;
	box-sizing: border-box;
	color: white;
	margin-top: 30px;
	background: rgb(226, 160, 121);
	height: 40px;
	border-radius: 20px;
	font-weight: 900;
	}
  
  
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
  }
  input[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
}



main.js:
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
Output:
1.Getting data till getting gender
 ![image](https://user-images.githubusercontent.com/122344020/229257206-6d670fe1-86e3-4b46-81a9-84868c636294.png)

2.Blood donation :
 ![image](https://user-images.githubusercontent.com/122344020/229257212-7449dbec-5ceb-4439-b8ff-4e1f78156c91.png)

3.Uploading photo
 ![image](https://user-images.githubusercontent.com/122344020/229257220-732d8a61-7238-434e-857f-50ecc1ac73fe.png)

4.After uploading images 
 ![image](https://user-images.githubusercontent.com/122344020/229257226-e9752ba0-3de6-4589-b1ee-65b9367d8670.png)
