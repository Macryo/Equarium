
export default function validate(e) {
    document.getElementById("errorMsg").style.display = 'none';
    document.getElementById("successMsg").style.display = 'none';

    let name = document.getElementById("name")

    let email = document.getElementById("email")
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let phone = document.getElementById("phone")
    let phoneReg = /(?<!\w)(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}(?!\w)/

    let msg = document.getElementById("msg")

    let FieldArray = [name, email, phone, msg];

    let errorMsg = document.getElementById("errorMsg");
    document.getElementById("errorMsg").style.display = 'flex';
    e.preventDefault()

    for (let i = 0; i < FieldArray.length; i++) {
        if (FieldArray[i].value == "") {
            errorMsg.innerHTML = `Pole "${FieldArray[i].name}" nie może być puste`;
            e.preventDefault();
            return
        }
    }
    if (!emailReg.test(email.value)) {
        errorMsg.innerHTML = `Nieprawidłowy adres email`;
        return
    }
    else if (!phoneReg.test(phone.value)) {
        errorMsg.innerHTML = `Nieprawidłowy numer telefonu, przykladowy numer to "111222333"`;  
        return
    }
    else if (name.value.length < 5 || name.value.length > 50) {
        errorMsg.innerHTML = `Nieprawidłowe imię i nazwisko`;
        return
    }
    else if (msg.value.length < 5 || msg.value.length > 250) {
        errorMsg.innerHTML = `Wiadomość powinna zawierać od 5 do 250 znaków`;
        return
    }
    
    else{
        document.getElementById("errorMsg").style.display = 'none';
        document.getElementById("successMsg").style.display = 'flex';
        document.getElementById("successMsg").innerHTML = `Wiadomość wysłano pomyślnie`;
    }
    
    
}

