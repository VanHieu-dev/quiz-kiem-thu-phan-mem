// Dữ liệu câu hỏi
const questions = [
  {
    question: 'Chi phí của việc sửa lỗi:',
    options: [
      'Không quan trọng',
      'Tăng khi chúng ta đưa sản phẩm vào sử dụng thực tế',
      'Giảm khi chúng ta không áp dụng nó vào trong thực tế',
      'Cao hơn trong các yêu cầu cao hơn so với thiết kế chức năng',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Nếu thời gian thử nghiệm có giới hạn, chúng ta nên:',
    options: [
      'Chỉ kiểm tra các khu vực có nguy cơ cao',
      'Chỉ kiểm tra các khu vực đơn giản',
      'Chỉ kiểm tra các khu vực có nguy cơ thấp',
      'Chỉ kiểm tra các khu vực phức tạp',
    ],
    correctAnswer: 0,
  },
  {
    question:
      'Kĩ thuật nào là kĩ thuật để biểu diễn các chức năng và luồng dữ liệu bằng các kí hiệu chỉ ra luồng dữ liệu, xử lý (các chức năng), kho dữ liệu và nguồn ngoài?',
    options: ['DFD', 'ERD', 'Lược đồ NS', 'Biến đổi trạng thái'],
    correctAnswer: 0,
  },
  {
    question:
      'Đâu là mô tả chính xác về dữ liệu kiểm thử để duyệt một chương trình?',
    options: [
      'Các trường hợp kiểm thử được chuẩn bị trước, và dữ liệu kiểm thử có thể đáp ứng yêu cầu được xác định trong trường hợp kiểm thử được chuẩn bị',
      'Chỉ có dữ liệu kiểm thử mà đã được xử lý đúng mới được chuẩn bị như các tiền trình kiểm thử',
      'Bởi vì dữ liệu được sử dụng để kiểm thử, cần chuẩn bị khoảng 20% khối lượng dữ liệu cần xử lý trong quá trình vận hành thực tế',
      'Không cần cung cấp dữ liệu kiểm thử bị loại bỏ vì lỗi trong giai đoạn đưa vào',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Hàm isPrime(int x) có bao nhiêu luồng dữ liệu bất thường?',
    options: [
      '1',
      '2 (n được khai báo nhưng không được dùng, i chưa khai báo nhưng đã dùng)',
      '3',
      '4',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Phát biểu nào dưới đây là đúng về kỹ thuật kiểm thử hộp đen và kiểm thử hộp trắng?',
    options: [
      'Phân hoạch tương đương, Bảng quyết định và Luồng điều khiển nằm trong kỹ thuật kiểm thử hộp trắng',
      'Phân hoạch tương đương, Phân tích giá trị biên, Luồng dữ liệu nằm trong kỹ thuật kiểm thử hộp đen',
      'Phân hoạch tương đương, bảng quyết định, kiểm thử ca sử dụng nằm trong kỹ thuật kiểm thử hộp đen',
      'Phân hoạch tương đương, chuyển trạng thái, kiểm thử ca sử dụng và bảng quyết định nằm trong kỹ thuật kiểm thử hộp trắng',
    ],
    correctAnswer: 2,
  },
  {
    question:
      'Sắp xếp theo mức độ tăng dần các kỹ thuật phát hiện lỗi về số lượng lỗi và chi phí?',
    options: [
      'Random testing, Control-flow-testing, Data-flow-testing',
      'Control-flow-testing, Data-flow-testing, Random testing',
      'Data-flow-testing, Control-flow-testing, Random testing',
      'Data-flow-testing, Random testing, Control-flow-testing',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Thành phần nào sau đây không được coi là một đơn vị?',
    options: ['Hàm', 'Lớp', 'Module', 'Phương thức'],
    correctAnswer: 3,
  },
  {
    question:
      'Kiểm thử giao diện lập trình ứng dụng - API testing là phương pháp nằm trong chiến lược kiểm thử nào?',
    options: [
      'Kiểm thử hộp đen',
      'Kiểm thử hộp trắng',
      'Kiểm thử hộp xám',
      'Kiểm thử hộp xám và hộp đen',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Nêu các loại kiểm thử trong integration test.',
    options: [
      'Kiểm thử cấu trúc',
      'Kiểm thử chức năng',
      'Kiểm thử hiệu năng, kiểm thử cấu trúc',
      'Kiểm thử cấu trúc, kiểm thử chức năng, kiểm thử hiệu năng, kiểm thử khả năng chịu tải.',
    ],
    correctAnswer: 3,
  },
  {
    question:
      'Trong số thì chương trình, một đường đi từ điểm nguồn đến điểm dịch đã diện cho điều gì?',
    options: [
      'Một lối trong chương trình',
      'Một luồng điều khiển có thể xảy ra',
      'Một chức năng chính của chương trình',
      'Một luồng dữ liệu',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Trong kiểm thử đường đi cơ bản (Basic Path Testing), một đường đi độc lập là gì?',
    options: [
      'Một đường đi bao gồm tất cả các giá trị biên',
      'Một đường đi duy nhất từ điểm bắt đầu đến điểm kết thúc mà không lập lại bất kỳ cạnh nào',
      'Một đường đi được thực hiện nhiều lần trong quá trình kiểm thử',
      'Một đường đi chứa ít nhất một cạnh hoặc đỉnh mới chưa được đi qua trong bất kỳ đường đi nào trước đó',
    ],
    correctAnswer: 3,
  },
  {
    question:
      'Một chương trình có độ phức tạp chu trình bằng 1 có nghĩa là gì?',
    options: [
      'Chương trình có một chu trình duy nhất',
      'Chương trình có cấu trúc tuyến tính mà không có bất kỳ đường đi phân nhánh nào',
      'Chương trình có một lối logic',
      'Chương trình có một điểm vào và một điểm ra duy nhất',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Công thức tính độ phức tạp chu trình (Cyclomatic Complexity) là gì?',
    options: [
      'V(G) = E - N + 2P',
      'V(G) = E - N - 2P',
      'V(G) = E - N - 2P',
      'V(G) = E - N + 2P',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Kiểm thử luồng dữ liệu giúp phát hiện loại lỗi nào sau đây?',
    options: [
      'Lỗi do sử dụng biến chưa được khởi tạo',
      'Lỗi do khai báo biến không cần thiết',
      'Lỗi do sử dụng biến ngoài phạm vi',
      'Cả A và C',
    ],
    correctAnswer: 3,
  },
  {
    question:
      'Tại sao kiểm thử luồng dữ liệu lại quan trọng đối với chất lượng phần mềm?',
    options: [
      'Nó giúp tối ưu hóa mã nguồn để giảm độ phức tạp',
      'Nó đảm bảo rằng tất cả các biến được xử lý một cách chính xác, từ đó giảm thiểu lỗi logic và thời gian chạy',
      'Nó giúp tăng tốc độ chạy của chương trình',
      'Nó đảm bảo rằng tất cả các chức năng của giao diện người dùng đều hoạt động đúng',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Để phát hiện lỗi sử dụng biến chưa được khởi tạo, kiểm thử luồng dữ liệu thường kiểm tra điều gì?',
    options: [
      'Các giá trị biên của biến',
      'Các đường đi từ điểm khai báo đến điểm sử dụng biến',
      'Các đường đi từ điểm gán giá trị đến điểm sử dụng biến',
      'Các điều kiện trong bảng quyết định',
    ],
    correctAnswer: 2,
  },
  {
    question:
      'Một biến chưa được khởi tạo mà đã được sử dụng có thể dẫn đến lỗi nào?',
    options: [
      'Lỗi biên dịch',
      'Lỗi logic',
      'Lỗi thời gian chạy',
      'Lỗi giao diện người dùng',
    ],
    correctAnswer: 2,
  },
  {
    question:
      'Một hệ thống tính thuế thu nhập cá nhân: Nhóm giá trị test nào dưới đây thuộc ba lớp tương đương khác nhau?',
    options: [
      '4000$; 5000$; 5500$',
      '32001$; 34000$; 36500$',
      '28000$; 28001$; 32001$',
      '4000$; 4200$; 5600$',
    ],
    correctAnswer: 3,
  },
  {
    question:
      'Nêu một tập các giá trị hợp lệ của các lớp tương đương cho vấn đề sau: thanh toán bằng thẻ tín dụng có thể được với Visa, Master, Amex:',
    options: [
      'Visa, Master, Amex',
      'Visa, Master, Amex, Diners, Keycards, và một vài lựa chọn khác',
      'Visa, Master, Amex, một vài thẻ khác, không có thẻ nào',
      'Không thẻ, một số thẻ, một trong các thẻ Visa, Master, Amex',
    ],
    correctAnswer: 3,
  },
  {
    question: 'Những câu nào sau đây miêu tả đặc điểm chi phí của lỗi?',
    options: [
      'Tốn ít chi phí nhất nếu tìm thấy trong các giai đoạn phát triển ban đầu và mất nhiều chi phí để sửa chữa trong giai đoạn thử nghiệm sau cùng.',
      'Dễ tìm thấy nhất trong quá trình thử nghiệm hệ thống nhưng mất nhiều chi phí để sửa chữa sau đó',
      'Tốn ít chi phí nhất nếu tìm thấy trong các giai đoạn phát triển ban đầu nhưng mất nhiều chi phí để sửa chữa sau đó',
      'Tốn nhiều chi phí nếu tìm thấy trong các giai đoạn phát triển ban đầu nhưng lại rẻ nhất để sửa chữa sau đó',
    ],
    correctAnswer: 0,
  },
  {
    question:
      'Các bước trong quá trình kiểm thử: I Phân tích và thiết kế, II Kiểm thử các hoạt động, III Đánh giá tiêu chí và báo cáo, IV Kế hoạch và kiểm soát, V Cài đặt và thực hiện. Trình tự thực hiện là thế nào?',
    options: [
      'I, II, III, IV, V',
      'IV, I, V, III, II',
      'IV, I, V, II, III',
      'I, IV, V, III, II',
    ],
    correctAnswer: 2,
  },
  {
    question: 'Độ ưu tiên (priority) của sai sót được thể hiện ở mấy cấp độ:',
    options: ['2', '3', '4', '5'],
    correctAnswer: 3,
  },
  {
    question:
      'Ghép các cặp giai đoạn của vòng đời phát triển và vòng đời kiểm thử phần mềm sau đây với nhau: i: Thiết kế mức cao; a: Kiểm thử đơn vị ii: Viết mã nguồn; b: Kiểm thử chấp nhận iii: Thiết kế mức thấp; c: Kiểm thử hệ thống iv. Các yêu cầu công việc; d: Kiểm thử tích hợp',
    options: [
      'i-d, ii-a, iii-c, iv-b',
      'i-c, ii-d, iii-a, iv-b',
      'i-b, ii-a, iii-d, iv-c',
      'i-c, ii-a, iii-d, iv-b',
    ],
    correctAnswer: 3,
  },
  {
    question:
      'Định nghĩa nào sau đây là đúng cho c-use toàn cục (Global c-use):',
    options: [
      'Một c-use của một biến x trong nút i được gọi là c-use toàn cục nếu x được định nghĩa ở một nút đứng trước nút i.',
      'Một c-use của một biến x trong nút i được gọi là c-use toàn cục nếu x được định nghĩa ở một nút đứng sau nút i',
      'Một c-use của một biến x trong nút i được gọi là c-use toàn cục nếu x được định nghĩa ở nút i',
      'Một c-use của một biến x trong nút i được gọi là c-use toàn cục nếu tại đó x chưa được định nghĩa',
    ],
    correctAnswer: 0,
  },
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
