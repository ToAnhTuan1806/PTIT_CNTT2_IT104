abstract class LibraryItem {
  private static autoId = 1
  protected readonly id: number
  protected title: string
  protected isAvailable: boolean = true

  constructor(title: string) {
    this.id = LibraryItem.autoId++
    this.title = title
  }
  getId(): number {
    return this.id
  }
  getTitle(): string{
    return this.title
  }
  setTitle(newTitle: string) {
    this.title = newTitle
  }
  borrowItem() {
    this.isAvailable = false
  }
  returnItem() {
    this.isAvailable = true
  }
  getAvailability(): boolean {
    return this.isAvailable
  }
  abstract calculateLateFee(daysOverdue: number): number
  abstract getLoanPeriod(): number
  abstract getItemType(): string

  getDetails(): string {
    return `#${this.id} | ${this.title} | Loại: ${this.getItemType()} | Trạng thái: ${
      this.isAvailable ? "Có sẵn" : "Đang mượn"
    }`
  }
}

class Book extends LibraryItem {
  private author: string

  constructor(title: string, author: string) {
    super(title)
    this.author = author
  }

  calculateLateFee(daysOverdue: number): number {
    return daysOverdue * 10000
  }

  getLoanPeriod(): number {
    return 30
  }

  getItemType(): string {
    return "Sách"
  }

  getDetails(): string {
    return super.getDetails() + ` | Tác giả: ${this.author}`
  }
}
class Magazine extends LibraryItem {
  private issueNumber: number
  constructor(title: string, issueNumber: number) {
    super(title)
    this.issueNumber = issueNumber
  }
  calculateLateFee(daysOverdue: number): number {
    return daysOverdue*5000
  }
  getLoanPeriod(): number {
    return 7
  }
  getItemType(): string {
    return "Tạp chí"
  }
  getDetails(): string {
    return super.getDetails() + ` | Kỳ: ${this.issueNumber}`
  }
}

class Member {
  private static autoId = 1
  public readonly memberId: number
  private name: string
  private contact: string
  private borrowedItems: LibraryItem[] = []

  constructor(name: string, contact: string) {
    this.memberId= Member.autoId++
    this.name= name
    this.contact= contact
  }
  addBorrowedItem(item: LibraryItem) {
    this.borrowedItems.push(item)
  }
  removeBorrowedItem(itemId: number) {
    this.borrowedItems = this.borrowedItems.filter((it) => it.getId() !== itemId)
  }
  getBorrowedItems(): LibraryItem[] {
    return this.borrowedItems
  }
  getDetails(): string {
    return `Member #${this.memberId} | Tên: ${this.name} | Liên hệ: ${this.contact}`
  }
}

class Loan {
  private static autoId = 1
  private loanId: number
  private member: Member
  private item: LibraryItem
  private dueDate: Date
  private isReturned: boolean = false

  constructor(member: Member, item: LibraryItem) {
    this.loanId = Loan.autoId++
    this.member = member
    this.item = item
    let now = new Date()
    this.dueDate = new Date(
      now.getTime() + item.getLoanPeriod() *24*60*60*1000
    )
  }
  getItem(): LibraryItem {
    return this.item
  }
  getMember(): Member {
    return this.member
  }
  getDueDate(): Date {
    return this.dueDate
  }
  markReturned() {
    this.isReturned = true
  }
  isReturnedStatus(): boolean {
    return this.isReturned
  }
  getDetails(): string {
    return `Loan #${this.loanId} , Thành viên: ${this.member.getDetails()} , Tài liệu: ${this.item.getDetails()} ,Hạn trả: ${this.dueDate.toDateString()} ,Đã trả: ${this.isReturned}`
  }
}

class Library {
  items: LibraryItem[] = []
  members: Member[] = []
  loans: Loan[] = []

  addItem(item: LibraryItem): void {
    this.items.push(item)
    console.log("Thêm tài liệu thành công")
  }

  addMember(name: string, contact: string): Member {
    let mb = new Member(name, contact)
    this.members.push(mb)
    return mb
  }

  borrowItem(memberId: number, itemId: number): Loan | null {
    let member = this.members.find((m) => m.memberId === memberId)
    let item = this.items.find((i) => i.getId() === itemId)

    if (member && item && item.getAvailability()) {
      item.borrowItem()
      member.addBorrowedItem(item)

      let loan = new Loan(member, item)
      this.loans.push(loan)

      return loan
    }
    return null
  }

  returnItem(itemId: number): number {
    let loan = this.loans.find(
      (l) => l.getItem().getId() === itemId && !l.isReturnedStatus()
    )

    if (!loan) {
      return 0
    }

    let item = loan.getItem()
    let member = loan.getMember()

    item.returnItem()
    member.removeBorrowedItem(itemId)
    loan.markReturned()

    let now = new Date()
    let overdueDays = Math.max(
      0,
      Math.floor((now.getTime() - loan.getDueDate().getTime()) / (1000 * 3600 * 24))
    )

    let fee = item.calculateLateFee(overdueDays)
    return fee
  }


  listAvailableItems(): void {
    this.items.filter((i) => i.getAvailability()).forEach((i) => console.log(i.getDetails()))
  }

listMemberLoans(memberId: number): void {
  let loansOfMember = this.loans.filter(
    (l) => l.getMember().memberId === memberId && !l.isReturnedStatus()
  )

  if (loansOfMember.length === 0) {
    console.log("Thành viên chưa mượn tài liệu nào hoặc không tồn tại.")
    return
  }

  loansOfMember.forEach((loan) =>
    console.log(loan.getItem().getDetails())
  )
}

}
function startMenu() {
  let library = new Library()
  let choice: string
  do {
    choice =
      prompt(
        "===== MENU =====\n" +
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
          "Nhập lựa chọn: "
      ) || "11"

    switch (choice) {
      case "1":{
        let name = prompt("Nhập tên thành viên:")
        let contact = prompt("Nhập thông tin liên hệ (email hoặc sdt): ")
        if (name && contact) {
          library.addMember(name, contact)
          alert("Thêm thành công")
        } else {
          alert("Thêm thất bại")
        }
        break
      }
 case "2": {
        let type = prompt("Loại (1.Sách / 2.Tạp chí): ")
        let title = prompt("Tiêu đề: ")
        if (!title) {
          alert("Tiêu đề không được để trống.")
          break
        }
        if (type === "1") {
          let author = prompt("Tác giả: ")
          if (!author) {
            alert("Tác giả không được để trống.")
            break
          }
          library.addItem(new Book(title, author))
          alert("Thêm sách thành công.")
        } else if (type === "2") {
          let issue = parseInt(prompt("Số kỳ: ") || "0")
          if (issue <= 0) {
            alert("Số kỳ không hợp lệ.")
            break
          }
          library.addItem(new Magazine(title, issue))
          alert("Thêm tạp chí thành công.")
        } else {
          alert("Loại không hợp lệ.")
        }
        break
      }
      case "3": {
        let memberId = parseInt(prompt("Nhập ID thành viên: ") || "0")
        let itemId = parseInt(prompt("Nhập ID tài liệu: ") || "0")
        let loan = library.borrowItem(memberId, itemId)
        if (loan) {
          alert("Mượn thành công! Hạn trả: " + loan.getDueDate().toDateString())
        } else {
          alert("Mượn thất bại (không tìm thấy hoặc tài liệu không sẵn có).")
        }
        break
      }
      case "4": {
        let itemId = parseInt(prompt("Nhập ID tài liệu cần trả: ") || "0")
        let fee = library.returnItem(itemId)
        if (fee >= 0) {
          alert("Trả thành công. Phí phạt: " + fee + " VND")
        } else {
          alert("Trả thất bại. Không tìm thấy giao dịch mượn.")
        }
        break
      }
      case "5": {
        library.listAvailableItems()
        break
      }
      case "6": {
        let memberId = parseInt(prompt("Nhập ID thành viên: ") || "0")
        library.listMemberLoans(memberId)
        break
      }
      case "11":
        console.log("Thoát chương trình thành công")
        break

      default:
        alert("Lựa chọn không hợp lệ.")
        break
    }
  } while (choice !== "11")
}
startMenu()