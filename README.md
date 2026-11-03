## 1. Giới thiệu

Đề tài tập trung khảo sát và cải tiến giao diện trang thanh toán của website Watsons Việt Nam. Đây là khu vực cho phép khách hàng kiểm tra thông tin đơn hàng, lựa chọn phương thức nhận hàng, áp dụng mã giảm giá, lựa chọn phương thức thanh toán và xem tổng chi phí trước khi đặt hàng.

Trong quá trình xây dựng giao diện, hai vấn đề được ưu tiên cải tiến là khu vực chọn mã giảm giá chiếm nhiều diện tích và giao diện sản phẩm chưa có nút điều chỉnh số lượng trực tiếp. Vì vậy, giao diện được điều chỉnh nhằm giảm chiều dài trang, tăng tính thuận tiện khi thao tác và giúp khách hàng dễ dàng kiểm tra tổng giá trị đơn hàng.

## 2. Website tham khảo

- **Tên website:** Watsons Việt Nam.
- **URL:** https://www.watsons.vn/
- **Khu vực đã khảo sát:** Trang thanh toán (Checkout), bao gồm khu vực thông tin nhận hàng, phương thức giao hàng, mã giảm giá, phương thức thanh toán và tóm tắt đơn hàng.

Giao diện được xây dựng là phiên bản mô phỏng phục vụ mục đích học tập, tham khảo cách tổ chức nội dung của website thương mại điện tử. Các sản phẩm, giá bán và thao tác đặt hàng trong phiên bản mô phỏng không đại diện cho dữ liệu giao dịch thực tế của Watsons.

## 3. Chức năng

Giao diện thanh toán sau cải tiến có các chức năng chính:

- **Hiển thị danh sách sản phẩm:** Trình bày các sản phẩm trong đơn hàng, kèm thông tin tên sản phẩm, đơn giá, số lượng và thành tiền.
- **Hiển thị thông tin giá:** Tính toán và hiển thị tạm tính, phí vận chuyển, số tiền giảm giá và tổng thanh toán.
- **Điều chỉnh số lượng sản phẩm:** Cho phép tăng hoặc giảm số lượng sản phẩm bằng các nút tương ứng.
- **Quản lý mã giảm giá:** Cho phép nhập mã giảm giá, xem danh sách voucher, áp dụng hoặc hủy voucher.
- **Thu gọn và mở rộng danh sách voucher:** Mặc định ẩn danh sách voucher và chỉ hiển thị khi người dùng có nhu cầu lựa chọn.
- **Lựa chọn phương thức nhận hàng:** Hỗ trợ lựa chọn phương thức nhận hàng được mô phỏng trên giao diện.
- **Lựa chọn phương thức thanh toán:** Hiển thị các phương thức thanh toán được thiết kế trong phiên bản mô phỏng.
- **Chỉnh sửa thông tin nhận hàng:** Cho phép mở biểu mẫu, chỉnh sửa và lưu thông tin nhận hàng trên giao diện.
- **Bố cục tương thích nhiều kích thước màn hình:** Sử dụng CSS Responsive để điều chỉnh bố cục trên máy tính bảng và điện thoại.

Lưu ý: Các chức năng đặt hàng, thanh toán và lưu thông tin trong phiên bản bài tập chỉ mô phỏng trên giao diện, chưa kết nối với hệ thống xử lý giao dịch thực tế.

## 4. Công nghệ

- **HTML5:** Xây dựng cấu trúc trang thanh toán, các khu vực thông tin, danh sách sản phẩm, nút thao tác và biểu mẫu.
- **CSS3:** Thiết kế giao diện, màu sắc, khoảng cách, bố cục và khả năng hiển thị trên các kích thước màn hình khác nhau.
- **JavaScript:** Xử lý tương tác người dùng, mở/đóng danh sách voucher, thay đổi số lượng sản phẩm và cập nhật giá trị đơn hàng.

## 5. Cách chạy

1. Mở thư mục dự án bằng Visual Studio Code.
2. Kiểm tra cấu trúc thư mục, bảo đảm có file `index.html` và thư mục `css` chứa file `style.css`.
3. Mở file `index.html` bằng trình duyệt web.
4. Thử các chức năng trên giao diện:
   - Nhấn vào khu vực mã giảm giá để mở hoặc thu gọn danh sách voucher.
   - Chọn voucher để kiểm tra thông tin giảm giá.
   - Nhấn nút `+` hoặc `−` để điều chỉnh số lượng sản phẩm.
   - Quan sát tạm tính và tổng thanh toán thay đổi theo số lượng.
   - Thử thay đổi phương thức nhận hàng và chỉnh sửa thông tin nhận hàng.

## 6. Cải tiến đã thực hiện

### 6.1. Vấn đề ban đầu

Giao diện ban đầu có khu vực mã giảm giá hiển thị nhiều nội dung cùng lúc, bao gồm ô nhập mã, danh sách voucher và các nút áp dụng. Điều này làm tăng chiều dài trang và khiến khu vực thanh toán trở nên dài hơn cần thiết.

Ngoài ra, phần tóm tắt đơn hàng chưa có nút tăng hoặc giảm số lượng sản phẩm trực tiếp. Người dùng khó điều chỉnh số lượng ngay tại khu vực kiểm tra đơn hàng và cần có thêm thao tác nếu muốn thay đổi số lượng.

### 6.2. Giải pháp cải tiến

**Cải tiến 1: Thu gọn khu vực chọn voucher**

- Bổ sung nút mở/đóng danh sách mã giảm giá.
- Sử dụng thuộc tính `hidden` để ẩn danh sách voucher khi trang được tải.
- Khi người dùng nhấn vào nút, JavaScript thay đổi trạng thái hiển thị của danh sách.
- Giữ lại chức năng nhập mã, áp dụng voucher và hủy voucher.

Kết quả mong muốn là giảm diện tích giao diện sử dụng cho voucher khi người dùng chưa có nhu cầu, đồng thời vẫn giữ được các chức năng cần thiết.

**Cải tiến 2: Bổ sung nút tăng/giảm số lượng sản phẩm**

- Thêm nút `+` và `−` bên cạnh số lượng của từng sản phẩm.
- Sử dụng thuộc tính `data-unit-price` để lưu đơn giá và phần tử hiển thị số lượng để theo dõi số lượng hiện tại.
- Bổ sung JavaScript để tính lại thành tiền của từng sản phẩm khi số lượng thay đổi.
- Cập nhật tạm tính, phí vận chuyển, số tiền giảm giá và tổng thanh toán theo dữ liệu đơn hàng.

Công thức tính thành tiền của một sản phẩm:

**Thành tiền = Đơn giá × Số lượng**

Tổng thanh toán được xác định dựa trên tạm tính, phí vận chuyển và số tiền giảm giá theo các quy tắc được thiết lập trong phiên bản mô phỏng.

### 6.3. Kết quả cải tiến

Hai thay đổi giúp giao diện thanh toán gọn gàng hơn, tăng khả năng thao tác trực tiếp và giúp người dùng theo dõi sự thay đổi của tổng giá trị đơn hàng. Bên cạnh đó, việc phân chia nhiệm vụ giữa HTML, CSS và JavaScript giúp mã nguồn dễ đọc, dễ kiểm tra và thuận tiện cho việc phát triển thêm các chức năng.

## 7. Hỗ trợ từ AI

ChatGPT được sử dụng như công cụ hỗ trợ trong quá trình phân tích và cải tiến giao diện. Các nội dung được hỗ trợ gồm đề xuất phương án thu gọn voucher, bổ sung bộ điều chỉnh số lượng sản phẩm và hỗ trợ kiểm tra logic cập nhật tổng tiền.

Sau khi nhận đề xuất, em kiểm tra lại cấu trúc HTML, các bộ chọn CSS, sự kiện JavaScript và kết quả hiển thị trên trình duyệt. Các nội dung chưa kiểm chứng hoặc không phù hợp với yêu cầu bài tập cần được điều chỉnh trước khi sử dụng.
# BÀI TẬP CÁ NHÂN BUỔI 2 – PHÁT TRIỂN ỨNG DỤNG WEB/TMĐT

## 1. Giới thiệu bài tập

Bài tập Buổi 2 tiếp tục phát triển website từ Buổi 1, tập trung cải thiện giao diện trang thanh toán của website thương mại điện tử Watsons Việt Nam bằng HTML5 và CSS3.

Mục tiêu là thực hành cấu trúc HTML5, CSS Selector, Box Model, Flexbox, CSS Grid và các hiệu ứng tương tác cơ bản.

**Sinh viên thực hiện:** Lê Bảo Ngọc

**Mã sinh viên:** 31241027960

## 2. Website tham khảo và khu vực đã cải tiến

- **Website tham khảo:** https://www.watsons.vn/vi/
- **Khu vực thực hiện:** Trang thanh toán.
- **Các thành phần cải tiến:** Tiến trình thanh toán, thông tin nhận hàng, mã giảm giá, phương thức thanh toán và khu vực tóm tắt đơn hàng.

## 3. Các kỹ thuật HTML5/CSS3 đã thực hành

- HTML5: Sử dụng các phần tử ngữ nghĩa như header, main, section, aside, footer và danh sách ol, li.
- CSS Selector: Thực hành element selector, class selector và descendant selector.
- Box Model: Sử dụng margin, padding, border và border-radius.
- Flexbox: Căn chỉnh các thành phần trong Header bằng display: flex, justify-content, align-items và gap.
- CSS Grid: Bố trí danh sách sản phẩm bằng display: grid, grid-template-columns và gap.
- Pseudo-class: Sử dụng hover và focus-visible.
- Transition: Tạo hiệu ứng chuyển đổi mượt.
- Responsive: Kiểm tra và điều chỉnh giao diện ở nhiều kích thước màn hình.

## 4. Hướng dẫn chạy website

1. Tải hoặc clone repository về máy tính.
2. Mở thư mục dự án bằng Visual Studio Code.
3. Mở file index.html bằng trình duyệt Chrome hoặc Microsoft Edge.
4. Đảm bảo thư mục css và images nằm đúng vị trí để website tải được CSS và hình ảnh.

## 5. Những thay đổi đã thực hiện

- Cải thiện cấu trúc HTML5 cho tiến trình thanh toán.
- Bổ sung và điều chỉnh CSS cho khu vực sản phẩm.
- Thực hành căn chỉnh Header bằng Flexbox.
- Bố trí danh sách sản phẩm bằng CSS Grid.
- Bổ sung hiệu ứng
