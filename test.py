import pyautogui as pyauto

try:
    while True:
        x, y = pyauto.position()
        positionStr = f"X: {x:4} Y: {y:4}"
        print(f"{positionStr}", end='\r', flush=True)
except KeyboardInterrupt:
    print()