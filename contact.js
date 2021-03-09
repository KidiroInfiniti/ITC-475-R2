function validate()
{
    var fName, lName, email, phoneNum, adultNum, childNum, travelDate;
    var destSelected, ds;

    var today = new Date(); 
    
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    
    if (dd < 10)
    {dd = '0' + dd;}

    if (mm < 10)
    {mm = '0' + mm}

    today = yyyy + '-' + mm + '-' + dd;
    
    var text = "Form Submitted. Thank you!"

    fName = document.getElementById("fname").value; 
    lName = document.getElementById("lname").value;
    email = document.getElementById("email").value;

    phoneNum = document.getElementById("phone").value;
    adultNum = document.getElementById("adults").value;
    childNum = document.getElementById("children").value;

    travelDate = document.getElementById("startdate").value;

    destSelected = document.getElementById("destination-selector");
    ds = destSelected.options[destSelected.selectedIndex].text;

    if (fName == "")
    {
        text = "Invalid input found. Please try again.";
    }

    if (lName == "")
    {
        text = "Invalid input found. Please try again.";
    }

    if (email == "")
    {
        text = "Invalid input found. Please try again.";
    }

    if (isNaN(phoneNum) || phoneNum == "" || phoneNum < 1000000000 || phoneNum < 0)
    {
        text = "Invalid input found. Please try again.";
    }

    if (isNaN(adultNum) || adultNum < 1 || adultNum > 200)
    {
        text = "Invalid input found. Please try again.";
    }

    if (isNaN(childNum) || childNum < 0 || childNum > 200 || childNum == "")
    {
        text = "Invalid input found. Please try again.";
    }

    if (travelDate <= today)
    {
        text = "Invalid input found. Please try again.";
    }

    if(ds == "-----")
    {
        text = "Invalid input found. Please try again.";
    }

    document.getElementById("validation").innerText = text;
}

function clearForm()
{
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("adults").value = "";
    document.getElementById("children").value = "";
    document.getElementById("startdate").value = "";
    document.getElementById("destination-selector").value = "-----";
}