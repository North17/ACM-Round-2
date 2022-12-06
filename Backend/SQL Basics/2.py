# Employee Details

import mysql.connector

mycon = mysql.connector.connect(host= "localhost", user= "root" , password= "nps123", database= "sqlpy")

c = mycon.cursor()

def createtable():
    c.execute("DROP TABLE IF EXISTS EmpDetails;")
    c.execute("CREATE TABLE EmpDetails(Eno INT PRIMARY KEY, Name VARCHAR(20), Dept VARCHAR(10), Exp INT, Sal INT);")
    c.execute("INSERT INTO EmpDetails VALUES(108, 'Akask', 'Sales', 10, 40000);")
    c.execute("INSERT INTO EmpDetails VALUES(201, 'Chaitanya', 'Finance', 17, 50000);")
    c.execute("INSERT INTO EmpDetails VALUES(210, 'Manoj', 'Finance', 10, 30000);")
    c.execute("INSERT INTO EmpDetails VALUES(415, 'Sarvesh', 'Sales', 12, 45000);")
    c.execute("INSERT INTO EmpDetails VALUES(127, 'Sudhir', 'HR', 16, 35000);")
    mycon.commit()

def delfromtable():
    c.execute("SELECT * FROM EmpDetails;")
    old = len(c.fetchall())
    c.execute("DELETE FROM EmpDetails WHERE Exp >= 15;")
    c.execute("SELECT * FROM EmpDetails;")
    new = len(c.fetchall())
    dif = old - new
    print("{} records were deleted where experience was >= 15".format(dif))
    mycon.commit()

def increasesal(s):
    c.execute("UPDATE EmpDetails SET Sal = Sal + {} WHERE Dept = 'Sales';".format(s))
    print("Salary was increased by {} for employees in Sales department\n".format(s))
    mycon.commit()

def selectrec():
    c.execute("SELECT * FROM EmpDetails;")
    tab = c.fetchall()
    for rec in tab:
        print(rec)


while True:
    print("### Employee Details ###")
    print("Choose an option: ")
    print("1. Create table with 5 rows")
    print("2. Delete rows with experience greater than or equal 15")
    print("3. Increase salary for employees in sales department")
    print("4. Display all records")
    print("5. Exit")
    opt = int(input())
    print()

    if opt == 1:
        createtable()
        print("Table created with 5 records\n")

    elif opt == 2:
        delfromtable()
        print()

    elif opt == 3:
        salinc = int(input("Enter salary increase amount: "))
        increasesal(salinc)
        

    elif opt == 4:
        selectrec()
        print()
        
    else:
        break


mycon.close()