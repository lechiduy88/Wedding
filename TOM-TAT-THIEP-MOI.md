# Tóm tắt thiệp mời — Hoài Nam & Hà Lâm

Thiệp cưới online, một trang duy nhất. Khách mở link, kéo rèm, rồi trang tự trôi chậm xuống qua từng phần dưới đây.
Khách chạm hoặc cuộn bất cứ lúc nào thì trang dừng tự trôi để khách tự xem.

> **Ký hiệu:** ✅ đã đúng với Nam & Lâm · ⚠️ vẫn là nội dung mẫu cũ, cần thay trước khi gửi.

---

## 1. Màn mở thiệp
- Hai tấm rèm nhung, giữa có dòng "Thiệp mời đám cưới", tên **Hoài Nam & Hà Lâm** ✅ và ngày **29 · 11 · 2026** ✅.
- Nút **"Mở thiệp"**: rèm kéo ra và nhạc nền bắt đầu phát. Nút **"Mở thiệp không nhạc"**: mở mà không phát nhạc.
- Màn rèm chỉ hiện một lần mỗi phiên trình duyệt.
- Góc màn hình có nút tròn để bật/tắt nhạc. Bài hát *Anh bờ vai* nằm ở `assets/audio/anh-bo-vai.m4a` ✅.

## 2. Ảnh bìa
- Dòng nhỏ "Thiệp mời · Lễ thành hôn", tên hai bạn ✅, ngày cưới ✅.
- Lời mời: *"Chúng tôi trân trọng kính mời quý vị đến chung vui… tại xã Chân Mộng, tỉnh Phú Thọ"*.
- Hai nút: **Xem lịch trình** và **Chỉ đường**.
- Ảnh cưới dọc `anh-bia` ✅.

## 3. Đếm ngược
- Đếm ngày, giờ, phút, giây đến **10:00 AM · Chủ Nhật, 29/11/2026** ✅. Giờ cưới sửa ở `weddingTime` trong `js/config.js`.
- Bên dưới là tờ lịch tháng 11/2026, ngày 29 có trái tim đập nhẹ. Lịch tự vẽ theo `weddingTime`.

## 4. Hai gia đình (Nhà trai · Nhà gái)
| | Nhà trai | Nhà gái |
|---|---|---|
| Tên | Nguyễn Hoài Nam — Chú rể ✅ | Nguyễn Hà Lâm — Cô dâu ✅ |
| Ảnh | `chu-re` ✅ | `co-dau` ✅ |
| Ông | Nguyễn Hồng Minh ✅ | Nguyễn Xuân Quảng ✅ |
| Bà | Nguyễn Thị Bảy ✅ | Nguyễn Thị Dần ✅ |

## 5. Cuộn chỉ thời gian — "Từ ghét đến cưới" ✅
- Câu dẫn: *"Hồi cấp 3 thề không đội trời chung. 11 năm sau, chung luôn sổ hộ khẩu."*
- Một sợi chỉ chạy dọc trang, tự vẽ dần khi khách cuộn xuống. Sợi chỉ đi tới mốc nào thì nút ở mốc đó tô đậm; tới mốc cuối là trái tim đập.
- Các mốc: **2013–2015** bạn cùng lớp cấp 3 · **2015** Nam tỏ tình · **2016** chính thức yêu nhau · **29/11/2026** về chung một nhà.
- Mỗi mốc có ảnh kiểu polaroid hơi nghiêng, chạm vào để xem lớn: `chuyen-tinh-01` (cấp 3) · `03` (tỏ tình) · `04` (yêu nhau) · `05` (về chung nhà) ✅.
- Sửa chữ trực tiếp trong `index.html` (phần `id="chuyen-tinh"`). Thêm mốc mới bằng cách chép thêm một khối `<li class="wed-thread-item">`.

## 6. Lịch trình — "Hai buổi lễ, hai ngày"
| Giờ | Ngày | Buổi | Bên | Địa điểm |
|---|---|---|---|---|
| 8:30 AM | Thứ Bảy 28/11/2026 | Lễ ăn hỏi | Nhà gái | Tư gia nhà gái, khu 41 Vân Đồn, xã Chân Mộng, tỉnh Phú Thọ |
| 10:00 AM | Chủ Nhật 29/11/2026 | **Lễ thành hôn** | Nhà trai | Tư gia nhà trai, thôn 21 Minh Phú, xã Chân Mộng, tỉnh Phú Thọ |

Mỗi buổi có hai nút:
- **Chỉ đường**: nhảy xuống phần bản đồ.
- **Thêm vào lịch**: lưu vào Google Calendar, hoặc tải file `.ics` cho Apple/Outlook (thư mục `calendar/`).

Khi đổi giờ hoặc địa điểm, cần sửa cùng lúc ở 3 nơi: trong `index.html`, trong link Google Calendar và trong file `.ics` tương ứng.

## 7. Album — "Những khoảnh khắc" ⚠️
- 12 ảnh cưới (`album-01` … `album-12` ✅; số lượng đổi bằng `albumCount` trong `js/config.js`) xếp thành **vòng tròn xoay 3D**. Ảnh phía trước to và sáng nhất, các ảnh phía sau mờ dần. Mỗi ảnh có khung viền vàng trên nền ngà, bên dưới là một vòng ellipse ánh vàng.
- Vòng quay đều và liên tục, khoảng 4,5 giây qua một ảnh, chỉ khi khách đang nhìn tới album. Khi khách rê chuột lên vòng ảnh thì vòng chậm dần rồi dừng.
- Vuốt hoặc kéo để xoay. Thả tay ra thì vòng còn trôi theo đà rồi chậm dần về tốc độ thường. Có nút ‹ › và số thứ tự "01 — 12". Trên máy tính dùng được phím ← →.
- Chạm ảnh bên cạnh (hoặc bấm ‹ ›) thì vòng tăng tốc rồi giảm tốc êm đưa ảnh đó ra trước, dừng khoảng 2,5 giây rồi quay tiếp. Chạm ảnh phía trước thì mở xem lớn (phóng to, vuốt sang ảnh khác).

## 8. Hộp mừng cưới — "Gửi lời chúc từ xa" ⚠️
- Mã QR nằm trong một hộp quà; khách chạm vào hộp thì nắp bật lên và hai mã QR hiện ra.
- Mỗi thẻ chỉ ghi "Nhà trai · Nguyễn Hoài Nam" / "Nhà gái · Nguyễn Hà Lâm" ✅, không ghi ngân hàng.
- Ảnh QR: `qr-nha-trai.jpeg` (Hoài Nam, Techcombank) và `qr-nha-gai.jpeg` (Hà Lâm, Techcombank) ✅.

## 9. Chỉ đường — "Hai địa điểm"
- Bản đồ Google Maps nhúng kèm nút "Mở Google Maps" cho:
  - Tư gia nhà trai, thôn 21 Minh Phú (Phú Thọ) ✅
  - Tư gia nhà gái, khu 41 Vân Đồn, xã Chân Mộng (Phú Thọ) ✅
- Tọa độ sửa ở `mapPoints`, link sửa ở `maps` trong `js/config.js`.

## 10. Sổ lưu bút — "Lời chúc của mọi người"
- Lời chúc hiện thành dải cuộn vòng, có nút trái/phải.
- Bên dưới là form gửi lời chúc: tên, mối quan hệ (gợi ý "Bạn đại học của Lâm" ✅), lời chúc, kèm các câu chúc mẫu.
- Lời chúc lưu vào Google Sheet (tab `Wishes`) ✅, mọi khách đều thấy. Gõ `x` vào cột `Hidden` để ẩn một lời chúc.

## 11. Chân trang
- "Hoài Nam & Hà Lâm" ✅ và dòng "29 · 11 · 2026 — Cảm ơn bạn đã ở bên chúng tôi!" ✅.

## Thành phần luôn có trên trang
- **Thanh nút nổi** ở cuối màn hình: *Gửi lời chúc* và *Chỉ đường*. Thanh tự ẩn khi khách tới form gửi lời chúc.
- **Nền động**: cánh hoa, trái tim, ngôi sao rơi. Chạm vào thì chúng nổ tung.
- **Mini game ẩn**: chạm nổ 4 cánh hoa, hoặc chạm trái tim vàng bay ngang trang, là mở ra trò chơi. Điểm cao được lưu lên **"Bảng vàng"**.
- **Ảnh xem trước khi chia sẻ link** (Zalo/Facebook): tiêu đề "Nam & Lâm mời bạn đến đám cưới" ✅, ảnh `chia-se.jpg` ✅.

---

## Lưu ý chung trước khi gửi thiệp
1. **Backend:** đã nối Google Sheet ✅ (`apiEndpoint` trong `js/config.js`). Sửa `Code.gs` thì triển khai lại bằng "Quản lý các bản triển khai → Phiên bản mới" để giữ nguyên link.
2. **Ảnh:** đã có ảnh bìa, chú rể, cô dâu, 12 ảnh album, 2 mã QR và ảnh chia sẻ ✅. Ảnh gốc nằm trong `WeddingPictures/` (không đưa lên git).
3. **Ngày, giờ, địa điểm, tên bố mẹ:** đã cập nhật ✅. Khi đổi, sửa cùng lúc trong `index.html`, các file `calendar/*.ics` và `js/config.js`.
4. **Địa chỉ web:** `https://lechiduy88.github.io/Wedding/` (bật GitHub Pages cho repo). Có tên miền riêng thì thêm file `CNAME` và sửa link xem trước trong `index.html`.
