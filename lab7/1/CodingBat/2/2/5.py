def sum67(nums):
    total = 0
    in_section = False
    for num in nums:
        if num == 6:
            in_section = True
            continue
        if in_section:
            if num == 7:
                in_section = False
            continue
        total += num
    return total