// Dữ liệu câu hỏi
const questions = [
  {
    "question": "Kiểm thử hộp đen là gì?",
    "options": [
      "Là kiểm thử cấu trúc",
      "Người kiểm thử phải viết mã nguồn để kiểm thử",
      "Tập trung vào chức năng của hệ thống",
      "Là kiểm thử dựa trên mã nguồn"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Trong kiểm thử đơn vị, công cụ \"static code (path) analyzer\" được sử dụng để làm gì?",
    "options": [
      "Phân tích lưu lượng truy cập và xác định các vấn đề khu vực",
      "Đọc mã nguồn và tự động sinh ra các mô tả",
      "Xác định đường đi để kiểm thử dựa trên cấu trúc của mã",
      "Cả ba đáp án"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Chỉ ra khái niệm tương ứng với việc kiểm thử ở mức độ thấp nhất (các phương thức, hàm, lớp trong mã nguồn)?",
    "options": [
      "Kiểm thử hệ thống",
      "Kiểm thử đơn vị",
      "Kiểm thử chấp nhận",
      "Kiểm thử tích hợp"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Ba chiến lược kiểm thử thông dụng nhất là?",
    "options": [
      "Kiểm thử đơn vị, kiểm thử tích hợp, kiểm thử hộp trắng",
      "Kiểm thử đơn vị, kiểm thử hộp xám, kiểm thử hộp đen",
      "Kiểm thử đơn vị, kiểm thử tích hợp, kiểm thử cường độ",
      "Kiểm thử hộp đen, kiểm thử hộp trắng, kiểm thử hộp xám"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Có mấy mức (cấp độ) kiểm thử phần mềm?",
    "options": [
      "4",
      "3",
      "5",
      "2"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Các trạng thái chương trình cơ bản của kiểm thử luồng điều khiển là?",
    "options": [
      "Undefined and referenced",
      "Defined và undefined",
      "Defined and defined again",
      "Assignment and condition"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Đường đi trong kiểm thử luồng điều khiển là?",
    "options": [
      "Là một chuỗi tất cả các cạnh trong biểu đồ luồng điều khiển",
      "Là một chuỗi các cạnh từ trạng thái bắt đầu đến trạng thái kết thúc",
      "Là một chuỗi các trạng thái từ trạng thái bắt đầu đến trạng thái kết thúc",
      "Là một chuỗi tất cả các trạng thái có trong luồng điều khiển"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Đâu không phải là toán tử trong phần điều kiện của biểu đồ luồng điều khiển?",
    "options": [
      "Toán tử gán",
      "Toán tử quan hệ",
      "Toán tử tính toán",
      "Toán tử logic"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Loại kiểm thử nào dưới đây là kiểm thử chức năng?",
    "options": [
      "Kiểm thử từng cặp (pairwise testing)",
      "Kiểm thử tính dễ sử dụng (Usability testing)",
      "Kiểm thử tính bảo mật (Security testing)",
      "Kiểm thử độ ổn định (Stability testing)"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Kiểm thử luồng điều khiển là một dạng của?",
    "options": [
      "Kiểm thử tài liệu",
      "Kiểm thử hiệu năng",
      "Kiểm thử tải",
      "Kiểm thử cấu trúc"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Ai sẽ là người thực hiện kiểm thử luồng điều khiển?",
    "options": [
      "Lập trình viên",
      "Người thiết kế hệ thống",
      "Cả A, B, C đều sai",
      "Kiểm thử viên"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Câu nào sau đây là sai?",
    "options": [
      "Vector đầu vào có thể chứa biến toàn cục và biến cục bộ",
      "Một path predicate có thể chứa biến cục bộ",
      "Một vài đường đi trong chương trình có thể không khả thi",
      "Một vector đầu vào là tập tất cả các dữ liệu đã có giá trị đầu vào trước khi được đọc vào chương trình"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Có mấy chuẩn chọn đường đi thường dùng?",
    "options": [
      "6",
      "5",
      "2",
      "4"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Cái nào không thuộc kiểm thử hộp trắng?",
    "options": [
      "Kiểm thử trạng thái chuyển tiếp",
      "Kiểm thử luồng điều khiển",
      "Kiểm thử luồng dữ liệu",
      "Kiểm thử đường đi"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Câu nào đúng trong kỹ thuật kiểm thử hộp trắng?",
    "options": [
      "Kiểm thử ca sử dụng (Use case testing)",
      "Phân tích giá trị bao (boundary value analysis)",
      "Kiểm thử dựa trên phân hoạch tương đương (equivalence class partitioning)",
      "Kiểm thử luồng dữ liệu (data flow testing)"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Mục đích của kỹ thuật thiết kế kiểm thử?",
    "options": [
      "Xác định các điều kiện kiểm thử và xác định các ca kiểm thử",
      "Không xác định các điều kiện kiểm thử, chỉ xác định các ca kiểm thử",
      "Chỉ xác định các điều kiện kiểm thử, không xác định các ca kiểm thử",
      "Xác định các điều kiện kiểm thử hoặc xác định các ca kiểm thử"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Điều kiện kiểm thử được bắt nguồn từ?",
    "options": [
      "Tài liệu đặc tả",
      "Dữ liệu kiểm thử",
      "Các ca kiểm thử",
      "Thiết kế kiểm thử"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Loại nào dưới đây không phải là kiểm thử chức năng?",
    "options": [
      "Kiểm thử ngẫu nhiên (Random Testing)",
      "Kiểm thử bộ phận (Unit Testing)",
      "Usability testing",
      "Cả B và C"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Test Case Design Yield (TCDY) là gì?",
    "options": [
      "Là số liệu thường được sử dụng trong công nghiệp để đo Test case design effectiveness",
      "Là một nguyên tắc thiết kế một hệ thống Test Case",
      "Là một hằng số được sử dụng để thiết kế Test Case trong công nghiệp",
      "Là một mô hình thiết kế Test case"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Điều quan trọng nhất trong thiết kế kiểm thử sớm là?",
    "options": [
      "Làm cho sự chuẩn bị kiểm thử dễ dàng hơn",
      "Sẽ tìm thấy tất cả các lỗi",
      "Các phương tiện kiểm thử thì không yêu cầu",
      "Có thể ngăn chặn nhân lỗi"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Trong data flow graph, các lệnh điều kiện được biểu diễn như thế nào?",
    "options": [
      "Trong hình thoi",
      "Trên các cạnh",
      "Không được biểu diễn",
      "Trong hình chữ nhật"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Kiểm thử luồng dữ liệu là?",
    "options": [
      "Kiểm thử hộp đen",
      "Kiểm thử tĩnh",
      "Có thể thực hiện cả kiểm thử tĩnh và kiểm thử động",
      "Kiểm thử động"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Đâu là một mô hình đánh giá đặc tính chất lượng (Quality Characteristics) phần mềm?",
    "options": [
      "ISO 9126",
      "ISO 9125",
      "ISO 9128",
      "ISO 9127"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Mệnh đề nào sau đây không đúng khi nói về lý do phải đo lường chất lượng phần mềm?",
    "options": [
      "Nhu cầu cải tiến có thể được điều tra sau khi thực hiện phép đo",
      "Đo lường cho phép chúng ta thiết lập các đường cơ sở cho chất lượng",
      "Đo lường là chìa khóa để cải tiến quy trình",
      "Đo lường chất lượng giúp giảm chi phí làm phần mềm"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Biểu đồ Gantt dùng để làm gì?",
    "options": [
      "Biểu thị quá trình thực hiện test theo thời gian",
      "Biểu thị sơ đồ test",
      "Biểu thị lịch trình dự án",
      "Biểu thị sự dao động của chất lượng phần mềm theo thời gian"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Lợi ích của kiểm thử tự động?",
    "options": [
      "Khả năng sử dụng các trường hợp kiểm thử, giảm chi phí kiểm thử",
      "Bao phủ của kiểm thử hồi quy, Nhất quán trong kiểm thử",
      "Kiểm tra năng suất của kĩ sư, tăng hiệu quả kiểm tra, Giảm thời gian kiểm thử",
      "Cả 3 ý trên"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Thử nghiệm Beta được thực hiện bởi ai trước khi phát hành chính thức sản phẩm?",
    "options": [
      "Các khách hàng tiềm năng",
      "Các chuyên gia",
      "Các tester",
      "Thành viên nhóm dự án phần mềm"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Mục đích của kiểm thử beta?",
    "options": [
      "Tìm ra sai sót và loại bỏ chúng",
      "Tìm ra nguyên nhân gốc rễ của sai sót để loại bỏ những sai sót mang tính hệ thống",
      "Nhận những phản hồi của người dùng về tính khả dụng trước khi được tung ra thị trường",
      "Nhận những phản hồi của người dùng về tính khả dụng sau khi được tung ra thị trường"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Đội duy trì (sustaining team), bao gồm cả developers và testers, có các nhiệm vụ chính không bao gồm nhiệm vụ nào sau đây?",
    "options": [
      "Hướng dẫn khách hàng sử dụng chương trình",
      "Tương tác với khách hàng để hiểu rõ môi trường thực",
      "Phát triển test cases mới khi nguồn gốc của một lỗi được tìm ra",
      "Tham gia vào quá trình duyệt lại code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Đặc điểm nào không phải thuộc kiểm thử chấp nhận?",
    "options": [
      "Thực hiện bởi người sử dụng",
      "Tích hợp hệ thống với tài liệu người sử dụng",
      "Sử dụng các công cụ test tự động",
      "Kiểm thử theo các kịch bản kiểm thử chấp nhận"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Kiểm thử chấp nhận nghĩa là gì?",
    "options": [
      "Người sử dụng kiểm thử ứng dụng trong môi trường phát triển",
      "Thực hiện sau khi thay đổi để đảm bảo không có thay đổi nào xảy ra",
      "Kiểm thử trên một module riêng lẻ hoặc một bộ mã nguồn",
      "Kiểm thử để chắc chắn rằng hệ thống tuân theo đúng yêu cầu của người dùng"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Kiểm thử chấp nhận của người sử dụng?",
    "options": [
      "Không phải cái nào",
      "Tương tự alpha testing",
      "Kết hợp cả alpha và beta testing",
      "Tương tự beta testing"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Thế nào là kiểm thử chấp nhận của người sử dụng (UAT)?",
    "options": [
      "Thực hiện bởi người sử dụng",
      "Thực hiện dưới sự phát triển tổ chức của nhà cung cấp, nhưng vẫn quan tâm tới kết quả của người sử dụng",
      "Thực hiện dưới sự phát triển tổ chức của nhà cung cấp, không quan tâm tới kết quả của người sử dụng",
      "Thực hiện bởi người sử dụng, đảm bảo hệ thống thỏa mãn các kịch bản theo yêu cầu của người dùng"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Đặc điểm nào sau đây không phải của kiểm thử chấp nhận người dùng?",
    "options": [
      "Sử dụng các công cụ thực thi kiểm thử một cách tự động",
      "Quá trình kiểm thử được tiến hành bởi những người dùng",
      "Hệ thống được tích hợp với tài liệu người dùng",
      "Quá trình kiểm thử dựa trên các tiêu chuẩn kiểm thử chấp nhận"
    ],
    "correctAnswer": 0
  },
  {
    "question": "ACC là viết tắt của?",
    "options": [
      "acceptable criteria capability",
      "acceptance criteria change",
      "acceptance criteria count",
      "acceptance criteria control"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Vai trò của nhà phát triển và khách hàng trong kiểm thử chấp nhận?",
    "options": [
      "Nhà phát triển hướng dẫn khách hàng sử dụng hệ thống",
      "Cả 3 đáp án trên",
      "Nhà phát triển và khách hàng giải quyết các vấn đề phát sinh dựa trên sự khác biệt về tiêu chí chấp nhận",
      "Nhà phát triển và khách hàng phối hợp sửa chữa bất kỳ vấn đề nào được phát hiện trong quá trình thử nghiệm"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Phân tích luồng dữ liệu nghiên cứu về?",
    "options": [
      "Độ phức tạp bản chất của code",
      "Sử dụng dữ liệu trên các đường đi thông qua code",
      "Tỉ lệ thay đổi giá trị dữ liệu khi chương trình thực thi",
      "Các \"nút cổ chai\" trong giao tiếp của một chương trình"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Loại nào sau đây là kiểm thử phi chức năng?",
    "options": [
      "Bao phủ lệnh",
      "Đồ thị nhân - quả",
      "Kiểm thử luồng dữ liệu",
      "Kiểm thử tính khả dụng"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Trong các tiêu chí kiểm thử luồng dữ liệu dưới đây, tiêu chí nào chứa hai tiêu chí còn lại?",
    "options": [
      "All-p-uses",
      "Cả 3 ý trên đều sai",
      "All-uses",
      "All-c-uses"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Một phân vùng tương đương (còn gọi là một lớp tương đương) là gì?",
    "options": [
      "Một loạt các đầu vào hoặc đầu ra của các giá trị và mỗi giá trị trong phạm vi sẽ trở thành trường hợp thử nghiệm",
      "Một loạt các đầu vào hoặc đầu ra của các giá trị mà chỉ có một giá trị trong phạm vi sẽ trở thành trường hợp thử nghiệm",
      "Một đầu vào hoặc đầu ra phạm vi của các giá trị như vậy mà tất cả các giá trị thứ mười trong phạm vi sẽ trở thành một trường hợp thử nghiệm",
      "Một tập hợp các trường hợp thử nghiệm cho các lớp thử nghiệm các đối tượng"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Loại kiểm thử nào dưới đây là kiểm thử chức năng?",
    "options": [
      "Kiểm thử tính dễ sử dụng (Usability testing)",
      "Kiểm thử hiệu năng (Performance testing)",
      "Phân tích giá trị biên (Boundary value analysis)",
      "Kiểm thử tính bảo mật (Security testing)"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Kiểm thử giá trị biên là:",
    "options": [
      "Tổ hợp các tình huống đầu vào",
      "Được sử dụng trong kiểm thử hộp trắng",
      "Cũng là kiểm thử phân vùng tương đương",
      "Kiểm thử các điều kiện biên trên, dưới và tại biên của lớp các đầu ra, đầu vào tương đương."
    ],
    "correctAnswer": 3
  },
  {
    "question": "Kiểm thử hệ thống nên nghiên cứu về:",
    "options": [
      "Yêu cầu phi chức năng",
      "Yêu cầu phi chức năng và yêu cầu chức năng.",
      "Yêu cầu chức năng",
      "Yêu cầu phi chức năng hoặc yêu cầu chức năng"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Trong kiểm thử hệ thống:",
    "options": [
      "Chỉ có yêu cầu chức năng được kiểm thử, còn yêu cầu phi chức năng là xem lại",
      "Chỉ có các chức năng được ghi rõ trong tài liệu đặc tả mới được kiểm thử",
      "Cả yêu cầu chức năng và phi chức năng đều được kiểm thử.",
      "Chỉ có yêu cầu phi chức năng được kiểm thử, còn yêu cầu chức năng là xem lại"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Các kĩ thuật nào dưới đây sử dụng kiểm thử hộp đen?",
    "options": [
      "System testing, acceptance testing, equivalence partitioning",
      "System integration testing, system testing, decision table testing",
      "State transition testing, code testing, agile testing",
      "Equivalence partitioning, state transition testing, decision table testing."
    ],
    "correctAnswer": 3
  },
  {
    "question": "Kiểm thử phi chức năng hệ thống là?",
    "options": [
      "Kiểm thử tất cả mọi nơi trong hệ thống mà không có chức năng chính xác",
      "Kiểm thử chất lượng các thuộc tính của hệ thống bao gồm việc thực hiện và có dùng được hay không.",
      "Kiểm thử chức năng cho hệ thống là chỉ kiểm thử theo yêu cầu của phần mềm cho chức năng đó",
      "Kiểm thử các chức năng không nên có"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Lỗi giao diện nào thường được cân nhắc nhất sau đây?",
    "options": [
      "Cho hai component trao đổi dữ liệu, một component sử dụng đơn vị mét, một component sử dụng đơn vị inch.",
      "Hệ thống phức tạp do cấu trúc đầu vào thiết bị đầu cuối quá phức tạp",
      "Tất cả các lỗi trên",
      "Các thông điệp lỗi đầu vào cho người sử dụng gây hiểu lầm và không hữu ích cho việc hiểu nguyên nhân gây ra lỗi đầu vào"
    ],
    "correctAnswer": 0
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
