def power(a:int, b:int):
    ans = a
    for i in range(b-1):
        ans *= a
    return ans
x, y = map(int, input().split())
print(power(x,y))