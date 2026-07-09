# V26 EVAL GUARD — บังคับประเมินก่อนหมุน Gacha

เวอร์ชันนี้แก้ปัญหา “กดหมุน/เห็นผลรางวัลโดยยังไม่ได้ทำ Evaluation” โดยเพิ่ม guard ทั้ง Frontend และ Backend

## สิ่งที่แก้หลัก

1. Frontend ไม่เชื่อ localStorage เก่าอีกต่อไป
   - ถ้า Sheet บอกว่า Employee ID ยังไม่เคยหมุน จะล้างผลรางวัลเก่าที่ค้างใน browser ทิ้งทันที
   - กันเคส Reset Sheet แล้ว browser ยังจำผลรางวัลรอบเก่า ทำให้ข้าม Evaluation ได้

2. ปุ่ม “ประเมิน + หมุนวงล้อ” จะต้องเปิด Evaluation ก่อนเสมอ
   - ต้องให้คะแนน Overall
   - ต้องเลือก Feeling
   - ต้องเลือก Want Again
   - ครบแล้วถึงเรียก API หมุนรางวัล

3. Backend Apps Script บังคับซ้ำอีกชั้น
   - action `submitAndSpin`, `spinGacha`, `spin`, `gacha`, `claimPrize` จะถูกบล็อกถ้า Evaluation ไม่ครบ
   - ดังนั้นถึงมีคนยิง API เอง หรือ browser ยัง cache JS เก่า ก็ไม่สามารถ claim PrizePool ได้ถ้าไม่ส่ง Evaluation ครบ

4. คงของเดิมไว้ครบ
   - PrizePool 80 slots
   - Submit Mood Board ต้องสำเร็จก่อนหมุน
   - Admin Health Check
   - Pre-check Employee ID
   - Gallery full image / preview
   - Mobile/Desktop responsive

## วิธีอัปเดต

1. อัปไฟล์ root ขึ้น GitHub Pages
2. เอา `gas-backend/Code.gs` ไปวางทับใน Apps Script
3. Save แล้ว Deploy > New deployment version
4. ตรวจ `config.js` ว่าเป็น URL `/exec` ของ deployment ล่าสุด
5. เปิดเว็บแล้วกด Ctrl+F5
6. กด Admin Health Check ต้องเห็น Frontend = V26_EVAL_GUARD และ Backend = COLOR_STRESS_V26_EVAL_GUARD_2026_07_05

## จุดที่ต้องทดสอบหลัง deploy

- กดส่ง Mood Board แล้วกดปุ่มหมุน ต้องเห็น Evaluation modal ก่อน
- ไม่กรอก Evaluation ให้ครบ ต้องหมุนไม่ได้
- กรอกครบแล้วถึงได้ผลรางวัล
- ลองเปิดมือถือ/desktop แล้ว flow ต้องเหมือนกัน
