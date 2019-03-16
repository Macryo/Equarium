
export default function validate(e) {
    document.getElementById("errorMsg").style.display = 'none';
    document.getElementById("successMsg").style.display = 'none';

    let name = document.getElementById("name")

    let email = document.getElementById("email")
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let phone = document.getElementById("phone")
    let phoneReg = /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/

    let msg = document.getElementById("msg")

    let FieldArray = [name, email, phone, msg];

    let errorMsg = document.getElementById("errorMsg");
    document.getElementById("errorMsg").style.display = 'flex';
    

    for (let i = 0; i < FieldArray.length; i++) {
        if (FieldArray[i].value == "") {
            errorMsg.innerHTML = `Pole "${FieldArray[i].name}" nie może być puste`;
            e.preventDefault();
            return
        }
    }
    if (!emailReg.test(email.value)) {
        errorMsg.innerHTML = `Nieprawidłowy adres email`;
       
    }
    else if (!phoneReg.test(phone.value)) {
        errorMsg.innerHTML = `Nieprawidłowy numer telefonu, przykladowy numer to "111222333"`;  
       
    }
    else if (name.value.length < 5 || name.value.length > 50) {
        errorMsg.innerHTML = `Nieprawidłowe imię i nazwisko`;
       
    }
    else if (msg.value.length < 5 || msg.value.length > 250) {
        errorMsg.innerHTML = `Wiadomość powinna zawierać od 5 do 250 znaków`;
       
    }
    
    else{
        document.getElementById("errorMsg").style.display = 'none';
        document.getElementById("successMsg").style.display = 'flex';
        document.getElementById("successMsg").innerHTML = `Wiadomość wysłano pomyślnie`;
        return true;
    }
    e.preventDefault()
    return
    
}

