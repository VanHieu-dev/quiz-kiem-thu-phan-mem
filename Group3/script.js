// Dữ liệu câu hỏi
const questions = [
  {
    "question": "Ai chịu trách nhiệm trực tiếp kiểm thử đơn vị?",
    "options": [
      "Người lập trình",
      "Người kiểm thử",
      "Người phân tích yêu cầu",
      "Người thiết kế hệ thống"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Vai trò của việc thiết kế ca kiểm thử (test case)?",
    "options": [
      "Tạo ra các ca kiểm thử chỉ nhằm mục đích tìm ra lỗi",
      "Tạo ra các ca kiểm thử có chi phí rẻ nhất, đồng thời tốn ít thời gian và công sức nhất",
      "Tạo ra các ca kiểm thử tốt nhất có khả năng phát hiện ra lỗi, sai sót của phần mềm một cách nhiều nhất",
      "Cả A và B"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Khái niệm \"cyclomatic complexity\" (độ phức tạp chu trình) liên quan đến đồ thị chương trình được sử dụng để làm gì?",
    "options": [
      "Đo độ phức tạp của chương trình dựa trên số lượng hàm",
      "Đo độ phức tạp của mã nguồn dựa trên số lượng biến",
      "Đo độ phức tạp của luồng điều khiển dựa trên số lượng đường đi độc lập",
      "Đo hiệu suất của chương trình"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Độ phức tạp chu trình (Cyclomatic Complexity) là gì trong kiểm thử đường đi cơ bản?",
    "options": [
      "Số lượng cạnh trong đồ thị luồng điều khiển",
      "Số lượng nút trong đồ thị luồng điều khiển",
      "Một chỉ số đo độ phức tạp của chương trình, tính bằng cách sử dụng số lượng cạnh và nút (đỉnh) trong đồ thị luồng điều khiển",
      "Số lượng đường đi có thể có trong một chương trình"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Tại sao kiểm thử luồng dữ liệu lại quan trọng đối với chất lượng phần mềm?",
    "options": [
      "Nó giúp tối ưu hóa mã nguồn để giảm độ phức tạp",
      "Nó đảm bảo rằng tất cả các biến được xử lý một cách chính xác, từ đó giảm thiểu lỗi logic và thời gian chạy",
      "Nó đảm bảo rằng tất cả các chức năng của giao diện người dùng đều hoạt động đúng",
      "Nó giúp tăng tốc độ chạy của chương trình"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Đỉnh hợp nhất được gán nhãn như thế nào trong đồ thị luồng điều khiển?",
    "options": [
      "Gán nhãn bởi một tên xác định",
      "Không gán nhãn",
      "Gán nhãn bởi một ký tự",
      "Gán nhãn bởi một số nguyên"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Để kiểm tra một chức năng, lập trình viên phải viết một …….., nó gọi chức năng và khai thác nó để kiểm tra?",
    "options": [
      "Stub",
      "Không đáp án nào",
      "Driver",
      "Proxy"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Thế nào là bao phủ câu lệnh (statement coverage)?",
    "options": [
      "Tất cả đều đúng",
      "Thực hiện mọi câu lệnh trong chương trình ít nhất một lần",
      "Thực hiện ít nhất một câu lệnh trong chương trình",
      "Thực hiện tất cả các đường đi trong chương trình"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Thế nào là bao phủ rẽ nhánh (branch coverage)?",
    "options": [
      "Thực hiện ít nhất một đường đi trong chương trình",
      "Thực hiện ít nhất một câu lệnh trong chương trình",
      "Thực hiện mọi câu lệnh trong chương trình ít nhất một lần",
      "Thực hiện tất cả các lệnh rẽ nhánh trong chương trình"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Thử nghiệm đủ đã được thực hiện khi:",
    "options": [
      "Hết thời gian",
      "Người dùng sẽ không tìm thấy bất kỳ lỗi nghiêm trọng",
      "Mức độ cần thiết của sự tin cậy đã đạt được",
      "Không còn lỗi được tìm thấy"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Điều nào sau đây là sai?",
    "options": [
      "Một hệ thống là nhất thiết phải đáng tin cậy hơn sau khi gỡ lỗi cho việc loại bỏ các lỗi",
      "Trong hệ thống khác nhau, một hai lỗi khác nhau có thể tìm ra ở các môi trường khác nhau",
      "Một lỗi cần không ảnh hưởng đến độ tin cậy của hệ thống",
      "Không bị phát hiện sai sót có thể dẫn đến lỗi và cuối cùng đến hành vi không chính xác"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Câu nào là đúng về kiểm thử hộp trắng và đen?",
    "options": [
      "Phân hoạch tương đương, Chuyển trạng thái, kiểm thử ca sử dụng là kiểm thử hộp đen",
      "Phân hoạch tương đương, Chuyển trạng thái, kiểm thử ca sử dụng và Kiểm thử dựa trên bảng quyết định là kiểm thử hộp trắng",
      "Phân hoạch tương đương, Kiểm thử dựa trên bảng quyết định và kiểm thử luồng kiểm soát là kiểm thử hộp trắng",
      "Phân hoạch tương đương, Phân tích giá trị bao, kiểm thử luồng dữ liệu là kiểm thử hộp đen"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Chọn quan hệ sai giữa các tiêu chuẩn kiểm thử luồng dữ liệu?",
    "options": [
      "All-defs chứa All-c-uses",
      "All-p-uses chứa All-branches",
      "All-branches chứa All-statements",
      "All-paths chứa All-du-paths"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Câu nào dưới đây không đúng khi nói về kiểm thử chức năng?",
    "options": [
      "Người kiểm thử phần mềm không cần có kiến thức sâu rộng về đặc tả và ngôn ngữ lập trình",
      "Kiểm thử ngẫu nhiên có mục đích là để lựa chọn một số đầu vào kiểm tra để phát hiện sự thất bại đầu tiên",
      "Mô hình kiểm thử hộp đen chỉ tập trung vào các yêu cầu chức năng của phần mềm mà không quan tâm tới cách thức hoạt động của các mã lệnh bên trong",
      "Tất cả các giá trị đầu vào có thể có đều được kiểm tra"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Các đặc điểm kỹ thuật mô tả các bước cần thiết để vận hành hệ thống và thực hiện các trường hợp thử nghiệm để thực hiện thiết kế thử nghiệm có liên quan?",
    "options": [
      "Thủ tục kiểm tra kỹ thuật",
      "Không có",
      "Trường hợp thử nghiệm kỹ thuật",
      "Kiểm tra thiết kế kỹ thuật"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Trong kiểm thử hệ thống, kỹ thuật thiết kế kiểm thử nào sau đây mô tả đúng nhất một thủ tục để lấy được các ca kiểm thử dựa trên các đặc tả kỹ thuật của một thành phần?",
    "options": [
      "Kỹ thuật hộp trắng",
      "Kỹ thuật dựa vào kinh nghiệm",
      "Kỹ thuật hộp đen",
      "Kỹ thuật hộp xám"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Các yếu tố nào cần được xem xét trong quá trình thiết kế hệ thống kiểm thử?",
    "options": [
      "Productivity, Validation",
      "Maintenance, User skills",
      "Tất cả các phương án trên",
      "Coverage metrics, Effectiveness"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Điều nào sau đây là đúng về inferred requirement?",
    "options": [
      "Inferred requirement là một trong những hệ thống được dự kiến để hỗ trợ, nhưng không được quy định rõ ràng",
      "Phương án A và B là đúng",
      "Inferred requirement là hệ thống những yêu cầu thu thập từ người sử dụng",
      "Inferred requirement cần được kiểm tra giống như các yêu cầu được quy định rõ ràng"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Chọn câu sai trong các câu sau?",
    "options": [
      "Cạnh của đồ thị luồng dữ liệu là các p-use",
      "Có 3 loại luồng dữ liệu không bình thường",
      "Có thể phát hiện luồng dữ liệu không khả thi bằng các khái niệm xác định và sử dụng biến",
      "Kiểm thử luồng điều khiển có khả năng phát hiện lỗi mạnh hơn kiểm thử luồng dữ liệu"
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

  if (questions.length > 0) {
    showQuestion();
    updateProgressBar();
  } else {
    // Hiển thị thông báo khi chưa có câu hỏi
    document.getElementById('questionText').textContent =
      'Chưa có câu hỏi nào. Vui lòng thêm dữ liệu câu hỏi vào file script.js';
    document.getElementById('optionsContainer').innerHTML =
      '<p style="text-align: center; color: #666; padding: 20px;">Dữ liệu câu hỏi sẽ được cập nhật sau...</p>';
  }
}

// Hiển thị câu hỏi
function showQuestion() {
  if (questions.length === 0) return;

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
  if (questions.length === 0) return;

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
  if (questions.length === 0) return;

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
