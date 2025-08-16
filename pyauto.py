import pyautogui as pyauto

# try:
#     while True:
#         x, y = pyauto.position()
#         positionStr = f"X: {x:4} Y: {y:4}"
#         print(f"{positionStr}", end='\r', flush=True)
# except KeyboardInterrupt:
#     print()
counter=0
coordinates=[[279,367],[1317,367]]
pyauto.click(362,502)
for i in range(18):
    for k in range(3):
        for j in range(len(coordinates)):
            x, y = coordinates[j]
            im = pyauto.screenshot(f"images/ss{i}{counter}-large.png", region=(x, y, 1038, 850))
            pyauto.sleep(0.3)
            counter+=1
        
        pyauto.scroll(-5)
        pyauto.sleep(0.5)
    pyauto.scroll(2)
    pyauto.sleep(0.5)
    pyauto.click(235,169)
     
    pyauto.sleep(0.5)
    pyauto.click(279,367)
    pyauto.sleep(0.2)
    counter=0



