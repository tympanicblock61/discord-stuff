import base64
import pyperclip


def readall(file):
    whole_file = ''
    for line in file.readlines():
        whole_file += line
    return whole_file


with open('main.js', 'r') as f:
    encoded = str(base64.b64encode(bytes(readall(f), "utf-8")), "utf-8")
    pyperclip.copy(f"eval(atob('{encoded}'))")
