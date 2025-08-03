const respone={
    data:{
        id: 1, 
        title: "Destructuring in JavaScript",
        author:{
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};

function extractData({data}) {
    const {title, author}=data;

    const {name: authorName, email: authorEmail}=author;

    console.log('title:', title);
    console.log('Author :', author);
    console.log('authorName:', authorName);
    console.log('authorEmail:', authorEmail);
}

extractData(respone);