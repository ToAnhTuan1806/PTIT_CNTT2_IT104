const user={
    name: "John",
    age: 25,
    location: {
        city: "Hanoi",
        country: "Vietnam"
    },
    contact: {
        email: "john@example.com",
        phone: "0123456789"
    },
    job: {
        title: "Developer",
        company: "Tech Corp"
    }
};

const user2={
    name: "Anna",
    age: 30,
    location: {
        city: "Da Nang",
        country: "Vietnam"
    }
};

function displayUserInfo(user){
    let {name,age, 
        location: {city, country}, 
        contact: {email, phone}={},
        job:{title, company}={}
    }=user;
    email=email || "unknown";
    phone=phone || "unknown";
    title=title || "unknown";
    company=company || "unknown";
    console.log(`${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`);
}

displayUserInfo(user);
displayUserInfo(user2);