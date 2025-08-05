let phoneBooks=[];

function addContact(name, phone, email){
    let contact={
        name:name,
        phone:phone,
        email:email
    };
    phoneBooks.push(contact);
}

function displayContact(){
    if(phoneBooks.length===0){
        console.log("Danh ba rong");
        return;
    }
    phoneBooks.forEach((contact)=>{
        console.log(`Ten: ${contact.name}`);
        console.log(`So dien thoai: ${contact.phone}`);
        console.log(`Email: ${contact.email}`);
    });
}

addContact("Nguyen Van A", "0987123454", "vana@gmail.com");
displayContact();
