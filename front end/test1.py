from datetime import datetime
import random
import time
odd=[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]
for i in range(5):
    min=datetime.today().minute
    if min in odd:
        print("odd")
    else:
        print("not odd")

    wait_time=random.randint(1,60)
    time.sleep(wait_time)
