# Tóm tắt thiệp mời — Hoài Nam & Hà Lâm

Thiệp cưới online, một trang duy nhất. Khách mở link, kéo rèm, rồi trang tự trôi chậm xuống qua từng phần dưới đây.
Khách chạm hoặc cuộn bất cứ lúc nào thì trang dừng tự trôi để khách tự xem.

> **Ký hiệu:** ✅ đã đúng với Nam & Lâm · ⚠️ vẫn là nội dung của thiệp cũ (Việt Phương & Ninh Hương), cần thay trước khi gửi.

---

## 1. Màn mở thiệp
- Hai tấm rèm nhung, giữa có dòng "Thiệp mời đám cưới", tên **Hoài Nam & Hà Lâm** ✅ và ngày **18 · 10 · 2026** ⚠️.
- Nút **"Mở thiệp"**: rèm kéo ra và nhạc nền bắt đầu phát. Nút **"Mở thiệp không nhạc"**: mở mà không phát nhạc.
- Màn rèm chỉ hiện một lần mỗi phiên trình duyệt.
- Góc màn hình có nút tròn để bật/tắt nhạc. Bài hát nằm ở `assets/audio/song.mp3` ⚠️.

## 2. Ảnh bìa
- Dòng nhỏ "Thiệp mời · Lễ thành hôn", tên hai bạn ✅, ngày cưới ⚠️.
- Lời mời: *"Chúng tôi trân trọng kính mời quý vị đến chung vui… tại Phú Nhiêu, Phú Xuyên, Hà Nội và Tuấn Hưng, Lai Khê, Hải Phòng"*. Địa danh trong câu này ⚠️.
- Hai nút: **Xem lịch trình** và **Chỉ đường**.
- Ảnh cưới dọc `anh-bia` (chưa có ảnh).

## 3. Đếm ngược
- Đếm ngày, giờ, phút, giây đến **10:00 AM · Chủ Nhật, 18/10/2026** ⚠️.
- Ngày này đã qua nên đồng hồ đang đứng ở 0. Giờ cưới sửa ở `weddingTime` trong `js/config.js`.

## 4. Hai gia đình (Nhà trai · Nhà gái)
| | Nhà trai | Nhà gái |
|---|---|---|
| Tên | Nguyễn Hoài Nam — Chú rể ✅ | Nguyễn Hà Lâm — Cô dâu ✅ |
| Ảnh | `chu-re` (chưa có ảnh) | `co-dau` (chưa có ảnh) |
| Thân phụ | Ông Vũ Văn Long ⚠️ | Ông Ninh Văn Tưởng ⚠️ |
| Thân mẫu | Bà Nguyễn Thị Kim Lan ⚠️ | Bà Phạm Thị Ngát ⚠️ |

## 5. Lịch trình — "Bốn buổi lễ, hai ngày" ⚠️
| Giờ | Ngày | Buổi | Bên | Địa điểm |
|---|---|---|---|---|
| 4:30 PM | Thứ Bảy 17/10/2026 | Tiệc mừng nhà trai | Nhà trai | Nhà văn hoá thôn Phú Nhiêu, xã Phú Xuyên, Hà Nội |
| 5:00 PM | Thứ Bảy 17/10/2026 | Tiệc mừng nhà gái | Nhà gái | Tư gia nhà gái, thôn Tuấn Hưng, xã Lai Khê, TP Hải Phòng |
| 6:30 AM | Chủ Nhật 18/10/2026 | Lễ vu quy | Nhà gái | Tư gia nhà gái, thôn Tuấn Hưng |
| 10:00 AM | Chủ Nhật 18/10/2026 | **Lễ thành hôn** | Nhà trai | Nhà văn hoá thôn Phú Nhiêu |

Mỗi buổi có hai nút:
- **Chỉ đường**: nhảy xuống phần bản đồ.
- **Thêm vào lịch**: lưu vào Google Calendar, hoặc tải file `.ics` cho Apple/Outlook (thư mục `calendar/`).

Khi đổi giờ hoặc địa điểm, cần sửa cùng lúc ở 3 nơi: trong `index.html`, trong link Google Calendar và trong file `.ics` tương ứng.

## 6. Album — "Những khoảnh khắc" ⚠️
- 13 ảnh cưới (`album-01` … `album-13`, chưa có ảnh; số lượng đổi bằng `albumCount` trong `js/config.js`) xếp thành **vòng tròn xoay 3D**. Ảnh phía trước to và sáng nhất, các ảnh phía sau mờ dần. Mỗi ảnh có khung viền vàng trên nền ngà, bên dưới là một vòng ellipse ánh vàng.
- Vòng quay đều và liên tục, khoảng 4,5 giây qua một ảnh, chỉ khi khách đang nhìn tới album. Khi khách rê chuột lên vòng ảnh thì vòng chậm dần rồi dừng.
- Vuốt hoặc kéo để xoay. Thả tay ra thì vòng còn trôi theo đà rồi chậm dần về tốc độ thường. Có nút ‹ › và số thứ tự "01 — 13". Trên máy tính dùng được phím ← →.
- Chạm ảnh bên cạnh (hoặc bấm ‹ ›) thì vòng tăng tốc rồi giảm tốc êm đưa ảnh đó ra trước, dừng khoảng 2,5 giây rồi quay tiếp. Chạm ảnh phía trước thì mở xem lớn (phóng to, vuốt sang ảnh khác).

## 7. Hộp mừng cưới — "Gửi lời chúc từ xa" ⚠️
- Nhà trai: Nguyễn Hoài Nam ✅, nhưng mã QR và ngân hàng (MSB) vẫn của chú rể cũ ⚠️.
- Nhà gái: Nguyễn Hà Lâm ✅, nhưng mã QR và ngân hàng (VPBank) vẫn của cô dâu cũ ⚠️.
- **Phải thêm ảnh `qr-nha-trai`, `qr-nha-gai` và sửa tên ngân hàng trước khi gửi**, để tiền mừng không chuyển nhầm người.

## 8. Chỉ đường — "Hai địa điểm" ⚠️
- Bản đồ Google Maps nhúng kèm nút "Mở Google Maps" cho:
  - Nhà văn hoá thôn Phú Nhiêu (Hà Nội)
  - Tư gia nhà gái, thôn Tuấn Hưng (Hải Phòng)
- Tọa độ sửa ở `mapPoints`, link sửa ở `maps` trong `js/config.js`.

## 9. Sổ lưu bút — "Lời chúc của mọi người"
- Lời chúc hiện thành dải cuộn vòng, có nút trái/phải.
- Bên dưới là form gửi lời chúc: tên, mối quan hệ (gợi ý "Bạn đại học của Lâm" ✅), lời chúc, kèm các câu chúc mẫu.
- Hiện đang đọc lời chúc từ sheet của cặp cũ ⚠️.

## 10. Chân trang
- "Hoài Nam & Hà Lâm" ✅ và dòng "18 · 10 · 2026 — Cảm ơn bạn đã ở bên chúng tôi!" (ngày ⚠️).

## Thành phần luôn có trên trang
- **Thanh nút nổi** ở cuối màn hình: *Gửi lời chúc* và *Chỉ đường*. Thanh tự ẩn khi khách tới form gửi lời chúc.
- **Nền động**: cánh hoa, trái tim, ngôi sao rơi. Chạm vào thì chúng nổ tung.
- **Mini game ẩn**: chạm nổ 4 cánh hoa, hoặc chạm trái tim vàng bay ngang trang, là mở ra trò chơi. Điểm cao được lưu lên **"Bảng vàng"**.
- **Ảnh xem trước khi chia sẻ link** (Zalo/Facebook): tiêu đề "Nam & Lâm mời bạn đến đám cưới" ✅, ảnh `chia-se.jpg` (chưa có ảnh).

---

## Lưu ý chung trước khi gửi thiệp
1. **Backend:** `apiEndpoint` trong `js/config.js` vẫn trỏ vào Google Sheet của cặp cũ. Cần tạo sheet mới theo `backend/README.md` và dán URL mới vào.
2. **Ảnh:** thư mục `assets/photos/` đang trống. Đặt ảnh thật vào đó, đổi tên theo quy tắc trong `assets/photos/README.md`.
3. **Ngày, giờ, địa điểm, tên bố mẹ:** sửa trong `index.html`, các file `calendar/*.ics` và `js/config.js`.
4. **Tên miền** `phuonghuongwedding.online` vẫn là của thiệp cũ.
