const oopQuestions = [
  // ===== OOP TOPIC =====
  {
    topic: "OOP",
    question: "Q1. What is OOP?",
    answer: `Object-Oriented Programming is a paradigm based on objects that encapsulate data (fields) and behavior (methods). Key principles: Encapsulation, Abstraction, Inheritance, Polymorphism.`
  },
  {
    topic: "OOP",
    question: "Q2. Why use OOP?",
    answer: `Benefits:<br>
✔ Reusability<br>
✔ Maintainability<br>
✔ Security<br>
✔ Real-world modeling`
  },
  {
    topic: "OOP",
    question: "Q3. What is a class and an object?",
    answer: `Class: Blueprint for objects<br>
Object: Runtime instance of a class`
  },
  {
    topic: "OOP",
    question: "Q4. Can an object exist without class?",
    answer: `❌ No`
  },
  {
    topic: "OOP",
    question: "Q5. Can a class exist without object?",
    answer: `✅ Yes`
  },
  {
    topic: "OOP",
    question: "Q6. What is encapsulation?",
    answer: `Wrapping data and methods together, hiding data using private access modifier.<br>
Example:<br>
<pre>class User {
    private String password;
    public void setPassword(String pw){ password = pw; }
    public String getPassword(){ return password; }
}</pre>
Follow-ups:<br>
✔ Why important? Security, control, flexibility<br>
✔ Is getter/setter mandatory? ❌ No, can use methods`
  },
  {
    topic: "OOP",
    question: "Q7. What is abstraction?",
    answer: `Hiding implementation details, showing only essential features.`
  },
  {
    topic: "OOP",
    question: "Q8. How to achieve abstraction in Java?",
    answer: `✔ Abstract class<br>✔ Interface`
  },
  {
    topic: "OOP",
    question: "Q9. Can we achieve 100% abstraction?",
    answer: `✅ Yes, using interface<br>
Follow-ups:<br>
- Abstract class can have concrete methods<br>
- Interface is pure contract`
  },
  {
    topic: "OOP",
    question: "Q10. What is inheritance?",
    answer: `Mechanism where one class acquires properties & methods of another class using extends.`
  },
  {
    topic: "OOP",
    question: "Q11. Types of inheritance in Java?",
    answer: `✔ Single inheritance<br>✔ Multilevel inheritance<br>✔ Hierarchical inheritance`
  },
  {
    topic: "OOP",
    question: "Q12. Does Java support multiple inheritance?",
    answer: `❌ No (with classes), ✅ Yes (with interfaces)`
  },
  {
    topic: "OOP",
    question: "Q13. Why no multiple inheritance with classes?",
    answer: `To avoid Diamond Problem`
  },
  {
    topic: "OOP",
    question: "Q14. What is polymorphism?",
    answer: `One object, many forms`
  },
  {
    topic: "OOP",
    question: "Q15. Types of polymorphism?",
    answer: `✔ Compile-time (Method Overloading)<br>✔ Runtime (Method Overriding)`
  },
  {
    topic: "OOP",
    question: "Q16. Can static methods be overridden?",
    answer: `❌ No (method hiding)`
  },
  {
    topic: "OOP",
    question: "Q17. Can private methods be overridden?",
    answer: `❌ No`
  },
  {
    topic: "OOP",
    question: "Q18. Which method is called at runtime?",
    answer: `Based on object, not reference`
  },
  {
    topic: "OOP",
    question: "Q19. What is 'this'?",
    answer: `Refers to current object`
  },
  {
    topic: "OOP",
    question: "Q20. What is 'super'?",
    answer: `Refers to parent class object / methods / constructor`
  },
  {
    topic: "OOP",
    question: "Q21. What can be declared final?",
    answer: `Variable → constant<br>Method → cannot override<br>Class → cannot inherit`
  },
  {
    topic: "OOP",
    question: "Q22. What is static?",
    answer: `Belongs to class, shared among objects<br>Example: static int count;<br>
Follow-ups:<br>
- Can static method access instance variable? ❌ No<br>
- Can static method be overridden? ❌ No, it is hidden`
  },
  {
    topic: "OOP",
    question: "Q23. Difference between abstraction & encapsulation?",
    answer: `Abstraction → hides how, shows what<br>Encapsulation → hides data, controls access`
  },
  {
    topic: "OOP",
    question: "Q24. Can constructor be overridden?",
    answer: `❌ No`
  },
  {
    topic: "OOP",
    question: "Q25. Can constructor be private?",
    answer: `✅ Yes (Singleton)`
  },
  {
    topic: "OOP",
    question: "Q26. Difference between method overloading & overriding",
    answer: `Feature | Overloading | Overriding<br>
Compile/Runtime | Compile-time | Runtime<br>
Method name | Same | Same<br>
Parameters | Must differ | Must match<br>
Return type | Can differ | Must match (covariant allowed)`
  },
  {
    topic: "OOP",
    question: "Q27. Is multiple inheritance allowed in Java?",
    answer: `Classes ❌ No<br>Interfaces ✅ Yes`
  },
  {
    topic: "OOP",
    question: "Q28. Difference between “Has-A” vs “Is-A”?",
    answer: `Is-A → inheritance (Admin extends User)<br>Has-A → composition (Car has Engine)`
  },
  {
    topic: "OOP",
    question: "Q29. Why composition over inheritance?",
    answer: `Flexible, less coupling, avoids diamond problem, runtime behavior change`
  },
  {
    topic: "OOP",
    question: "Q30. Can an abstract class have constructor?",
    answer: `✅ Yes`
  },
  {
    topic: "OOP",
    question: "Q31. Can interface have variables?",
    answer: `✅ Yes, but public static final by default`
  },
  {
    topic: "OOP",
    question: "Q32. Default methods in interface?",
    answer: `✅ Allowed in Java 8+`
  },

  // ===== EXAMPLES (Optional extra topic) =====
  {
    topic: "OOP Examples",
    question: "Method Overloading Example",
    answer: `<pre>void login(String email){} 
void login(String phone){}</pre>`
  },
  {
    topic: "OOP Examples",
    question: "Method Overriding Example",
    answer: `<pre>class User { void login(){} }
class Admin extends User { void login(){} }</pre>`
  },
  {
    topic: "OOP Examples",
    question: "Encapsulation Example",
    answer: `<pre>class User { private int age; public void setAge(int a){age=a;} }</pre>`
  },
  {
    topic: "OOP Examples",
    question: "Abstraction Example",
    answer: `<pre>abstract class Payment { abstract void pay(); }
interface IPayment { void pay(); }</pre>`
  },
  {
    topic: "OOP Examples",
    question: "Composition Example",
    answer: `<pre>class Engine {}
class Car { Engine engine; }</pre>`
  }
];
