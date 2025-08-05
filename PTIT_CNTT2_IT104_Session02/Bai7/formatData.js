function formatDate(date) {
    let d=new Date(date);
    let day=d.getDate().toString().padStart(2, '0');
    let month=(d.getMonth() + 1).toString().padStart(2, '0');
    let year = d.getFullYear();

    console.log(`${day}/${month}/${year}`);
    return;
}

module.exports=formatDate;