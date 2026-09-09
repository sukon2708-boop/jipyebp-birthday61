const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
สุขสันต์วันเกิดนะคะแฟน ❤️🎂

ขอให้วันเกิดปีนี้เป็นปีที่เต็มไปด้วย
ความสุข รอยยิ้ม และเรื่องราวดี ๆ เข้ามาในชีวิต ขอให้เธอมีสุขภาพแข็งแรง 
ประสบความสำเร็จในทุกสิ่งที่ตั้งใจ 
และไม่ว่าจะเจอเรื่องอะไร ขอให้รู้ไว้ว่ายังมีคนคนหนึ่งที่รักและพร้อมอยู่ข้าง ๆ เธอเสมอ

ขอบคุณที่เข้ามาเป็นความสุข เป็นรอยยิ้ม และเป็นคนสำคัญที่สุดคนหนึ่งในชีวิต
ของเรา ขอบคุณสำหรับทุกช่วงเวลาที่เราได้ใช้ร่วมกัน ทั้งวันที่มีความสุขและวันที่เหนื่อยล้า

เราอาจไม่ได้เป็นคนที่สมบูรณ์แบบ และอาจมีบางวันที่เราไม่เข้าใจกัน แต่สิ่งหนึ่งที่อยากให้เธอมั่นใจคือ เรารักเธอมากจริง ๆ และอยากมีเธออยู่ในทุก ๆ วันต่อจากนี้ ❤️

ขอให้ปีนี้และทุก ๆ ปีต่อไป มีเราเดินไปด้วยกันนะ   รักเธอมากขึ้นทุกวัน และจะรักแบบนี้ไปนาน ๆ เลยนะ ☀️🌻
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
