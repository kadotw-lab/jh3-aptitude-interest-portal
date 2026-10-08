# -*- coding: utf-8 -*-
"""
國三美班 學生興趣與性向測驗家長查詢系統 - 本地伺服器啟動腳本
自動尋找可用連接埠，並開啟預設瀏覽器
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.html': 'text/html',
})

for p in range(PORT, PORT + 20):
    try:
        httpd = socketserver.TCPServer(("", p), Handler)
        PORT = p
        break
    except OSError:
        continue

url = f"http://localhost:{PORT}/index.html"
print("=" * 60)
print(" 國三美班 學生興趣與性向測驗家長查詢系統")
print(f" 本地伺服器已成功啟動: {url}")
print(" 正在為您開啟瀏覽器...")
print(" 若要關閉伺服器，請在此視窗按下 Ctrl + C")
print("=" * 60)

webbrowser.open(url)

try:
    httpd.serve_forever()
except KeyboardInterrupt:
    print("\n伺服器已關閉。")
    sys.exit(0)
