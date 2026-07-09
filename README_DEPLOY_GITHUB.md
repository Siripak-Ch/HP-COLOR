# V30 GitHub Pages Build Fixed

## ใช้ไฟล์นี้สำหรับ GitHub Pages เท่านั้น
ให้อัปโหลดเฉพาะไฟล์ในชุด GitHub-only:
- index.html
- styles.css
- app.js
- config.js
- .nojekyll

ห้ามอัปโหลดโฟลเดอร์ gas-backend เข้า GitHub Pages ถ้าไม่จำเป็น เพราะเป็นไฟล์สำหรับ Apps Script

## ทำไมต้องมี .nojekyll
เพื่อปิด Jekyll processing ของ GitHub Pages และลดโอกาส build failed จากไฟล์ที่ไม่ใช่เว็บ static โดยตรง

## หลังอัปโหลด
1. ไปที่ GitHub repo
2. Settings > Pages
3. Source: Deploy from a branch
4. Branch: main / root
5. Save
6. รอ Action ใหม่ให้ผ่าน
