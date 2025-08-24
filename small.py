import pyautogui as pyauto
count=0
coordinates=[[1577,251],[1939,251],[1577,547],[1939,547],[1577,837],[1939,837]]
for i in range(15):
    for j in range(len(coordinates)):
        x, y = coordinates[j]
        im = pyauto.screenshot(f"images/tablets/ss{i}{j}.png", region=(x, y, 362, 295))
        pyauto.sleep(0.3)
    pyauto.click(1484,171) 
    pyauto.sleep(0.5)