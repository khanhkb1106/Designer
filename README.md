# 🎨 Website Graphic Designer - Hướng Dẫn Sử Dụng

## Tổng Quan Về Website

Website này là một trang web toàn diện về nghề Graphic Designer, được thiết kế với giao diện hiện đại, responsive, và đầy hiệu ứng bắt mắt.

## 📁 Cấu Trúc File

```
Designer/
├── index.html          # Trang chủ chính
├── podcast.html        # Trang podcast với video player
├── styles.css          # Các style CSS toàn bộ website
├── script.js           # JavaScript cho tương tác
└── README.md           # File hướng dẫn này
```

## 🚀 Cách Chạy Website

### Cách 1: Dùng VS Code Live Server (Recommended)
1. Cài đặt extension "Live Server" từ VS Code
2. Chuột phải vào `index.html` → chọn "Open with Live Server"
3. Browser sẽ tự động mở tại `http://localhost:5500/index.html`

### Cách 2: Dùng Python (nếu có cài đặt)
```bash
cd c:\Users\Admin\Desktop\Designer
python -m http.server 8000
```
Sau đó mở browser vào: `http://localhost:8000`

### Cách 3: Dùng Node.js + http-server
```bash
npm install -g http-server
cd c:\Users\Admin\Desktop\Designer
http-server
```

## ✨ Các Tính Năng Chính

### 1. **Hero Section (Phần Tiêu Đề)**
   - Gradient background hiệu ứng động
   - Animated background elements (float effect)
   - CTA button "Bắt Đầu Khám Phá" khi click sẽ scroll đến danh mục

### 2. **About Section (Giới Thiệu)**
   - Giới thiệu nhóm tạo website
   - Animated image placeholder
   - Responsive layout

### 3. **Categories Section (Danh Mục)**
   - **✅ ĐÃ ĐẨY LÊN SAU PHẦN VỀ CHÚNG TÔI**
   - 6 chuyên ngành chính:
     - Branding Designer
     - Social Media Designer
     - UI/UX Designer
     - Motion Graphic Designer
     - Packaging Designer
     - Print Designer
   - Hover effects bắt mắt
   - Cards animation on scroll

### 4. **Podcast Section**
   - 3 tập podcast với description đầy đủ
   - **✅ KHI CLICK "NGHE NGAY" SẼ ĐI ĐẾN TRANG podcast.html**
   - Video player YouTube embedded
   - Nút "Nghe Ngay" chuyển hướng đến trang riêng

### 5. **Slogan Section**
   - Gradient background
   - Motivational quote
   - Text shadow effect

### 6. **Professional Description Section (Nghề Nghiệp)**
   - **Tab navigation** với 4 chủ đề:
     1. **Làm Gì?** - Công việc thực tế
     2. **Kỹ Năng & Kiến Thức** - Yêu cầu kỹ năng
     3. **Học Tập** - Con đường học tập
     4. **Cơ Hội Việc Làm** - Lộ trình sự nghiệp
   - Tab switching interactivity

### 7. **Mindmap Section**
   - Hình ảnh mindmap interactve
   - Hover effects trên các branch

### 8. **Contact Section (Thông Tin Liên Hệ)**
   - Email, điện thoại, địa chỉ
   - Thời gian làm việc

### 9. **Footer**
   - Links nhanh
   - Copyright

## 🎨 Color Scheme

- **Primary Color**: `#d97706` (Màu cam đậm)
- **Secondary Color**: `#b45309` (Màu nâu cam)
- **Accent Color**: `#f59e0b` (Màu vàng cam)
- **Dark**: `#1a1a1a`
- **Light**: `#f9fafb`

## 🌈 Hiệu Ứng Bắt Mắt Được Thêm

✅ **Slide-up animations** khi cuộn trang
✅ **Hover effects** trên tất cả cards
✅ **Gradient backgrounds** khoác lên sections
✅ **Float animations** trên hero section
✅ **Pulse effects** trên icons
✅ **Parallax scrolling** trên hero content
✅ **Tab switching animations**
✅ **Smooth scroll behavior** khi click links
✅ **Color transitions** trên navigation links
✅ **Scale transforms** khi hover buttons
✅ **Intersection observer** cho lazy loading animations

## 📱 Responsive Design

Website hoàn toàn responsive:
- ✅ **Desktop** (1200px+)
- ✅ **Tablet** (768px - 1199px)
- ✅ **Mobile** (< 768px)

Hamburger menu tự động xuất hiện trên mobile.

## 🔗 Navigation

Tất cả các liên kết trong navbar và CTA buttons:
- Scroll mượt tới đúng section
- Active link highlighting dựa vào vị trí scroll

## 📺 Podcast Player

Khi click "Nghe Ngay" trên podcast card:
1. Chuyển hướng tới `podcast.html?episode=X`
2. Hiển thị video player YouTube
3. Hiển thị description đầy đủ
4. Danh sách các tập khác để dễ dàng chuyển đổi

## 🛠️ Công Nghệ Sử Dụng

- **HTML5** - Semantic markup
- **CSS3** - Modern styles, Grid, Flexbox, Animations
- **Vanilla JavaScript** - No frameworks needed
- **YouTube Embed** - Cho video player

## 💡 Tính Năng JavaScript

- Tab switching functionality
- Hamburger menu toggle
- Intersection Observer cho scroll animations
- Smooth scroll behavior
- Parallax scrolling effect
- Active link highlighting
- Ripple effect on buttons
- Mobile responsive behavior handling

## 📝 Lưu Ý

1. Để thay đổi YouTube video IDs, sửa trong `podcast.html`:
   ```javascript
   const podcastData = {
       1: {
           ...
           videoId: 'YOUR_VIDEO_ID_HERE'
       }
   }
   ```

2. Để tùy chỉnh nội dung, sửa trực tiếp trong HTML files

3. Để thay đổi colors, cập nhật `:root` CSS variables trong `styles.css`

## 🎯 Các Yêu Cầu Được Hoàn Thành

✅ Tạo web về chủ đề Graphic Designer
✅ Đẩy danh mục lên sau phần Về Chúng Tôi
✅ Thêm hiệu ứng bắt mắt (float, pulse, slide-up, hover transforms, etc.)
✅ Khi ấn vào podcast chuyển đến trang chứa video player

---

**Tối ưu cho desktop, tablet, và mobile!** 📱💻🖥️
