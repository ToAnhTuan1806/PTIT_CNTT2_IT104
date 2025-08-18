class LibraryItem {
    static autoId = 1;
    id;
    title;
    isAvailable = true;
    constructor(title) {
        this.id = LibraryItem.autoId++;
        this.title = title;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    borrowItem() {
        this.isAvailable = false;
    }
    returnItem() {
        this.isAvailable = true;
    }
    getAvailability() {
        return this.isAvailable;
    }
    getDetails() {
        return `#${this.id} | ${this.title} | Loại: ${this.getItemType()} | Trạng thái: ${this.isAvailable ? "Có sẵn" : "Đang mượn"}`;
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
    getDetails() {
        return super.getDetails() + ` | Tác giả: ${this.author}`;
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
    getDetails() {
        return super.getDetails() + ` | Kỳ: ${this.issueNumber}`;
    }
}
class Member {
    static autoId = 1;
    memberId;
    name;
    contact;
    borrowedItems = [];
    constructor(name, contact) {
        this.memberId = Member.autoId++;
        this.name = name;
        this.contact = contact;
    }
    addBorrowedItem(item) {
        this.borrowedItems.push(item);
    }
    removeBorrowedItem(itemId) {
        this.borrowedItems = this.borrowedItems.filter((it) => it.getId() !== itemId);
    }
    getBorrowedItems() {
        return this.borrowedItems;
    }
    getDetails() {
        return `Member #${this.memberId} | Tên: ${this.name} | Liên hệ: ${this.contact}`;
    }
}
class Loan {
    static autoId = 1;
    loanId;
    member;
    item;
    dueDate;
    isReturned = false;
    constructor(member, item) {
        this.loanId = Loan.autoId++;
        this.member = member;
        this.item = item;
        let now = new Date();
        this.dueDate = new Date(now.getTime() + item.getLoanPeriod() * 24 * 60 * 60 * 1000);
    }
    getItem() {
        return this.item;
    }
    getMember() {
        return this.member;
    }
    getDueDate() {
        return this.dueDate;
    }
    markReturned() {
        this.isReturned = true;
    }
    isReturnedStatus() {
        return this.isReturned;
    }
    getDetails() {
        return `Loan #${this.loanId} , Thành viên: ${this.member.getDetails()} , Tài liệu: ${this.item.getDetails()} ,Hạn trả: ${this.dueDate.toDateString()} ,Đã trả: ${this.isReturned}`;
    }
}
class Library {
    items = [];
    members = [];
    loans = [];
    addItem(item) {
        this.items.push(item);
        console.log("Thêm tài liệu thành công");
    }
    addMember(name, contact) {
        let mb = new Member(name, contact);
        this.members.push(mb);
        return mb;
    }
    borrowItem(memberId, itemId) {
        let member = this.members.find((m) => m.memberId === memberId);
        let item = this.items.find((i) => i.getId() === itemId);
        if (member && item && item.getAvailability()) {
            item.borrowItem();
            member.addBorrowedItem(item);
            let loan = new Loan(member, item);
            this.loans.push(loan);
            return loan;
        }
        return null;
    }
    returnItem(itemId) {
        let loan = this.loans.find((l) => l.getItem().getId() === itemId && !l.isReturnedStatus());
        if (!loan) {
            return 0;
        }
        let item = loan.getItem();
        let member = loan.getMember();
        item.returnItem();
        member.removeBorrowedItem(itemId);
        loan.markReturned();
        let now = new Date();
        let overdueDays = Math.max(0, Math.floor((now.getTime() - loan.getDueDate().getTime()) / (1000 * 3600 * 24)));
        let fee = item.calculateLateFee(overdueDays);
        return fee;
    }
    listAvailableItems() {
        this.items.filter((i) => i.getAvailability()).forEach((i) => console.log(i.getDetails()));
    }
    listMemberLoans(memberId) {
        let loansOfMember = this.loans.filter((l) => l.getMember().memberId === memberId && !l.isReturnedStatus());
        if (loansOfMember.length === 0) {
            console.log("Thành viên chưa mượn tài liệu nào hoặc không tồn tại.");
            return;
        }
        loansOfMember.forEach((loan) => console.log(loan.getItem().getDetails()));
    }
}
function startMenu() {
    let library = new Library();
    let choice;
    do {
        choice =
            prompt("===== MENU =====\n" +
                "1. Thêm thành viên mới\n" +
                "2. Thêm tài liệu mới\n" +
                "3. Mượn tài liệu\n" +
                "4. Trả tài liệu\n" +
                "5. Hiển thị danh sách tài liệu có sẵn\n" +
                "6. Hiển thị danh sách tài liệu đang mượn của một thành viên\n" +
                "7. Tính và hiển thị tổng phí phạt đã thu\n" +
                "8. Thống kê số lượng từng loại tài liệu\n" +
                "9. Cập nhật tiêu đề một tài liệu\n" +
                "10. Tìm kiếm thành viên hoặc tài liệu theo ID\n" +
                "11. Thoát chương trình\n" +
                "===============\n" +
                "Nhập lựa chọn: ") || "11";
        switch (choice) {
            case "1": {
                let name = prompt("Nhập tên thành viên:");
                let contact = prompt("Nhập thông tin liên hệ (email hoặc sdt): ");
                if (name && contact) {
                    library.addMember(name, contact);
                    alert("Thêm thành công");
                }
                else {
                    alert("Thêm thất bại");
                }
                break;
            }
            case "2": {
                let type = prompt("Loại (1.Sách / 2.Tạp chí): ");
                let title = prompt("Tiêu đề: ");
                if (!title) {
                    alert("Tiêu đề không được để trống.");
                    break;
                }
                if (type === "1") {
                    let author = prompt("Tác giả: ");
                    if (!author) {
                        alert("Tác giả không được để trống.");
                        break;
                    }
                    library.addItem(new Book(title, author));
                    alert("Thêm sách thành công.");
                }
                else if (type === "2") {
                    let issue = parseInt(prompt("Số kỳ: ") || "0");
                    if (issue <= 0) {
                        alert("Số kỳ không hợp lệ.");
                        break;
                    }
                    library.addItem(new Magazine(title, issue));
                    alert("Thêm tạp chí thành công.");
                }
                else {
                    alert("Loại không hợp lệ.");
                }
                break;
            }
            case "3": {
                let memberId = parseInt(prompt("Nhập ID thành viên: ") || "0");
                let itemId = parseInt(prompt("Nhập ID tài liệu: ") || "0");
                let loan = library.borrowItem(memberId, itemId);
                if (loan) {
                    alert("Mượn thành công! Hạn trả: " + loan.getDueDate().toDateString());
                }
                else {
                    alert("Mượn thất bại (không tìm thấy hoặc tài liệu không sẵn có).");
                }
                break;
            }
            case "4": {
                let itemId = parseInt(prompt("Nhập ID tài liệu cần trả: ") || "0");
                let fee = library.returnItem(itemId);
                if (fee >= 0) {
                    alert("Trả thành công. Phí phạt: " + fee + " VND");
                }
                else {
                    alert("Trả thất bại. Không tìm thấy giao dịch mượn.");
                }
                break;
            }
            case "5": {
                library.listAvailableItems();
                break;
            }
            case "6": {
                let memberId = parseInt(prompt("Nhập ID thành viên: ") || "0");
                library.listMemberLoans(memberId);
                break;
            }
            case "11":
                console.log("Thoát chương trình thành công");
                break;
            default:
                alert("Lựa chọn không hợp lệ.");
                break;
        }
    } while (choice !== "11");
}
startMenu();
export {};
