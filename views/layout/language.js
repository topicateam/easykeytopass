var language = {
    "en":{
        "Home":"Home",
        "About":"About",
        "Usage":"Usage",
        "Document":"Document",
        "AddNewBlock":"Add New Block",
        "GeneratePassword":"GENERATE PASSWORD",
        "holder-BlockName":"Block Name",
        "keyword":"KEYWORD",
        "holder-answer":"a familiar keyword",
        "AddNewKeyword": "Add new KEYWORD",
        "RemoveLastKeyword":"Remove Last KEYWORD",
        "GenPassword":"Generate Password",
        "NoOfChar":"Number of characters:",
        "InvalidNoOfCharWarning":"Invalid Number of characters. Number of characters must be between 6 and 32",
        "YourPassword":"Your Password:",
        "holder-DisplayPassword":"Your Password displayed here",
        "Hint":"Hint",
        "holder-hint":"The hint for your keyword",
        "AddNewHint":"Add New Hint",
        "SubmitNewBlock":"Submit Block",
        "waiting":"Waiting",
        "SubmitNewBlockSuccess":"Submit New Block Successfull!",
        "language":"English",
        "BlockName":"BLOCK NAME",
        "blockname":"Block name:",
        "footer-description-1" : "High secured password from easy to remember keywords",
        "copyleft-1": "Developed by :",
        "copyleft-2": "Design by: ",
        "Powered-By": "Powered by ",
        "html-content": 
        'There are a lot of websites and applications, for example, email, favourite forums or social networks having password authentication. <br />' + '                Most of the cases, the passwords are the same or nearly the same among the websites with a unique login account.<br />' + '                There is a security risk if the above situation is occured, only one leaked password is needed to <i>hack</i> all the accounts on these website. <br />' + '            <br />' + '                Thus, <a href="../">easykeytopass</a> is used to organize and memorize all your passwords with a block of <b>HINT(S)</b> and <b>KEYWORD(S)</b>. <br />' + '' + '                In short, a constant password is generated after input the correct <b>BLOCK NAME</b> and <b>KEYWORDS</b> for each HINTs.<br />' + '                <br />' + '                <br />' + '                About us: <br />' + '                We have faced the issue that <b>"one password for all"</b>. <br />' + '                If the password is disclosed, there are tons of thing need to be change. <br />' + '                <br />' + '                With keyword-based password, the only thing we need to remember are the <b>BLOCK NAME</b> and the answers for listed hint(s).<br />',

        'PasswordGenerator': 'GETTING STARTED',
        'SimpleHead': 'GET PASSWORD QUICKLY',

        'html-getting-started-1': '<b>Easykeytopass</b>' + 'is borned to generate a secure password from your very familiar keywords.' + 
        '<br/>' + 
        'With some complex algorithms, this tool could generate a very long and difficult to guest passwords to login any authentication system.' + 
        '<br/>' +
        'Let start with some basic usages' +
        '<br/> <ul>' + 
        '<li> Fill a string into "KEYWORD" fields.<br/>( You could enter any thing familiar with you such as your fullname, your pet nickname, your sisters\' name or your birthbay. As least one keyword is needed.)</li>' +
        '<li>Click on this &nbsp; <span class="w3-btn w3-black w3-hover-white w3-hover-text-black w3-text-white">Generate Password</span>&nbsp; and wait for a few seconds</li>' +
        '                            <li>The password appears in the below field.<br/> Click on this &nbsp;<span class=" material-icons w3-btn w3-black">content_copy</span> &nbsp;to copy the password to clipboard and use it for anything you want.</li>' +   
        '</ul>',

        'html-getting-started-2': '<span class="w3-large">&#x2A;</span> &nbsp; They KEYWORDS are case-sensitive. Any special character is allowed to use. <br/>' + 
        '<span class="w3-large">&#x2A;</span> &nbsp; You could encrypt the new password for several times with some different BLOCKNAME.<br/>' +
        '<span class="w3-large">&#x2A;</span> &nbsp; You could add more KEYWORDs by click on this &nbsp;<span class="w3-btn w3-black w3-hover-white w3-hover-text-black w3-text-white">Thêm từ khoá</span>&nbsp;. You should remember the KEYWORDS and the ORDER of them to get the password next time.<br/>' + 
        '<span class="w3-large">&#x2A;</span> &nbsp; Click on this &nbsp;<span class="w3-btn w3-black w3-hover-white w3-hover-text-black w3-text-white">Remove last KEYWORD</span>&nbsp; to remove the last keywords of this block. <br/>',

        'HintsHead': 'Generate Password By Using Hints',

        'html-getting-started-3': 'By default, <b>Easykeytopass</b> uses defaultblock to generate the secure the password. <br/>' + 
        'This is quite frustrated if you are no longer remember the KEYWORDs or the ORDER of them.<br/>' + 'Each block includes a set of HINTs go memorize all the KEYWORDs. The HINTs relates to clues leading to the KEYWORDS. You could answer all the HINTs, anyways, please remember the answers. <br/>' +
        'You could type a Block Name <input placeholder="Tên Khối" class="w3-black"/> and select a Block Name in the drop-down lust. The drop-down will be filter by any new input character <input placeholder="Block Name" class="w3-black"/>' + 
        'The HINTs of the Block Name will appear. Fill all the fields by using the HINTs <span class="w3-btn w3-black w3-hover-white w3-hover-text-black w3-text-white">Generate Password </span> as the above guidelines.',

        'html-getting-started-4': '<span class="w3-large">&#x2A;</span> &nbsp;' + 
        'The HINTs order is always the same as origin. The KEYWORDs must be entered in a correct order to get a constant password for every time you using <b>Easykeytopass</b>.<br/>' + 
        '<span class="w3-large">&#x2A;</span> &nbsp;' + 
        'You cannot add new KEYWORDs for a existed Block. However, you could create your own Block &nbsp;<br/>' + 
        '<span class="w3-large">&#x2A;</span> &nbsp; Cũng giống như từ khoá. Câu trả lời cho mỗi gợi ý cũng phân biệt chữ hoa và chữ thường.<br/>' + 
        '<span class="w3-large">&#x2A;</span> &nbsp; With the sames KEYWORDs and their ORDER, however, if you use 2 different Block Name, the generated password will be very different. Thus, you have to remember the Block Name as your KEYWORD also.<br/>',

        'NewSetOfHints': 'Create A New Block Of Hints',

        'html-getting-started-5': 'If you find it is difficult to remember all the KEYWORDs, you could create a set of HINTs called Block.' + 
        '<ul>' +
            '<li>Select <div  class="w3-btn w3-hover-white w3-hover-text-black" langkey="AddNewBlock" style="margin:2px">Add New Block</div> &nbsp; You will see new form appearing in order to add your own Block.</li>' + 
            '<li>Select <div  class="w3-btn w3-hover-white w3-hover-text-black" style="margin:2px">Add New Hint</div> &nbsp; to add a HINT to your Block.</li>' + 
            '<li>Select <div  class="w3-btn w3-hover-white w3-hover-text-black w3-border" style="margin:2px">-</div>&nbsp; at the right-hand-side of the fields to remove this HINT.</li>' + 
            '<li>SELECT <div  class="w3-btn w3-hover-white w3-hover-text-black w3-border" style="margin:2px">Submit Block</div>&nbsp; to save your block into our system for long term usage.</li>' + 
        '</ul>',

        'html-getting-started-6': '<span class="w3-large">&#x2A;</span> &nbsp; The Block Name is unique and case-sensitive, thus, you cannot add two Block Name with a same name.<br/>' + 
        '<span class="w3-large">&#x2A;</span> &nbsp; Due to finance issue. Our database is limited so it will remove blocks which are unused for a long time. &nbsp;<br/><br/>',

        'faq' : 'FREQUENTLY ASKED QUESTIONS',

        'faq-1' : '1. What is Easykeytopass purpose?',
        'faq-1-ans': 'Easykeytopass help the users memorize all the password with keyword-based-password. Users could avoid to using a simple and single password for a lot of applications and website. It also protects users\'s password from bruteforce attach by using very long password.', 

        'faq-2' : '2. Is there any change to have more than one user with the same generated password?',
        'faq-2-ans': 'Password could be duplicated from users to users. If and only if they have the same Block Name, Key Words and the same Key Word Order, from Top to Bottom. However, no one knows they are using the same password with others, there is no user information storaged in Easykeytopass.',

        'faq-3' : '3. If someone see my Keywords, may they could know my password?',
        'faq-3-ans': 'If you leaked your used Block Name, Key Words and Key Words Order, your password is under security RISK. You are likely to be hack if the hacker knows which applications or websites to use the leaked password. In addition, you could add any secret string into Easykeytopass generated password, and you have to make sure no one know your secret string. If you add some "salt" to the password, it is extremly hard to guest your password. For example: 593C9b4A9390551d53E5cAcF28eBd638 + only_god_and_you_know_about_this_string.',

        'faq-4' : '4. What I have to do if my Block is deleted',
        'faq-4-ans': 'You could use the - defaultblock, add or remove keyword in order to match the quantity of KEYWORD in the previous Block. Then, change Block name into your previous Block Name. Finally, fill all the Key Words into KEYWORD fields with the correct order as the old Block. You could generate any password from other Block by using defaultblock if you could remember 3 thing: Block Name, Key Words and order of Key Words',

        'faq-5' : '5. What happen if I forget my Block Name?',
        'faq-5-ans': 'You could try every Block of Easykeytopass, if and only if you could remember Key Words and Key Words Order. Another way is that you could use the Forget Password feature of the applications you want to login, then change it to your new password generated by Easykeytopass. This time, you have to remember your Block Name, Key Words and Key Words Order.',

        'faq-6' : '6. What happen if I forget my answer?',
        'faq-6-ans': 'Easykeytopass does not store any user information. Our slogan is: Safe password is the password that no one knows about it - even the creators. Safe password is very difficult to be hack by bruteforce. The last but not least, it is not covered by another password. Easykeytopass always follow this. Thus, you could read the 5-th answer to find the solution for this case.',

        'faq-7' : '7. Does Easykeytopass store my information?',
        'faq-7-ans': 'As 6-th answer statement, Easykeytopass does not store any user information. The only thing we known is the created Block and the included hints. As you see, Easykeytopass does not require login or user authentication to use it.',
        "Guide":"Getting Started",
        'img-getting-started-1': 'views/images/getting_started_1_en.png',
        'img-getting-started-2': 'views/images/getting_started_2_en.png',
        'img-getting-started-3': 'views/images/getting_started_3_en.png'

        //End of english
    },
    "vi":{
        "Home":"Trang chủ",
        "About":"Giới thiệu",
        "Usage":"Hướng dẫn",
        "Document":"Tài liệu",
        "AddNewBlock":"Thêm Khối Mới",
        "GeneratePassword":"TẠO MẬT KHẨU",
        "holder-BlockName":"Tên Khối",
        "keyword":"Từ khóa",
        "holder-answer":"Từ khóa quen thuộc",
        "AddNewKeyword": "Thêm từ khóa",
        "RemoveLastKeyword":"Xóa từ khóa",
        "GenPassword":"Tạo mật khẩu",
        "NoOfChar":"Chiều dài chuỗi mật khẩu:",
        "InvalidNoOfCharWarning":"Chiều dài chuỗi mật khẩu là một số từ 6 đến 32",
        "YourPassword":"Mật Khẩu của bạn:",
        "holder-DisplayPassword":"Mật khẩu sẽ được hiện thị tại đây",
        "Hint":"Gợi ý",
        "holder-hint":"Gợi ý cho từ khóa",
        "AddNewHint":"Thêm gợi ý",
        "SubmitNewBlock":"Lưu Khối",
        "waiting":"Đang chờ phải hồi từ máy chủ",
        "SubmitNewBlockSuccess":"Thêm Khối mới thành công!",
        "language":"Tiếng Việt",        
        "BlockName":"TÊN KHỐI",
        "blockname":"Tên khối:",
        "footer-description-1": "Mật khẩu bảo mật cao từ những từ khóa dễ nhớ",
        "copyleft-1": "Phát triển bởi:",
        "copyleft-2": "Thiết kế bởi: ",
        "Powered-By": "Được hỗ trợ từ ",
        "html-content": 
        'Rất nhiều trang web và ứng dụng cần mật khẩu để xác thực. <br />' + 'Hầu hết các trường hợp mật khẩu được dùng chung giữa các trang web và ứng dụng đó với cùng một tài khoản.<br />' + 'Với trường hợp trên, chỉ với một mật khẩu bị lộ, tất cả các tài khoản khác trên những trang web hoặc ứng dụng khác có nguy cơ bị đánh cắp cao. <br />' + '<br />' + '               Vì vậy, <a href="../">easykeytopass</a> được dùng để tổ chức mật khẩu dưới dạng dễ nhớ với <b>CÁC TỪ GỢI Ý </b> và <b>TỪ KHÓA</b>. <br />' + 'Tóm lại, một mật khẩu cố định luôn được tạo ra sau khi nhập <b>TÊN TẬP HỢP CÁC GỢI Ý</b> và <b>TỪ KHÓA</b> cho mỗi gợi ý cho trước, nếu có.<br />' + '<br />' + '<br />' + ' Về chúng tôi: <br />' + '                Chúng tôi cảm thấy <b>dùng chung mật khẩu cho nhiều thứ</b> tiềm ẩn nguy cơ bị ăn trộm thông tin cá nhân. <br />' + 'Chỉ cần một trang web hoặc ứng dụng để lộ thông tin mật khẩu, thì lại phải đổi tất cả mật khẩu trên các trang khác. <br />' + '<br />' + 'Vơi mật khẩu dựa trên từ khóa, chúng tôi chỉ cần nhớ hai thứ duy nhất đó là  <b>TÊN TẬP HỢP CÁC GỢI Ý</b> và trả lời các gợi ý được liệt kê trong đó.<br />',

        'PasswordGenerator': 'BẮT ĐẦU SỬ DỤNG',
        'SimpleHead': 'TẠO MẬT KHẨU NHANH CHÓNG',

        'html-getting-started-1': '<b>Easykeytopass</b>' + 'được tạo ra với mục đích mã hoá mật khẩu của bạn bằng những từ khoá quen thuộc nhất với bạn' + 
        '<br/>' + 
        'Với thiết kế trang chủ đơn giản,bạn có thể tạo ra một mật khẩu đủ phức tạp với độ bảo mật cao mà bạn luôn luôn có thể lấy được khi cần dùng.' + 
        '<br/>' +
        'Để bắt đầu, hãy tạo một mật khẩu nhanh chóng nhất với những thiết lập mặc định' +
        '<br/> <ul>' + 
        '<li>Nhập một từ khoá vào ô "Từ khoá".<br/>( Bạn có thể nhập số 1, họ của bạn, tên chú cún của em gái hay ngày sinh nhật của con gái bạn, nhưng đừng để trống)</li>' +
        '<li>Bấm vào nút &nbsp; <span class="w3-btn w3-black w3-hover-white w3-hover-text-black w3-text-white">Tạo mật khẩu</span>&nbsp; và đợi trong giây lát</li>' +
        '                            <li>Mật khẩu của bạn được tạo và hiện thị bên dưới.<br/> Nhấp vào nút nhấn &nbsp;<span class=" material-icons w3-btn w3-black">content_copy</span> &nbsp;để copy mật khẩu vào clipboard và dán chúng vào ô password trên trang web hay ứng dụng mà bạn cần đăng nhập.</li>' +   
        '</ul>',

        'html-getting-started-2': '<span class="w3-large">&#x2A;</span> &nbsp;Chúng tôi muốn giữ đúng tính chất của mật khẩu vì thế các từ khoá phân biệt chữ hoa chữ thường, có thể sử dụng chữ số và các kí hiệu đặc biệt. <br/>' + 
        '<span class="w3-large">&#x2A;</span> &nbsp;Bạn có thể sử dụng mật khẩu vừa được tạo ra để mã hoá thêm 1 vài lần nữa để tăng thêm niềm tin về sự bảo mật.<br/>' +
        '<span class="w3-large">&#x2A;</span> &nbsp; Bạn cũng có thể thêm từ khoá bằng cách bấm nút &nbsp;<span class="w3-btn w3-black w3-hover-white w3-hover-text-black w3-text-white">Thêm từ khoá</span>&nbsp;. Bằng cách này mật khẩu của bạn được mã hoá từ nhiều từ khoá kết hợp với nhau. Nhưng hãy nhớ thứ tự của những từ khoá đó cho lần sử dụng sau.<br/>' + 
        '<span class="w3-large">&#x2A;</span> &nbsp; Nút nhấn &nbsp;<span class="w3-btn w3-black w3-hover-white w3-hover-text-black w3-text-white">Xoá từ khoá</span>&nbsp; dùng để xoá từ khoá cuối cùng khi bạn lỡ thêm quá nhiều từ khoá mà không thể nhớ thứ tự của chúng.<br/>',

        'HintsHead': 'Tạo Mật Khẩu Từ Các Gợi Ý',

        'html-getting-started-3': ' Mặc định, <b>Easykeytopass</b> sẽ sử dụng defaultblock để tạo mật khẩu và sử dụng các khoá ngẫu nhiên của bạn.<br/>' + 
        'Điều này sẽ rất phiền phức nếu như bạn không nhớ được từ khoá bạn đã điền là gì.<br/>' + 'Các khối được định nghĩa sẵn chứa một chuỗi các gợi ý dến các từ khoá của bạn. Thường là các gợi ý liên quan đến những thông tin, sở thích cá nhân. Bạn có thể thành thật trả lời hoặc không. Nhưng hãy nhớ câu trả lời đó.<br/>' +
        'Bạn có thể nhập tên các khối vào ô trống <input placeholder="Tên Khối" class="w3-black"/> và bấm phím "Enter" hoặc chọn trong danh sách được số xuống bên dưới. Danh sách này sẽ được lọc theo những gì bạn đã nhập vào ô <input placeholder="Tên Khối" class="w3-black"/>' + 
        'Các gợi ý trong danh khối sẽ được hiện ra thay thế cho các từ khoá. Điền câu trả lời của bạn và chọn <span class="w3-btn w3-black w3-hover-white w3-hover-text-black w3-text-white">Tạo mật khẩu</span> như hướng dẫn ở trên.',

        'html-getting-started-4': '<span class="w3-large">&#x2A;</span> &nbsp;' + 
        'Các gợi ý luôn hiện thị đúng thứ tự trong mỗi lần tạo mật khẩu.Vì thế việc của bạn là hãy trả lời cho thật đúng với những lần trước đó<br/>' + 
        '<span class="w3-large">&#x2A;</span> &nbsp;' + 
        'Các khối được tạo sẵn với chuỗi câu hỏi cố định nên bạn không thể thêm hoặc bớt từ khoá được. Tuy nhiên bạn có thể tạo một khối mới cho riêng bạn &nbsp;<br/>' + 
        '<span class="w3-large">&#x2A;</span> &nbsp; Cũng giống như từ khoá. Câu trả lời cho mỗi gợi ý cũng phân biệt chữ hoa và chữ thường.<br/>' + 
        '<span class="w3-large">&#x2A;</span> &nbsp; Mặc dù cùng các gợi ý, câu trả lời của bạn giống nhau cả về nội dung lẫn thứ tự, nhưng nếu bạn sử dụng 2 khối khác nhau thì mật khẩu được tạo ra cũng sẽ khác nhau. Vì thế, Bạn phải nhớ tên khối như là một từ khoá riêng tư không có gợi ý<br/>',

        'NewSetOfHints': 'Tạo Khối Mới',

        'html-getting-started-5': 'Nếu bạn thấy các khối gợi ý được dựng sẵn khó nhớ cả về tên khối lẫn các chuỗi gợi ý, thì tại sao bạn không tạo một khối mới với chuỗi gợi ý của bạn.' + 
        '<ul>' +
            '<li>Chọn <div  class="w3-btn w3-hover-white w3-hover-text-black" langkey="AddNewBlock" style="margin:2px">Thêm Khối Mới</div> &nbsp; Giao diện trang web sẽ thay đổi để bạn thêm một khối theo ý thích của riêng bạn.</li>' + 
            '<li>Chọn <div  class="w3-btn w3-hover-white w3-hover-text-black" style="margin:2px">Thêm gợi ý</div> &nbsp; để thêm các gợi ý vào chuỗi câu hỏi của bạn.</li>' + 
            '<li>Chọn <div  class="w3-btn w3-hover-white w3-hover-text-black w3-border" style="margin:2px">-</div>&nbsp; phía sau mỗi gợi ý để xoá bỏ gợi ý đó trong chuỗi câu hỏi của bạn.</li>' + 
            '<li>Chọn <div  class="w3-btn w3-hover-white w3-hover-text-black w3-border" style="margin:2px">Lưu Khối</div>&nbsp; để lưu chuỗi câu hỏi của bạn lên hệ thống của chúng tôi.</li>' + 
        '</ul>',

        'html-getting-started-6': '<span class="w3-large">&#x2A;</span> &nbsp; Tên khối là duy nhất nên bạn không thể lưu khối nếu trùng tên với một khối có sẵn trên hệ thống<br/>' + 
        '<span class="w3-large">&#x2A;</span> &nbsp; Vì lý do tài chính nên dung lượng lưu trữ có hạn. Vì thế chúng tôi phải xoá bỏ những khối đã lâu không được sử dụng. &nbsp;<br/><br/>',

        'faq' : 'CÂU HỎI THƯỜNG GẶP',

        'faq-1' : '1. Mục đích của trang web này là gì?',
        'faq-1-ans': 'Easykeytopass giúp bạn hệ thống hóa lại các mật khẩu, được dùng để đăng nhập các ứng dụng hoặc trang web. Tránh việc dùng một mật khẩu cho nhiều ứng dụng. Đồng thời đảm bảo mật khẩu không bị kẻ xấu hack được bằng cách dò mật khẩu thông dụng.', 

        'faq-2' : '2. Mật khẩu của tôi có thể bị trùng với người khác không?',
        'faq-2-ans': 'Mật khẩu vẫn có thể bị trùng với điều kiện dùng chung một Tên Khối và các Từ Khóa giống hệt nhau và cùng thứ tự, từ trên xuống dưới. Tuy nhiên, mật khẩu có trùng lặp thì cũng không ai biết rằng mật khẩu của mình bị trùng. Không có thông tin nào để tham chiếu giữa các người dùng với nhau.',

        'faq-3' : '3. Nếu ai đó biết được câu trả lời của tôi trong chuỗi gợi ý thì họ có thể lấy được mật khẩu của tôi không?',
        'faq-3-ans': 'Nếu bạn để lộ Tên Khối, nội dung Từ Khóa và thứ tự của Từ Khóa, thì mật khẩu của bạn có khả năng bị lộ rất cao. Nhưng với điều kiện kẻ xấu biết bạn dùng mật khẩu cho ứng dụng nào. Thêm vào đó, nếu bạn thêm một chuỗi ký tự bất kỳ vào mật khẩu được tạo ra bởi Easykeytopass, mà chỉ có một mình bạn biết chuỗi đó, thì rất khó để tìm ra mật khẩu kể cả khi bị lộ hết thông tin trên Easykeytopass. Ví dụ: 593C9b4A9390551d53E5cAcF28eBd638 + <chicochuamoibietbandiencaigivaoday>.',

        'faq-4' : '4. Khi khối gợi ý của tôi bị xoá, tôi phải làm gì?',
        'faq-4-ans': 'Bạn có thể dùng defaultblock - mặc định, thêm bớt số từ khóa sao cho khớp với số lượng bạn đã dùng ở gợi ý bị xóa. Sau đó đổi Tên Khối thành Tên Khối bị mất của bạn. Cuối cùng, điền Từ Khóa của bạn vào các ô KEYWORD sao cho đúng thứ tự như ta làm trước kia với Tên Khối cũ. Chỉ cần nhớ Tên Khối, Từ Khóa và thứ tự Từ Khóa. Bạn có thể tạo ra tất cả các mật khẩu từ các Khối khác.',

        'faq-5' : '5. Chuyện gì xảy ra nếu tôi không nhớ đã dùng khối nào để tạo mật khẩu?',
        'faq-5-ans': 'Bạn có thể dò từng khối trong gợi ý của Easykeytopass, miễn sao bạn nhớ được Từ Khóa và thứ tự của chúng. Cách thứ hai, bạn dùng tính năng Quên mật khẩu của ứng dụng bạn định dùng. Thay đổi lại với mật khẩu mới tạo ra của bạn - nhưng phải nhớ 3 thứ là Tên Khối, Từ Khóa và thứ tự của Từ Khóa.',

        'faq-6' : '6. Chuyện gì xảy ra nếu tôi quên câu trả lời?',
        'faq-6-ans': 'Easykeytopass không lưu bất kỳ thông tin nào của người dùng. Mật khẩu an toàn là một mật khẩu mà không người nào có thể biết được, kể cả người tạo ra nó. Là mật khẩu khó có thể phá bằng cách vét cạn (dò từng tổ hợp). Và là một mật khẩu không được bảo vệ bởi một mật khẩu khác. Đó là tiêu chí của Easykeytopass. Nếu quên hết từ khóa, thì câu trả lời như câu 5.',

        'faq-7' : '7. Trang web có thu thập  mật khẩu của tôi cũng như thông tin cá nhân qua các câu hỏi không?',
        'faq-7-ans': 'Như những tiêu chí đã nêu ra ở câu 6, Easykeytopass không hề lưu bất cứ thông tin nào từ người dùng. Chúng tôi chỉ biết có bao nhiêu Khối được tạo ra, nội dung gợi ý của Từng Khối. Bằng chứng là người dùng không phải đăng nhập để sử dụng Easykeytopass.',
        "Guide":"Bắt đầu sử dụng",
        'img-getting-started-1': 'views/images/getting_started_1_vn.png',
        'img-getting-started-2': 'views/images/getting_started_2_vn.png',
        'img-getting-started-3': 'views/images/getting_started_3_vn.png'
    }
}