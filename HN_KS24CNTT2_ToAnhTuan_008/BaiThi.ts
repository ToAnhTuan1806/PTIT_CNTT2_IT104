abstract class LibraryItem {
  private static autoId = 1;
  public readonly id: number;
  private title: string;
  private isAvailableFlag = true;

  constructor(title: string) {
    this.id = LibraryItem.autoId++;
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }
  setTitle(newTitle: string): void {
    this.title = newTitle;
  }

  isAvailable(): boolean {
    return this.isAvailableFlag;
  }
  borrowItem(): void {
    this.isAvailableFlag = false;
  }
  returnItem(): void {
    this.isAvailableFlag = true;
  }

  abstract calculateLateFee(daysOverdue: number): number;
  abstract getLoanPeriod(): number;
  abstract getItemType(): string;
}

class Book extends LibraryItem {
  constructor(title: string, private author: string) {
    super(title);
  }
  calculateLateFee(daysOverdue: number): number {
    return daysOverdue * 10000;
  }
  getLoanPeriod(): number {
    return 30;
  }
  getItemType(): string {
    return "Sách";
  }
  toString(): string {
    return `[Book] ${this.getTitle()} - Tác giả: ${this.author} (ID: ${
      this.id
    })`;
  }
}

class Magazine extends LibraryItem {
  constructor(title: string, private issueNumber: number) {
    super(title);
  }
  calculateLateFee(daysOverdue: number): number {
    return daysOverdue * 5000;
  }
  getLoanPeriod(): number {
    return 7;
  }
  getItemType(): string {
    return "Tạp chí";
  }
  toString(): string {
    return `[Magazine] ${this.getTitle()} - Kỳ số: ${this.issueNumber} (ID: ${
      this.id
    })`;
  }
}

class Member {
  private static autoId = 1;
  public readonly memberId: number;
  private borrowedItems: LibraryItem[] = [];

  constructor(public name: string, public contact: string) {
    this.memberId = Member.autoId++;
  }

  getDetails(): string {
    return `MemberID: ${this.memberId}, Name: ${this.name}, Contact: ${this.contact}`;
  }

  addBorrowedItem(item: LibraryItem) {
    this.borrowedItems.push(item);
  }
  removeBorrowedItem(item: LibraryItem) {
    this.borrowedItems = this.borrowedItems.filter((i) => i.id !== item.id);
  }
  getBorrowedItems(): LibraryItem[] {
    return this.borrowedItems;
  }
}

class Loan {
  private static autoId = 1;
  public readonly loanId: number;
  public isReturned = false;
  public lateFeePaid = 0;

  constructor(
    public member: Member,
    public item: LibraryItem,
    public dueDate: Date
  ) {
    this.loanId = Loan.autoId++;
  }

  getDetails(): string {
    return (
      `LoanID: ${this.loanId}, Member: ${this.member.name} (#${this.member.memberId}), ` +
      `Item: ${this.item.getTitle()} (#${
        this.item.id
      }), Due: ${this.dueDate.toDateString()}, Returned: ${this.isReturned}`
    );
  }
}

class Library {
  items: LibraryItem[] = [];
  members: Member[] = [];
  loans: Loan[] = [];

  addItem(item: LibraryItem): void {
    this.items.push(item);
    console.log("Them tai lieu thanh cong");
  }

  addMember(name: string, contact: string): Member {
    let mb = new Member(name, contact);
    this.members.push(mb);
    return mb;
  }
    findEntityById<T>(collection: T[], id: number): T | undefined {
    return collection.find((obj: any) =>
      obj?.id === id || obj?.memberId === id || obj?.loanId === id
    );
  }

  listAvailableItems(): void {
    this.items
      .filter((it) => it.isAvailable())
      .forEach((it) => console.log(it.toString()));
  }

  listMemberLoans(memberId: number): void {
    const member = this.findEntityById(this.members, memberId) as
      | Member
      | undefined;
    if (!member) {
      console.log("Không tìm thấy thành viên.");
      return;
    }
    const activeLoans = this.loans.filter(
      (l) => l.member.memberId === memberId && !l.isReturned
    );
    if (activeLoans.length === 0) {
      console.log("Không có tài liệu đang mượn.");
      return;
    }
    activeLoans.forEach((l) => console.log(l.getDetails()));
  }
}

function startMenu() {
  let library = new Library();
  let choice: string;
  do {
    choice =
      prompt(
        "===== MENU =====\n" +
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
          "Nhập lựa chọn: "
      ) || "11";

    switch (choice) {
      case "1":
        let name = prompt("Nhap ten thanh vien:");
        let contact = "Nhap thong tin lien he (email hoac sdt) : ";
        if (name && contact) {
          library.addMember(name, contact);
          alert("them thanh cong");
        } else {
          alert("them that bai");
        }
        break;
      case "2":
        let type = prompt("Loại (1.Sách / 2.Tạp chí): ");
        let title = prompt("Tiêu đề: ");
            if (type === "1") {
                let author = prompt("Tác giả: ");
                library.addItem(new Book(title, author));
            } else {
                let issue = parseInt(prompt("Số kỳ: "));
                library.addItem(new Magazine(title, issue));
        break;
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
}
