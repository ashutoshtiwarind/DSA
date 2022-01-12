'''Write a program to calculate the electricity bill (accept number of unit from user) according to the following criteria :

             Unit                                                     Price  
First 100 units                                               no charge
Next 100 units                                              Rs 5 per unit
After 200 units                                             Rs 10 per unit
(For example if input unit is 350 than total bill amount is Rs2000)


amt=0
nu=int(input("Enter number of electric unit"))
if nu<=100:
     amt=0
if nu>100 and nu<=200:
     amt=(nu-100)*5
if nu>200:
     amt=500+(nu-200)*10
print("Amount to pay :",amt)
