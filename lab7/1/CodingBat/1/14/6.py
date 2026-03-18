def xyz_there(str):
    i = 0
    while i <= len(str) - 3:
        if str[i:i+3] == "xyz":
            if i == 0 or str[i-1] != ".":
                return True
        i += 1
    return False  