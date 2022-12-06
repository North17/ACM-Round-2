# Students Results

import mysql.connector 

mycon = mysql.connector.connect(host= "localhost", user= "root", passwd= "nps123", database= "sqlpy")

c = mycon.cursor()



def createtable():
    c.execute("DROP TABLE IF EXISTS RESULT")
    c.execute("CREATE TABLE RESULT (Rno INT PRIMARY KEY, Name VARCHAR(20), Phy INT, Chem INT, Math INT, Comp INT);")
    c.execute("INSERT INTO RESULT VALUES(1, 'Ajay', 89, 86, 90, 93);")
    c.execute("INSERT INTO RESULT VALUES(2, 'Bhanu', 67, 78, 65, 80);")
    c.execute("INSERT INTO RESULT VALUES(3, 'Ravi', 45, 65, 54, 75);")
    c.execute("INSERT INTO RESULT VALUES(4, 'Shashi', 90, 92, 91, 99);")

def mathplus(r):
    c.execute("SELECT * FROM RESULT WHERE Rno = {};".format(r))
    rec = c.fetchall()
    print("Old record was", rec)
    c.execute("UPDATE RESULT SET Math = Math + 5 WHERE Rno = 3") 
    c.execute("SELECT * FROM RESULT WHERE Rno = {};".format(r))
    rec = c.fetchall()
    print("Updated record is", rec) 

def showtable():
    c.execute("SELECT * FROM RESULT;")
    tab = c.fetchall()
    print("Rno\tName\tPhy\tChem\tMath\tComp")
    for rec in tab:
        for a in rec:
            print(a, end='\t')
        print()  


while True:
    print("### Subject Result Table ###\n")
    print("Choose an option:")
    print("1. Create table with 4 rows")
    print("2. Increase marks for Math by 5")
    print("3. Display all records")
    print("4. Exit\n")
    opt = int(input())
    print()

    if opt == 1:
        createtable()
        print("Table Created with 4 records\n")

    elif opt == 2:
        rno = int(input("Enter student roll number: "))
        mathplus(rno)
        print()

    elif opt == 3:
        showtable()
        print()

    else:
        break


mycon.commit()
mycon.close()