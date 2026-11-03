# AI Usage Log

## 1. Công cụ AI

- **Tên công cụ:** ChatGPT
- **Nhà phát triển:** OpenAI
- **Mục đích:** Hỗ trợ phân tích giao diện, đề xuất cải tiến HTML/CSS, giải thích mã nguồn và hỗ trợ kiểm tra logic tương tác trong trang thanh toán thương mại điện tử.

## 2. Mục đích sử dụng

ChatGPT được sử dụng trong quá trình phát triển giao diện thanh toán mô phỏng của Watsons Việt Nam nhằm:

- Phân tích những điểm có thể cải thiện trong giao diện thanh toán.
- Đề xuất cách thu gọn khu vực chọn mã giảm giá để giảm chiều dài trang.
- Hỗ trợ bổ sung nút tăng và giảm số lượng sản phẩm.
- Giải thích vai trò của các thành phần HTML, CSS và JavaScript được bổ sung hoặc điều chỉnh.
- Hỗ trợ xây dựng logic tính toán lại thành tiền, tạm tính, phí vận chuyển, giảm giá và tổng thanh toán.
- Hỗ trợ viết tài liệu mô tả các cải tiến và ghi lại quá trình sử dụng AI.

## 3. Prompt đã sử dụng

Các prompt chính được sử dụng trong quá trình thực hiện:

**Prompt 1: Phân tích và cải tiến giao diện**

"Trang thanh toán của tôi đang quá dài. Hãy đề xuất cách thu gọn khu vực chọn voucher thành một hàng có thể nhấn để mở rộng danh sách, đồng thời bổ sung nút tăng/giảm số lượng sản phẩm."

**Prompt 2: Chỉnh sửa mã nguồn HTML**

"Làm lại thành một đoạn HTML hoàn chỉnh. Đánh dấu những phần đã chỉnh sửa so với bản gốc."

**Prompt 3: Giải thích mã nguồn**

"Giải thích được vai trò của các thành phần HTML/CSS đã sửa."

## 4. Kết quả AI đề xuất

ChatGPT đã hỗ trợ các nội dung sau:

- Đề xuất giao diện voucher có thể mở rộng và thu gọn bằng nút bấm.
- Đề xuất sử dụng thuộc tính `hidden` để ẩn danh sách voucher khi trang được tải.
- Bổ sung cấu trúc HTML cho bộ điều chỉnh số lượng sản phẩm với hai nút `+` và `−`.
- Đề xuất các thuộc tính `data-product` và `data-unit-price` để nhận diện sản phẩm và lấy đơn giá phục vụ tính toán.
- Hỗ trợ xây dựng JavaScript để cập nhật số lượng, thành tiền từng sản phẩm và tổng giá trị đơn hàng.
- Giải thích vai trò của các bộ chọn CSS như `.voucher-toggle`, `.quantity-control`, `.quantity-btn` và `.quantity-value`.
- Hỗ trợ soạn thảo tài liệu mô tả chức năng, công nghệ, cách chạy dự án và các cải tiến đã thực hiện.

Các đề xuất của AI là cơ sở tham khảo cho quá trình phát triển. Kết quả cuối cùng phụ thuộc vào việc tích hợp mã nguồn và kiểm tra thực tế trên trình duyệt.

## 5. Kiểm tra và điều chỉnh

Sau khi nhận đề xuất từ AI, người thực hiện cần kiểm tra các nội dung sau:

- Đối chiếu HTML đã sửa với cấu trúc trang thanh toán ban đầu để bảo đảm không làm mất các khu vực chức năng.
- Kiểm tra nút mở/đóng voucher và xác nhận danh sách được ẩn khi tải trang.
- Kiểm tra việc áp dụng và hủy voucher, bao gồm thông báo trạng thái và số tiền giảm giá.
- Kiểm tra nút `+` và `−` của từng sản phẩm, bảo đảm số lượng và thành tiền được cập nhật phù hợp.
- Đối chiếu tạm tính và tổng thanh toán với công thức tính giá.
- Kiểm tra cách bố trí giao diện trên máy tính và điện thoại.
- Kiểm tra đường dẫn đến file CSS và các lỗi JavaScript trong trình duyệt.

## 6. Phần tôi hiểu và có thể giải thích

### 6.1. HTML

- `button`: Tạo nút thao tác để mở voucher hoặc tăng/giảm số lượng.
- `id`: Định danh duy nhất cho phần tử HTML để JavaScript có thể truy cập.
- `class`: Nhóm các phần tử có cùng mục đích định dạng bằng CSS.
- `hidden`: Ẩn phần tử HTML cho đến khi thuộc tính này được gỡ bỏ.
- `data-unit-price`: Lưu đơn giá sản phẩm dưới dạng thuộc tính dữ liệu tùy chỉnh.
- `data-action`: Xác định thao tác mà nút thực hiện, chẳng hạn tăng hoặc giảm số lượng.

### 6.2. CSS

- `.voucher-toggle`: Định dạng nút mở/đóng danh sách voucher.
- `.quantity-control`: Bố trí các nút và số lượng sản phẩm trên cùng một hàng.
- `.quantity-btn`: Định dạng nút tăng và giảm số lượng.
- `.quantity-value`: Định dạng phần hiển thị số lượng hiện tại.
- `@media`: Điều chỉnh giao diện theo kích thước màn hình để hỗ trợ thiết bị di động.

### 6.3. JavaScript

JavaScript xử lý các thao tác tương tác và cập nhật dữ liệu hiển thị:

- Bắt sự kiện nhấn nút voucher để mở hoặc thu gọn danh sách.
- Bắt sự kiện nhấn nút `+` hoặc `−` để thay đổi số lượng sản phẩm.
- Tính thành tiền dựa trên đơn giá và số lượng.
- Cập nhật tạm tính, phí vận chuyển, giảm giá và tổng thanh toán theo logic của phiên bản mô phỏng.

Công thức tính thành tiền:

**Thành tiền = Đơn giá × Số lượng**

Công thức tổng quát:

**Tổng thanh toán = Tạm tính + Phí vận chuyển − Giảm giá**

### 6.4. Những giới hạn tôi nhận thức được

- Giao diện hiện tại là phiên bản mô phỏng phục vụ học tập, chưa kết nối cơ sở dữ liệu hoặc hệ thống thanh toán thực tế.
- Dữ liệu sản phẩm, mã giảm giá và quy tắc vận chuyển được thiết lập trong mã nguồn.
- HTML và CSS không tự xử lý việc tính toán; những chức năng tương tác và cập nhật giá trị cần JavaScript.
- Mã nguồn do AI đề xuất cần được kiểm tra, điều chỉnh và chạy thử trước khi sử dụng.

Qua quá trình thực hiện, em hiểu được cách phối hợp HTML, CSS và JavaScript để cải tiến giao diện thương mại điện tử, đồng thời nhận thức được trách nhiệm kiểm tra và giải thích mã nguồn do AI hỗ trợ tạo ra.
# AI_USAGE – BÁO CÁO SỬ DỤNG AI BTVN Buổi 2

## 1. Thông tin công cụ AI

- Công cụ AI: ChatGPT.
- Mục đích: Hỗ trợ phân tích mã nguồn, thực hành HTML5, CSS3 và cải thiện giao diện trang thanh toán Watsons Việt Nam.
- Phương pháp sử dụng: Cung cấp mã nguồn hiện tại một lần, sau đó sử dụng các prompt để yêu cầu AI phân tích, hướng dẫn và đề xuất chỉnh sửa từng phần.

## 2. Mã nguồn cung cấp cho AI

Đây là cấu trúc dự án và các đoạn mã HTML, CSS liên quan được sử dụng làm dữ liệu đầu vào chung cho các prompt bên dưới.

### 2.1. Cấu trúc thư mục

```text
BTVNBuoi1/
│
├── index.html
├── README.md
├── AI_USAGE.md
│
├── css/
│   └── style.css
│
└── images/
    ├── sua-rua-mat.jpg
    ├── dau-goi.jpg
    └── kem-duong-da.jpg
```

### 2.2. Mã HTML hiện tại

**Phần liên kết CSS:**

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thanh toán | Watsons Việt Nam</title>
    <link rel="stylesheet" href="css/style.css">
</head>
```

**Phần Header:**

```html
<header class="site-header">
    <div class="container header-inner">
        <a class="brand" href="#">watsons<span>.</span></a>
        <strong class="secure-title">🔒 Thanh toán an toán</strong>
        <a class="help-link" href="#support">Trợ giúp</a>
    </div>
</header>
```

**Phần tiến trình thanh toán:**

```html
<ol class="container progress" aria-label="Tiến trình thanh toán">
    <li class="progress-step done">
        <span>1</span>
        <b>Giỏ hàng</b>
    </li>

    <li class="progress-step active" aria-current="step">
        <span>2</span>
        <b>Thanh toán</b>
    </li>

    <li class="progress-step">
        <span>3</span>
        <b>Hoàn tất</b>
    </li>
</ol>
```

**Phần danh sách sản phẩm trong tóm tắt đơn hàng:**

```html
<div class="product-grid">

    <!-- Sản phẩm 1 -->
    <div class="summary-product" data-product
         data-unit-price="150000">

        <img src="images/sua-rua-mat.jpg"
             alt="Sữa rửa mặt"
             class="product-image">

        <div class="summary-product-info">
            <strong>Sữa rửa mặt</strong>
            <small>Chăm sóc da</small>

            <div class="quantity-control">
                <button type="button" class="quantity-btn"
                        data-action="decrease">−</button>
                <span class="quantity-value" id="qty1">1</span>
                <button type="button" class="quantity-btn"
                        data-action="increase">+</button>
            </div>
        </div>

        <strong class="product-cost">150.000đ</strong>
    </div>

    <!-- Sản phẩm 2 -->
    <div class="summary-product" data-product
         data-unit-price="127000">

        <img src="images/dau-goi.jpg"
             alt="Dầu gội chăm sóc tóc"
             class="product-image">

        <div class="summary-product-info">
            <strong>Dầu gội chăm sóc tóc</strong>
            <small>Chăm sóc tóc</small>

            <div class="quantity-control">
                <button type="button" class="quantity-btn"
                        data-action="decrease">−</button>
                <span class="quantity-value" id="qty2">1</span>
                <button type="button" class="quantity-btn"
                        data-action="increase">+</button>
            </div>
        </div>

        <strong class="product-cost">127.000đ</strong>
    </div>

    <!-- Sản phẩm 3 -->
    <div class="summary-product" data-product
         data-unit-price="100000">

        <img src="images/kem-duong-da.jpg"
             alt="Kem dưỡng da"
             class="product-image">

        <div class="summary-product-info">
            <strong>Kem dưỡng da</strong>
            <small>Dưỡng da</small>

            <div class="quantity-control">
                <button type="button" class="quantity-btn"
                        data-action="decrease">−</button>
                <span class="quantity-value" id="qty3">1</span>
                <button type="button" class="quantity-btn"
                        data-action="increase">+</button>
            </div>
        </div>

        <strong class="product-cost">100.000đ</strong>
    </div>

</div>
```

**Phần nút xác nhận đặt hàng:**

```html
<button type="button" class="place-order" id="placeOrder">
    Xác nhận đặt hàng
</button>
```

### 2.3. Mã CSS hiện tại

**Thiết lập chung:**

```css
:root {
    --red: #e31837;
    --red-dark: #c8102e;
    --text: #333333;
    --muted: #777777;
    --border: #e5e5e5;
    --page: #f6f6f6;
    --green: #168447;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

**CSS Header – Flexbox:**

```css
.header-inner {
    min-height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
}
```

**CSS tiến trình thanh toán:**

```css
.progress {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    padding-block: 24px;
    padding-left: 0;
    list-style: none;
}
```

**CSS sản phẩm – Box Model:**

```css
.summary-product {
    display: flex;
    align-items: center;
    gap: 9px;
    margin: 12px 0;
    padding: 12px;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    background-color: #ffffff;
}
```

**CSS Grid:**

```css
.product-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
}

.product-grid .summary-product {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
}

.product-grid .product-image {
    width: 100%;
    height: 100px;
    object-fit: contain;
}
```

**CSS nút xác nhận đặt hàng – Hover và Focus:**

```css
.place-order {
    width: 100%;
    min-height: 47px;
    margin-top: 18px;
    border: 0;
    border-radius: 5px;
    background: var(--red);
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    transition: background-color 0.2s ease,
                transform 0.2s ease;
}

.place-order:hover {
    background: var(--red-dark);
    transform: translateY(-2px);
}

.place-order:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 3px;
}
```

---

## 3. Các prompt đã sử dụng

Các prompt từ Prompt 1 đến Prompt 9 bên dưới đều sử dụng mã nguồn HTML và CSS đã cung cấp tại Mục 2. Không cần dán lại mã nguồn ở từng prompt.

### 3.1. Prompt 1 – Phân tích mã nguồn hiện tại

Tôi đang làm bài tập cá nhân môn Phát triển ứng dụng thương mại điện tử.

Trong Buổi 1, tôi đã xây dựng giao diện trang thanh toán tham khảo website Watsons Việt Nam bằng HTML/CSS.

Hãy sử dụng mã nguồn tại Mục 2 để giúp tôi:

1. Xác định những thành phần HTML đã có.
2. Chỉ ra các thành phần HTML còn thiếu hoặc chưa hợp lý.
3. Nêu ba vấn đề về cấu trúc HTML hoặc trình bày.
4. Đề xuất cách cải thiện bằng kiến thức HTML5 và CSS3 cơ bản.
5. Giải thích thứ tự nên thực hiện các cải tiến.

Chưa viết lại toàn bộ mã nguồn.

Không tạo website mới.

Hãy giúp tôi hiểu mã hiện tại trước khi sửa.

### 3.2. Prompt 2 – Kiểm tra cấu trúc HTML5

Dựa trên mã HTML tại Mục 2, hãy hướng dẫn tôi:

1. Xác định các phần tử HTML đang được sử dụng.
2. Kiểm tra cách sử dụng header, nav, main, section, article và footer nếu có.
3. Kiểm tra thứ bậc tiêu đề h1, h2, h3.
4. Kiểm tra cách sử dụng img, alt và a.
5. Phát hiện các thẻ chưa đóng hoặc lồng nhau chưa hợp lý.
6. Đề xuất cách sửa phù hợp với nội dung hiện tại.

Hãy phân biệt lỗi cần sửa và đề xuất cải thiện.

Không thêm phần tử HTML chỉ để làm mã nguồn dài hơn.

Không viết lại toàn bộ website.

Giải thích lý do của từng thay đổi.

### 3.3. Prompt 3 – Tạo CSS cơ bản

Dựa trên cấu trúc thư mục và mã nguồn tại Mục 2, hãy hướng dẫn tôi:

1. Tạo và liên kết file css/style.css.
2. Định dạng font chữ, màu chữ và màu nền.
3. Thiết lập margin và các quy tắc cơ bản cho body.
4. Đảm bảo hình ảnh không vượt quá chiều rộng phần tử chứa.
5. Kiểm tra đường dẫn CSS có chính xác không.

Không viết lại toàn bộ mã nguồn.

Giữ nguyên các thành phần và nội dung hiện có.

### 3.4. Prompt 4 – Thực hành Selector và Box Model

Tôi muốn thực hành CSS Selector và Box Model trên một thẻ sản phẩm trong website của mình.

Hãy sử dụng phần HTML sản phẩm tại Mục 2 và hướng dẫn tôi:

1. Sử dụng element selector và class selector.
2. Sử dụng descendant selector khi phù hợp.
3. Điều chỉnh margin, padding và border.
4. Sử dụng border-radius để bo góc.
5. Định dạng tên và giá sản phẩm.
6. Định dạng liên kết thành nút thao tác đơn giản.

Hãy giải thích sự khác nhau giữa margin và padding.

Giải thích tác dụng của box-sizing: border-box.

Chỉ đưa ra phần CSS cần thiết.

Không thay đổi nội dung hoặc tạo lại toàn bộ HTML.

### 3.5. Prompt 5 – Thực hành Flexbox

Tôi đang học CSS3 và muốn thực hành Flexbox trên khu vực Header của website thương mại điện tử.

Hãy sử dụng phần HTML và CSS Header tại Mục 2 để hướng dẫn tôi:

1. Xác định phần tử cha cần sử dụng display: flex.
2. Căn chỉnh các phần tử bằng justify-content.
3. Căn chỉnh theo trục còn lại bằng align-items.
4. Tạo khoảng cách bằng gap.
5. So sánh kết quả khi thay đổi các giá trị của justify-content.

Hãy đưa ra một đoạn CSS ngắn phù hợp với HTML.

Giải thích từng thuộc tính và kết quả mong đợi.

Không sử dụng framework CSS.

Không viết lại toàn bộ giao diện.

### 3.6. Prompt 6 – Thực hành CSS Grid

Tôi đã có danh sách ba sản phẩm bằng HTML trong khu vực tóm tắt đơn hàng của trang thanh toán Watsons.

Hãy sử dụng phần HTML và CSS sản phẩm tại Mục 2 để hướng dẫn tôi:

1. Bố trí danh sách sản phẩm thành hai cột.
2. Điều chỉnh khoảng cách giữa các sản phẩm.
3. Giữ hình ảnh hiển thị đúng tỷ lệ.
4. Thay đổi số cột và quan sát kết quả.
5. Giải thích grid-template-columns, repeat và gap.
6. Giải thích tác dụng của object-fit: contain và object-fit: cover.

Chỉ viết CSS cần thiết cho danh sách hiện có.

Không sử dụng Bootstrap hoặc Tailwind CSS.

Không viết lại toàn bộ HTML.

Giải thích cách kiểm tra kết quả trên trình duyệt.

### 3.7. Prompt 7 – Bổ sung hiệu ứng CSS

Tôi muốn bổ sung hiệu ứng hover và focus cho nút xác nhận đặt hàng trong trang thanh toán Watsons.

Hãy sử dụng HTML và CSS của nút place-order tại Mục 2 để hướng dẫn tôi:

1. Tạo hiệu ứng hover nhẹ.
2. Sử dụng transition để tạo chuyển đổi mượt.
3. Bổ sung focus-visible để hỗ trợ điều hướng bằng bàn phím.
4. Đảm bảo màu chữ và màu nền dễ nhìn.
5. Không làm thay đổi bố cục quá nhiều.

Hãy chỉ đưa ra phần CSS cần thêm hoặc sửa.

Giải thích từng thuộc tính và cách kiểm tra.

### 3.8. Prompt 8 – Nhờ AI hỗ trợ kiểm tra lỗi

Tôi đã hoàn thành một phần giao diện website TMĐT bằng HTML5 và CSS3.

Hãy sử dụng mã nguồn tại Mục 2 và hỗ trợ tôi kiểm tra giao diện.

Tôi nhận thấy vấn đề sau:

[Mô tả lỗi hoặc kết quả chưa đúng sau khi kiểm tra giao diện]

Hãy giúp tôi:

1. Xác định nguyên nhân có thể gây ra lỗi.
2. Chỉ ra thuộc tính hoặc phần tử cần kiểm tra.
3. Đề xuất cách sửa ít thay đổi nhất.
4. Giải thích vì sao cách sửa có thể giải quyết vấn đề.
5. Đề xuất cách kiểm tra sau khi sửa.

Không viết lại toàn bộ mã nguồn.

Phân biệt nguyên nhân đã xác định và giả thuyết cần kiểm tra.

### 3.9. Prompt 9 – Kiểm tra README

Tôi đang hoàn thiện README.md cho bài tập cá nhân Buổi 2 của môn Phát triển ứng dụng TMĐT.

Bài tập tiếp tục phát triển website từ Buổi 1.

Dựa trên thông tin dự án và mã nguồn tại Mục 2, hãy đề xuất cấu trúc README ngắn gọn gồm:

1. Giới thiệu bài tập.
2. Website tham khảo và khu vực đã cải tiến.
3. Những kỹ thuật HTML5/CSS3 đã thực hành.
4. Hướng dẫn chạy website.
5. Những thay đổi tôi đã thực hiện.
6. Công cụ AI đã sử dụng và cách tôi kiểm tra kết quả.
7. Đường dẫn repository và website nếu đã triển khai.

Không tự bịa thông tin về dự án.

Sử dụng chỗ trống cho các thông tin tôi chưa cung cấp.

---

## 4. Cách kiểm tra và điều chỉnh kết quả AI

Trong quá trình sử dụng AI, em thực hiện các bước sau:

1. Đối chiếu mã nguồn AI đề xuất với cấu trúc HTML và CSS hiện có.
2. Chỉ lựa chọn những đoạn mã phù hợp với trang thanh toán Watsons.
3. Không thay đổi những nội dung hoặc chức năng không thuộc phạm vi bài tập.
4. Lưu mã nguồn và mở trang web bằng Chrome hoặc Microsoft Edge.
5. Sử dụng Developer Tools để kiểm tra giao diện.
6. Thử nghiệm các thuộc tính CSS và quan sát sự thay đổi.
7. Tự điều chỉnh mã nguồn khi kết quả chưa phù hợp.

## 5. Đánh giá việc sử dụng AI

ChatGPT hỗ trợ em hiểu và thực hành các kiến thức HTML5, CSS3, CSS Selector, Box Model, Flexbox, CSS Grid và các hiệu ứng tương tác.

Trong quá trình thực hiện, em không áp dụng toàn bộ mã nguồn AI đề xuất một cách máy móc mà chủ động kiểm tra, thử nghiệm và lựa chọn những thay đổi phù hợp với giao diện trang thanh toán Watsons.

Qua đó, em hiểu rõ hơn vai trò của AI như một công cụ hỗ trợ học tập, đồng thời nâng cao khả năng đọc, kiểm tra và tự điều chỉnh mã nguồn.
