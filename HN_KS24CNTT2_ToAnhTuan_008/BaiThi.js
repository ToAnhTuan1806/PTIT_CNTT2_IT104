class LibraryItem {
    static autoId = 1;
    id;
    title;
    isAvailableFlag = true;
    constructor(title) {
        this.id = LibraryItem.autoId++;
        this.title = title;
    }
    getTitle() {
        return this.title;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    isAvailable() {
        return this.isAvailableFlag;
    }
    borrowItem() {
        this.isAvailableFlag = false;
    }
    returnItem() {
        this.isAvailableFlag = true;
    }
}
class Book extends LibraryItem {
    author;
    constructor(title, author) {
        super(title);
        this.author = author;
    }
    calculateLateFee(daysOverdue) {
        return daysOverdue * 10000;
    }
    getLoanPeriod() {
        return 30;
    }
    getItemType() {
        return "Sách";
    }
    toString() {
        return `[Book] ${this.getTitle()} - Tác giả: ${this.author} (ID: ${this.id})`;
    }
}
class Magazine extends LibraryItem {
    issueNumber;
    constructor(title, issueNumber) {
        super(title);
        this.issueNumber = issueNumber;
    }
    calculateLateFee(daysOverdue) {
        return daysOverdue * 5000;
    }
    getLoanPeriod() {
        return 7;
    }
    getItemType() {
        return "Tạp chí";
    }
    toString() {
        return `[Magazine] ${this.getTitle()} - Kỳ số: ${this.issueNumber} (ID: ${this.id})`;
    }
}
class Member {
    name;
    contact;
    static autoId = 1;
    memberId;
    borrowedItems = [];
    constructor(name, contact) {
        this.name = name;
        this.contact = contact;
        this.memberId = Member.autoId++;
    }
    getDetails() {
        return `MemberID: ${this.memberId}, Name: ${this.name}, Contact: ${this.contact}`;
    }
    addBorrowedItem(item) {
        this.borrowedItems.push(item);
    }
    removeBorrowedItem(item) {
        this.borrowedItems = this.borrowedItems.filter((i) => i.id !== item.id);
    }
    getBorrowedItems() {
        return this.borrowedItems;
    }
}
class Loan {
    member;
    item;
    dueDate;
    static autoId = 1;
    loanId;
    isReturned = false;
    lateFeePaid = 0;
    constructor(member, item, dueDate) {
        this.member = member;
        this.item = item;
        this.dueDate = dueDate;
        this.loanId = Loan.autoId++;
    }
    getDetails() {
        return (`LoanID: ${this.loanId}, Member: ${this.member.name} (#${this.member.memberId}), ` +
            `Item: ${this.item.getTitle()} (#${this.item.id}), Due: ${this.dueDate.toDateString()}, Returned: ${this.isReturned}`);
    }
}
class Library {
    items = [];
    members = [];
    loans = [];
    addItem(item) {
        this.items.push(item);
        console.log("Them tai lieu thanh cong");
    }
    addMember(name, contact) {
        let mb = new Member(name, contact);
        this.members.push(mb);
        return mb;
    }
    findEntityById(collection, id) {
        return collection.find((obj) => obj?.id === id || obj?.memberId === id || obj?.loanId === id);
    }
    listAvailableItems() {
        this.items
            .filter((it) => it.isAvailable())
            .forEach((it) => console.log(it.toString()));
    }
    listMemberLoans(memberId) {
        const member = this.findEntityById(this.members, memberId);
        if (!member) {
            console.log("Không tìm thấy thành viên.");
            return;
        }
        const activeLoans = this.loans.filter((l) => l.member.memberId === memberId && !l.isReturned);
        if (activeLoans.length === 0) {
            console.log("Không có tài liệu đang mượn.");
            return;
        }
        activeLoans.forEach((l) => console.log(l.getDetails()));
    }
}
function startMenu() {
    let library = new Library();
    let choice;
    do {
        choice =
            prompt("===== MENU =====\n" +
                "1. Thêm thành viên mới\n" +
                "2. Thêm tài liệu mới \n" +
                "3. Mượn tài liệu\n" +
                "4. Trả tài liệu \n" +
                "5. Hiển thị danh sách tài liệu có sẵn \n" +
                "6. Hiển thị danh sách tài liệu đang mượn của một thành viên\n" +
                "7. Tính và hiển thị tổng phí phạt đã thu\n" +
                "8. Thống kê số lượng từng loại tài liệu\n" +
                "9. Cập nhật tiêu đề một tài liệu\n" +
                "10. Tìm kiếm thành viên hoặc tài liệu theo ID\n" +
                "11. Thoát chương trình\n" +
                "===============\n" +
                "Nhập lựa chọn: ") || "11";
        switch (choice) {
            case "1":
                let name = prompt("Nhap ten thanh vien:");
                let contact = "Nhap thong tin lien he (email hoac sdt) : ";
                if (name && contact) {
                    library.addMember(name, contact);
                    alert("them thanh cong");
                }
                else {
                    alert("them that bai");
                }
                break;
            case "2":
                let type = prompt("Loại (1.Sách / 2.Tạp chí): ");
                let title = prompt("Tiêu đề: ");
                if (type === "1") {
                    let author = prompt("Tác giả: ");
                    library.addItem(new Book(title, author));
                }
                else {
                    let issue = parseInt(prompt("Số kỳ: "));
                    library.addItem(new Magazine(title, issue));
                    break;
                }
            case "5":
                library.listAvailableItems();
                break;
            case "6":
                library.listMemberLoans();
                break;
            case "11":
                console.log("Thoat chuong trinh thanh cong");
                break;
        }
    } while (choice !== "11");
}
export {};
