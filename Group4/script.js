// Dữ liệu câu hỏi
const questions = [
  {
    "question": "Trong Junit, \"nếu giá trị mong muốn và giá trị tham chiếu đến cùng một đối tượng trong bộ nhớ thì xác nhận đúng, nếu không thì xác nhận lỗi\", đây là phương thức nào?",
    "options": [
      "assertTrue(Boolean condition)",
      "assertSame(Object expected, Object actual)",
      "assertEquals(int expected, int actual)",
      "assertEquals(Object expected, Object actual)"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Công cụ nào sau đây hay được dùng trong kiểm thử đơn vị?",
    "options": [
      "Selenium IDE",
      "RTH",
      "Jmeter",
      "JUnit"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Unit test trước khi kiểm thử cần?",
    "options": [
      "Chuẩn bị trước các ca kiểm thử hoặc kịch bản kiểm thử",
      "Thiết kế các lớp",
      "Phân tích yêu cầu",
      "Không cần gì"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Trong đồ thị chương trình (program graph)?",
    "options": [
      "Các đỉnh là các câu lệnh/đoạn lệnh",
      "Các đỉnh là câu lệnh rẽ nhánh",
      "Các cạnh là các câu lệnh",
      "Các cạnh là các đoạn lệnh"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Đồ thị chương trình là gì?",
    "options": [
      "Một ngôn ngữ lập trình đồ họa",
      "Một loại thuật toán để tối ưu hóa mã nguồn",
      "Một công cụ để kiểm tra lỗi cú pháp trong mã nguồn",
      "Một cách biểu diễn cấu trúc chương trình bằng cách sử dụng các đỉnh và cạnh"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Các đường đi được chọn là:",
    "options": [
      "Đường đi trong đồ thị luồng điều khiển mà có thể thực thi được",
      "Đường đi được chọn trong đồ thị luồng điều khiển thỏa mãn các tiêu chuẩn chọn đường đi",
      "Tất cả các đường đi có trong đồ thị luồng điều khiển",
      "Tất cả đều sai"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Chúng ta chia kiểm thử thành các giai đoạn tách biệt vì:",
    "options": [
      "Mỗi giai đoạn kiểm thử có một mục đích khác nhau",
      "Dễ dàng hơn để quản lý trong các giai đoạn kiểm thử",
      "Chúng ta có thể chạy thử nghiệm các test khác nhau trên các môi trường khác nhau",
      "Nhiều giai đoạn hơn thì sẽ kiểm thử chất lượng hơn"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Phân tích luồng dữ liệu nghiên cứu vấn đề gì:",
    "options": [
      "Khả năng bị hiệu ứng nút cố chai của chương trình",
      "Tỷ lệ thay đổi giá trị dữ liệu như thi hành chương trình",
      "Sự sử dụng dữ liệu trên những con đường xuyên suốt mã chương trình",
      "Bản chất phức tạp của mã chương trình"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Kỹ thuật kiểm thử nào dưới đây không thể mô phỏng được tình huống thật?",
    "options": [
      "Kiểm thử cấu trúc",
      "Cả A và B",
      "Không có đáp án nào đúng",
      "Kiểm thử chức năng"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Data flow anomaly xảy ra do đâu?",
    "options": [
      "Dữ liệu",
      "Môi trường",
      "Người quản lý",
      "Lỗi lập trình"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Equivalence class: Một trường textbox trong 1 from nhập liệu có khoảng giá trị chấp nhận trong khoảng 18 – 25. Hãy chỉ gia lớp giá trị không hợp lệ?",
    "options": [
      "24",
      "17",
      "19",
      "21"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Mục tiêu của review meeting là gì?",
    "options": [
      "Không có đáp án đúng",
      "Xác định vấn đề với thiết kế",
      "Giải quyết vấn đề với thiết kế",
      "Xác định vấn đề và giải quyết vấn đề với thiết kế"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Test case Escapes (TCE) là gì?",
    "options": [
      "Ca kiểm thử vô tác dụng",
      "Ca kiểm thử lớn quá mức cho phép",
      "Sự gia tăng đáng kể của số ca kiểm thử lọt",
      "Ca kiểm thử không được duyệt"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Cái nào không phải là một pha của Fundamental Test Process?",
    "options": [
      "Test Planning and Control",
      "Requirement Analysis",
      "Test implementation and Execution",
      "Evaluating Exit criteria and reporting"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Kiểm thử luồng dữ liệu là một kỹ thuật kiểm thử cấu trúc điều khiển, và tiêu chuẩn được sử dụng để thiết kế các ca kiểm thử là:",
    "options": [
      "Thực hiện các điều kiện logic trong một module chương trình",
      "Lựa chọn các đường kiểm thử dựa trên vị trí và sử dụng của các biến",
      "Tập trung vào kiểm thử tính hợp lệ của cấu trúc vòng lặp",
      "Dựa trên cơ sở kiểm thử đường"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Một node i có một định nghĩa toàn cục của biến x nếu node i có một định nghĩa của x và bắt buộc phải có một đường đi định nghĩa rõ ràng (def-clear path) từ node i tới:",
    "options": [
      "Cả 2 câu trên đều đúng",
      "Node chứa một global c-use của biến x và cạnh chứa một p-use của biến x",
      "Node chứa một global c-use của biến x hoặc cạnh chứa một p-use của biến x",
      "Cả 2 câu trên đều sai"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Cái gì là quan trọng trong việc quyết định kĩ thuật test được sử dụng:",
    "options": [
      "Thích hợp cho kiểm thử ứng dụng",
      "Mục đích test",
      "Đặc biệt",
      "Có công cụ hỗ trợ"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Đứng theo góc nhìn của người làm phần mềm thì phần mềm được gọi là chất lượng là:",
    "options": [
      "Code rõ ràng, dễ hiểu",
      "Tất cả các phương án trên",
      "Tính Module hóa cao",
      "Đầy đủ các loại tài liệu nghiệp vụ cần thiết"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Loại kiểm thử nào sau đây, được gọi là kiểm thử phi chức năng (non-fuction testing)?",
    "options": [
      "Chi Load Test",
      "Chi Stress Test",
      "Chi Security Test",
      "Cả Load Test, Stress Test và Security Test"
    ],
    "correctAnswer": 3
  }
];

// Biến global
let currentQuestionIndex = 0;
let userAnswers = [];
let isQuizCompleted = false;

// Khởi tạo quiz
function initQuiz() {
  currentQuestionIndex = 0;
  userAnswers = [];
  isQuizCompleted = false;

  document.getElementById('totalQuestions').textContent = questions.length;
  document.getElementById('totalQuestionsResult').textContent =
    questions.length;

  showQuestion();
  updateProgressBar();
}

// Hiển thị câu hỏi
function showQuestion() {
  const question = questions[currentQuestionIndex];

  // Cập nhật số câu hỏi
  document.getElementById('currentQuestion').textContent =
    currentQuestionIndex + 1;

  // Hiển thị câu hỏi
  document.getElementById('questionText').textContent = question.question;

  // Tạo các option
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';

  question.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.textContent = option;
    optionDiv.onclick = () => selectOption(index, optionDiv);
    optionDiv.style.pointerEvents = 'auto';

    optionsContainer.appendChild(optionDiv);
  });

  // Nếu đã trả lời câu này rồi, hiển thị lại kết quả
  if (userAnswers[currentQuestionIndex] !== undefined) {
    const userAnswer = userAnswers[currentQuestionIndex];
    const correctAnswer = question.correctAnswer;
    const allOptions = document.querySelectorAll('.option');

    // Hiển thị đáp án đúng
    allOptions[correctAnswer].classList.add('correct');

    // Nếu đã chọn sai, hiển thị đáp án sai
    if (userAnswer !== correctAnswer) {
      allOptions[userAnswer].classList.add('incorrect');
    }

    // Vô hiệu hóa click
    allOptions.forEach((opt) => {
      opt.style.pointerEvents = 'none';
    });
  }

  // Cập nhật trạng thái nút
  updateButtons();
}

// Chọn đáp án
function selectOption(selectedIndex, optionElement) {
  if (isQuizCompleted) return;

  // Xóa selection cũ
  document.querySelectorAll('.option').forEach((opt) => {
    opt.classList.remove('selected', 'correct', 'incorrect');
    opt.style.pointerEvents = 'auto';
  });

  // Lưu đáp án
  userAnswers[currentQuestionIndex] = selectedIndex;

  // Hiển thị kết quả ngay lập tức
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  const allOptions = document.querySelectorAll('.option');

  // Đánh dấu đáp án đúng
  allOptions[correctAnswer].classList.add('correct');

  // Nếu chọn sai, đánh dấu đáp án sai
  if (selectedIndex !== correctAnswer) {
    optionElement.classList.add('incorrect');
  }

  // Vô hiệu hóa tất cả các option sau khi chọn
  allOptions.forEach((opt) => {
    opt.style.pointerEvents = 'none';
  });

  // Delay một chút rồi mới cho phép chuyển câu tiếp
  setTimeout(() => {
    updateButtons();
  }, 1000);
}

// Cập nhật trạng thái các nút
function updateButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');

  // Nút "Câu trước"
  prevBtn.disabled = currentQuestionIndex === 0;

  // Nút "Câu tiếp" và "Nộp bài"
  const hasAnswer = userAnswers[currentQuestionIndex] !== undefined;

  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = hasAnswer ? 'inline-block' : 'none';
  } else {
    nextBtn.style.display = 'inline-block';
    nextBtn.disabled = !hasAnswer;
    submitBtn.style.display = 'none';
  }
}

// Câu trước
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
    updateProgressBar();
  }
}

// Câu tiếp
function nextQuestion() {
  if (
    currentQuestionIndex < questions.length - 1 &&
    userAnswers[currentQuestionIndex] !== undefined
  ) {
    currentQuestionIndex++;
    showQuestion();
    updateProgressBar();
  }
}

// Cập nhật thanh tiến trình
function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
}

// Nộp bài và hiển thị kết quả
function submitQuiz() {
  isQuizCompleted = true;

  // Tính điểm
  let correctCount = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === questions[index].correctAnswer) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / questions.length) * 100);

  // Hiển thị kết quả tổng
  document.getElementById('scorePercentage').textContent = percentage + '%';
  document.getElementById('correctAnswers').textContent = correctCount;

  // Hiển thị chi tiết từng câu
  showDetailedResults();

  // Ẩn quiz, hiện kết quả
  document.getElementById('quizContainer').style.display = 'none';
  document.getElementById('resultContainer').style.display = 'block';
}

// Hiển thị kết quả chi tiết
function showDetailedResults() {
  const resultDetails = document.getElementById('resultDetails');
  resultDetails.innerHTML = '';

  questions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const correctAnswer = question.correctAnswer;
    const isCorrect = userAnswer === correctAnswer;

    const resultItem = document.createElement('div');
    resultItem.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;

    resultItem.innerHTML = `
      <h4>Câu ${index + 1}: ${question.question}</h4>
      <p><strong>Đáp án đúng:</strong> <span class="correct-answer">${
        question.options[correctAnswer]
      }</span></p>
      ${
        !isCorrect
          ? `<p><strong>Bạn đã chọn:</strong> <span class="user-answer">${question.options[userAnswer]}</span></p>`
          : ''
      }
      <p><strong>Kết quả:</strong> ${isCorrect ? '✅ Đúng' : '❌ Sai'}</p>
    `;

    resultDetails.appendChild(resultItem);
  });
}

// Làm lại quiz
function restartQuiz() {
  document.getElementById('quizContainer').style.display = 'block';
  document.getElementById('resultContainer').style.display = 'none';
  initQuiz();
}

// Khởi tạo khi trang web được load
document.addEventListener('DOMContentLoaded', function () {
  initQuiz();
});
