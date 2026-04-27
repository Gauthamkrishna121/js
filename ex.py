# def sum():    
#     s=0
#     for i in range(101):
#         s+=i
#     print(s)

# sum()

# def fact(a):
#     f=1
#     for i in range(1,a+1):
#         f*=i
#     print(f)

# fact(5)

# n=int(input("Enter"))
# a=0
# b=1
# print(a)
# print(b)
# for i in range(n-2):
#     c=a+b
#     print(c)
#     a=b
#     b=c


# a=input("Enter the number:")
# count = 0
# for i in range(len(a)):
#     count+=1

# print(count)
 
# a=list(map(int,str(int(input("Enter Number:")))))
# b=a[::-1]
# for i in b:
#     print(i,end="")


# n=int(input("Number"))
# rev=0
# while n > 0:
#     d = n%10
#     rev= rev * 10 + d
#     n //=10

# print(rev)

# n=int(input("Enter the number"))
# i=1
# while i<=n:
#     print(i)
#     i+=1

# n=int(input("Enter the number : "))
# i=1
# s=0
# while i <= n:
#     s+=i
#     i+=1
# print(s)
# b=int(input("Enter Number:"))
# a=list(map(int,str(b)))
# print(a)
# s=0
# l=len(a)
# print(l)
# for i in a:
#     c=i**l
#     s+=c
# print(s)
# if b == s:
#     print("This is a Armstrong Number")
# else:
#     print("No")

a=int(input("ENter the Number"))
b=int(input("Enter the Number"))
while b!=0:
    r=a%b
    a=b
    b=r
print(a)