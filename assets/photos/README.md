# Ảnh của thiệp — quy tắc đặt tên

Đặt ảnh thật vào **chính thư mục này** (`assets/photos/`) và đổi tên đúng như bảng dưới.
Thiệp tự nhận ảnh, không cần sửa code.

- Đuôi file dùng được: `.jpg`, `.jpeg`, `.png`, `.webp`. **Viết thường** (`.jpg`, không phải `.JPG`).
- Tên file viết thường, không dấu, nối bằng gạch ngang, đúng y như bảng.
- Vị trí nào chưa có ảnh thì hiện khung trống, trong khung ghi sẵn tên file đang chờ.

| Vị trí trên thiệp | Tên file | Khung ảnh |
|---|---|---|
| Ảnh bìa (đầu trang) | `anh-bia` | dọc, khoảng 4:5 |
| Ảnh chú rể (phần Hai gia đình) | `chu-re` | dọc 2:3 |
| Ảnh cô dâu (phần Hai gia đình) | `co-dau` | dọc 2:3 |
| Album vòng xoay | `album-01`, `album-02`, … `album-13` | dọc 2:3 |
| Mã QR mừng cưới nhà trai | `qr-nha-trai` | vuông |
| Mã QR mừng cưới nhà gái | `qr-nha-gai` | vuông |
| Ảnh hiện khi chia sẻ link (Zalo, Facebook) | `chia-se.jpg` (**bắt buộc .jpg**) | ngang 1200×630 |

Ví dụ: `anh-bia.jpg`, `chu-re.jpg`, `album-01.jpg`, `album-02.jpg`, `qr-nha-trai.png`, `chia-se.jpg`.

## Album nhiều hoặc ít hơn 13 ảnh
Đánh số liên tục từ `album-01`, rồi sửa `albumCount` trong `js/config.js` thành đúng số ảnh.
Ví dụ có 20 ảnh thì dùng `album-01` … `album-20` và đặt `albumCount: 20`.

## Không bắt buộc: bản nét hơn khi xem ảnh lớn
Khi khách bấm vào ảnh để phóng to, thiệp dùng bản `<tên>-full` nếu có, ví dụ `album-01-full.jpg`.
Cách này giúp ảnh nhỏ trên trang tải nhanh, còn ảnh phóng to vẫn nét.
Bản `-full` phải cùng đuôi với ảnh chính.

## Mẹo
- Ảnh trên trang nên rộng khoảng 1000–1600px và nặng dưới 500KB để thiệp tải nhanh trên điện thoại.
- Khung ảnh cắt ảnh ở giữa, hơi lệch lên phía trên, nên ảnh album dọc 2:3 sẽ vừa khung nhất.
