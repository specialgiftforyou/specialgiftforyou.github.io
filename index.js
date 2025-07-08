const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const birthdayText = document.getElementById("birthdayText");
const birthdayMusic = document.getElementById("birthdayMusic");

const texts = [
  "Chào deskmate cũ nhe (dù Hà cũng chẳng nhớ là đã ngồi cạnh t, nma t nhớ là được). Từ ấn tượng đầu đến giờ, t vẫn thấy Hà là một người rất giỏi, cả về mặt học thuật lẫn nghệ thuật, nma hơi khó tính với bản thân nhe (sửa ngay dùm 😤). Có lẽ t cũng đã đôi lần được nhìn cuộc sống qua lăng kính giống Hà, ở những lần bị thu hút bởi những tia nắng của buổi xế chiều hay việc luôn đặt kì vọng cao cho mọi thứ để rồi tự áp lực, tự tạo ra thất vọng cho bản thân. Nhưng khi ngồi nhìn lại hành trình vừa qua, t mới thấy chuyến đi đó đẹp biết bao và thực sự có những sự thành công mà t k nhận ra, t đã gặp được nhiều người bạn tuyệt vời, bỏ thời gian khuyên nhủ t mà t lỡ bị tình yêu che mờ mắt nên k nghe và cả những kiến thức, kĩ năng mềm học được từ việc quan sát mọi người (t thật ra cũng để ý tiểu tiết lắm đấy nhé). T mong rằng Hà cũng sẽ cảm thấy hài lòng phần nào vì hành trình vừa qua, nhẹ nhàng với bản thân hơn. T mong rằng một ngày Hà sẽ được khóc vì hạnh phúc khi mà cuộc đời trao phần thưởng cho Hà vì sự cố gắng suốt thời gian qua vào một thời điểm bất ngờ nhất và là lúc Hà cần nó nhất (chắc là chuẩn bị 28đ THPTQG nhỉ). Ngoài ra thì t cũng thấy giọng của Hà thật sự rất hay nhé, chắc là giọng hay nhất t từng được nghe (nên là chắc chục năm sau t vẫn k quên được lần đấy đâu 😌). Anyway, chúc Hà sau này luôn luôn giữ được sự mơ mộng của mình - người đã cho t tìm lại được cái vibe t thích của văn học xưa, cười nhiều hơn, lạc quan hơn (thế mới sống lâu được chứ) và tìm được anh người yêu y hệt như expectation của Hà nhé.",
  "Tặng cho Hà chút may mắn của t vì t nghĩ Hà xứng đáng được nhiều may mắn hơn🍀"
];

giftBox.addEventListener('click', () => {
    giftBox.style.display = 'none';
    setTimeout(() => {
        message.style.display = 'block';
    
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            document.body.appendChild(confetti);
        }
    }, 1000);
    birthdayMusic.play();
});

function typeWriter(texts, element, textIndex = 0, i = 0) {
    if (textIndex < texts.length) {
        const text = texts[textIndex];
        if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(texts, element, textIndex, i + 1), 40); // Tốc độ gõ
        } else {
        setTimeout(() => {
            element.innerHTML += '<br>'; // Xóa nội dung cũ
            typeWriter(texts, element, textIndex + 1); // Chuyển sang đoạn văn tiếp theo
        }, 2000); // Đợi 2 giây rồi chuyển quan đoạn khác
        }
    } else {
        // Thêm gif
        setTimeout(() => {
        const imgGift = document.createElement('div');
        imgGift.classList.add('img-gift');
        message.appendChild(imgGift);
        }, 1500);
    }
}

giftBox.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("show");

  setTimeout(() => {
    typeWriter(texts, birthdayText);
  }, 3500);
});
