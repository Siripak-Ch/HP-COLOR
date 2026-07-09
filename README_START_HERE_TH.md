# Color Your Stress V24 — Starbucks Gift Card + Gallery Fixed

## แก้จาก V23
- เปลี่ยนชื่อรางวัล Gift Card เป็น **Starbucks Gift Card**
- แก้รูปใน Mood Board Gallery ไม่ให้โดนครอป / ไม่ขึ้นมุมดำ
- ปรับ snapshot Mood Board ให้เติมพื้นหลังเต็มภาพก่อน export เป็น JPEG
- ปรับการตัดบรรทัดข้อความภาษาไทยใน snapshot ให้ดีขึ้น

## PrizePool 80 รางวัล
- Starbucks Gift Card 500 บาท x 2
- Starbucks Gift Card 300 บาท x 4
- Starbucks Gift Card 200 บาท x 4
- Starbucks Gift Card 100 บาท x 20
- คูปอง/ข้อความกำลังใจ x 40

## หลังอัปเดต Apps Script
ถ้าต้องการให้ชื่อรางวัลใน Sheet เปลี่ยนเป็น Starbucks Gift Card ทันที ให้ Run:
1. `setupSheets`
2. `resetPrizePoolOnly`

ถ้าต้องการเริ่มกิจกรรมใหม่ทั้งหมด ให้ Run:
1. `setupSheets`
2. `resetAllDataForNewRound`

จากนั้น Deploy เป็น New version และกด Ctrl + F5 ที่หน้าเว็บ

## V25 เพิ่ม Function ลบทุก Sheet เพื่อ Reset ใหม่ทั้งหมด

เพิ่มเมนูใน Google Sheet:
- `🎨 Color Stress > DELETE ALL SHEETS + RESET EVERYTHING`

หรือกด Run function ใน Apps Script:
```text
deleteAllSheetsAndResetEverything
```

ผลลัพธ์:
- ลบทุกชีตเก่าใน Spreadsheet
- สร้าง Sheet ใหม่ทั้งหมด
- เติม PrizePool 80 รางวัลใหม่
- ล้าง cache และ setup version

คำเตือน: ข้อมูลเก่าใน Sheet จะหายทั้งหมดแบบย้อนกลับไม่ได้


## V26 แก้เพิ่มเติม
- แก้ปุ่มส่งประเมิน + หมุนวงล้อไม่ให้หาย โดยทำ footer ของ Evaluation modal ให้ sticky
- แก้ Gallery ให้แสดงรูป Mood Board แบบเต็มการ์ด ไม่ crop / ไม่บีบเบี้ยว
- ปรับ snapshot ใหม่ให้ใช้รูปเต็มคุณภาพขึ้น และไม่ใช้ thumb เล็กเป็นรูปหลัก
- Backend Gallery จะเลือก Drive full image ก่อน BoardThumbDataUrl
- เปลี่ยนชื่อรางวัลเป็น Starbucks Gift Card ครบทั้ง Frontend / Backend


## V27 แก้ Gacha ตามที่ขอ
- ล็อกระบบให้ **ต้องส่ง Evaluation ครบก่อนเท่านั้น** จึงจะเรียก `spinGacha` ได้
- Backend ตรวจซ้ำอีกชั้น ถ้าไม่มี Evaluation จะไม่สุ่มรางวัล
- รางวัลสุ่มจาก PrizePool ทั้งหมด 80 roll แบบ random จากรายการ Available
- เปลี่ยนชื่อรางวัลเป็น `Starbuck Gift Card` ทั้ง Frontend / Backend
- เพิ่ม normalize ชื่อรางวัล กรณี Sheet เดิมยังมีคำว่า Gift Card / Starbucks Gift Card
- ถ้าเคยหมุนแล้ว ระบบจะให้ประเมินก่อน แล้วแสดงผลเดิม ไม่สุ่มซ้ำ


## V28 Gallery Card Display Fix
- แก้หน้า Gallery ให้แสดงการ์ดเต็มอย่างถูกต้อง
- Frontend เปลี่ยนไปใช้รูป `boardImageUrl` ก่อน `boardThumbDataUrl` เพื่อเลี่ยง thumbnail เก่าที่ทำให้ภาพเพี้ยน / ดูเสีย
- ปรับ grid และขนาด card ให้ responsive มากขึ้น ทั้ง desktop และ mobile
- เปลี่ยน Google Drive image URL เป็น `uc?export=view&id=...` เพื่อให้โหลดรูปการ์ดเต็มได้เสถียรกว่าเดิม


## V29 Responsive Rechecked
- รองรับ Desktop / Tablet / Phone / LINE in-app browser
- Stepper 4 ช่องพอดีหน้าจอ และ sticky บนมือถือ
- Quiz / Mood Board / Gacha / Gallery ปรับ layout แยก desktop และ mobile
- Gallery ใช้รูปเต็มก่อน และเปิด preview รูปได้เมื่อแตะรูป
- Recheck: Evaluation ก่อนหมุน, 80 roll, 1 ครั้งต่อ Employee ID, Decor first, Emoji required, Delete all reset ครบ


## V31 Gacha Rebuilt + Gallery Fixed
- Rebuild ฝั่ง Gacha ใหม่ให้ไม่ขึ้น error หลอกหลัง Backend claim สำเร็จแต่ response timeout
- เพิ่ม `getMyGachaResult` เพื่อ recover ผลรางวัลเดิมจาก Employee ID อัตโนมัติ
- เพิ่ม polling recovery 4 รอบหลัง spin error ก่อนแสดง error จริง
- ต้องทำ Evaluation ก่อนหมุนเหมือนเดิม
- สุ่มจาก PrizePool 80 roll ที่ยัง Available และล็อกด้วย LockService
- Gallery แก้ไม่ให้ error: ถ้ารูปจาก Drive โหลดไม่ได้หรือไม่มีรูป จะ render Mood Board fallback จาก LayoutJSON/Stickers แทน
- Gallery ส่ง themeIndex/layoutJSON จาก backend เพื่อ reconstruct card ได้


## V34 Based on V31 — Save Mood Board No Error
- ฐานโค้ดมาจาก V31 โดยตรง
- แก้เฉพาะส่วน Save Mood Board ให้ไม่ค้าง / ไม่ขึ้น error ใน LINE Browser
- กดส่ง Mood Board แล้วบันทึก local ก่อนทันที และไปหน้า Gacha ได้เลย
- เพิ่ม retry queue เพื่อ sync ลง Sheet อัตโนมัติ
- เพิ่ม POST fallback และ doPost รองรับ submitCard/spinGacha/likeCard/saveBoardImage
- submitCard กันข้อมูลซ้ำด้วย CardID / ParticipantKey
- ยังเก็บระบบ Gacha Rebuilt + Gallery Fixed จาก V31 ไว้ครบ


## V35 Gallery Uncropped + Evaluation Required
- ฐานโค้ดต่อจาก V34 ซึ่ง base มาจาก V31
- แก้หน้า Mood Board Gallery: ไม่ใช้ thumbnail/Drive image เป็นหลักแล้ว เพราะบาง browser ทำให้รูปครอป/เบี้ยว/มีขอบดำ
- Gallery จะ reconstruct Mood Board เป็นการ์ด 4:3 จาก LayoutJSON/Stickers แทน เพื่อให้ไม่ครอปและไม่เบี้ยว
- ถ้าไม่มี LayoutJSON จริง ๆ ถึงจะ fallback ไปใช้รูป
- เพิ่ม frontend hard gate อีกชั้น: ต้องประเมิน Evaluation ให้ครบก่อนเท่านั้นจึงจะหมุน Gacha ได้
- Backend `spinGacha()` ยัง validate Evaluation ก่อนสุ่มรางวัลเหมือนเดิม
