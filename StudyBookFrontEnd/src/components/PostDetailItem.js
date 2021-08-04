import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import {useEffect} from 'react';

export default function PostDetailItem({item}) {

    useEffect(() => {
        new Viewer({
            el: document.querySelector('#viewer'),
            height: '600px',
            initialValue: `<div class="toastui-editor-contents"> <h2 data-nodeid="26">자바(JAVA)란 무엇인가?</h2> <p data-nodeid="27">오늘부터 자바에 대해서 포스팅을 시작하겠다. 자바는 수많은 프로그래밍 언어중 하나이다. 먼저 프로그래밍 언어에 대한 정의를 하려고 한다.</p> <h3 data-nodeid="28">프로그래밍 언어</h3> <p data-nodeid="29">프로그래밍 언어는 컴퓨터를 이용하여 특정 문제를 해결하기 위한 프로그램을 작성하기 위해 사용되는 언어이다. 프로그래밍 언어는 일반적으로 저급언어(기계어, 어셈블리어)와 고급 언어(컴파일 언어) 로 분류할 수 있다.</p> <p data-nodeid="30"><strong data-nodeid="123">저급언어(Low Level Language)</strong></p> <ul data-nodeid="31"> <li data-nodeid="32"> <p data-nodeid="33">기계어</p> <ul data-nodeid="34"> <li data-nodeid="35"> <p data-nodeid="36">컴퓨터가 직접 이해할 수 있는 언어</p> </li> <li data-nodeid="37"> <p data-nodeid="38">0과 1의 2진수 형태로 표현되며 수행시간이 빠르다.</p> </li> <li data-nodeid="39"> <p data-nodeid="40">기종마다 기계어가 다르므로 언어의 호환성이 없다.</p> </li> </ul> </li> <li data-nodeid="41"> <p data-nodeid="42">어셈블리어</p> <ul data-nodeid="43"> <li data-nodeid="44"> <p data-nodeid="45">기계어와 1:1로 대응되는 기호로 이루어진 언어로, 니모닉(Mnemonic) 언어 라고도 한다.</p> </li> <li data-nodeid="46"> <p data-nodeid="47">하드웨어 제어에 주로 사용되며, 언어의 호환성이 없다.</p> </li> <li data-nodeid="48"> <p data-nodeid="49">컴퓨터가 직접 이해할 수 없으므로 어셈블리어로 작성된 프로그램은 어셈블러를 사용하여 기계어로 번역해주어야 한다.</p> </li> </ul> </li> </ul> <p data-nodeid="50"><strong data-nodeid="135">고급 언어(High Level Language)</strong></p> <ul data-nodeid="51"> <li data-nodeid="52"> <p data-nodeid="53">인간이 실생활에서 사용하는 자연어와 비슷한 형태 및 구조를 가지고 있다.</p> </li> <li data-nodeid="54"> <p data-nodeid="55">하드웨어에 대한 깊은 지식이 없어도 프로그램 작성과 수정이 용이하다.</p> </li> <li data-nodeid="56"> <p data-nodeid="57">컴퓨터가 이해할 수 있는 기계어로 번역하기 위해 컴파일러나 인터프리터가 사용된다.</p> </li> <li data-nodeid="58"> <p data-nodeid="59">기계어와 어셈블리어를 제외한 C, JAVA, Python등의 언어가 고급언어에 해당된다.</p> </li> </ul> <h2 data-nodeid="60">자바의 탄생과 배경</h2> <p data-nodeid="61">자바는 1991년에 썬 마이크로시스템즈(Sun Microsystems)사 에서 제임스 고슬링(James Gosling)이 고안하였고 그때 당시엔 오크(Oak), 또는 그린(Green) 이라고 불렸다.</p> <p data-nodeid="62">오크는 최조에 가전제품에 쓰일 목적으로 개발이 되었지만 인터넷과 웹의 출현으로 오크의 초점은 가전제춤에서 인터넷으로 옮겨지게 되었다고 한다. 이후 1995년 이름을 자바(Java)로 변경하였다.</p> <p data-nodeid="63">이전에 C, C++ 등의 언어가 존재했는데, 이 언어들은 직접 메모리를 핸들링하는 특징이 있다. 개발자가 컴퓨터의 메모리를 직접 관리하니 프로그램이 비정상적으로 다운되는 일 등이 생겼다. 그래서 자바는 위와 같은 언어들의 단점을 보안하려고 만들어졌고, 타 언어들과 다르게 자체적으로 메모리를 관리해준다.</p> <p data-nodeid="64"><em data-nodeid="147">2009년 썬 마이크로시스템즈는 오라클에 인수 합병되었고 자바에 대한 권리 및 유지보수 또한 오라클로 넘어가게 되었다.</em></p> <h2 data-nodeid="65">JVM(Java virtual machine)</h2> <p data-nodeid="66">자바는 운영체제에 독립적이다. 이것을 가능하게 하는 것은 JVM이 운영체제 위에서 돌아가기때문이다.</p> <p data-nodeid="67">예를 들어 <code data-backticks="1" data-nodeid="151">Example.java</code> 파일을 작성하면 <code data-backticks="1" data-nodeid="153">javac Example.java</code> 라는 명령어를 통해 <code data-backticks="1" data-nodeid="155">Example.class(바이트코드)</code> 파일로 변환할 수 있다. class 확장자 파일은 JVM이 읽을 수 있는 파일이다. 그리고 변환된 <code data-backticks="1" data-nodeid="157">Example.class</code> 파일을 <code data-backticks="1" data-nodeid="159">java Example</code>(여기서 확장자명은 생략한다) 명령어로 실행할 수 있게 되는 것이다. 이 과정을 다음과 같이 표현할 수 있다.</p> <p data-nodeid="68"><strong data-nodeid="164">자바 소스코드(Example.java) -&gt; 자바 컴파일러 -&gt; 바이트코드(Example.class) -&gt; 가상머신(JVM) -&gt; 운영체제(윈도우 or 리눅스) 에서 실행 가능</strong></p> <h3 data-nodeid="69">컴파일이란?</h3> <p data-nodeid="70">프로그래밍 언어를 컴퓨터가 알 수 있는 기계어로 바꾸는 행위. 컴파일러(Compiler)는 기계어로 바꾸어주는 프로그램을 말한다.(자바를 설치하면 기본적으로 자바 컴파일러도 설치된다)</p> <h2 data-nodeid="71">자바의 특징</h2> <p data-nodeid="72"><strong data-nodeid="173">이식성이 높은 언어이다</strong><br> 이식성이란 서로 다른 실행 환경을 가진 시스템 간에 프로그램을 옮겨 실행할 수 있는 것을 말한다. 자바 언어로 개발된 프로그램은 소스 파일을 수정하지 않아도, 자바 실행 환경(JRE)이 설치되어 있는 모든 운영 체제에서 실행 가능하다.</p> <p data-nodeid="73"><strong data-nodeid="179">객체 지향 언어이다</strong><br> 객체 지향 프로그래밍(Object Oriented Programming, OOP)이란 프로그램을 개발하는 방법론중 하나이다. 말 그대로 객체를 만들어 상호작용하는 방식으로 프로그래밍을 한다. 또한 객체 지향 언어가 가져야 할 캡슐화, 상속, 다형성 기능을 완벽하게 지원한다.</p> <p data-nodeid="74"><strong data-nodeid="185">메모리를 자동으로 관리한다</strong><br> 위의 자바의 탄생과 배경에서 설명했듯이 C 또는 C++이 메모리 관리를 위해 개발자가 직접 코드를 작성해야 하는 반면, 자바는 개발자가 메모리에 직접 접근할 수 없으며 자바가 직접 메모리를 관리한다.</p> <p data-nodeid="75"><strong data-nodeid="191">멀티스레드를 쉽게 구현할 수 있다</strong><br> 자바는 스레드 생성 및 제어와 관련된 라이브러리 API를 제공하고 있기 때문에 실행되는 운영체제에 상관없이 멀티 스레드를 쉽게 구현할 수 있다.</p> <p data-nodeid="76"><strong data-nodeid="197">함수 지향적인 코딩을 지원한다</strong><br> 함수적 프로그래밍은 대용량의 데이터 병렬 처리와 이벤트 지향 프로그래밍을 위해 적합하기 때문에 최근 들어 다시 주목받고 있다. 자바는 이 함수적 프로그래밍을 위해 람다식을 자바 8부터 지원한다. 람다식을 사용하면 컬렉션 요소를 필터링, 매핑, 집계 처리하는게 쉬워지고, 코드가 매우 간결해진다는 장점이 있다.</p> <p data-nodeid="77"><strong data-nodeid="203">동적 로딩(Dynamic Loading)을 지원한다</strong><br> 애플리케이션이 실행될 때 모든 객체가 생성되지 않고, 각 객체가 필요한 시점에 클래스를 동적 로딩해서 생성한다. 또한 유지보수 시 해당 클래스만 수정하면 되기 때문에 전체 애플리케이션을 다시 컴파일할 필요가 없다. 따라서 유지보수가 쉽고 빠르다.</p> <p data-nodeid="78"><strong data-nodeid="209">오픈소스 라이브러리가 풍부하다</strong><br> 자바는 오픈소스 언어이기 때문에 자바 프로그램에서 사용하는 라이브러리 또한 오픈소스가 많다. 오픈소스 라이브러리를 사용하면 개발 시간을 단축하면서 안정성이 높은 애플리케이션을 쉽게 개발할 수 있다.</p> <p data-nodeid="79"><strong data-nodeid="215">C나 C++에 비해 속도가 느리다</strong><br> 자바는 한 번의 컴파일링으로 실행 가능한 기계어가 만들어지지 않고 JVM에 의해 기계어로 번역되고 실행하는 과정을 거치기 때문에 C나 C++의 컴파일 단계에서 만들어지는 완전한 기계어보다는 속도가 느리다. 그러나 바이트 코드를 기계어로 변환해주는 JIT 컴파일러 같은 기술 적용으로 JVM의 기능이 향상되어 속도의 격차가 많이 줄어들었다.</p> <p data-nodeid="80"><strong data-nodeid="221">예외처리가 불편하다</strong><br> 자바는 다른 언어들과 달리 프로그램 실행 시 발생할 수 있는 예외(Exception)들을 개발자가 직접 선언하여 처리해야 한다. 그렇지 않으면 아예 컴파일이 되지 않는다.</p> </div>`
        });

    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            <div className="group relative w-full p-6 ">
                <i className={`fas fa-quote-left text-gray-100 text-5xl  transition-all`}></i>
                <h1 className="font-noto-black text-4xl bg-gradient-to-r from-gray-500 to-gray-900
                    bg-clip-text text-transparent mb-3">
                    {item.title}
                </h1>
                <div className="flex justify-start items-center mb-3">
                    {/* 프로필 이미지 */}
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-dotted flex justify-center items-center
          mr-3 hover:border-purple-300 transition-all cursor-pointer">
                        <img className="w-16 h-16 rounded-full"
                             src={item.profileImg} alt="cover img"/>
                    </div>
                    <div className="flex flex-col font-noto-medium text-2xl ">
                        <div className="font-noto-medium text-black text-2xl">
                            {item.nickname}
                        </div>
                        <div className="font-noto-regular text-lg text-gray-500">
                            {item.publishedAt}
                        </div>
                    </div>
                </div>
                <div className="font-noto-regular text-xl text-gray-600 ">
                    <div id="viewer" className="font-noto-light"></div>
                </div>
            </div>
        </div>
    )
}