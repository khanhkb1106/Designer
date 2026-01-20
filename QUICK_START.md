# 🚀 QUICK START GUIDE

## 📋 Cách Chạy Website Ngay Lập Tức

### **Cách Đơn Giản Nhất: Dùng VS Code Live Server**

1. **Mở file `index.html` trong VS Code**
   - Nhấp đúp vào `c:\Users\Admin\Desktop\Designer\index.html`

2. **Nhấp chuột phải trên file**
   - Chọn: **"Open with Live Server"**
   
3. **Browser tự động mở!** 🎉
   - Trang web sẽ load tại: `http://localhost:5500/`
   - Tất cả animations và features hoạt động ngay!

---

## ✨ Các Tính Năng Chính

### **Home Page (index.html)**
```
1. Sticky Navigation Bar
   ↓
2. Hero Section (với button "Bắt Đầu Khám Phá")
   ↓
3. About Section (Giới thiệu nhóm)
   ↓
4. Categories Section ⭐ (6 chuyên ngành thiết kế)
   ↓
5. Podcast Section (3 tập - click "Nghe Ngay" → podcast.html)
   ↓
6. Slogan Section
   ↓
7. Profession Section (4 tabs: Làm Gì, Kỹ Năng, Học Tập, Sự Nghiệp)
   ↓
8. Mindmap Section
   ↓
9. Contact Section
   ↓
10. Footer
```

### **Podcast Page (podcast.html)**
```
- Click "Nghe Ngay" từ bất kỳ tập podcast nào
- Hiển thị YouTube video player
- Hiển thị chi tiết tập (description)
- Danh sách các tập khác để dễ chuyển đổi
- Nút "Quay Lại" về trang chủ
```

---

## 🎨 Hiệu Ứng Bắt Mắt

### **Animations & Effects**
✨ Slide-up animations khi scroll trang
🎯 Hover effects trên cards (transform + shadow)
🌈 Gradient backgrounds (cam/vàng)
💫 Float animations trên hero section
🔄 Parallax scrolling
📱 Responsive design (desktop, tablet, mobile)
🎪 Tab switching animations

---

## 🎯 Thử Các Tính Năng

### 1. **Click Navigation Links**
   - "Về Chúng Tôi" → scroll mượt tới section
   - "Danh Mục" → scroll tới categories
   - Tất cả navigation links đều smooth scroll

### 2. **Hover trên Cards**
   - Hover bất kỳ card nào
   - Sẽ thấy: transform, shadow, color change
   - Các icons sẽ pulse (nhảy)

### 3. **Click Buttons**
   - "Bắt Đầu Khám Phá" → scroll tới categories
   - "Nghe Ngay" → chuyển tới trang podcast với video
   - "Quay Lại" → về trang chủ

### 4. **Scroll Trang**
   - Các elements sẽ animation slide-up khi scroll
   - Hero content sẽ parallax (chuyển động khác tốc độ)
   - Navigation bar sẽ có shadow effect

### 5. **Tab Navigation** (Mục Nghề Nghiệp)
   - Click "Làm Gì?" → hiển thị công việc
   - Click "Kỹ Năng & Kiến Thức" → hiển thị kỹ năng
   - Click "Học Tập" → hiển thị con đường học
   - Click "Cơ Hội Việc Làm" → hiển thị lộ trình sự nghiệp

### 6. **Mobile Responsive**
   - Resize browser → hamburger menu xuất hiện
   - Layout tự động điều chỉnh
   - Font size tự động thu nhỏ

---

## 📁 File Structure

```
Designer/
├── index.html          ← TRANG CHỦ (mở cái này!)
├── podcast.html        ← Trang podcast (auto mở khi click)
├── styles.css          ← Tất cả styles & animations
├── script.js           ← JavaScript interactivity
├── README.md           ← Hướng dẫn chi tiết
├── PROJECT_SUMMARY.md  ← Tóm tắt dự án
└── QUICK_START.md      ← File này
```

---

## 🎨 Colors Used

- 🟠 **Primary**: `#d97706` (Orange/Cam)
- 🟤 **Secondary**: `#b45309` (Brown-Orange/Nâu)
- 🟡 **Accent**: `#f59e0b` (Yellow-Orange/Vàng)

---

## 💡 Tips

1. **Thay đổi colors**: Edit `:root` trong `styles.css`
2. **Thay đổi nội dung**: Edit HTML trong `index.html`
3. **Thay đổi YouTube videos**: Edit `videoId` trong `podcast.html`
4. **Thêm animations**: Thêm keyframes trong `styles.css`

---

## 🌐 Alternative: Chạy mà không cần Live Server

### **Nếu không có Live Server extension:**

**Option A: Dùng Python**
```bash
# Mở Command Prompt / PowerShell
cd c:\Users\Admin\Desktop\Designer
python -m http.server 8000
# Sau đó mở: http://localhost:8000 trong browser
```

**Option B: Dùng Node.js**
```bash
npm install -g http-server
cd c:\Users\Admin\Desktop\Designer
http-server
# Sau đó mở: http://localhost:8080 trong browser
```

---

## ✅ Kiểm Tra Hoạt Động

Khi mở website, hãy thử:

- [ ] Trang load thành công (hero section hiển thị)
- [ ] Navigation links hoạt động (click → scroll)
- [ ] Hover cards có effect (transform + shadow)
- [ ] Scroll trang có animations
- [ ] Click "Nghe Ngay" chuyển tới podcast.html
- [ ] Podcast page load video YouTube
- [ ] Tab switches hoạt động
- [ ] Contact info hiển thị đầy đủ
- [ ] Responsive trên mobile (resize browser)
- [ ] Footer links hoạt động

---

## 🎉 Enjoy!

Website của bạn đã sẵn sàng!

**Tất cả yêu cầu đã hoàn thành:**
✅ Website Graphic Designer  
✅ Categories section đẩy lên sau About  
✅ Eye-catching animations & effects  
✅ Podcast page với video player  

Happy coding! 🚀

---

*Dùng Live Server để có trải nghiệm tốt nhất (auto reload khi save file)*
