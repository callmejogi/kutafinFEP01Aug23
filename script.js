class Student {
    constructor(firstName, lastName, birthYear) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.grades = [];
      this.attendance = Array(25).fill(null);
    }
  
    present() {
      const index = this.attendance.findIndex((value) => value === null);
      if (index !== -1) {
        this.attendance[index] = true;
      }
    }
  
    absent() {
      const index = this.attendance.findIndex((value) => value === null);
      if (index !== -1) {
        this.attendance[index] = false;
      }
    }
  
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) {
        return 0;
      }
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  
    summary() {
      const averageGrade = this.getAverageGrade();
      const attendancePercentage =
        this.attendance.filter((value) => value === true).length /
        this.attendance.length;
  
      if (averageGrade > 90 && attendancePercentage > 0.9) {
        return "Молодець!";
      } else if (averageGrade > 90 || attendancePercentage > 0.9) {
        return "Добре, але можна краще";
      } else {
        return "Редиска!";
      }
    }
  }
  
  // Створення екземплярів студента і використання методів:
  const student1 = new Student("Іван", "Петров", 1998);
  const student2 = new Student("Марія", "Сидорова", 1999);
  
  student1.present(); // Записує відвідуваність
  student1.present();
  student1.absent();
  
  student2.present();
  student2.present();
  student2.present();

  
  student1.grades = [90, 95, 80, 85]; // Додає оцінки
  student2.grades = [90, 95, 95, 95,98,99,99,96];

  console.log(student1.getAge()); // Виводить вік студента
  console.log(student2.getAge());
  
  console.log(student1.getAverageGrade()); // Виводить середній бал
  console.log(student2.getAverageGrade());
  
  console.log(student1.summary()); // Виводить висновок
  console.log(student2.summary());
