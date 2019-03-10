
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

    for (let i = 0; i < FieldArray.length; i++) {
        if (FieldArray[i].value == "") {
            document.getElementById("errorMsg").style.display = 'flex';
            document.getElementById("errorMsg").innerHTML = `Pole "${FieldArray[i].name}" nie może być puste`;
            e.preventDefault();
            return
        }

        if (!emailReg.test(email.value)) {
            document.getElementById("errorMsg").style.display = 'flex';
            document.getElementById("errorMsg").innerHTML = `Nieprawidłowy adres email`;
            e.preventDefault();
            return
        }
        if (!phoneReg.test(phone.value)) {
            document.getElementById("errorMsg").style.display = 'flex';
            document.getElementById("errorMsg").innerHTML = `Nieprawidłowy numer telefonu, przykladowy numer to "111222333"`;
            e.preventDefault();
            return
        }
        if (name.value.length < 5 || name.value.length > 50) {
            document.getElementById("errorMsg").style.display = 'flex';
            document.getElementById("errorMsg").innerHTML = `Nieprawidłowe imię i nazwisko`;
            e.preventDefault();
            return
        }
        if (msg.value.length < 5) {
            document.getElementById("errorMsg").style.display = 'flex';
            document.getElementById("errorMsg").innerHTML = `Wiadomość jest za krótka`;
            e.preventDefault();
            return
        }
        if (msg.value.length > 150) {
            document.getElementById("errorMsg").style.display = 'flex';
            document.getElementById("errorMsg").innerHTML = `Wiadomość jest za krótka`;
            e.preventDefault();
            return
        }
    }

    e.preventDefault()
    console.log('sieeema')
    document.getElementById("errorMsg").style.display = 'none';
    document.getElementById("successMsg").style.display = 'flex';
    document.getElementById("successMsg").innerHTML = `Wiadomość wysłano pomyślnie`;
}

